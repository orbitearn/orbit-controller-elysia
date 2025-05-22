import { readFile } from "fs-extra";
import { ChainConfig } from "../../common/interfaces";
import { ENCODING, PATH_TO_CONFIG_JSON } from "../services/utils";
import {
  getChainOptionById,
  getContractByLabel,
} from "../../common/config/config-utils";
import { CHAIN_ID } from "../constants";
import { getCwQueryHelpers } from "../../common/account/cw-helpers";
import { AppDataService } from "../db/app-data.service";
import {
  calcApr,
  calcAverageEntryPriceList,
  calcProfit,
} from "../helpers/math";
import { AppDataItem, UserDataItem } from "../db/types";
import { UserDataService } from "../db/user-data.service";
import { getAggregatedAssetList, updateUserData, UserAsset } from "../helpers";

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
    const configJsonStr = await readFile(PATH_TO_CONFIG_JSON, {
      encoding: ENCODING,
    });
    const CHAIN_CONFIG: ChainConfig = JSON.parse(configJsonStr);
    const {
      OPTION: {
        RPC_LIST: [RPC],
      },
    } = getChainOptionById(CHAIN_CONFIG, CHAIN_ID);

    const { bank } = await getCwQueryHelpers(CHAIN_ID, RPC);
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
    const configJsonStr = await readFile(PATH_TO_CONFIG_JSON, {
      encoding: ENCODING,
    });
    const CHAIN_CONFIG: ChainConfig = JSON.parse(configJsonStr);
    const {
      OPTION: {
        RPC_LIST: [RPC],
        CONTRACTS,
      },
    } = getChainOptionById(CHAIN_CONFIG, CHAIN_ID);
    const bankAddress = getContractByLabel(CONTRACTS, "bank")?.ADDRESS || "";

    await updateUserData(CHAIN_ID, RPC, addressList, bankAddress);
  } catch (_) {}
}
