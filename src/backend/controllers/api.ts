import { CHAIN_ID } from "../constants";
import { AppDataService } from "../db/app-data.service";
import { AppDataItem, UserDataItem } from "../db/types";
import { UserDataService } from "../db/user-data.service";
import { getAggregatedAssetList, updateUserData, UserAsset } from "../helpers";
import { getCwHelpers } from "../services/chain";
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
  let averagePriceList: [string, number][] = [];

  try {
    const userData = await UserDataService.getDataInTimestampRange(
      address,
      from,
      to,
      excludeAsset
    );
    const appData = await AppDataService.getDataInTimestampRange(from, to);

    averagePriceList = calcAverageEntryPriceList(appData, userData);
  } catch (_) {}

  return averagePriceList;
}

export async function getProfit(
  address: string,
  from: number,
  to: number,
  excludeAsset: string
): Promise<[string, number][]> {
  let profitList: [string, number][] = [];

  try {
    const userData = await UserDataService.getDataInTimestampRange(
      address,
      from,
      to,
      excludeAsset
    );
    const appData = await AppDataService.getDataInTimestampRange(from, to);

    profitList = calcProfit(appData, userData);
  } catch (_) {}

  return profitList;
}

export async function getUserFirstData(
  address: string
): Promise<UserDataItem | null> {
  let userFirstData: UserDataItem | null = null;

  try {
    userFirstData = await UserDataService.getFirstData(address);
  } catch (_) {}

  return userFirstData;
}

export async function getApr(
  from: number,
  to: number,
  period: number
): Promise<[number, number][]> {
  let aprList: [number, number][] = [];

  try {
    const {
      query: { bank },
    } = await getCwHelpers(ENV.SEED);

    const config = await bank.cwQueryConfig();
    const appData = await AppDataService.getDataInTimestampRange(from, to);

    aprList = calcApr(config.ausdc, appData, period);
  } catch (_) {}

  return aprList;
}

export async function getAppDataInTimestampRange(
  from: number,
  to: number
): Promise<AppDataItem[]> {
  let appData: AppDataItem[] = [];

  try {
    appData = await AppDataService.getDataInTimestampRange(from, to);
  } catch (_) {}

  return appData;
}

export async function getUserDataInTimestampRange(
  address: string,
  from: number,
  to: number,
  period: number
): Promise<UserAsset[]> {
  let userData: UserDataItem[] = [];

  try {
    userData = await UserDataService.getDataInTimestampRange(address, from, to);
  } catch (_) {}

  return getAggregatedAssetList(userData, period);
}

export async function updateUserAssets(addressList: string[]): Promise<void> {
  try {
    const { bankAddress, rpc } = await getCwHelpers(ENV.SEED);
    await updateUserData(CHAIN_ID, rpc, addressList, bankAddress);
  } catch (_) {}
}
