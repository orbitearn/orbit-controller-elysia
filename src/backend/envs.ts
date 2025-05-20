import path from "path";

export function rootPath(dir: string): string {
  return path.resolve(__dirname, "../../", dir);
}

const schema = {
  SEED: (v: string) => v,
  USER_SEED: (v: string) => v,
  MONGODB: (v: string) => v,
  ORBIT_CONTROLLER: (v: string) => v,
  PORT: (v: string) => v,
  LOCAL_IP_LIST: (v: string) => JSON.parse(v) as string[],
  LOCAL_PORT_LIST: (v: string) => JSON.parse(v) as number[],
  BE_DEV_URL: (v: string) => v,
  BE_TUNNEL_URL: (v: string) => v,
  BE_PROD_URL: (v: string) => v,
  FE_DEV_URL: (v: string) => v,
  FE_STAGE_URL: (v: string) => v,
  FE_PROD_URL: (v: string) => v,
  FE_DEV_NEW_URL: (v: string) => v,
  FE_STAGE_NEW_URL: (v: string) => v,
  FE_PROD_NEW_URL: (v: string) => v,
  IS_PROD: (v: string) => v === "true",
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
