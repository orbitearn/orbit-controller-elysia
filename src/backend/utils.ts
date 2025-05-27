import path from "path";
import { writeFile } from "fs/promises";
import { floor, getLast, l } from "../common/utils";
import { Label } from "../common/config";
import { ChainType, StoreArgs } from "../common/interfaces";
import { Token, TaskScheduler } from "./interfaces/utils";
import { UTILS } from "./constants";

const { ENCODING, MS_PER_SECOND, PATH_TO_CONFIG_JSON_STR } = UTILS;
export const PATH_TO_CONFIG_JSON = rootPath(PATH_TO_CONFIG_JSON_STR);

export function rootPath(dir: string): string {
  return path.resolve(__dirname, "../../", dir);
}

// "$CHAIN_ID|$LABEL_A,$LABEL_B"
export function parseStoreArgs(): StoreArgs {
  const args = getLast(process.argv)?.trim() || "";
  if (args.includes("/")) throw new Error("Store args are not specified!");

  const [chainId, labelListString] = args.split("|");
  const labelList = labelListString.split(",").map((x) => x as Label);

  return {
    chainId,
    labelList,
  };
}

export function parseChainId(): string {
  const arg = getLast(process.argv)?.trim() || "";
  if (arg.includes("/")) throw new Error("Network name is not specified!");

  return arg;
}

/**
 * Converts a Unix epoch time (in seconds) to a human-readable date string in the format "DD.MM.YYYY HH:MM:SS".
 * @param unixTimestamp Unix epoch time in seconds
 * @returns Human-readable date string in the format "DD.MM.YYYY HH:MM:SS"
 */
export function epochToDateString(unixTimestamp: number): string {
  const date = new Date(unixTimestamp * 1000);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}

/**
 * Converts a human-readable date string in the format "DD.MM.YYYY HH:MM:SS" to a Unix epoch time (in seconds).
 * @param dateString Human-readable date string in the format "DD.MM.YYYY HH:MM:SS"
 * @returns Unix epoch time in seconds
 */
export function dateStringToEpoch(dateString: string): number {
  const [date, time] = dateString.split(" ");
  const [day, month, year] = date.split(".");
  const [hours, minutes, seconds] = time.split(":");
  const timestamp = new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day),
    parseInt(hours),
    parseInt(minutes),
    parseInt(seconds)
  );

  return Math.floor(timestamp.getTime() / 1000);
}

/**
 * Converts a Unix epoch time (in seconds) to a human-readable date string in the format "DD.MM.YYYY HH:MM:SS" (UTC).
 * @param unixTimestamp Unix epoch time in seconds
 * @returns Human-readable date string in the format "DD.MM.YYYY HH:MM:SS" (UTC)
 */
export function epochToDateStringUTC(unixTimestamp: number): string {
  const date = new Date(unixTimestamp * 1000);
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = date.getUTCFullYear();
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}

/**
 * Converts a human-readable date string in the format "DD.MM.YYYY HH:MM:SS" to a Unix epoch time (in seconds) (UTC).
 * @param dateString Human-readable date string in the format "DD.MM.YYYY HH:MM:SS"
 * @returns Unix epoch time in seconds (UTC)
 */
export function dateStringToEpochUTC(dateString: string): number {
  const [date, time] = dateString.split(" ");
  const [day, month, year] = date.split(".");
  const [hours, minutes, seconds] = time.split(":");
  const timestamp = new Date(
    Date.UTC(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day),
      parseInt(hours),
      parseInt(minutes),
      parseInt(seconds)
    )
  );

  return Math.floor(timestamp.getTime() / 1000);
}

export function dateToTimestamp(date?: Date): number {
  return floor((date?.getTime() || 0) / MS_PER_SECOND);
}

export function toDate(value: Date | number): Date {
  return typeof value === "number" ? timestampToDate(value) : value;
}

function timestampToDate(timestamp: number): Date {
  return new Date(timestamp * MS_PER_SECOND);
}

export async function specifyTimeout(
  promise: Promise<any>,
  timeout: number = 5_000,
  exception: Function = () => {
    throw new Error("Timeout!");
  }
) {
  let timer: NodeJS.Timeout;

  return Promise.race([
    promise,
    new Promise((_r, rej) => (timer = setTimeout(rej, timeout, exception))),
  ]).finally(() => clearTimeout(timer));
}

export function getLocalBlockTime(): number {
  return floor(Date.now() / 1e3);
}

// blockTimeOffset = contractBlockTime - localBlockTime
export function getBlockTime(blockTimeOffset: number): number {
  return blockTimeOffset + getLocalBlockTime();
}

function getSnapshotPath(name: string, chainType: ChainType, fileName: string) {
  return rootPath(
    `./src/backend/snapshots/${name}/${chainType}net/${fileName}.json`
  );
}

export async function writeSnapshot(
  fileName: string,
  file: any,
  chainName: string,
  chainType: ChainType
) {
  await writeFile(
    getSnapshotPath(chainName, chainType, fileName),
    JSON.stringify(file, null, 2),
    {
      encoding: ENCODING as BufferEncoding,
    }
  );
}

export class ScheduledTaskRunner implements TaskScheduler {
  scheduleTask(targetHour: number, taskFunction: () => Promise<void>): void {
    const timeUntilTarget = this.getTimeUntilTarget(targetHour);
    l(`Task scheduled to run in ${floor(timeUntilTarget / 60_000)} minutes`);

    setTimeout(async () => {
      try {
        await taskFunction();
      } catch (_) {}
    }, timeUntilTarget);
  }

  getTimeUntilTarget(targetHour: number): number {
    const now: Date = new Date();
    const targetTime: Date = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      targetHour,
      0,
      0
    );

    return targetTime.getTime() - now.getTime();
  }
}

export function getTokenSymbol(token: Token): string {
  return "native" in token ? token.native.denom : token.cw20.address;
}
