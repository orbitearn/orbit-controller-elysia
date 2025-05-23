import { ChainConfig } from "../../common/interfaces";
import { getSigner } from "../account/signer";
import { CHAIN_ID } from "../constants";
import { ENCODING, PATH_TO_CONFIG_JSON } from "./utils";
import { readFile } from "fs/promises";
import {
  getCwExecHelpers,
  getCwQueryHelpers,
} from "../../common/account/cw-helpers";
import {
  getChainOptionById,
  getContractByLabel,
} from "../../common/config/config-utils";

export async function getCwHelpers(seed: string) {
  const configJsonStr = await readFile(PATH_TO_CONFIG_JSON, {
    encoding: ENCODING,
  });
  const CHAIN_CONFIG: ChainConfig = JSON.parse(configJsonStr);
  const {
    PREFIX,
    NAME,
    OPTION: {
      TYPE,
      RPC_LIST: [RPC],
      DENOM,
      GAS_PRICE_AMOUNT,
      CONTRACTS,
    },
  } = getChainOptionById(CHAIN_CONFIG, CHAIN_ID);
  const bankAddress = getContractByLabel(CONTRACTS, "bank")?.ADDRESS || "";

  const gasPrice = `${GAS_PRICE_AMOUNT}${DENOM}`;
  const { signer, owner } = await getSigner(PREFIX, seed);
  const query = await getCwQueryHelpers(CHAIN_ID, RPC);
  const execute = await getCwExecHelpers(CHAIN_ID, RPC, owner, signer);

  return {
    query,
    execute,
    gasPrice,
    bankAddress,
    rpc: RPC,
    signer,
    owner,
    chainName: NAME,
    chainType: TYPE,
  };
}
