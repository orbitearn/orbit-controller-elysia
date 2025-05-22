import { AppDataItem, AssetPrice } from "./types";
import { prisma } from "./prisma";
import { toDate } from "../services/utils";

export class AppDataService {
  static async addDataItem(
    timestamp: Date | number,
    counter: number,
    assetPrices: AssetPrice[]
  ): Promise<void> {
    await prisma.app_data.create({
      data: {
        timestamp: toDate(timestamp),
        counter,
        assetPrices,
      },
    });
  }

  static async getDataByTimestamp(
    timestamp: Date | number
  ): Promise<AppDataItem | null> {
    return await prisma.app_data.findUnique({
      where: { timestamp: toDate(timestamp) },
    });
  }

  static async getDataByCounter(counter: number): Promise<AppDataItem | null> {
    return await prisma.app_data.findUnique({ where: { counter } });
  }

  static async getDataByLastCounter(): Promise<AppDataItem | null> {
    return await prisma.app_data.findFirst({
      orderBy: { counter: "desc" },
    });
  }

  static async getDataInTimestampRange(
    from: Date | number,
    to: Date | number
  ): Promise<AppDataItem[]> {
    return await prisma.app_data.findMany({
      where: {
        timestamp: {
          gte: toDate(from),
          lte: toDate(to),
        },
      },
      orderBy: { timestamp: "asc" },
    });
  }

  static async getDataInCounterRange(
    from: number,
    to: number
  ): Promise<AppDataItem[]> {
    return await prisma.app_data.findMany({
      where: {
        counter: {
          gte: from,
          lte: to,
        },
      },
      orderBy: { counter: "asc" },
    });
  }
}
