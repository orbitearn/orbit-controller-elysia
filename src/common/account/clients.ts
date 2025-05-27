import { l } from "../utils";
import { Tendermint37Client } from "@cosmjs/tendermint-rpc";
import { fromBech32, toBech32, toUtf8 } from "@cosmjs/encoding";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { stringToPath, HdPath } from "@cosmjs/crypto";
import {
  SigningCosmWasmClient,
  CosmWasmClient,
  MsgExecuteContractEncodeObject,
} from "@cosmjs/cosmwasm-stargate";
import {
  OfflineDirectSigner,
  EncodeObject,
  OfflineSigner,
  DirectSecp256k1HdWallet,
  Coin,
} from "@cosmjs/proto-signing";
import {
  SigningStargateClient,
  StargateClient,
  calculateFee as _calculateFee,
  GasPrice,
  DeliverTxResponse,
} from "@cosmjs/stargate";

export async function getSgClient(
  rpc: string,
  owner?: string,
  signer?: (OfflineSigner & OfflineDirectSigner) | DirectSecp256k1HdWallet
): Promise<
  | {
      client: SigningStargateClient;
      owner: string;
    }
  | {
      client: StargateClient;
    }
  | undefined
> {
  try {
    if (owner && signer) {
      const tmClient = await Tendermint37Client.connect(rpc);
      const signingClient = await SigningStargateClient.createWithSigner(
        tmClient,
        signer
      );

      return { client: signingClient, owner };
    }

    const client = await StargateClient.connect(rpc);
    return { client };
  } catch (error) {
    l(error);
  }
}

export async function getCwClient(
  rpc: string,
  owner?: string,
  signer?: (OfflineSigner & OfflineDirectSigner) | DirectSecp256k1HdWallet
): Promise<
  | {
      client: SigningCosmWasmClient;
      owner: string;
    }
  | {
      client: CosmWasmClient;
    }
  | undefined
> {
  try {
    if (owner && signer) {
      const tmClient = await Tendermint37Client.connect(rpc);
      const signingClient = await SigningCosmWasmClient.createWithSigner(
        tmClient,
        signer
      );
      return { client: signingClient, owner };
    }

    const client = await CosmWasmClient.connect(rpc);
    return { client };
  } catch (error) {
    l(error);
  }
}

export function getAddrByPrefix(address: string, prefix: string): string {
  return toBech32(prefix, fromBech32(address).data);
}

export function signAndBroadcastWrapper(
  client: SigningStargateClient | SigningCosmWasmClient,
  signerAddress: string,
  gasAdjustment: number = 1.3
) {
  const defaultGasAdjustment = gasAdjustment;

  return async (
    messages: readonly EncodeObject[],
    gasPrice: string | GasPrice,
    gasAdjustment: number = 1,
    memo?: string
  ): Promise<DeliverTxResponse> => {
    const gasSimulated = await client.simulate(signerAddress, messages, memo);
    const gasWanted = Math.ceil(
      defaultGasAdjustment * gasAdjustment * gasSimulated
    );
    const fee = _calculateFee(gasWanted, gasPrice);

    return await client.signAndBroadcast(signerAddress, messages, fee, memo);
  };
}

export function getExecuteContractMsg(
  contractAddress: string,
  senderAddress: string,
  msg: any,
  funds: Coin[]
): MsgExecuteContractEncodeObject {
  return {
    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
    value: MsgExecuteContract.fromPartial({
      sender: senderAddress,
      contract: contractAddress,
      msg: toUtf8(JSON.stringify(msg)),
      funds,
    }),
  };
}

// --- backend signers ---
export interface SignerData {
  signer: DirectSecp256k1HdWallet;
  owner: string;
}

export async function getSigner(
  prefix: string,
  seed: string,
  hdPath?: HdPath
): Promise<SignerData> {
  const signer = await DirectSecp256k1HdWallet.fromMnemonic(seed, {
    prefix,
    hdPaths: hdPath ? [hdPath] : undefined,
  });
  const [{ address: owner }] = await signer.getAccounts();

  return { signer, owner };
}

export async function getMultipleSigners(
  prefix: string,
  seed: string,
  numAccounts: number
): Promise<SignerData[]> {
  const signers = [];

  for (let i = 0; i < numAccounts; i++) {
    // https://www.ledger.com/blog/understanding-crypto-addresses-and-derivation-paths
    const hdPath = stringToPath(`m/44'/118'/0'/0/${i}`);
    const { signer, owner } = await getSigner(prefix, seed, hdPath);
    signers.push({ signer, owner });
  }

  return signers;
}
