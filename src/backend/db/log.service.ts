import { prisma } from "./prisma";
import { LogData } from "./types";

const LOG_RECORD_ID = "current_log"; // Fixed document ID

export class LogService {
  static async updateLog(content: string): Promise<void> {
    await prisma.server_logs.upsert({
      where: { recordId: LOG_RECORD_ID },
      update: {
        rawContent: content,
        timestamp: new Date(),
      },
      create: {
        recordId: LOG_RECORD_ID,
        rawContent: content,
        timestamp: new Date(),
      },
    });
  }

  static async getLog(): Promise<LogData | null> {
    return await prisma.server_logs.findFirst({
      where: { recordId: LOG_RECORD_ID },
    });
  }
}
