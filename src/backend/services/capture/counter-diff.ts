import { l } from "../../../common/utils";
import { writeFile } from "fs/promises";
import { ChainType } from "../../../common/interfaces";
import { ENCODING } from "../utils";
import { ENV, rootPath } from "../../envs";
import { getCwHelpers } from "../chain";

const PAGINATION_QUERY_AMOUNT = 10;

function getSnapshotPath(name: string, chainType: ChainType, fileName: string) {
  return rootPath(
    `./src/backend/services/snapshots/${name}/${chainType}net/${fileName}`
  );
}

async function main() {
  const {
    query: { bank },
    chainName,
    chainType,
  } = await getCwHelpers(ENV.USER_SEED);

  const writeUserInfo = async () => {
    try {
      const userCounterList = await bank.pQueryUserCounterList(
        PAGINATION_QUERY_AMOUNT
      );
      const { counter: appCounter } = await bank.cwQueryDistributionState({});
      const counterDiffList: [string, number][] = userCounterList.map(
        ([user, cnt]) => [user, appCounter - cnt]
      );

      // write files
      await writeFile(
        getSnapshotPath(chainName, chainType, "counter-diff.json"),
        JSON.stringify(counterDiffList, null, 2),
        {
          encoding: ENCODING,
        }
      );
    } catch (error) {
      l(error);
    }
  };

  await writeUserInfo();
}

main();
