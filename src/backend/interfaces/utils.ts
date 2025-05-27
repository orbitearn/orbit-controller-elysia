export type Addr = string;
export type Token =
  | {
      native: {
        denom: string;
      };
    }
  | {
      cw20: {
        address: Addr;
      };
    };

export interface TaskScheduler {
  scheduleTask: (targetHour: number, taskFunction: () => Promise<void>) => void;
  getTimeUntilTarget: (targetHour: number) => number;
}
