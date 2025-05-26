import WinstonTransport from "winston-transport";
import * as winston from "winston";
import { writeFile } from "fs/promises";
import { rootPath } from "../envs";
import { LogService } from "../db/log.service";
import { MS_PER_SECOND } from "./utils";

// TODO: 500
const MAX_LOG_LINES = 5; // Limit for number of lines stored in DB
const FLUSH_DEBOUNCE_MS = 5; // Wait 5s after last log
const FLUSH_MAX_WAIT_MS = 30; // Always flush after 30s

// In-memory FIFO queue for logs
let logQueue: string[] = [];

let debounceTimeout: NodeJS.Timeout | null = null;
let forceFlushTimeout: NodeJS.Timeout | null = null;

// Create a custom Winston transport for file and DB logging
class FileDbLogTransport extends WinstonTransport {
  log(info: any, callback: () => void) {
    const { level, message, timestamp = new Date().toISOString() } = info;
    const logLine = `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    appendLogLine(logLine);
    callback();
  }
}

// Actually write queue
async function flushQueue() {
  const content = logQueue.join("\n");

  await Promise.all([
    writeFile(rootPath("./src/backend/logs/app.log"), content, "utf8"),
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
export const logger = winston.createLogger({
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
      const cleanStack = arg.stack?.replace(arg.message, "").trim();
      logger.error(`${arg.name}: ${arg.message}\n${cleanStack}`);
    } else {
      const message =
        typeof arg === "string" ? arg : JSON.stringify(arg, null, 2);
      logger.info(message.trim());
    }
  }
}
