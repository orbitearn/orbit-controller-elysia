import { CHAIN_ID } from "../constants";
import { AppDataService } from "../services/db/app-data";
import { AppDataItem, UserDataItem } from "../interfaces/db";
import { UserAsset } from "../interfaces/helpers";
import { UserDataService } from "../services/db/user-data";
import { getAggregatedAssetList, updateUserData } from "../helpers";
import { getCwHelpers } from "../services/chain/get-helpers";
import { ENV } from "../envs";
import {
  calcApr,
  calcAverageEntryPriceList,
  calcProfit,
} from "../helpers/math";

export async function getTest(): Promise<{
  value: number;
}> {
  return { value: 42 };
}

export async function getAverageEntryPrice(
  address: string,
  from: number,
  to: number,
  excludeAsset: string
): Promise<[string, number][]> {
  try {
    const [userData, appData] = await Promise.all([
      UserDataService.getDataInTimestampRange(address, from, to, excludeAsset),
      AppDataService.getDataInTimestampRange(from, to),
    ]);
    return calcAverageEntryPriceList(appData, userData);
  } catch (_) {
    return [];
  }
}

export async function getProfit(
  address: string,
  from: number,
  to: number,
  excludeAsset: string
): Promise<[string, number][]> {
  try {
    const [userData, appData] = await Promise.all([
      UserDataService.getDataInTimestampRange(address, from, to, excludeAsset),
      AppDataService.getDataInTimestampRange(from, to),
    ]);
    return calcProfit(appData, userData);
  } catch (_) {
    return [];
  }
}

export async function getUserFirstData(
  address: string
): Promise<UserDataItem | null> {
  try {
    return await UserDataService.getFirstData(address);
  } catch (_) {
    return null;
  }
}

export async function getApr(
  from: number,
  to: number,
  period: number
): Promise<[number, number][]> {
  try {
    const [ausdc, appData] = await Promise.all([
      getCwHelpers(ENV.SEED).then((x) =>
        x.query.bank.cwQueryConfig().then((y) => y.ausdc)
      ),
      AppDataService.getDataInTimestampRange(from, to),
    ]);
    return calcApr(ausdc, appData, period);
  } catch (_) {
    return [];
  }
}

export async function getAppDataInTimestampRange(
  from: number,
  to: number
): Promise<AppDataItem[]> {
  try {
    return AppDataService.getDataInTimestampRange(from, to);
  } catch (_) {
    return [];
  }
}

export async function getUserDataInTimestampRange(
  address: string,
  from: number,
  to: number,
  period: number
): Promise<UserAsset[]> {
  try {
    const userData = await UserDataService.getDataInTimestampRange(
      address,
      from,
      to
    );
    return getAggregatedAssetList(userData, period);
  } catch (_) {
    return [];
  }
}

export async function updateUserAssets(
  addressList: string[]
): Promise<boolean> {
  try {
    const { bankAddress, rpc } = await getCwHelpers(ENV.SEED);
    await updateUserData(CHAIN_ID, rpc, addressList, bankAddress);
    return true;
  } catch (_) {
    return false;
  }
}
