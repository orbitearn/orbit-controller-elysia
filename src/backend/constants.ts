export const CHAIN_ID = "pion-1"; // TODO:  "neutron-1"
export const DECIMALS_DEFAULT = 6;

// test config
export const BANK = {
  PAGINATION: {
    USER_INFO: 10, // from 50
    USER_COUNTER: 200,
    ASSET_LIST: 100,
  },
  MAX_COUNTER_DIFF: 10, // from 21
  UPDATE_STATE_LIST: {
    MIN: 1, // lower threshold
    LIMIT: 5, // limit per tx
  },
  UPDATE_STATE_TIME_MARGIN: 60, // seconds
  DISTRIBUTION_PERIOD: 15 * 60, // seconds
  START_DATE_MINUTES: 30,
  CYCLE_COOLDOWN: 5, // seconds
};

// debug config
// export const BANK = {
//   PAGINATION: {
//     USER_INFO: 50,
//     USER_COUNTER: 200,
//     ASSET_LIST: 100,
//   },
//   MAX_COUNTER_DIFF: 2, // 1 week for 8h distribution period
//   UPDATE_STATE_LIST: {
//     MIN: 1, // lower threshold
//     LIMIT: 5, // limit per tx
//   },
//   UPDATE_STATE_TIME_MARGIN: 30, // seconds
//   DISTRIBUTION_PERIOD: 5 * 60, // seconds
//   START_DATE_MINUTES: 10,
//   CYCLE_COOLDOWN: 5, // seconds
// };

export const ROUTE = {
  GET_TEST: "/test",
  GET_AVERAGE_ENTRY_PRICE: "/average-entry-price",
  GET_PROFIT: "/profit",
  GET_FIRST_DATA: "/first-data",
  GET_APR: "/apr",
  GET_APP_DATA_IN_TIMESTAMP_RANGE: "/app-data-in-timestamp-range",
  GET_USER_DATA_IN_TIMESTAMP_RANGE: "/user-data-in-timestamp-range",

  UPDATE_USER_ASSETS: "/update-user-assets",
};

// in seconds
export const PERIOD = {
  none: 0,
  day: 24 * 3_600,
  week: 7 * 24 * 3_600,
  month: 30 * 24 * 3_600,
  year: 365 * 24 * 3_600,
};

export const LOG_RECORD_ID = "current_log"; // Fixed document ID

export const LOGGER = {
  MAX_LOG_LINES: 500, // Limit for number of lines stored in DB
  FLUSH_DEBOUNCE: 5, // Wait FLUSH_DEBOUNCE s after last log
  FLUSH_MAX_WAIT: 30, // Always flush after FLUSH_MAX_WAIT s
  LOG_FILE_PATH: "./src/backend/logs/app.log",
};

export const RATE_LIMIT = {
  DURATION: 60, // s
  MAX: 30, // Limit each IP to MAX requests per `window`
};

export const UTILS = {
  MS_PER_SECOND: 1_000,
  ENCODING: "utf8",
  PATH_TO_CONFIG_JSON_STR: "./src/common/config/config.json",
};
