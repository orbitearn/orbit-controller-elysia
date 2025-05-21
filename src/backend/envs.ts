import path from "path";

export function rootPath(dir: string): string {
  return path.resolve(__dirname, "../../", dir);
}

const schema = {
  SEED: (x: string) => x,
  USER_SEED: (x: string) => x,
  DATABASE_URL: (x: string) => x,
  ORBIT_CONTROLLER: (x: string) => x,
  PORT: (x: string) => x,
  LOCAL_IP_LIST: (x: string) => JSON.parse(x) as string[],
  LOCAL_PORT_LIST: (x: string) => JSON.parse(x) as number[],
  BE_DEV_URL: (x: string) => x,
  BE_TUNNEL_URL: (x: string) => x,
  BE_PROD_URL: (x: string) => x,
  FE_DEV_URL: (x: string) => x,
  FE_STAGE_URL: (x: string) => x,
  FE_PROD_URL: (x: string) => x,
  FE_DEV_NEW_URL: (x: string) => x,
  FE_STAGE_NEW_URL: (x: string) => x,
  FE_PROD_NEW_URL: (x: string) => x,
  IS_PROD: (x: string) => x === "true",
};

// infer the Env type from the schema
type Env = {
  [K in keyof typeof schema]: ReturnType<(typeof schema)[K]>;
};

// load and parse env
export const ENV = {} as Env;

for (const key in schema) {
  const raw = Bun.env[key];

  if (typeof raw === "undefined") {
    throw new Error(`Missing environment variable: ${key}`);
  }

  (ENV as any)[key] = (schema as any)[key](raw);
}
