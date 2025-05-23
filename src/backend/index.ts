import fs from "fs";
import { Elysia, t } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { rateLimit } from "elysia-rate-limit";
import { helmet } from "elysia-helmet";
import { ENV, rootPath } from "./envs";
import { dedupVector } from "../common/utils";
import { PERIOD, ROUTE } from "./constants";
import { MS_PER_SECOND } from "./services/utils";
import { main } from "./services/main";
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
  .onStart(main)
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
