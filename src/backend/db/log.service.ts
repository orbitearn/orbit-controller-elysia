import { prisma } from "./prisma";

// TODO: current_log
const LOG_RECORD_ID = "current_log_2"; // Fixed document ID

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
}
