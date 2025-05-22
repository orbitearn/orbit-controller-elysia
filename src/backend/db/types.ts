export interface AssetPrice {
  asset: string;
  price: number;
}

export interface AssetAmount {
  asset: string;
  amount: number;
}

export interface TimestampData {
  timestamp: Date | number;
  assetList: AssetAmount[];
}

export interface AppDataItem {
  timestamp: Date;
  id: string;
  counter: number;
  assetPrices: {
    asset: string;
    price: number;
  }[];
}

export interface UserDataItem {
  amount: number;
  asset: string;
  timestamp: Date;
  address: string;
  id: string;
}
