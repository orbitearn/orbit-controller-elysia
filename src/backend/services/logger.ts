import WinstonTransport from "winston-transport";
import * as winston from "winston";
import { writeFile } from "fs/promises";
import { rootPath } from "../envs";
import { LogService } from "../db/log.service";
import { MS_PER_SECOND } from "./utils";

const MAX_LOG_LINES = 500; // Limit for number of lines stored in DB
const FLUSH_DEBOUNCE_MS = 5; // Wait 5s after last log
const FLUSH_MAX_WAIT_MS = 30; // Always flush after 30s
const LOG_FILE_PATH = "./src/backend/logs/app.log";

// In-memory FIFO queue for logs
let logQueue: string[] = [];
let debounceTimeout: NodeJS.Timeout | null = null;
let forceFlushTimeout: NodeJS.Timeout | null = null;
let isInitialized = false;

// Create a custom Winston transport for file and DB logging
class FileDbLogTransport extends WinstonTransport {
  log(info: any, callback: () => void) {
    const { level, message, timestamp = new Date().toISOString() } = info;
    const logLine = `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    appendLogLine(logLine);
    callback();
  }
}

// Read existing logs from DB on startup
export async function initLoggerQueueOnce() {
  if (isInitialized) {
    return;
  }
  isInitialized = true;

  try {
    const latestLog = await LogService.getLog();
    const lines = latestLog?.rawContent?.split("\n") ?? [];
    logQueue.push(...lines.slice(-MAX_LOG_LINES));
  } catch (err) {
    console.error("Failed to load logs from DB:", err);
  }
}

// Actually write queue
async function flushQueue() {
  const content = logQueue.join("\n");

  await Promise.all([
    writeFile(rootPath(LOG_FILE_PATH), content, "utf8"),
    LogService.updateLog(content),
  ]);
}

function scheduleFlush() {
  // Cancel and restart debounce flush
  if (debounceTimeout) clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(async () => {
    await flushQueue();
    debounceTimeout = null;
    if (forceFlushTimeout) {
      clearTimeout(forceFlushTimeout);
      forceFlushTimeout = null;
    }
  }, FLUSH_DEBOUNCE_MS * MS_PER_SECOND);

  // Start force flush only once
  if (!forceFlushTimeout) {
    forceFlushTimeout = setTimeout(async () => {
      await flushQueue();
      forceFlushTimeout = null;
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
        debounceTimeout = null;
      }
    }, FLUSH_MAX_WAIT_MS * MS_PER_SECOND);
  }
}

// Add log line to queue + schedule flush
function appendLogLine(line: string) {
  logQueue.push(line);
  // Limit queue size
  if (logQueue.length > MAX_LOG_LINES) {
    logQueue.splice(0, logQueue.length - MAX_LOG_LINES);
  }

  scheduleFlush();
}

// Create Winston logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [new winston.transports.Console(), new FileDbLogTransport()],
});

// Export a logging utility function
export function le(...args: any[]) {
  for (const arg of args) {
    if (arg instanceof Error) {
      const cleanStack = arg.stack
        ?.replace("Error:", "")
        ?.replace(arg.message, "")
        ?.trim();
      logger.error(`${arg.name}: ${arg.message}\n${cleanStack}`);
    } else {
      const message =
        typeof arg === "string" ? arg : JSON.stringify(arg, null, 2);
      logger.info(message.trim());
    }
  }
}
