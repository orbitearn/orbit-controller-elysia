import math from "mathjs";
import { BANK, CHAIN_ID } from "../constants";
import { AppDataService } from "../db/app-data.service";
import { le } from "./logger";
import { AssetPrice } from "../db/types";
import { ENV } from "../envs";
import { calcAusdcPrice, calcClaimAndSwapData } from "../helpers/math";
import { getCwHelpers } from "./chain";
import {
  extractPrices,
  getAllPrices,
  getUpdateStateList,
  updateUserData,
} from "../helpers";
import {
  DECIMAL_PLACES,
  decimalFrom,
  li,
  numberFrom,
  wait,
} from "../../common/utils";
import {
  dateToTimestamp,
  epochToDateStringUTC,
  getBlockTime,
  getLocalBlockTime,
  MS_PER_SECOND,
  toDate,
} from "./utils";

export async function main() {
  // init
  const {
    query: { bank },
    execute: h,
    gasPrice,
    bankAddress,
    rpc,
  } = await getCwHelpers(ENV.SEED);

  // helpers
  const getNextAusdcPrice = async () => {
    const appInfo = await bank.cwQueryAppInfo();
    const rewards = await bank.cwQueryRewards();
    const ausdcPrice = await bank.cwQueryAusdcPrice();
    const nextAusdcPrice = calcAusdcPrice(
      numberFrom(appInfo.usdc_net).add(numberFrom(rewards)),
      numberFrom(appInfo.ausdc.minted)
    );

    return decimalFrom(math.max([nextAusdcPrice, numberFrom(ausdcPrice)]));
  };

  // make sure contract block time can be get initially
  let blockTime = await bank.cwQueryBlockTime();
  let blockTimeOffset = blockTime - getLocalBlockTime();
  const now = toDate(blockTime);

  // calculate the next top of the hour
  let nextTopOfHour = toDate(blockTime);
  nextTopOfHour.setMinutes(BANK.START_DATE_MINUTES, 0, 0);

  // if we're already past this hour, move to the next hour
  if (nextTopOfHour <= now) {
    nextTopOfHour.setHours(nextTopOfHour.getHours() + 1);
  }

  let scriptStartTimestamp: number = 0;

  try {
    const timestamp = (await AppDataService.getDataByLastCounter())?.timestamp;

    if (!timestamp) {
      throw new Error();
    }

    scriptStartTimestamp =
      dateToTimestamp(timestamp) + BANK.DISTRIBUTION_PERIOD;
  } catch (_) {
    scriptStartTimestamp = dateToTimestamp(nextTopOfHour);
  }

  let nextUpdateDate = scriptStartTimestamp;

  console.clear();
  le(`\n✔️ Server is running on PORT: ${ENV.PORT}`);

  // the script should be started earlier to be ready to update just in time
  scriptStartTimestamp -= 5 * BANK.CYCLE_COOLDOWN;
  li({
    scriptStartTimestamp: epochToDateStringUTC(scriptStartTimestamp),
    nextUpdateDate: epochToDateStringUTC(nextUpdateDate),
  });

  await wait((scriptStartTimestamp - blockTime) * MS_PER_SECOND);
  le(
    `\n✔️ Script is running since: ${epochToDateStringUTC(
      getBlockTime(blockTimeOffset)
    )}`
  );

  // service to claim and swap orbit rewards and save data in db
  let isAusdcPriceUpdated = true;
  while (true) {
    // to limit rpc request frequency
    await wait(BANK.CYCLE_COOLDOWN * MS_PER_SECOND);

    let usersToUpdate: string[] = [];
    // check distribution date and user counters
    try {
      const userCounterList = await bank.pQueryUserCounterList(
        BANK.PAGINATION.USER_COUNTER
      );
      const { counter: appCounter } = await bank.cwQueryDistributionState({});

      usersToUpdate = getUpdateStateList(
        appCounter,
        BANK.MAX_COUNTER_DIFF,
        BANK.UPDATE_STATE_LIST.LIMIT,
        userCounterList
      );
    } catch (error) {
      le(error);
    }

    // get block time, sync clock
    try {
      blockTime = await bank.cwQueryBlockTime();
      blockTimeOffset = blockTime - getLocalBlockTime();
    } catch (_) {
      blockTime = getBlockTime(blockTimeOffset);
    }

    // try update user states if we have enough time
    if (
      blockTime + BANK.UPDATE_STATE_TIME_MARGIN < nextUpdateDate &&
      usersToUpdate.length >= BANK.UPDATE_STATE_LIST.MIN
    ) {
      try {
        // update user assets in db first!
        await updateUserData(CHAIN_ID, rpc, usersToUpdate, bankAddress);
        le("user db data is updated");

        // should be used only in case of updateUserData success!
        await h.bank.cwUpdateUserState(usersToUpdate, gasPrice);
        le("user state is updated");
      } catch (error) {
        le(error);
      }

      continue;
    }

    if (blockTime < nextUpdateDate) {
      continue;
    }

    // enable capture mode, collect and process data, claim and swap
    let priceList: [string, math.BigNumber][] = [];
    try {
      const isCaptureMode = (await bank.cwQueryState()).capture_mode;
      if (!isCaptureMode) {
        await h.bank.cwEnableCapture(gasPrice);
      }

      priceList = extractPrices(await getAllPrices());
      const ausdcPriceNext = await getNextAusdcPrice();
      const userInfoList = await bank.pQueryUserInfoList(
        { ausdcPriceNext: numberFrom(ausdcPriceNext) },
        BANK.PAGINATION.USER_INFO
      );
      const [rewards, usdcYield, assets, feeSum] =
        calcClaimAndSwapData(userInfoList);

      await h.bank.cwClaimAndSwap(
        rewards,
        usdcYield,
        assets,
        feeSum,
        priceList,
        gasPrice
      );
      le("Rewards are distributed");

      isAusdcPriceUpdated = false;
    } catch (error) {
      le(error);
    }

    // add asset prices in DB
    try {
      if (!isAusdcPriceUpdated) {
        if (!priceList.length) {
          priceList = extractPrices(await getAllPrices());
        }

        const { counter } = await bank.cwQueryDistributionState({});
        const { ausdc: ausdcSymbol } = await bank.cwQueryConfig();
        const ausdcPrice = await bank.cwQueryAusdcPrice();
        const assetPrices: AssetPrice[] = [
          { asset: ausdcSymbol, price: ausdcPrice },
          ...priceList.map(([asset, price]) => ({
            asset,
            price: price.toDecimalPlaces(DECIMAL_PLACES).toNumber(),
          })),
        ];

        try {
          await AppDataService.addDataItem(
            nextUpdateDate,
            counter,
            assetPrices
          );
          le("Prices are stored in DB");
        } catch (error) {
          le(error);
        }

        isAusdcPriceUpdated = true;
      }
    } catch (error) {
      le(error);
    }

    nextUpdateDate += BANK.DISTRIBUTION_PERIOD;
  }
}
