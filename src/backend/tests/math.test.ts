import { describe, expect, it } from "bun:test";
import { AppDataItem, UserDataItem } from "../db/types";
import { getUpdateStateList } from "../helpers";
import {
  dateStringToEpochUTC,
  epochToDateStringUTC,
  toDate,
} from "../services/utils";
import {
  calcAverageEntryPriceList,
  calcProfit,
  calcApr,
} from "../helpers/math";

const TOKEN = {
  BTC: "BTC",
  ATOM: "ATOM",
  ETH: "ETH",
  aUSDC: "aUSDC",
};

const appData: AppDataItem[] = [
  {
    id: "",
    counter: 1,
    timestamp: toDate(dateStringToEpochUTC("15.04.2025 12:00:00")),
    assetPrices: [
      { asset: TOKEN.aUSDC, price: 1 },
      { asset: TOKEN.BTC, price: 82_000 },
      { asset: TOKEN.ATOM, price: 5.2 },
      { asset: TOKEN.ETH, price: 1_200 },
    ],
  },
  {
    id: "",
    counter: 2,
    timestamp: toDate(dateStringToEpochUTC("15.04.2025 13:00:00")),
    assetPrices: [
      { asset: TOKEN.aUSDC, price: 1.1 },
      { asset: TOKEN.BTC, price: 80_000 },
      { asset: TOKEN.ATOM, price: 5 },
      { asset: TOKEN.ETH, price: 1_000 },
    ],
  },
  {
    id: "",
    counter: 3,
    timestamp: toDate(dateStringToEpochUTC("15.04.2025 14:00:00")),
    assetPrices: [
      { asset: TOKEN.aUSDC, price: 1.32 },
      { asset: TOKEN.BTC, price: 87_000 },
      { asset: TOKEN.ATOM, price: 5.7 },
      { asset: TOKEN.ETH, price: 1_700 },
    ],
  },
  {
    id: "",
    counter: 4,
    timestamp: toDate(dateStringToEpochUTC("15.04.2025 15:00:00")),
    assetPrices: [
      { asset: TOKEN.aUSDC, price: 1.386 },
      { asset: TOKEN.BTC, price: 82_000 },
      { asset: TOKEN.ATOM, price: 5.2 },
      { asset: TOKEN.ETH, price: 1_200 },
    ],
  },
  {
    id: "",
    counter: 5,
    timestamp: toDate(dateStringToEpochUTC("15.04.2025 16:00:00")),
    assetPrices: [
      { asset: TOKEN.aUSDC, price: 1.5246 },
      { asset: TOKEN.BTC, price: 83_000 },
      { asset: TOKEN.ATOM, price: 5.3 },
      { asset: TOKEN.ETH, price: 1_300 },
    ],
  },
];

