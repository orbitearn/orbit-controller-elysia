import { prisma } from "./prisma";

export class LogService {
  static async updateLog(
    fileContent: string,
    entries: any[],
    source: string
  ): Promise<void> {
    const recordId = "current_log";

    await prisma.server_logs.upsert({
      where: { recordId },
      update: {
        entries,
        rawContent: fileContent,
        timestamp: new Date(),
        source,
      },
      create: {
        recordId,
        entries,
        rawContent: fileContent,
        timestamp: new Date(),
        source,
      },
    });
  }
}
