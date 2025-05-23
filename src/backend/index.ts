import { Elysia, t } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { rateLimit } from "elysia-rate-limit";
import { helmet } from "elysia-helmet";
import { ENV, rootPath } from "./envs";
import {
  DECIMAL_PLACES,
  decimalFrom,
  dedupVector,
  l,
  li,
  numberFrom,
  wait,
} from "../common/utils";
import { BANK, CHAIN_ID, PERIOD, ROUTE } from "./constants";
import {
  dateToTimestamp,
  epochToDateStringUTC,
  getBlockTime,
  getLocalBlockTime,
  MS_PER_SECOND,
  toDate,
} from "./services/utils";
import fs from "fs";
import {
  getAverageEntryPrice,
  getProfit,
  getTest,
  getUserFirstData,
  updateUserAssets,
  getAppDataInTimestampRange,
  getUserDataInTimestampRange,
  getApr,
} from "./controllers/api";
import { calcAusdcPrice, calcClaimAndSwapData } from "./helpers/math";
import {
  extractPrices,
  getAllPrices,
  getUpdateStateList,
  updateUserData,
} from "./helpers";
import { AssetPrice } from "./db/types";
import { AppDataService } from "./db/app-data.service";
import { le } from "./services/logger";
import math from "mathjs";
import { getCwHelpers } from "./services/chain";

const [prodKey, prodCert] = [
  "../../../etc/letsencrypt/live/backend.orbitearn.com/privkey.pem",
  "../../../etc/letsencrypt/live/backend.orbitearn.com/fullchain.pem",
];
const [devKey, devCert] = [
  "src/backend/ssl/key.pem",
  "src/backend/ssl/cert.pem",
];
const [key, cert] = ENV.IS_PROD ? [prodKey, prodCert] : [devKey, devCert];
const options = {
  key: fs.readFileSync(rootPath(key)),
  cert: fs.readFileSync(rootPath(cert)),
};

const app = new Elysia()
  .use(
    rateLimit({
      duration: 60 * MS_PER_SECOND, // 1 minute
      max: 30, // Limit each IP to 30 requests per `window`
    })
  )
  .use(
    cors({
      origin: dedupVector([
        ...ENV.LOCAL_IP_LIST.flatMap((ip) =>
          ENV.LOCAL_PORT_LIST.map((port) => `${ip}:${port}`)
        ),
        ENV.BE_DEV_URL,
        ENV.BE_TUNNEL_URL,
        ENV.BE_PROD_URL,
        ENV.FE_DEV_URL,
        ENV.FE_STAGE_URL,
        ENV.FE_PROD_URL,
        ENV.FE_DEV_NEW_URL,
        ENV.FE_STAGE_NEW_URL,
        ENV.FE_PROD_NEW_URL,
      ]).filter((x) => x),
    })
  )
  .use(
    helmet({
      crossOriginEmbedderPolicy: { policy: "credentialless" },
      crossOriginOpenerPolicy: true,
      crossOriginResourcePolicy: { policy: "cross-origin" },
      dnsPrefetchControl: true,
      frameguard: true,
      hidePoweredBy: true,
      hsts: true,
      ieNoOpen: true,
      noSniff: true,
      permittedCrossDomainPolicies: true,
      referrerPolicy: true,
      xssFilter: true,
      contentSecurityPolicy: { reportOnly: true },
    })
  )
  .use(swagger())
  .onStart(async (_app) => {
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
      const timestamp = (await AppDataService.getDataByLastCounter())
        ?.timestamp;

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
  })
  .listen({
    port: ENV.PORT,
    tls: options,
  });

app.group("/api", (app) =>
  app
    .get(ROUTE.GET_TEST, getTest, {
      response: t.Object({
        value: t.Integer(),
      }),
    })
    .get(
      ROUTE.GET_AVERAGE_ENTRY_PRICE,
      ({ query: { address, from, to, excludeAsset } }) =>
        getAverageEntryPrice(address, from, to, excludeAsset),
      {
        query: t.Object({
          address: t.String(),
          from: t.Integer(),
          to: t.Integer(),
          excludeAsset: t.String(),
        }),
        response: t.Array(t.Tuple([t.String(), t.Number()])),
      }
    )
    .get(
      ROUTE.GET_PROFIT,
      ({ query: { address, from, to, excludeAsset } }) =>
        getProfit(address, from, to, excludeAsset),
      {
        query: t.Object({
          address: t.String(),
          from: t.Integer(),
          to: t.Integer(),
          excludeAsset: t.String(),
        }),
        response: t.Array(t.Tuple([t.String(), t.Number()])),
      }
    )
    .get(
      ROUTE.GET_FIRST_DATA,
      ({ query: { address } }) => getUserFirstData(address),
      {
        query: t.Object({
          address: t.String(),
        }),
        response: t.Nullable(
          t.Object({
            amount: t.Number(),
            asset: t.String(),
            timestamp: t.Date(),
            address: t.String(),
            id: t.String(),
          })
        ),
      }
    )
    .get(
      ROUTE.GET_APR,
      ({ query: { from, to, period } }) => getApr(from, to, PERIOD[period]),
      {
        query: t.Object({
          from: t.Integer(),
          to: t.Integer(),
          period: t.Union(Object.keys(PERIOD).map((k) => t.Literal(k))),
        }),
        response: t.Array(t.Tuple([t.Number(), t.Number()])),
      }
    )
    .get(
      ROUTE.GET_APP_DATA_IN_TIMESTAMP_RANGE,
      ({ query: { from, to } }) => getAppDataInTimestampRange(from, to),
      {
        query: t.Object({
          from: t.Integer(),
          to: t.Integer(),
        }),
        response: t.Array(
          t.Object({
            timestamp: t.Date(),
            id: t.String(),
            counter: t.Integer(),
            assetPrices: t.Array(
              t.Object({
                asset: t.String(),
                price: t.Number(),
              })
            ),
          })
        ),
      }
    )
    .get(
      ROUTE.GET_USER_DATA_IN_TIMESTAMP_RANGE,
      ({ query: { address, from, to, period } }) =>
        getUserDataInTimestampRange(address, from, to, PERIOD[period]),
      {
        query: t.Object({
          address: t.String(),
          from: t.Integer(),
          to: t.Integer(),
          period: t.Union(Object.keys(PERIOD).map((k) => t.Literal(k))),
        }),
        response: t.Array(
          t.Object({
            asset: t.String(),
            samples: t.Array(
              t.Object({
                amount: t.Number(),
                timestamp: t.Date(),
              })
            ),
          })
        ),
      }
    )

    .post(
      ROUTE.UPDATE_USER_ASSETS,
      ({ body: { addressList } }) => updateUserAssets(addressList),
      {
        body: t.Object({
          addressList: t.ArrayString(),
        }),
        response: t.Void(),
      }
    )
);

// describe("Elysia", () => {
//   it("return a response", async () => {
//     const app = new Elysia().get("/", () => "hi");

//     const response = await app
//       .handle(new Request("http://localhost/"))
//       .then((res) => res.text());

//     expect(response).toBe("hi");
//   });
// });
