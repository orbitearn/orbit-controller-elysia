import { TimestampData, UserDataItem } from "./types";
import { prisma } from "./prisma";
import { toDate } from "../services/utils";

export class UserDataService {
  static async addMultipleDataList(
    addressAndDataList: [string, TimestampData[]][]
  ): Promise<void> {
    const allRecords = addressAndDataList.flatMap(([address, dataList]) =>
      dataList.flatMap(({ timestamp, assetList }) => {
        const date = toDate(timestamp);

        return assetList.map(({ asset, amount }) => ({
          address,
          asset,
          amount: Number(amount),
          timestamp: date,
        }));
      })
    );

    await prisma.user_data.createMany({ data: allRecords });
  }

  static async getDataByTimestamp(
    address: string,
    timestamp: Date | number
  ): Promise<UserDataItem | null> {
    return await prisma.user_data.findFirst({
      where: {
        address,
        timestamp: toDate(timestamp),
      },
    });
  }

  static async getDataInTimestampRange(
    address: string,
    from: Date | number,
    to: Date | number,
    excludeAsset?: string
  ): Promise<UserDataItem[]> {
    return await prisma.user_data.findMany({
      where: {
        address,
        timestamp: {
          gte: toDate(from),
          lte: toDate(to),
        },
        asset: excludeAsset ? { not: excludeAsset } : undefined,
      },
      orderBy: { timestamp: "asc" },
    });
  }

  static async getFirstData(address: string): Promise<UserDataItem | null> {
    return await prisma.user_data.findFirst({
      where: { address },
      orderBy: { timestamp: "asc" },
    });
  }
}
