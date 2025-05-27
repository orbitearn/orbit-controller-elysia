import { readFileSync } from "fs";
import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { rateLimit } from "elysia-rate-limit";
import { helmet } from "elysia-helmet";
import { ENV } from "./envs";
import { RATE_LIMIT, UTILS } from "./constants";
import { dedupVector } from "../common/utils";
import { rootPath } from "./utils";
import { main } from "./services/main";
import { apiRoutes } from "./routes/api";

new Elysia()
  .use(
    rateLimit({
      duration: RATE_LIMIT.DURATION * UTILS.MS_PER_SECOND,
      max: RATE_LIMIT.MAX,
    })
  )
  .use(
    cors({
      origin: dedupVector([
        ...ENV.LOCAL_IP_LIST.flatMap((ip) =>
          ENV.LOCAL_PORT_LIST.map((port) => `${ip}:${port}`)
        ),
        ENV.BE_DEV_URL,
        ENV.BE_TUNNEL_URL,
        ENV.BE_PROD_URL,
        ENV.FE_DEV_URL,
        ENV.FE_STAGE_URL,
        ENV.FE_PROD_URL,
        ENV.FE_DEV_NEW_URL,
        ENV.FE_STAGE_NEW_URL,
        ENV.FE_PROD_NEW_URL,
      ]).filter((x) => x),
    })
  )
  .use(
    helmet({
      crossOriginEmbedderPolicy: { policy: "credentialless" },
      crossOriginOpenerPolicy: true,
      crossOriginResourcePolicy: { policy: "cross-origin" },
      dnsPrefetchControl: true,
      frameguard: true,
      hidePoweredBy: true,
      hsts: true,
      ieNoOpen: true,
      noSniff: true,
      permittedCrossDomainPolicies: true,
      referrerPolicy: true,
      xssFilter: true,
      contentSecurityPolicy: { reportOnly: true },
    })
  )
  .use(swagger())
  .group("/api", (app) => apiRoutes(app as any))
  .onStart(main)
  .listen({
    port: ENV.PORT,
    tls: {
      key: readFileSync(rootPath(ENV.IS_PROD ? ENV.PROD_KEY : ENV.DEV_KEY)),
      cert: readFileSync(rootPath(ENV.IS_PROD ? ENV.PROD_CERT : ENV.DEV_CERT)),
    },
  });
