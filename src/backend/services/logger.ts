import WinstonTransport from "winston-transport";
import * as winston from "winston";
import { rootPath } from "../envs";
import { LogService } from "../db/log.service";

const LOG_FILE_PATH = rootPath("./src/backend/logs/app.log");
// TODO: 500
const MAX_LOG_LINES = 5; // Limit for number of lines stored in DB

// In-memory FIFO queue for logs
const logQueue: string[] = [];

// Create a custom Winston transport for DB logging
class DBLogTransport extends WinstonTransport {
  async log(info: any, callback: () => void) {
    const { level, message, timestamp = new Date().toISOString() } = info;
    const line = `[${timestamp}] ${level.toUpperCase()}: ${message}`;

    await appendToDb(line);
    callback();
  }
}

// Append a log line to the in-memory queue and update the database record
async function appendToDb(logLine: string) {
  logQueue.push(logLine);

  // Limit queue size
  if (logQueue.length > MAX_LOG_LINES) {
    logQueue.splice(0, logQueue.length - MAX_LOG_LINES);
  }

  const content = logQueue.join("\n");
  await LogService.updateLog(content);
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
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: LOG_FILE_PATH }),
    new DBLogTransport(),
  ],
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
