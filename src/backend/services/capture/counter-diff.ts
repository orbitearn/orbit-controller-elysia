import { l } from "../../../common/utils";
import { writeSnapshot } from "../utils";
import { ENV } from "../../envs";
import { getCwHelpers } from "../chain";

const PAGINATION_QUERY_AMOUNT = 10;

async function main() {
  const {
    query: { bank },
    chainName,
    chainType,
  } = await getCwHelpers(ENV.USER_SEED);

  try {
    const userCounterList = await bank.pQueryUserCounterList(
      PAGINATION_QUERY_AMOUNT
    );
    const { counter: appCounter } = await bank.cwQueryDistributionState({});
    let counterDiffList: [string, number][] = userCounterList.map(
      ([user, cnt]) => [user, appCounter - cnt]
    );
    counterDiffList = counterDiffList.sort(
      ([_addrA, cntA], [_addrB, cntB]) => cntB - cntA
    );

    // write files
    await writeSnapshot("counter-diff", counterDiffList, chainName, chainType);
  } catch (error) {
    l(error);
  }
}

main();
