import { l, numberFrom } from "../../../common/utils";
import { writeFile } from "fs/promises";
import { ChainType } from "../../../common/interfaces";
import { ENCODING } from "../utils";
import { ENV, rootPath } from "../../envs";
import { getCwHelpers } from "../chain";

const PAGINATION_QUERY_AMOUNT = 3;

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
      const ausdcPrice = await bank.cwQueryAusdcPrice();
      const ausdcPriceNext = numberFrom(1.1 * ausdcPrice);
      const userInfoList = await bank.pQueryUserInfoList(
        { ausdcPriceNext },
        PAGINATION_QUERY_AMOUNT
      );

      // write files
      await writeFile(
        getSnapshotPath(chainName, chainType, "user-info.json"),
        JSON.stringify(userInfoList, null, 2),
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
