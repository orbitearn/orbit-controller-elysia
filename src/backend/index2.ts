import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { ENV } from "./envs";
import { l } from "../common/utils";
import { PERIOD, ROUTE } from "./constants";
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

const app = new Elysia().use(swagger()).listen(ENV.PORT);

app.group("/api", (app) =>
  app
    .get(ROUTE.GET_TEST, getTest)
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
      }
    )
    .get(
      ROUTE.GET_FIRST_DATA,
      ({ query: { address } }) => getUserFirstData(address),
      {
        query: t.Object({
          address: t.String(),
        }),
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
      }
    )

    .post(
      ROUTE.UPDATE_USER_ASSETS,
      ({ body: { addressList } }) => updateUserAssets(addressList),
      {
        body: t.Object({
          addressList: t.ArrayString(),
        }),
      }
    )
);

l(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);

// describe("Elysia", () => {
//   it("return a response", async () => {
//     const app = new Elysia().get("/", () => "hi");

//     const response = await app
//       .handle(new Request("http://localhost/"))
//       .then((res) => res.text());

//     expect(response).toBe("hi");
//   });
// });
