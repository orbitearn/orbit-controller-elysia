import { Elysia, t } from "elysia";
import { ROUTE, PERIOD } from "../constants";
import {
  getAverageEntryPrice,
  getProfit,
  getTest,
  getUserFirstData,
  updateUserAssets,
  getAppDataInTimestampRange,
  getUserDataInTimestampRange,
  getApr,
} from "../controllers/api";

export function apiRoutes(app: Elysia) {
  return app
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
        response: t.Boolean(),
      }
    );
}
