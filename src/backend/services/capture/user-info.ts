import { l, numberFrom } from "../../../common/utils";
import { writeSnapshot } from "../utils";
import { ENV } from "../../envs";
import { getCwHelpers } from "../chain";

const PAGINATION_QUERY_AMOUNT = 3;

async function main() {
  const {
    query: { bank },
    chainName,
    chainType,
  } = await getCwHelpers(ENV.USER_SEED);

  try {
    const ausdcPrice = await bank.cwQueryAusdcPrice();
    const ausdcPriceNext = numberFrom(1.1 * ausdcPrice);
    const userInfoList = await bank.pQueryUserInfoList(
      { ausdcPriceNext },
      PAGINATION_QUERY_AMOUNT
    );

    // write files
    await writeSnapshot("user-info", userInfoList, chainName, chainType);
  } catch (error) {
    l(error);
  }
}

main();