describe("UI data math", () => {
  it("calcAverageEntryPriceList default", () => {
    const expected: [string, number][] = [
      [TOKEN.BTC, 83_000],
      [TOKEN.ATOM, 5.7],
    ];

    const userData: UserDataItem[] = [
      {
        id: "",
        address: "",
        timestamp: toDate(dateStringToEpochUTC("15.04.2025 13:00:00")),
        amount: 0.001,
        asset: TOKEN.BTC,
      },
      {
        id: "",
        address: "",
        timestamp: toDate(dateStringToEpochUTC("15.04.2025 14:00:00")),
        amount: 0.001,
        asset: TOKEN.BTC,
      },
      {
        id: "",
        address: "",
        timestamp: toDate(dateStringToEpochUTC("15.04.2025 14:00:00")),
        amount: 1,
        asset: TOKEN.ATOM,
      },
      {
        id: "",
        address: "",
        timestamp: toDate(dateStringToEpochUTC("15.04.2025 15:00:00")),
        amount: 0.001,
        asset: TOKEN.BTC,
      },
    ];

    const averageEntryPriceList = calcAverageEntryPriceList(appData, userData);

    expect(averageEntryPriceList).toStrictEqual(expected);
  });

  it("calcAverageEntryPriceList no user data", () => {
    const expected: [string, number][] = [];
    const userData: UserDataItem[] = [];
    const averageEntryPriceList = calcAverageEntryPriceList(appData, userData);

    expect(averageEntryPriceList).toStrictEqual(expected);
  });

  it("calcProfit default", () => {
    // btc: (90-80) + (90-87) + (90-82) = 21
    // atom: (6-5.7) = 0.3
    const expected: [string, number][] = [
      [TOKEN.BTC, 21],
      [TOKEN.ATOM, 0.2999999999999998], // must be 0.3 but it's acceptable here
    ];

    const appDataNew: AppDataItem[] = [
      ...appData,
      {
        id: "",
        counter: 6,
        timestamp: toDate(dateStringToEpochUTC("15.04.2025 17:00:00")),
        assetPrices: [
          { asset: TOKEN.aUSDC, price: 1.5246 },
          { asset: TOKEN.BTC, price: 90_000 },
          { asset: TOKEN.ATOM, price: 6 },
          { asset: TOKEN.ETH, price: 1_300 },
        ],
      },
    ];

    const userData: UserDataItem[] = [
      {
        id: "",
        address: "",
        timestamp: toDate(dateStringToEpochUTC("15.04.2025 13:00:00")),
        amount: 0.001,
        asset: TOKEN.BTC,
      },
      {
        id: "",
        address: "",
        timestamp: toDate(dateStringToEpochUTC("15.04.2025 14:00:00")),
        amount: 0.001,
        asset: TOKEN.BTC,
      },
      {
        id: "",
        address: "",
        timestamp: toDate(dateStringToEpochUTC("15.04.2025 14:00:00")),
        amount: 1,
        asset: TOKEN.ATOM,
      },
      {
        id: "",
        address: "",
        timestamp: toDate(dateStringToEpochUTC("15.04.2025 15:00:00")),
        amount: 0.001,
        asset: TOKEN.BTC,
      },
    ];

    const profit = calcProfit(appDataNew, userData);

    expect(profit).toStrictEqual(expected);
  });

  it("calcProfit no user data", () => {
    const expected: [string, number][] = [];
    const appDataNew: AppDataItem[] = [
      ...appData,
      {
        id: "",
        counter: 6,
        timestamp: toDate(dateStringToEpochUTC("15.04.2025 17:00:00")),
        assetPrices: [
          { asset: TOKEN.aUSDC, price: 1.5246 },
          { asset: TOKEN.BTC, price: 90_000 },
          { asset: TOKEN.ATOM, price: 6 },
          { asset: TOKEN.ETH, price: 1_300 },
        ],
      },
    ];

    const userData: UserDataItem[] = [];

    const profit = calcProfit(appDataNew, userData);

    expect(profit).toStrictEqual(expected);
  });

  it("calcApr default", () => {
    const period = 7_200; // 2 distributions
    const expected: [number, string][] = [
      [140_160, "15.04.2025 14:00:00"], // 32 % in 2 hours or 32 * 365 * 24 / 2 = 140_160 % APR
      [67_890, "15.04.2025 16:00:00"], // 15.5 % in 2 hours or 15.5 * 365 * 24 / 2 = 67_890 % APR
    ];

    const yieldRate: [number, string][] = calcApr(
      TOKEN.aUSDC,
      appData,
      period
    ).map(([y, t]) => [y, epochToDateStringUTC(t)]);

    expect(yieldRate).toStrictEqual(expected);
  });

  it("calcApr no app data", () => {
    const period = 7_200; // 2 distributions
    const expected: [number, string][] = [];
    const yieldRate: [number, string][] = calcApr(TOKEN.aUSDC, [], period).map(
      ([y, t]) => [y, epochToDateStringUTC(t)]
    );

    expect(yieldRate).toStrictEqual(expected);
  });

  it("getUpdateStateList default", () => {
    const appCounter: number = 6;
    const maxCounterDiff: number = 3;
    const maxUpdateStateList: number = 2;
    const userCounterList: [string, number][] = [
      ["alice", 2],
      ["bob", 1],
      ["john", 0],
      ["kate", 4],
    ];

    const expected: string[] = ["john", "bob"];

    const updateStateList = getUpdateStateList(
      appCounter,
      maxCounterDiff,
      maxUpdateStateList,
      userCounterList
    );

    expect(updateStateList).toStrictEqual(expected);
  });
});
