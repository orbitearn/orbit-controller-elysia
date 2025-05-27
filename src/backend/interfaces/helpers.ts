import { AssetItem } from "../../common/codegen/Bank.types";
import { AppDataItem, UserDataItem } from "./db";

export interface PriceItem {
  price: math.BigNumber;
  symbol: string;
}

export interface UserDataListItem {
  user: string;
  userData: UserDataItem[];
  appData: AppDataItem[];
  dbAssets: AssetItem[][];
}

export interface UserAsset {
  asset: string;
  samples: AssetSample[];
}

export interface AssetSample {
  amount: number;
  timestamp: Date;
}
