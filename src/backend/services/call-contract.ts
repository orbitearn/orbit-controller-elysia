import https from "https";
import { ROUTE } from "../constants";
import { ENV } from "../envs";
import { l, li, numberFrom, Request, wait } from "../../common/utils";
import { getCwHelpers } from "./chain";
import {
  getSgQueryHelpers,
  getSgExecHelpers,
} from "../../common/account/sg-helpers";

const baseURL = (ENV.IS_PROD ? ENV.BE_PROD_URL : ENV.BE_DEV_URL) + "/api";
const httpsAgent = ENV.IS_PROD
  ? undefined
  : new https.Agent({
      rejectUnauthorized: false,
    });
const req = new Request({ baseURL, httpsAgent });

async function main() {
  try {
    const {
      query: { bank },
      execute: h,
      gasPrice,
      bankAddress,
      rpc,
      signer,
      owner,
    } = await getCwHelpers(ENV.USER_SEED);

    const { getBalance, getAllBalances } = await getSgQueryHelpers(rpc);
    const { sgMultiSend, sgSend } = await getSgExecHelpers(rpc, owner, signer);
    console.clear();

    // const address = "neutron1m3zfzylcdcx0gwnv02kt26y8wnlhq4922t389r";
    // const from = 0;
    // const to = 2000000000;

    // const resNone: UserAsset[] = await req.get(
    //   ROUTE.GET_USER_DATA_IN_TIMESTAMP_RANGE,
    //   {
    //     params: {
    //       address,
    //       from,
    //       to,
    //       period: "none",
    //     },
    //   }
    // );

    // const resDay: UserAsset[] = await req.get(
    //   ROUTE.GET_USER_DATA_IN_TIMESTAMP_RANGE,
    //   {
    //     params: {
    //       address,
    //       from,
    //       to,
    //       period: "day",
    //     },
    //   }
    // );

    // const ethNone =
    //   resNone.find(
    //     (x) =>
    //       x.asset ===
    //       "factory/neutron1lh2w8ne2scnc7jve38ymr3xelyw5gt2l34flxf8mpeptwg3u575setmke6/wstETH"
    //   )?.samples || [];
    // const ethDay =
    //   resDay.find(
    //     (x) =>
    //       x.asset ===
    //       "factory/neutron1lh2w8ne2scnc7jve38ymr3xelyw5gt2l34flxf8mpeptwg3u575setmke6/wstETH"
    //   )?.samples || [];

    // const ethNoneSum = ethNone.reduce((acc, cur) => acc + cur.amount, 0);
    // const ethDaySum = ethDay.reduce((acc, cur) => acc + cur.amount, 0);

    // li({ ethNoneSum, ethDaySum });
    // li({ ethNone: ethNone.length, ethDay: ethDay.length });

    // li({ ethDay });

    // return;

    await req.post(ROUTE.UPDATE_USER_ASSETS, {
      addressList: [owner],
    });
    return;

    // await h.bank.cwClaimAssets(gasPrice);
    // return;

    // const bankAddress =
    //   "neutron1ckvacpufrxuulkwp9uhua2fe5k9h9l20c2ut6au56vjs5q2ae0csu5t4er";

    // const userCounterList = await bank.pQueryUserCounterList(
    //   BANK.PAGINATION.USER_COUNTER
    // );
    // const { counter: appCounter } = await bank.cwQueryDistributionState({});

    // const usersToUpdate = getUpdateStateList(
    //   appCounter,
    //   BANK.MAX_COUNTER_DIFF,
    //   BANK.UPDATE_STATE_LIST.LIMIT,
    //   userCounterList
    // );

    // await dbClient.connect();
    // await updateUserData(CHAIN_ID, RPC, usersToUpdate, bankAddress);
    // await dbClient.disconnect();
    // return;

    // const userInfoList = await bank.pQueryUserInfoList(
    //   {},
    //   BANK.PAGINATION_AMOUNT
    // );
    // li(userInfoList.length);
    // return;

    // const params = {
    //   address: owner,
    //   from: 1742700000,
    //   to: 1742838234,
    // };

    // const res = await req.get(ROUTE.GET_AVERAGE_ENTRY_PRICE, { params });
    // li(res);
    // return;

    const { usdc } = await bank.cwQueryConfig();
    await h.bank.cwDepositUsdc(
      numberFrom(10_000 * 1e6),
      { native: { denom: usdc } },
      gasPrice
    );

    await h.bank.cwEnableDca(
      numberFrom(0.5),
      [
        {
          symbol:
            "factory/neutron1lh2w8ne2scnc7jve38ymr3xelyw5gt2l34flxf8mpeptwg3u575setmke6/axlWBTC",
          weight: "0.75",
        },
        {
          symbol:
            "factory/neutron1lh2w8ne2scnc7jve38ymr3xelyw5gt2l34flxf8mpeptwg3u575setmke6/wstETH",
          weight: "0.25",
        },
      ],
      { swaps: 100 },
      gasPrice
    );
    await bank.cwQueryUserInfo(owner, {}, true);
    return;

    // // every user action must be wrapped with dbHandlerWrapper
    // const dbHandlerWrapper = await getDbHandlerWrapper(
    //   dbClient,
    //   CHAIN_ID,
    //   RPC,
    //   owner
    // );

    // // get args for cwWithdrawUsdc to withdraw 1/2 of available usdc
    // const {
    //   ausdc: { minted },
    // } = await bank.cwQueryUserInfo(owner, {}, true);
    // const ausdcAmount = floor(Number(minted) / 2);
    // // const { usdc } = await bank.cwQueryConfig();
    // // const ausdcAmount = floor(Number(minted));

    // // example of wrapped user action
    // const txRes = await dbHandlerWrapper(
    //   async () => await h.bank.cwClaimAssets(gasPrice)
    // );

    // const txRes = await dbHandlerWrapper(
    //   async () => await h.bank.cwWithdrawUsdc({ ausdcAmount }, gasPrice)
    // );

    // const txRes = await dbHandlerWrapper(
    //   async () =>
    //     await h.bank.cwDepositUsdc(
    //       10_000 * 1e6,
    //       { native: { denom: usdc } },
    //       gasPrice
    //     )
    // );
  } catch (error) {
    l(error);
  }
}

main();
