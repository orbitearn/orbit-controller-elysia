
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AppDataAssetPrices
 * 
 */
export type AppDataAssetPrices = $Result.DefaultSelection<Prisma.$AppDataAssetPricesPayload>
/**
 * Model ServerLogsEntries
 * 
 */
export type ServerLogsEntries = $Result.DefaultSelection<Prisma.$ServerLogsEntriesPayload>
/**
 * Model ServerLogsEntriesCause
 * 
 */
export type ServerLogsEntriesCause = $Result.DefaultSelection<Prisma.$ServerLogsEntriesCausePayload>
/**
 * Model app_data
 * 
 */
export type app_data = $Result.DefaultSelection<Prisma.$app_dataPayload>
/**
 * Model server_logs
 * 
 */
export type server_logs = $Result.DefaultSelection<Prisma.$server_logsPayload>
/**
 * Model user_data
 * 
 */
export type user_data = $Result.DefaultSelection<Prisma.$user_dataPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more App_data
 * const app_data = await prisma.app_data.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more App_data
   * const app_data = await prisma.app_data.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.app_data`: Exposes CRUD operations for the **app_data** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more App_data
    * const app_data = await prisma.app_data.findMany()
    * ```
    */
  get app_data(): Prisma.app_dataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.server_logs`: Exposes CRUD operations for the **server_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Server_logs
    * const server_logs = await prisma.server_logs.findMany()
    * ```
    */
  get server_logs(): Prisma.server_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_data`: Exposes CRUD operations for the **user_data** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_data
    * const user_data = await prisma.user_data.findMany()
    * ```
    */
  get user_data(): Prisma.user_dataDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    app_data: 'app_data',
    server_logs: 'server_logs',
    user_data: 'user_data'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "app_data" | "server_logs" | "user_data"
      txIsolationLevel: never
    }
    model: {
      app_data: {
        payload: Prisma.$app_dataPayload<ExtArgs>
        fields: Prisma.app_dataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.app_dataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_dataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.app_dataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_dataPayload>
          }
          findFirst: {
            args: Prisma.app_dataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_dataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.app_dataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_dataPayload>
          }
          findMany: {
            args: Prisma.app_dataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_dataPayload>[]
          }
          create: {
            args: Prisma.app_dataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_dataPayload>
          }
          createMany: {
            args: Prisma.app_dataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.app_dataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_dataPayload>
          }
          update: {
            args: Prisma.app_dataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_dataPayload>
          }
          deleteMany: {
            args: Prisma.app_dataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.app_dataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.app_dataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_dataPayload>
          }
          aggregate: {
            args: Prisma.App_dataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApp_data>
          }
          groupBy: {
            args: Prisma.app_dataGroupByArgs<ExtArgs>
            result: $Utils.Optional<App_dataGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.app_dataFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.app_dataAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.app_dataCountArgs<ExtArgs>
            result: $Utils.Optional<App_dataCountAggregateOutputType> | number
          }
        }
      }
      server_logs: {
        payload: Prisma.$server_logsPayload<ExtArgs>
        fields: Prisma.server_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.server_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$server_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.server_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$server_logsPayload>
          }
          findFirst: {
            args: Prisma.server_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$server_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.server_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$server_logsPayload>
          }
          findMany: {
            args: Prisma.server_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$server_logsPayload>[]
          }
          create: {
            args: Prisma.server_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$server_logsPayload>
          }
          createMany: {
            args: Prisma.server_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.server_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$server_logsPayload>
          }
          update: {
            args: Prisma.server_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$server_logsPayload>
          }
          deleteMany: {
            args: Prisma.server_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.server_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.server_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$server_logsPayload>
          }
          aggregate: {
            args: Prisma.Server_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServer_logs>
          }
          groupBy: {
            args: Prisma.server_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Server_logsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.server_logsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.server_logsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.server_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Server_logsCountAggregateOutputType> | number
          }
        }
      }
      user_data: {
        payload: Prisma.$user_dataPayload<ExtArgs>
        fields: Prisma.user_dataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_dataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_dataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_dataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_dataPayload>
          }
          findFirst: {
            args: Prisma.user_dataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_dataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_dataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_dataPayload>
          }
          findMany: {
            args: Prisma.user_dataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_dataPayload>[]
          }
          create: {
            args: Prisma.user_dataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_dataPayload>
          }
          createMany: {
            args: Prisma.user_dataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_dataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_dataPayload>
          }
          update: {
            args: Prisma.user_dataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_dataPayload>
          }
          deleteMany: {
            args: Prisma.user_dataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_dataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_dataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_dataPayload>
          }
          aggregate: {
            args: Prisma.User_dataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_data>
          }
          groupBy: {
            args: Prisma.user_dataGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_dataGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.user_dataFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.user_dataAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.user_dataCountArgs<ExtArgs>
            result: $Utils.Optional<User_dataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    app_data?: app_dataOmit
    server_logs?: server_logsOmit
    user_data?: user_dataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model AppDataAssetPrices
   */





  export type AppDataAssetPricesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    asset?: boolean
    price?: boolean
  }, ExtArgs["result"]["appDataAssetPrices"]>



  export type AppDataAssetPricesSelectScalar = {
    asset?: boolean
    price?: boolean
  }

  export type AppDataAssetPricesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"asset" | "price", ExtArgs["result"]["appDataAssetPrices"]>

  export type $AppDataAssetPricesPayload = {
    name: "AppDataAssetPrices"
    objects: {}
    scalars: {
      asset: string
      /**
       * TODO: migrate as actula type is Json due to: Multiple data types found: Float: 66.4%, Int: 33.6% out of 2994 sampled entries
       */
      price: number
    }
    composites: {}
  }

  type AppDataAssetPricesGetPayload<S extends boolean | null | undefined | AppDataAssetPricesDefaultArgs> = $Result.GetResult<Prisma.$AppDataAssetPricesPayload, S>





  /**
   * Fields of the AppDataAssetPrices model
   */
  interface AppDataAssetPricesFieldRefs {
    readonly asset: FieldRef<"AppDataAssetPrices", 'String'>
    readonly price: FieldRef<"AppDataAssetPrices", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * AppDataAssetPrices without action
   */
  export type AppDataAssetPricesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppDataAssetPrices
     */
    select?: AppDataAssetPricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppDataAssetPrices
     */
    omit?: AppDataAssetPricesOmit<ExtArgs> | null
  }


  /**
   * Model ServerLogsEntries
   */





  export type ServerLogsEntriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cause?: boolean | ServerLogsEntriesCauseDefaultArgs<ExtArgs>
    level?: boolean
    message?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["serverLogsEntries"]>



  export type ServerLogsEntriesSelectScalar = {
    level?: boolean
    message?: boolean
    timestamp?: boolean
  }

  export type ServerLogsEntriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cause" | "level" | "message" | "timestamp", ExtArgs["result"]["serverLogsEntries"]>
  export type ServerLogsEntriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServerLogsEntriesPayload = {
    name: "ServerLogsEntries"
    objects: {}
    scalars: {
      level: string
      message: string | null
      timestamp: string
    }
    composites: {
      cause: Prisma.$ServerLogsEntriesCausePayload | null
    }
  }

  type ServerLogsEntriesGetPayload<S extends boolean | null | undefined | ServerLogsEntriesDefaultArgs> = $Result.GetResult<Prisma.$ServerLogsEntriesPayload, S>





  /**
   * Fields of the ServerLogsEntries model
   */
  interface ServerLogsEntriesFieldRefs {
    readonly level: FieldRef<"ServerLogsEntries", 'String'>
    readonly message: FieldRef<"ServerLogsEntries", 'String'>
    readonly timestamp: FieldRef<"ServerLogsEntries", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ServerLogsEntries without action
   */
  export type ServerLogsEntriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerLogsEntries
     */
    select?: ServerLogsEntriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerLogsEntries
     */
    omit?: ServerLogsEntriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerLogsEntriesInclude<ExtArgs> | null
  }


  /**
   * Model ServerLogsEntriesCause
   */





  export type ServerLogsEntriesCauseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    errno?: boolean
    syscall?: boolean
  }, ExtArgs["result"]["serverLogsEntriesCause"]>



  export type ServerLogsEntriesCauseSelectScalar = {
    code?: boolean
    errno?: boolean
    syscall?: boolean
  }

  export type ServerLogsEntriesCauseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"code" | "errno" | "syscall", ExtArgs["result"]["serverLogsEntriesCause"]>

  export type $ServerLogsEntriesCausePayload = {
    name: "ServerLogsEntriesCause"
    objects: {}
    scalars: {
      code: string
      errno: number
      syscall: string
    }
    composites: {}
  }

  type ServerLogsEntriesCauseGetPayload<S extends boolean | null | undefined | ServerLogsEntriesCauseDefaultArgs> = $Result.GetResult<Prisma.$ServerLogsEntriesCausePayload, S>





  /**
   * Fields of the ServerLogsEntriesCause model
   */
  interface ServerLogsEntriesCauseFieldRefs {
    readonly code: FieldRef<"ServerLogsEntriesCause", 'String'>
    readonly errno: FieldRef<"ServerLogsEntriesCause", 'Int'>
    readonly syscall: FieldRef<"ServerLogsEntriesCause", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ServerLogsEntriesCause without action
   */
  export type ServerLogsEntriesCauseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerLogsEntriesCause
     */
    select?: ServerLogsEntriesCauseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerLogsEntriesCause
     */
    omit?: ServerLogsEntriesCauseOmit<ExtArgs> | null
  }


  /**
   * Model app_data
   */

  export type AggregateApp_data = {
    _count: App_dataCountAggregateOutputType | null
    _avg: App_dataAvgAggregateOutputType | null
    _sum: App_dataSumAggregateOutputType | null
    _min: App_dataMinAggregateOutputType | null
    _max: App_dataMaxAggregateOutputType | null
  }

  export type App_dataAvgAggregateOutputType = {
    v: number | null
    counter: number | null
  }

  export type App_dataSumAggregateOutputType = {
    v: number | null
    counter: number | null
  }

  export type App_dataMinAggregateOutputType = {
    id: string | null
    v: number | null
    counter: number | null
    timestamp: Date | null
  }

  export type App_dataMaxAggregateOutputType = {
    id: string | null
    v: number | null
    counter: number | null
    timestamp: Date | null
  }

  export type App_dataCountAggregateOutputType = {
    id: number
    v: number
    counter: number
    timestamp: number
    _all: number
  }


  export type App_dataAvgAggregateInputType = {
    v?: true
    counter?: true
  }

  export type App_dataSumAggregateInputType = {
    v?: true
    counter?: true
  }

  export type App_dataMinAggregateInputType = {
    id?: true
    v?: true
    counter?: true
    timestamp?: true
  }

  export type App_dataMaxAggregateInputType = {
    id?: true
    v?: true
    counter?: true
    timestamp?: true
  }

  export type App_dataCountAggregateInputType = {
    id?: true
    v?: true
    counter?: true
    timestamp?: true
    _all?: true
  }

  export type App_dataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which app_data to aggregate.
     */
    where?: app_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of app_data to fetch.
     */
    orderBy?: app_dataOrderByWithRelationInput | app_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: app_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` app_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` app_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned app_data
    **/
    _count?: true | App_dataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: App_dataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: App_dataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: App_dataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: App_dataMaxAggregateInputType
  }

  export type GetApp_dataAggregateType<T extends App_dataAggregateArgs> = {
        [P in keyof T & keyof AggregateApp_data]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApp_data[P]>
      : GetScalarType<T[P], AggregateApp_data[P]>
  }




  export type app_dataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: app_dataWhereInput
    orderBy?: app_dataOrderByWithAggregationInput | app_dataOrderByWithAggregationInput[]
    by: App_dataScalarFieldEnum[] | App_dataScalarFieldEnum
    having?: app_dataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: App_dataCountAggregateInputType | true
    _avg?: App_dataAvgAggregateInputType
    _sum?: App_dataSumAggregateInputType
    _min?: App_dataMinAggregateInputType
    _max?: App_dataMaxAggregateInputType
  }

  export type App_dataGroupByOutputType = {
    id: string
    v: number
    counter: number
    timestamp: Date
    _count: App_dataCountAggregateOutputType | null
    _avg: App_dataAvgAggregateOutputType | null
    _sum: App_dataSumAggregateOutputType | null
    _min: App_dataMinAggregateOutputType | null
    _max: App_dataMaxAggregateOutputType | null
  }

  type GetApp_dataGroupByPayload<T extends app_dataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<App_dataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof App_dataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], App_dataGroupByOutputType[P]>
            : GetScalarType<T[P], App_dataGroupByOutputType[P]>
        }
      >
    >


  export type app_dataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    v?: boolean
    assetPrices?: boolean | AppDataAssetPricesDefaultArgs<ExtArgs>
    counter?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["app_data"]>



  export type app_dataSelectScalar = {
    id?: boolean
    v?: boolean
    counter?: boolean
    timestamp?: boolean
  }

  export type app_dataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "v" | "assetPrices" | "counter" | "timestamp", ExtArgs["result"]["app_data"]>
  export type app_dataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $app_dataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "app_data"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      v: number
      counter: number
      timestamp: Date
    }, ExtArgs["result"]["app_data"]>
    composites: {
      assetPrices: Prisma.$AppDataAssetPricesPayload[]
    }
  }

  type app_dataGetPayload<S extends boolean | null | undefined | app_dataDefaultArgs> = $Result.GetResult<Prisma.$app_dataPayload, S>

  type app_dataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<app_dataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: App_dataCountAggregateInputType | true
    }

  export interface app_dataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['app_data'], meta: { name: 'app_data' } }
    /**
     * Find zero or one App_data that matches the filter.
     * @param {app_dataFindUniqueArgs} args - Arguments to find a App_data
     * @example
     * // Get one App_data
     * const app_data = await prisma.app_data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends app_dataFindUniqueArgs>(args: SelectSubset<T, app_dataFindUniqueArgs<ExtArgs>>): Prisma__app_dataClient<$Result.GetResult<Prisma.$app_dataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one App_data that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {app_dataFindUniqueOrThrowArgs} args - Arguments to find a App_data
     * @example
     * // Get one App_data
     * const app_data = await prisma.app_data.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends app_dataFindUniqueOrThrowArgs>(args: SelectSubset<T, app_dataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__app_dataClient<$Result.GetResult<Prisma.$app_dataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first App_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_dataFindFirstArgs} args - Arguments to find a App_data
     * @example
     * // Get one App_data
     * const app_data = await prisma.app_data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends app_dataFindFirstArgs>(args?: SelectSubset<T, app_dataFindFirstArgs<ExtArgs>>): Prisma__app_dataClient<$Result.GetResult<Prisma.$app_dataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first App_data that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_dataFindFirstOrThrowArgs} args - Arguments to find a App_data
     * @example
     * // Get one App_data
     * const app_data = await prisma.app_data.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends app_dataFindFirstOrThrowArgs>(args?: SelectSubset<T, app_dataFindFirstOrThrowArgs<ExtArgs>>): Prisma__app_dataClient<$Result.GetResult<Prisma.$app_dataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more App_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_dataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all App_data
     * const app_data = await prisma.app_data.findMany()
     * 
     * // Get first 10 App_data
     * const app_data = await prisma.app_data.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const app_dataWithIdOnly = await prisma.app_data.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends app_dataFindManyArgs>(args?: SelectSubset<T, app_dataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$app_dataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a App_data.
     * @param {app_dataCreateArgs} args - Arguments to create a App_data.
     * @example
     * // Create one App_data
     * const App_data = await prisma.app_data.create({
     *   data: {
     *     // ... data to create a App_data
     *   }
     * })
     * 
     */
    create<T extends app_dataCreateArgs>(args: SelectSubset<T, app_dataCreateArgs<ExtArgs>>): Prisma__app_dataClient<$Result.GetResult<Prisma.$app_dataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many App_data.
     * @param {app_dataCreateManyArgs} args - Arguments to create many App_data.
     * @example
     * // Create many App_data
     * const app_data = await prisma.app_data.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends app_dataCreateManyArgs>(args?: SelectSubset<T, app_dataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a App_data.
     * @param {app_dataDeleteArgs} args - Arguments to delete one App_data.
     * @example
     * // Delete one App_data
     * const App_data = await prisma.app_data.delete({
     *   where: {
     *     // ... filter to delete one App_data
     *   }
     * })
     * 
     */
    delete<T extends app_dataDeleteArgs>(args: SelectSubset<T, app_dataDeleteArgs<ExtArgs>>): Prisma__app_dataClient<$Result.GetResult<Prisma.$app_dataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one App_data.
     * @param {app_dataUpdateArgs} args - Arguments to update one App_data.
     * @example
     * // Update one App_data
     * const app_data = await prisma.app_data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends app_dataUpdateArgs>(args: SelectSubset<T, app_dataUpdateArgs<ExtArgs>>): Prisma__app_dataClient<$Result.GetResult<Prisma.$app_dataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more App_data.
     * @param {app_dataDeleteManyArgs} args - Arguments to filter App_data to delete.
     * @example
     * // Delete a few App_data
     * const { count } = await prisma.app_data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends app_dataDeleteManyArgs>(args?: SelectSubset<T, app_dataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more App_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_dataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many App_data
     * const app_data = await prisma.app_data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends app_dataUpdateManyArgs>(args: SelectSubset<T, app_dataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one App_data.
     * @param {app_dataUpsertArgs} args - Arguments to update or create a App_data.
     * @example
     * // Update or create a App_data
     * const app_data = await prisma.app_data.upsert({
     *   create: {
     *     // ... data to create a App_data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the App_data we want to update
     *   }
     * })
     */
    upsert<T extends app_dataUpsertArgs>(args: SelectSubset<T, app_dataUpsertArgs<ExtArgs>>): Prisma__app_dataClient<$Result.GetResult<Prisma.$app_dataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more App_data that matches the filter.
     * @param {app_dataFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const app_data = await prisma.app_data.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: app_dataFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a App_data.
     * @param {app_dataAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const app_data = await prisma.app_data.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: app_dataAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of App_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_dataCountArgs} args - Arguments to filter App_data to count.
     * @example
     * // Count the number of App_data
     * const count = await prisma.app_data.count({
     *   where: {
     *     // ... the filter for the App_data we want to count
     *   }
     * })
    **/
    count<T extends app_dataCountArgs>(
      args?: Subset<T, app_dataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], App_dataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a App_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {App_dataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends App_dataAggregateArgs>(args: Subset<T, App_dataAggregateArgs>): Prisma.PrismaPromise<GetApp_dataAggregateType<T>>

    /**
     * Group by App_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_dataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends app_dataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: app_dataGroupByArgs['orderBy'] }
        : { orderBy?: app_dataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, app_dataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApp_dataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the app_data model
   */
  readonly fields: app_dataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for app_data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__app_dataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the app_data model
   */
  interface app_dataFieldRefs {
    readonly id: FieldRef<"app_data", 'String'>
    readonly v: FieldRef<"app_data", 'Int'>
    readonly counter: FieldRef<"app_data", 'Int'>
    readonly timestamp: FieldRef<"app_data", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * app_data findUnique
   */
  export type app_dataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_data
     */
    select?: app_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_data
     */
    omit?: app_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: app_dataInclude<ExtArgs> | null
    /**
     * Filter, which app_data to fetch.
     */
    where: app_dataWhereUniqueInput
  }

  /**
   * app_data findUniqueOrThrow
   */
  export type app_dataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_data
     */
    select?: app_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_data
     */
    omit?: app_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: app_dataInclude<ExtArgs> | null
    /**
     * Filter, which app_data to fetch.
     */
    where: app_dataWhereUniqueInput
  }

  /**
   * app_data findFirst
   */
  export type app_dataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_data
     */
    select?: app_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_data
     */
    omit?: app_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: app_dataInclude<ExtArgs> | null
    /**
     * Filter, which app_data to fetch.
     */
    where?: app_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of app_data to fetch.
     */
    orderBy?: app_dataOrderByWithRelationInput | app_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for app_data.
     */
    cursor?: app_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` app_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` app_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of app_data.
     */
    distinct?: App_dataScalarFieldEnum | App_dataScalarFieldEnum[]
  }

  /**
   * app_data findFirstOrThrow
   */
  export type app_dataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_data
     */
    select?: app_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_data
     */
    omit?: app_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: app_dataInclude<ExtArgs> | null
    /**
     * Filter, which app_data to fetch.
     */
    where?: app_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of app_data to fetch.
     */
    orderBy?: app_dataOrderByWithRelationInput | app_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for app_data.
     */
    cursor?: app_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` app_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` app_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of app_data.
     */
    distinct?: App_dataScalarFieldEnum | App_dataScalarFieldEnum[]
  }

  /**
   * app_data findMany
   */
  export type app_dataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_data
     */
    select?: app_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_data
     */
    omit?: app_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: app_dataInclude<ExtArgs> | null
    /**
     * Filter, which app_data to fetch.
     */
    where?: app_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of app_data to fetch.
     */
    orderBy?: app_dataOrderByWithRelationInput | app_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing app_data.
     */
    cursor?: app_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` app_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` app_data.
     */
    skip?: number
    distinct?: App_dataScalarFieldEnum | App_dataScalarFieldEnum[]
  }

  /**
   * app_data create
   */
  export type app_dataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_data
     */
    select?: app_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_data
     */
    omit?: app_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: app_dataInclude<ExtArgs> | null
    /**
     * The data needed to create a app_data.
     */
    data: XOR<app_dataCreateInput, app_dataUncheckedCreateInput>
  }

  /**
   * app_data createMany
   */
  export type app_dataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many app_data.
     */
    data: app_dataCreateManyInput | app_dataCreateManyInput[]
  }

  /**
   * app_data update
   */
  export type app_dataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_data
     */
    select?: app_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_data
     */
    omit?: app_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: app_dataInclude<ExtArgs> | null
    /**
     * The data needed to update a app_data.
     */
    data: XOR<app_dataUpdateInput, app_dataUncheckedUpdateInput>
    /**
     * Choose, which app_data to update.
     */
    where: app_dataWhereUniqueInput
  }

  /**
   * app_data updateMany
   */
  export type app_dataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update app_data.
     */
    data: XOR<app_dataUpdateManyMutationInput, app_dataUncheckedUpdateManyInput>
    /**
     * Filter which app_data to update
     */
    where?: app_dataWhereInput
    /**
     * Limit how many app_data to update.
     */
    limit?: number
  }

  /**
   * app_data upsert
   */
  export type app_dataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_data
     */
    select?: app_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_data
     */
    omit?: app_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: app_dataInclude<ExtArgs> | null
    /**
     * The filter to search for the app_data to update in case it exists.
     */
    where: app_dataWhereUniqueInput
    /**
     * In case the app_data found by the `where` argument doesn't exist, create a new app_data with this data.
     */
    create: XOR<app_dataCreateInput, app_dataUncheckedCreateInput>
    /**
     * In case the app_data was found with the provided `where` argument, update it with this data.
     */
    update: XOR<app_dataUpdateInput, app_dataUncheckedUpdateInput>
  }

  /**
   * app_data delete
   */
  export type app_dataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_data
     */
    select?: app_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_data
     */
    omit?: app_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: app_dataInclude<ExtArgs> | null
    /**
     * Filter which app_data to delete.
     */
    where: app_dataWhereUniqueInput
  }

  /**
   * app_data deleteMany
   */
  export type app_dataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which app_data to delete
     */
    where?: app_dataWhereInput
    /**
     * Limit how many app_data to delete.
     */
    limit?: number
  }

  /**
   * app_data findRaw
   */
  export type app_dataFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * app_data aggregateRaw
   */
  export type app_dataAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * app_data without action
   */
  export type app_dataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_data
     */
    select?: app_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_data
     */
    omit?: app_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: app_dataInclude<ExtArgs> | null
  }


  /**
   * Model server_logs
   */

  export type AggregateServer_logs = {
    _count: Server_logsCountAggregateOutputType | null
    _avg: Server_logsAvgAggregateOutputType | null
    _sum: Server_logsSumAggregateOutputType | null
    _min: Server_logsMinAggregateOutputType | null
    _max: Server_logsMaxAggregateOutputType | null
  }

  export type Server_logsAvgAggregateOutputType = {
    v: number | null
  }

  export type Server_logsSumAggregateOutputType = {
    v: number | null
  }

  export type Server_logsMinAggregateOutputType = {
    id: string | null
    v: number | null
    rawContent: string | null
    recordId: string | null
    source: string | null
    timestamp: Date | null
  }

  export type Server_logsMaxAggregateOutputType = {
    id: string | null
    v: number | null
    rawContent: string | null
    recordId: string | null
    source: string | null
    timestamp: Date | null
  }

  export type Server_logsCountAggregateOutputType = {
    id: number
    v: number
    rawContent: number
    recordId: number
    source: number
    timestamp: number
    _all: number
  }


  export type Server_logsAvgAggregateInputType = {
    v?: true
  }

  export type Server_logsSumAggregateInputType = {
    v?: true
  }

  export type Server_logsMinAggregateInputType = {
    id?: true
    v?: true
    rawContent?: true
    recordId?: true
    source?: true
    timestamp?: true
  }

  export type Server_logsMaxAggregateInputType = {
    id?: true
    v?: true
    rawContent?: true
    recordId?: true
    source?: true
    timestamp?: true
  }

  export type Server_logsCountAggregateInputType = {
    id?: true
    v?: true
    rawContent?: true
    recordId?: true
    source?: true
    timestamp?: true
    _all?: true
  }

  export type Server_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which server_logs to aggregate.
     */
    where?: server_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of server_logs to fetch.
     */
    orderBy?: server_logsOrderByWithRelationInput | server_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: server_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` server_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` server_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned server_logs
    **/
    _count?: true | Server_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Server_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Server_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Server_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Server_logsMaxAggregateInputType
  }

  export type GetServer_logsAggregateType<T extends Server_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateServer_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServer_logs[P]>
      : GetScalarType<T[P], AggregateServer_logs[P]>
  }




  export type server_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: server_logsWhereInput
    orderBy?: server_logsOrderByWithAggregationInput | server_logsOrderByWithAggregationInput[]
    by: Server_logsScalarFieldEnum[] | Server_logsScalarFieldEnum
    having?: server_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Server_logsCountAggregateInputType | true
    _avg?: Server_logsAvgAggregateInputType
    _sum?: Server_logsSumAggregateInputType
    _min?: Server_logsMinAggregateInputType
    _max?: Server_logsMaxAggregateInputType
  }

  export type Server_logsGroupByOutputType = {
    id: string
    v: number
    rawContent: string
    recordId: string
    source: string
    timestamp: Date
    _count: Server_logsCountAggregateOutputType | null
    _avg: Server_logsAvgAggregateOutputType | null
    _sum: Server_logsSumAggregateOutputType | null
    _min: Server_logsMinAggregateOutputType | null
    _max: Server_logsMaxAggregateOutputType | null
  }

  type GetServer_logsGroupByPayload<T extends server_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Server_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Server_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Server_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Server_logsGroupByOutputType[P]>
        }
      >
    >


  export type server_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    v?: boolean
    entries?: boolean | ServerLogsEntriesDefaultArgs<ExtArgs>
    rawContent?: boolean
    recordId?: boolean
    source?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["server_logs"]>



  export type server_logsSelectScalar = {
    id?: boolean
    v?: boolean
    rawContent?: boolean
    recordId?: boolean
    source?: boolean
    timestamp?: boolean
  }

  export type server_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "v" | "entries" | "rawContent" | "recordId" | "source" | "timestamp", ExtArgs["result"]["server_logs"]>
  export type server_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $server_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "server_logs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      v: number
      rawContent: string
      recordId: string
      source: string
      timestamp: Date
    }, ExtArgs["result"]["server_logs"]>
    composites: {
      entries: Prisma.$ServerLogsEntriesPayload[]
    }
  }

  type server_logsGetPayload<S extends boolean | null | undefined | server_logsDefaultArgs> = $Result.GetResult<Prisma.$server_logsPayload, S>

  type server_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<server_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Server_logsCountAggregateInputType | true
    }

  export interface server_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['server_logs'], meta: { name: 'server_logs' } }
    /**
     * Find zero or one Server_logs that matches the filter.
     * @param {server_logsFindUniqueArgs} args - Arguments to find a Server_logs
     * @example
     * // Get one Server_logs
     * const server_logs = await prisma.server_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends server_logsFindUniqueArgs>(args: SelectSubset<T, server_logsFindUniqueArgs<ExtArgs>>): Prisma__server_logsClient<$Result.GetResult<Prisma.$server_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Server_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {server_logsFindUniqueOrThrowArgs} args - Arguments to find a Server_logs
     * @example
     * // Get one Server_logs
     * const server_logs = await prisma.server_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends server_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, server_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__server_logsClient<$Result.GetResult<Prisma.$server_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Server_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {server_logsFindFirstArgs} args - Arguments to find a Server_logs
     * @example
     * // Get one Server_logs
     * const server_logs = await prisma.server_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends server_logsFindFirstArgs>(args?: SelectSubset<T, server_logsFindFirstArgs<ExtArgs>>): Prisma__server_logsClient<$Result.GetResult<Prisma.$server_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Server_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {server_logsFindFirstOrThrowArgs} args - Arguments to find a Server_logs
     * @example
     * // Get one Server_logs
     * const server_logs = await prisma.server_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends server_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, server_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__server_logsClient<$Result.GetResult<Prisma.$server_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Server_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {server_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Server_logs
     * const server_logs = await prisma.server_logs.findMany()
     * 
     * // Get first 10 Server_logs
     * const server_logs = await prisma.server_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const server_logsWithIdOnly = await prisma.server_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends server_logsFindManyArgs>(args?: SelectSubset<T, server_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$server_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Server_logs.
     * @param {server_logsCreateArgs} args - Arguments to create a Server_logs.
     * @example
     * // Create one Server_logs
     * const Server_logs = await prisma.server_logs.create({
     *   data: {
     *     // ... data to create a Server_logs
     *   }
     * })
     * 
     */
    create<T extends server_logsCreateArgs>(args: SelectSubset<T, server_logsCreateArgs<ExtArgs>>): Prisma__server_logsClient<$Result.GetResult<Prisma.$server_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Server_logs.
     * @param {server_logsCreateManyArgs} args - Arguments to create many Server_logs.
     * @example
     * // Create many Server_logs
     * const server_logs = await prisma.server_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends server_logsCreateManyArgs>(args?: SelectSubset<T, server_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Server_logs.
     * @param {server_logsDeleteArgs} args - Arguments to delete one Server_logs.
     * @example
     * // Delete one Server_logs
     * const Server_logs = await prisma.server_logs.delete({
     *   where: {
     *     // ... filter to delete one Server_logs
     *   }
     * })
     * 
     */
    delete<T extends server_logsDeleteArgs>(args: SelectSubset<T, server_logsDeleteArgs<ExtArgs>>): Prisma__server_logsClient<$Result.GetResult<Prisma.$server_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Server_logs.
     * @param {server_logsUpdateArgs} args - Arguments to update one Server_logs.
     * @example
     * // Update one Server_logs
     * const server_logs = await prisma.server_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends server_logsUpdateArgs>(args: SelectSubset<T, server_logsUpdateArgs<ExtArgs>>): Prisma__server_logsClient<$Result.GetResult<Prisma.$server_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Server_logs.
     * @param {server_logsDeleteManyArgs} args - Arguments to filter Server_logs to delete.
     * @example
     * // Delete a few Server_logs
     * const { count } = await prisma.server_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends server_logsDeleteManyArgs>(args?: SelectSubset<T, server_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Server_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {server_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Server_logs
     * const server_logs = await prisma.server_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends server_logsUpdateManyArgs>(args: SelectSubset<T, server_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Server_logs.
     * @param {server_logsUpsertArgs} args - Arguments to update or create a Server_logs.
     * @example
     * // Update or create a Server_logs
     * const server_logs = await prisma.server_logs.upsert({
     *   create: {
     *     // ... data to create a Server_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Server_logs we want to update
     *   }
     * })
     */
    upsert<T extends server_logsUpsertArgs>(args: SelectSubset<T, server_logsUpsertArgs<ExtArgs>>): Prisma__server_logsClient<$Result.GetResult<Prisma.$server_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Server_logs that matches the filter.
     * @param {server_logsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const server_logs = await prisma.server_logs.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: server_logsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Server_logs.
     * @param {server_logsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const server_logs = await prisma.server_logs.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: server_logsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Server_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {server_logsCountArgs} args - Arguments to filter Server_logs to count.
     * @example
     * // Count the number of Server_logs
     * const count = await prisma.server_logs.count({
     *   where: {
     *     // ... the filter for the Server_logs we want to count
     *   }
     * })
    **/
    count<T extends server_logsCountArgs>(
      args?: Subset<T, server_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Server_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Server_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Server_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Server_logsAggregateArgs>(args: Subset<T, Server_logsAggregateArgs>): Prisma.PrismaPromise<GetServer_logsAggregateType<T>>

    /**
     * Group by Server_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {server_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends server_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: server_logsGroupByArgs['orderBy'] }
        : { orderBy?: server_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, server_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServer_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the server_logs model
   */
  readonly fields: server_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for server_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__server_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the server_logs model
   */
  interface server_logsFieldRefs {
    readonly id: FieldRef<"server_logs", 'String'>
    readonly v: FieldRef<"server_logs", 'Int'>
    readonly rawContent: FieldRef<"server_logs", 'String'>
    readonly recordId: FieldRef<"server_logs", 'String'>
    readonly source: FieldRef<"server_logs", 'String'>
    readonly timestamp: FieldRef<"server_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * server_logs findUnique
   */
  export type server_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the server_logs
     */
    select?: server_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the server_logs
     */
    omit?: server_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: server_logsInclude<ExtArgs> | null
    /**
     * Filter, which server_logs to fetch.
     */
    where: server_logsWhereUniqueInput
  }

  /**
   * server_logs findUniqueOrThrow
   */
  export type server_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the server_logs
     */
    select?: server_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the server_logs
     */
    omit?: server_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: server_logsInclude<ExtArgs> | null
    /**
     * Filter, which server_logs to fetch.
     */
    where: server_logsWhereUniqueInput
  }

  /**
   * server_logs findFirst
   */
  export type server_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the server_logs
     */
    select?: server_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the server_logs
     */
    omit?: server_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: server_logsInclude<ExtArgs> | null
    /**
     * Filter, which server_logs to fetch.
     */
    where?: server_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of server_logs to fetch.
     */
    orderBy?: server_logsOrderByWithRelationInput | server_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for server_logs.
     */
    cursor?: server_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` server_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` server_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of server_logs.
     */
    distinct?: Server_logsScalarFieldEnum | Server_logsScalarFieldEnum[]
  }

  /**
   * server_logs findFirstOrThrow
   */
  export type server_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the server_logs
     */
    select?: server_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the server_logs
     */
    omit?: server_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: server_logsInclude<ExtArgs> | null
    /**
     * Filter, which server_logs to fetch.
     */
    where?: server_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of server_logs to fetch.
     */
    orderBy?: server_logsOrderByWithRelationInput | server_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for server_logs.
     */
    cursor?: server_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` server_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` server_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of server_logs.
     */
    distinct?: Server_logsScalarFieldEnum | Server_logsScalarFieldEnum[]
  }

  /**
   * server_logs findMany
   */
  export type server_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the server_logs
     */
    select?: server_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the server_logs
     */
    omit?: server_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: server_logsInclude<ExtArgs> | null
    /**
     * Filter, which server_logs to fetch.
     */
    where?: server_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of server_logs to fetch.
     */
    orderBy?: server_logsOrderByWithRelationInput | server_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing server_logs.
     */
    cursor?: server_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` server_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` server_logs.
     */
    skip?: number
    distinct?: Server_logsScalarFieldEnum | Server_logsScalarFieldEnum[]
  }

  /**
   * server_logs create
   */
  export type server_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the server_logs
     */
    select?: server_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the server_logs
     */
    omit?: server_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: server_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a server_logs.
     */
    data: XOR<server_logsCreateInput, server_logsUncheckedCreateInput>
  }

  /**
   * server_logs createMany
   */
  export type server_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many server_logs.
     */
    data: server_logsCreateManyInput | server_logsCreateManyInput[]
  }

  /**
   * server_logs update
   */
  export type server_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the server_logs
     */
    select?: server_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the server_logs
     */
    omit?: server_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: server_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a server_logs.
     */
    data: XOR<server_logsUpdateInput, server_logsUncheckedUpdateInput>
    /**
     * Choose, which server_logs to update.
     */
    where: server_logsWhereUniqueInput
  }

  /**
   * server_logs updateMany
   */
  export type server_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update server_logs.
     */
    data: XOR<server_logsUpdateManyMutationInput, server_logsUncheckedUpdateManyInput>
    /**
     * Filter which server_logs to update
     */
    where?: server_logsWhereInput
    /**
     * Limit how many server_logs to update.
     */
    limit?: number
  }

  /**
   * server_logs upsert
   */
  export type server_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the server_logs
     */
    select?: server_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the server_logs
     */
    omit?: server_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: server_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the server_logs to update in case it exists.
     */
    where: server_logsWhereUniqueInput
    /**
     * In case the server_logs found by the `where` argument doesn't exist, create a new server_logs with this data.
     */
    create: XOR<server_logsCreateInput, server_logsUncheckedCreateInput>
    /**
     * In case the server_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<server_logsUpdateInput, server_logsUncheckedUpdateInput>
  }

  /**
   * server_logs delete
   */
  export type server_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the server_logs
     */
    select?: server_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the server_logs
     */
    omit?: server_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: server_logsInclude<ExtArgs> | null
    /**
     * Filter which server_logs to delete.
     */
    where: server_logsWhereUniqueInput
  }

  /**
   * server_logs deleteMany
   */
  export type server_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which server_logs to delete
     */
    where?: server_logsWhereInput
    /**
     * Limit how many server_logs to delete.
     */
    limit?: number
  }

  /**
   * server_logs findRaw
   */
  export type server_logsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * server_logs aggregateRaw
   */
  export type server_logsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * server_logs without action
   */
  export type server_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the server_logs
     */
    select?: server_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the server_logs
     */
    omit?: server_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: server_logsInclude<ExtArgs> | null
  }


  /**
   * Model user_data
   */

  export type AggregateUser_data = {
    _count: User_dataCountAggregateOutputType | null
    _avg: User_dataAvgAggregateOutputType | null
    _sum: User_dataSumAggregateOutputType | null
    _min: User_dataMinAggregateOutputType | null
    _max: User_dataMaxAggregateOutputType | null
  }

  export type User_dataAvgAggregateOutputType = {
    v: number | null
    amount: number | null
  }

  export type User_dataSumAggregateOutputType = {
    v: number | null
    amount: number | null
  }

  export type User_dataMinAggregateOutputType = {
    id: string | null
    v: number | null
    address: string | null
    amount: number | null
    asset: string | null
    timestamp: Date | null
  }

  export type User_dataMaxAggregateOutputType = {
    id: string | null
    v: number | null
    address: string | null
    amount: number | null
    asset: string | null
    timestamp: Date | null
  }

  export type User_dataCountAggregateOutputType = {
    id: number
    v: number
    address: number
    amount: number
    asset: number
    timestamp: number
    _all: number
  }


  export type User_dataAvgAggregateInputType = {
    v?: true
    amount?: true
  }

  export type User_dataSumAggregateInputType = {
    v?: true
    amount?: true
  }

  export type User_dataMinAggregateInputType = {
    id?: true
    v?: true
    address?: true
    amount?: true
    asset?: true
    timestamp?: true
  }

  export type User_dataMaxAggregateInputType = {
    id?: true
    v?: true
    address?: true
    amount?: true
    asset?: true
    timestamp?: true
  }

  export type User_dataCountAggregateInputType = {
    id?: true
    v?: true
    address?: true
    amount?: true
    asset?: true
    timestamp?: true
    _all?: true
  }

  export type User_dataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_data to aggregate.
     */
    where?: user_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_data to fetch.
     */
    orderBy?: user_dataOrderByWithRelationInput | user_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_data
    **/
    _count?: true | User_dataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_dataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_dataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_dataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_dataMaxAggregateInputType
  }

  export type GetUser_dataAggregateType<T extends User_dataAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_data]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_data[P]>
      : GetScalarType<T[P], AggregateUser_data[P]>
  }




  export type user_dataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_dataWhereInput
    orderBy?: user_dataOrderByWithAggregationInput | user_dataOrderByWithAggregationInput[]
    by: User_dataScalarFieldEnum[] | User_dataScalarFieldEnum
    having?: user_dataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_dataCountAggregateInputType | true
    _avg?: User_dataAvgAggregateInputType
    _sum?: User_dataSumAggregateInputType
    _min?: User_dataMinAggregateInputType
    _max?: User_dataMaxAggregateInputType
  }

  export type User_dataGroupByOutputType = {
    id: string
    v: number
    address: string
    amount: number
    asset: string
    timestamp: Date
    _count: User_dataCountAggregateOutputType | null
    _avg: User_dataAvgAggregateOutputType | null
    _sum: User_dataSumAggregateOutputType | null
    _min: User_dataMinAggregateOutputType | null
    _max: User_dataMaxAggregateOutputType | null
  }

  type GetUser_dataGroupByPayload<T extends user_dataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_dataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_dataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_dataGroupByOutputType[P]>
            : GetScalarType<T[P], User_dataGroupByOutputType[P]>
        }
      >
    >


  export type user_dataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    v?: boolean
    address?: boolean
    amount?: boolean
    asset?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["user_data"]>



  export type user_dataSelectScalar = {
    id?: boolean
    v?: boolean
    address?: boolean
    amount?: boolean
    asset?: boolean
    timestamp?: boolean
  }

  export type user_dataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "v" | "address" | "amount" | "asset" | "timestamp", ExtArgs["result"]["user_data"]>

  export type $user_dataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_data"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      v: number
      address: string
      amount: number
      asset: string
      timestamp: Date
    }, ExtArgs["result"]["user_data"]>
    composites: {}
  }

  type user_dataGetPayload<S extends boolean | null | undefined | user_dataDefaultArgs> = $Result.GetResult<Prisma.$user_dataPayload, S>

  type user_dataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_dataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_dataCountAggregateInputType | true
    }

  export interface user_dataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_data'], meta: { name: 'user_data' } }
    /**
     * Find zero or one User_data that matches the filter.
     * @param {user_dataFindUniqueArgs} args - Arguments to find a User_data
     * @example
     * // Get one User_data
     * const user_data = await prisma.user_data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_dataFindUniqueArgs>(args: SelectSubset<T, user_dataFindUniqueArgs<ExtArgs>>): Prisma__user_dataClient<$Result.GetResult<Prisma.$user_dataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_data that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_dataFindUniqueOrThrowArgs} args - Arguments to find a User_data
     * @example
     * // Get one User_data
     * const user_data = await prisma.user_data.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_dataFindUniqueOrThrowArgs>(args: SelectSubset<T, user_dataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_dataClient<$Result.GetResult<Prisma.$user_dataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_dataFindFirstArgs} args - Arguments to find a User_data
     * @example
     * // Get one User_data
     * const user_data = await prisma.user_data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_dataFindFirstArgs>(args?: SelectSubset<T, user_dataFindFirstArgs<ExtArgs>>): Prisma__user_dataClient<$Result.GetResult<Prisma.$user_dataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_data that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_dataFindFirstOrThrowArgs} args - Arguments to find a User_data
     * @example
     * // Get one User_data
     * const user_data = await prisma.user_data.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_dataFindFirstOrThrowArgs>(args?: SelectSubset<T, user_dataFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_dataClient<$Result.GetResult<Prisma.$user_dataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_dataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_data
     * const user_data = await prisma.user_data.findMany()
     * 
     * // Get first 10 User_data
     * const user_data = await prisma.user_data.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_dataWithIdOnly = await prisma.user_data.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_dataFindManyArgs>(args?: SelectSubset<T, user_dataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_dataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_data.
     * @param {user_dataCreateArgs} args - Arguments to create a User_data.
     * @example
     * // Create one User_data
     * const User_data = await prisma.user_data.create({
     *   data: {
     *     // ... data to create a User_data
     *   }
     * })
     * 
     */
    create<T extends user_dataCreateArgs>(args: SelectSubset<T, user_dataCreateArgs<ExtArgs>>): Prisma__user_dataClient<$Result.GetResult<Prisma.$user_dataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_data.
     * @param {user_dataCreateManyArgs} args - Arguments to create many User_data.
     * @example
     * // Create many User_data
     * const user_data = await prisma.user_data.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_dataCreateManyArgs>(args?: SelectSubset<T, user_dataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_data.
     * @param {user_dataDeleteArgs} args - Arguments to delete one User_data.
     * @example
     * // Delete one User_data
     * const User_data = await prisma.user_data.delete({
     *   where: {
     *     // ... filter to delete one User_data
     *   }
     * })
     * 
     */
    delete<T extends user_dataDeleteArgs>(args: SelectSubset<T, user_dataDeleteArgs<ExtArgs>>): Prisma__user_dataClient<$Result.GetResult<Prisma.$user_dataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_data.
     * @param {user_dataUpdateArgs} args - Arguments to update one User_data.
     * @example
     * // Update one User_data
     * const user_data = await prisma.user_data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_dataUpdateArgs>(args: SelectSubset<T, user_dataUpdateArgs<ExtArgs>>): Prisma__user_dataClient<$Result.GetResult<Prisma.$user_dataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_data.
     * @param {user_dataDeleteManyArgs} args - Arguments to filter User_data to delete.
     * @example
     * // Delete a few User_data
     * const { count } = await prisma.user_data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_dataDeleteManyArgs>(args?: SelectSubset<T, user_dataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_dataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_data
     * const user_data = await prisma.user_data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_dataUpdateManyArgs>(args: SelectSubset<T, user_dataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_data.
     * @param {user_dataUpsertArgs} args - Arguments to update or create a User_data.
     * @example
     * // Update or create a User_data
     * const user_data = await prisma.user_data.upsert({
     *   create: {
     *     // ... data to create a User_data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_data we want to update
     *   }
     * })
     */
    upsert<T extends user_dataUpsertArgs>(args: SelectSubset<T, user_dataUpsertArgs<ExtArgs>>): Prisma__user_dataClient<$Result.GetResult<Prisma.$user_dataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_data that matches the filter.
     * @param {user_dataFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user_data = await prisma.user_data.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: user_dataFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User_data.
     * @param {user_dataAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user_data = await prisma.user_data.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: user_dataAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of User_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_dataCountArgs} args - Arguments to filter User_data to count.
     * @example
     * // Count the number of User_data
     * const count = await prisma.user_data.count({
     *   where: {
     *     // ... the filter for the User_data we want to count
     *   }
     * })
    **/
    count<T extends user_dataCountArgs>(
      args?: Subset<T, user_dataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_dataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_dataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_dataAggregateArgs>(args: Subset<T, User_dataAggregateArgs>): Prisma.PrismaPromise<GetUser_dataAggregateType<T>>

    /**
     * Group by User_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_dataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_dataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_dataGroupByArgs['orderBy'] }
        : { orderBy?: user_dataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_dataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_dataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_data model
   */
  readonly fields: user_dataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_dataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_data model
   */
  interface user_dataFieldRefs {
    readonly id: FieldRef<"user_data", 'String'>
    readonly v: FieldRef<"user_data", 'Int'>
    readonly address: FieldRef<"user_data", 'String'>
    readonly amount: FieldRef<"user_data", 'Float'>
    readonly asset: FieldRef<"user_data", 'String'>
    readonly timestamp: FieldRef<"user_data", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_data findUnique
   */
  export type user_dataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_data
     */
    select?: user_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_data
     */
    omit?: user_dataOmit<ExtArgs> | null
    /**
     * Filter, which user_data to fetch.
     */
    where: user_dataWhereUniqueInput
  }

  /**
   * user_data findUniqueOrThrow
   */
  export type user_dataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_data
     */
    select?: user_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_data
     */
    omit?: user_dataOmit<ExtArgs> | null
    /**
     * Filter, which user_data to fetch.
     */
    where: user_dataWhereUniqueInput
  }

  /**
   * user_data findFirst
   */
  export type user_dataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_data
     */
    select?: user_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_data
     */
    omit?: user_dataOmit<ExtArgs> | null
    /**
     * Filter, which user_data to fetch.
     */
    where?: user_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_data to fetch.
     */
    orderBy?: user_dataOrderByWithRelationInput | user_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_data.
     */
    cursor?: user_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_data.
     */
    distinct?: User_dataScalarFieldEnum | User_dataScalarFieldEnum[]
  }

  /**
   * user_data findFirstOrThrow
   */
  export type user_dataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_data
     */
    select?: user_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_data
     */
    omit?: user_dataOmit<ExtArgs> | null
    /**
     * Filter, which user_data to fetch.
     */
    where?: user_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_data to fetch.
     */
    orderBy?: user_dataOrderByWithRelationInput | user_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_data.
     */
    cursor?: user_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_data.
     */
    distinct?: User_dataScalarFieldEnum | User_dataScalarFieldEnum[]
  }

  /**
   * user_data findMany
   */
  export type user_dataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_data
     */
    select?: user_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_data
     */
    omit?: user_dataOmit<ExtArgs> | null
    /**
     * Filter, which user_data to fetch.
     */
    where?: user_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_data to fetch.
     */
    orderBy?: user_dataOrderByWithRelationInput | user_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_data.
     */
    cursor?: user_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_data.
     */
    skip?: number
    distinct?: User_dataScalarFieldEnum | User_dataScalarFieldEnum[]
  }

  /**
   * user_data create
   */
  export type user_dataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_data
     */
    select?: user_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_data
     */
    omit?: user_dataOmit<ExtArgs> | null
    /**
     * The data needed to create a user_data.
     */
    data: XOR<user_dataCreateInput, user_dataUncheckedCreateInput>
  }

  /**
   * user_data createMany
   */
  export type user_dataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_data.
     */
    data: user_dataCreateManyInput | user_dataCreateManyInput[]
  }

  /**
   * user_data update
   */
  export type user_dataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_data
     */
    select?: user_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_data
     */
    omit?: user_dataOmit<ExtArgs> | null
    /**
     * The data needed to update a user_data.
     */
    data: XOR<user_dataUpdateInput, user_dataUncheckedUpdateInput>
    /**
     * Choose, which user_data to update.
     */
    where: user_dataWhereUniqueInput
  }

  /**
   * user_data updateMany
   */
  export type user_dataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_data.
     */
    data: XOR<user_dataUpdateManyMutationInput, user_dataUncheckedUpdateManyInput>
    /**
     * Filter which user_data to update
     */
    where?: user_dataWhereInput
    /**
     * Limit how many user_data to update.
     */
    limit?: number
  }

  /**
   * user_data upsert
   */
  export type user_dataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_data
     */
    select?: user_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_data
     */
    omit?: user_dataOmit<ExtArgs> | null
    /**
     * The filter to search for the user_data to update in case it exists.
     */
    where: user_dataWhereUniqueInput
    /**
     * In case the user_data found by the `where` argument doesn't exist, create a new user_data with this data.
     */
    create: XOR<user_dataCreateInput, user_dataUncheckedCreateInput>
    /**
     * In case the user_data was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_dataUpdateInput, user_dataUncheckedUpdateInput>
  }

  /**
   * user_data delete
   */
  export type user_dataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_data
     */
    select?: user_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_data
     */
    omit?: user_dataOmit<ExtArgs> | null
    /**
     * Filter which user_data to delete.
     */
    where: user_dataWhereUniqueInput
  }

  /**
   * user_data deleteMany
   */
  export type user_dataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_data to delete
     */
    where?: user_dataWhereInput
    /**
     * Limit how many user_data to delete.
     */
    limit?: number
  }

  /**
   * user_data findRaw
   */
  export type user_dataFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * user_data aggregateRaw
   */
  export type user_dataAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * user_data without action
   */
  export type user_dataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_data
     */
    select?: user_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_data
     */
    omit?: user_dataOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const App_dataScalarFieldEnum: {
    id: 'id',
    v: 'v',
    counter: 'counter',
    timestamp: 'timestamp'
  };

  export type App_dataScalarFieldEnum = (typeof App_dataScalarFieldEnum)[keyof typeof App_dataScalarFieldEnum]


  export const Server_logsScalarFieldEnum: {
    id: 'id',
    v: 'v',
    rawContent: 'rawContent',
    recordId: 'recordId',
    source: 'source',
    timestamp: 'timestamp'
  };

  export type Server_logsScalarFieldEnum = (typeof Server_logsScalarFieldEnum)[keyof typeof Server_logsScalarFieldEnum]


  export const User_dataScalarFieldEnum: {
    id: 'id',
    v: 'v',
    address: 'address',
    amount: 'amount',
    asset: 'asset',
    timestamp: 'timestamp'
  };

  export type User_dataScalarFieldEnum = (typeof User_dataScalarFieldEnum)[keyof typeof User_dataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type app_dataWhereInput = {
    AND?: app_dataWhereInput | app_dataWhereInput[]
    OR?: app_dataWhereInput[]
    NOT?: app_dataWhereInput | app_dataWhereInput[]
    id?: StringFilter<"app_data"> | string
    v?: IntFilter<"app_data"> | number
    assetPrices?: AppDataAssetPricesCompositeListFilter | AppDataAssetPricesObjectEqualityInput[]
    counter?: IntFilter<"app_data"> | number
    timestamp?: DateTimeFilter<"app_data"> | Date | string
  }

  export type app_dataOrderByWithRelationInput = {
    id?: SortOrder
    v?: SortOrder
    assetPrices?: AppDataAssetPricesOrderByCompositeAggregateInput
    counter?: SortOrder
    timestamp?: SortOrder
  }

  export type app_dataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    counter?: number
    timestamp?: Date | string
    AND?: app_dataWhereInput | app_dataWhereInput[]
    OR?: app_dataWhereInput[]
    NOT?: app_dataWhereInput | app_dataWhereInput[]
    v?: IntFilter<"app_data"> | number
    assetPrices?: AppDataAssetPricesCompositeListFilter | AppDataAssetPricesObjectEqualityInput[]
  }, "id" | "counter" | "timestamp">

  export type app_dataOrderByWithAggregationInput = {
    id?: SortOrder
    v?: SortOrder
    counter?: SortOrder
    timestamp?: SortOrder
    _count?: app_dataCountOrderByAggregateInput
    _avg?: app_dataAvgOrderByAggregateInput
    _max?: app_dataMaxOrderByAggregateInput
    _min?: app_dataMinOrderByAggregateInput
    _sum?: app_dataSumOrderByAggregateInput
  }

  export type app_dataScalarWhereWithAggregatesInput = {
    AND?: app_dataScalarWhereWithAggregatesInput | app_dataScalarWhereWithAggregatesInput[]
    OR?: app_dataScalarWhereWithAggregatesInput[]
    NOT?: app_dataScalarWhereWithAggregatesInput | app_dataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"app_data"> | string
    v?: IntWithAggregatesFilter<"app_data"> | number
    counter?: IntWithAggregatesFilter<"app_data"> | number
    timestamp?: DateTimeWithAggregatesFilter<"app_data"> | Date | string
  }

  export type server_logsWhereInput = {
    AND?: server_logsWhereInput | server_logsWhereInput[]
    OR?: server_logsWhereInput[]
    NOT?: server_logsWhereInput | server_logsWhereInput[]
    id?: StringFilter<"server_logs"> | string
    v?: IntFilter<"server_logs"> | number
    entries?: ServerLogsEntriesCompositeListFilter | ServerLogsEntriesObjectEqualityInput[]
    rawContent?: StringFilter<"server_logs"> | string
    recordId?: StringFilter<"server_logs"> | string
    source?: StringFilter<"server_logs"> | string
    timestamp?: DateTimeFilter<"server_logs"> | Date | string
  }

  export type server_logsOrderByWithRelationInput = {
    id?: SortOrder
    v?: SortOrder
    entries?: ServerLogsEntriesOrderByCompositeAggregateInput
    rawContent?: SortOrder
    recordId?: SortOrder
    source?: SortOrder
    timestamp?: SortOrder
  }

  export type server_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: server_logsWhereInput | server_logsWhereInput[]
    OR?: server_logsWhereInput[]
    NOT?: server_logsWhereInput | server_logsWhereInput[]
    v?: IntFilter<"server_logs"> | number
    entries?: ServerLogsEntriesCompositeListFilter | ServerLogsEntriesObjectEqualityInput[]
    rawContent?: StringFilter<"server_logs"> | string
    recordId?: StringFilter<"server_logs"> | string
    source?: StringFilter<"server_logs"> | string
    timestamp?: DateTimeFilter<"server_logs"> | Date | string
  }, "id">

  export type server_logsOrderByWithAggregationInput = {
    id?: SortOrder
    v?: SortOrder
    rawContent?: SortOrder
    recordId?: SortOrder
    source?: SortOrder
    timestamp?: SortOrder
    _count?: server_logsCountOrderByAggregateInput
    _avg?: server_logsAvgOrderByAggregateInput
    _max?: server_logsMaxOrderByAggregateInput
    _min?: server_logsMinOrderByAggregateInput
    _sum?: server_logsSumOrderByAggregateInput
  }

  export type server_logsScalarWhereWithAggregatesInput = {
    AND?: server_logsScalarWhereWithAggregatesInput | server_logsScalarWhereWithAggregatesInput[]
    OR?: server_logsScalarWhereWithAggregatesInput[]
    NOT?: server_logsScalarWhereWithAggregatesInput | server_logsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"server_logs"> | string
    v?: IntWithAggregatesFilter<"server_logs"> | number
    rawContent?: StringWithAggregatesFilter<"server_logs"> | string
    recordId?: StringWithAggregatesFilter<"server_logs"> | string
    source?: StringWithAggregatesFilter<"server_logs"> | string
    timestamp?: DateTimeWithAggregatesFilter<"server_logs"> | Date | string
  }

  export type user_dataWhereInput = {
    AND?: user_dataWhereInput | user_dataWhereInput[]
    OR?: user_dataWhereInput[]
    NOT?: user_dataWhereInput | user_dataWhereInput[]
    id?: StringFilter<"user_data"> | string
    v?: IntFilter<"user_data"> | number
    address?: StringFilter<"user_data"> | string
    amount?: FloatFilter<"user_data"> | number
    asset?: StringFilter<"user_data"> | string
    timestamp?: DateTimeFilter<"user_data"> | Date | string
  }

  export type user_dataOrderByWithRelationInput = {
    id?: SortOrder
    v?: SortOrder
    address?: SortOrder
    amount?: SortOrder
    asset?: SortOrder
    timestamp?: SortOrder
  }

  export type user_dataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: user_dataWhereInput | user_dataWhereInput[]
    OR?: user_dataWhereInput[]
    NOT?: user_dataWhereInput | user_dataWhereInput[]
    v?: IntFilter<"user_data"> | number
    address?: StringFilter<"user_data"> | string
    amount?: FloatFilter<"user_data"> | number
    asset?: StringFilter<"user_data"> | string
    timestamp?: DateTimeFilter<"user_data"> | Date | string
  }, "id">

  export type user_dataOrderByWithAggregationInput = {
    id?: SortOrder
    v?: SortOrder
    address?: SortOrder
    amount?: SortOrder
    asset?: SortOrder
    timestamp?: SortOrder
    _count?: user_dataCountOrderByAggregateInput
    _avg?: user_dataAvgOrderByAggregateInput
    _max?: user_dataMaxOrderByAggregateInput
    _min?: user_dataMinOrderByAggregateInput
    _sum?: user_dataSumOrderByAggregateInput
  }

  export type user_dataScalarWhereWithAggregatesInput = {
    AND?: user_dataScalarWhereWithAggregatesInput | user_dataScalarWhereWithAggregatesInput[]
    OR?: user_dataScalarWhereWithAggregatesInput[]
    NOT?: user_dataScalarWhereWithAggregatesInput | user_dataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user_data"> | string
    v?: IntWithAggregatesFilter<"user_data"> | number
    address?: StringWithAggregatesFilter<"user_data"> | string
    amount?: FloatWithAggregatesFilter<"user_data"> | number
    asset?: StringWithAggregatesFilter<"user_data"> | string
    timestamp?: DateTimeWithAggregatesFilter<"user_data"> | Date | string
  }

  export type app_dataCreateInput = {
    id?: string
    v: number
    assetPrices?: XOR<AppDataAssetPricesListCreateEnvelopeInput, AppDataAssetPricesCreateInput> | AppDataAssetPricesCreateInput[]
    counter: number
    timestamp: Date | string
  }

  export type app_dataUncheckedCreateInput = {
    id?: string
    v: number
    assetPrices?: XOR<AppDataAssetPricesListCreateEnvelopeInput, AppDataAssetPricesCreateInput> | AppDataAssetPricesCreateInput[]
    counter: number
    timestamp: Date | string
  }

  export type app_dataUpdateInput = {
    v?: IntFieldUpdateOperationsInput | number
    assetPrices?: XOR<AppDataAssetPricesListUpdateEnvelopeInput, AppDataAssetPricesCreateInput> | AppDataAssetPricesCreateInput[]
    counter?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type app_dataUncheckedUpdateInput = {
    v?: IntFieldUpdateOperationsInput | number
    assetPrices?: XOR<AppDataAssetPricesListUpdateEnvelopeInput, AppDataAssetPricesCreateInput> | AppDataAssetPricesCreateInput[]
    counter?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type app_dataCreateManyInput = {
    id?: string
    v: number
    assetPrices?: XOR<AppDataAssetPricesListCreateEnvelopeInput, AppDataAssetPricesCreateInput> | AppDataAssetPricesCreateInput[]
    counter: number
    timestamp: Date | string
  }

  export type app_dataUpdateManyMutationInput = {
    v?: IntFieldUpdateOperationsInput | number
    assetPrices?: XOR<AppDataAssetPricesListUpdateEnvelopeInput, AppDataAssetPricesCreateInput> | AppDataAssetPricesCreateInput[]
    counter?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type app_dataUncheckedUpdateManyInput = {
    v?: IntFieldUpdateOperationsInput | number
    assetPrices?: XOR<AppDataAssetPricesListUpdateEnvelopeInput, AppDataAssetPricesCreateInput> | AppDataAssetPricesCreateInput[]
    counter?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type server_logsCreateInput = {
    id?: string
    v: number
    entries?: XOR<ServerLogsEntriesListCreateEnvelopeInput, ServerLogsEntriesCreateInput> | ServerLogsEntriesCreateInput[]
    rawContent: string
    recordId: string
    source: string
    timestamp: Date | string
  }

  export type server_logsUncheckedCreateInput = {
    id?: string
    v: number
    entries?: XOR<ServerLogsEntriesListCreateEnvelopeInput, ServerLogsEntriesCreateInput> | ServerLogsEntriesCreateInput[]
    rawContent: string
    recordId: string
    source: string
    timestamp: Date | string
  }

  export type server_logsUpdateInput = {
    v?: IntFieldUpdateOperationsInput | number
    entries?: XOR<ServerLogsEntriesListUpdateEnvelopeInput, ServerLogsEntriesCreateInput> | ServerLogsEntriesCreateInput[]
    rawContent?: StringFieldUpdateOperationsInput | string
    recordId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type server_logsUncheckedUpdateInput = {
    v?: IntFieldUpdateOperationsInput | number
    entries?: XOR<ServerLogsEntriesListUpdateEnvelopeInput, ServerLogsEntriesCreateInput> | ServerLogsEntriesCreateInput[]
    rawContent?: StringFieldUpdateOperationsInput | string
    recordId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type server_logsCreateManyInput = {
    id?: string
    v: number
    entries?: XOR<ServerLogsEntriesListCreateEnvelopeInput, ServerLogsEntriesCreateInput> | ServerLogsEntriesCreateInput[]
    rawContent: string
    recordId: string
    source: string
    timestamp: Date | string
  }

  export type server_logsUpdateManyMutationInput = {
    v?: IntFieldUpdateOperationsInput | number
    entries?: XOR<ServerLogsEntriesListUpdateEnvelopeInput, ServerLogsEntriesCreateInput> | ServerLogsEntriesCreateInput[]
    rawContent?: StringFieldUpdateOperationsInput | string
    recordId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type server_logsUncheckedUpdateManyInput = {
    v?: IntFieldUpdateOperationsInput | number
    entries?: XOR<ServerLogsEntriesListUpdateEnvelopeInput, ServerLogsEntriesCreateInput> | ServerLogsEntriesCreateInput[]
    rawContent?: StringFieldUpdateOperationsInput | string
    recordId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_dataCreateInput = {
    id?: string
    v: number
    address: string
    amount: number
    asset: string
    timestamp: Date | string
  }

  export type user_dataUncheckedCreateInput = {
    id?: string
    v: number
    address: string
    amount: number
    asset: string
    timestamp: Date | string
  }

  export type user_dataUpdateInput = {
    v?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_dataUncheckedUpdateInput = {
    v?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_dataCreateManyInput = {
    id?: string
    v: number
    address: string
    amount: number
    asset: string
    timestamp: Date | string
  }

  export type user_dataUpdateManyMutationInput = {
    v?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_dataUncheckedUpdateManyInput = {
    v?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AppDataAssetPricesCompositeListFilter = {
    equals?: AppDataAssetPricesObjectEqualityInput[]
    every?: AppDataAssetPricesWhereInput
    some?: AppDataAssetPricesWhereInput
    none?: AppDataAssetPricesWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type AppDataAssetPricesObjectEqualityInput = {
    asset: string
    price: number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AppDataAssetPricesOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type app_dataCountOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    counter?: SortOrder
    timestamp?: SortOrder
  }

  export type app_dataAvgOrderByAggregateInput = {
    v?: SortOrder
    counter?: SortOrder
  }

  export type app_dataMaxOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    counter?: SortOrder
    timestamp?: SortOrder
  }

  export type app_dataMinOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    counter?: SortOrder
    timestamp?: SortOrder
  }

  export type app_dataSumOrderByAggregateInput = {
    v?: SortOrder
    counter?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ServerLogsEntriesCompositeListFilter = {
    equals?: ServerLogsEntriesObjectEqualityInput[]
    every?: ServerLogsEntriesWhereInput
    some?: ServerLogsEntriesWhereInput
    none?: ServerLogsEntriesWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type ServerLogsEntriesObjectEqualityInput = {
    cause?: ServerLogsEntriesCauseObjectEqualityInput | null
    level: string
    message?: string | null
    timestamp: string
  }

  export type ServerLogsEntriesOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type server_logsCountOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    rawContent?: SortOrder
    recordId?: SortOrder
    source?: SortOrder
    timestamp?: SortOrder
  }

  export type server_logsAvgOrderByAggregateInput = {
    v?: SortOrder
  }

  export type server_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    rawContent?: SortOrder
    recordId?: SortOrder
    source?: SortOrder
    timestamp?: SortOrder
  }

  export type server_logsMinOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    rawContent?: SortOrder
    recordId?: SortOrder
    source?: SortOrder
    timestamp?: SortOrder
  }

  export type server_logsSumOrderByAggregateInput = {
    v?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type user_dataCountOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    address?: SortOrder
    amount?: SortOrder
    asset?: SortOrder
    timestamp?: SortOrder
  }

  export type user_dataAvgOrderByAggregateInput = {
    v?: SortOrder
    amount?: SortOrder
  }

  export type user_dataMaxOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    address?: SortOrder
    amount?: SortOrder
    asset?: SortOrder
    timestamp?: SortOrder
  }

  export type user_dataMinOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    address?: SortOrder
    amount?: SortOrder
    asset?: SortOrder
    timestamp?: SortOrder
  }

  export type user_dataSumOrderByAggregateInput = {
    v?: SortOrder
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AppDataAssetPricesListCreateEnvelopeInput = {
    set?: AppDataAssetPricesCreateInput | AppDataAssetPricesCreateInput[]
  }

  export type AppDataAssetPricesCreateInput = {
    asset: string
    price: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AppDataAssetPricesListUpdateEnvelopeInput = {
    set?: AppDataAssetPricesCreateInput | AppDataAssetPricesCreateInput[]
    push?: AppDataAssetPricesCreateInput | AppDataAssetPricesCreateInput[]
    updateMany?: AppDataAssetPricesUpdateManyInput
    deleteMany?: AppDataAssetPricesDeleteManyInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ServerLogsEntriesListCreateEnvelopeInput = {
    set?: ServerLogsEntriesCreateInput | ServerLogsEntriesCreateInput[]
  }

  export type ServerLogsEntriesCreateInput = {
    cause?: ServerLogsEntriesCauseCreateInput | null
    level: string
    message?: string | null
    timestamp: string
  }

  export type ServerLogsEntriesListUpdateEnvelopeInput = {
    set?: ServerLogsEntriesCreateInput | ServerLogsEntriesCreateInput[]
    push?: ServerLogsEntriesCreateInput | ServerLogsEntriesCreateInput[]
    updateMany?: ServerLogsEntriesUpdateManyInput
    deleteMany?: ServerLogsEntriesDeleteManyInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AppDataAssetPricesWhereInput = {
    AND?: AppDataAssetPricesWhereInput | AppDataAssetPricesWhereInput[]
    OR?: AppDataAssetPricesWhereInput[]
    NOT?: AppDataAssetPricesWhereInput | AppDataAssetPricesWhereInput[]
    asset?: StringFilter<"AppDataAssetPrices"> | string
    price?: FloatFilter<"AppDataAssetPrices"> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ServerLogsEntriesWhereInput = {
    AND?: ServerLogsEntriesWhereInput | ServerLogsEntriesWhereInput[]
    OR?: ServerLogsEntriesWhereInput[]
    NOT?: ServerLogsEntriesWhereInput | ServerLogsEntriesWhereInput[]
    cause?: XOR<ServerLogsEntriesCauseNullableCompositeFilter, ServerLogsEntriesCauseObjectEqualityInput> | null
    level?: StringFilter<"ServerLogsEntries"> | string
    message?: StringNullableFilter<"ServerLogsEntries"> | string | null
    timestamp?: StringFilter<"ServerLogsEntries"> | string
  }

  export type ServerLogsEntriesCauseObjectEqualityInput = {
    code: string
    errno: number
    syscall: string
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AppDataAssetPricesUpdateManyInput = {
    where: AppDataAssetPricesWhereInput
    data: AppDataAssetPricesUpdateInput
  }

  export type AppDataAssetPricesDeleteManyInput = {
    where: AppDataAssetPricesWhereInput
  }

  export type ServerLogsEntriesCauseCreateInput = {
    code: string
    errno: number
    syscall: string
  }

  export type ServerLogsEntriesUpdateManyInput = {
    where: ServerLogsEntriesWhereInput
    data: ServerLogsEntriesUpdateInput
  }

  export type ServerLogsEntriesDeleteManyInput = {
    where: ServerLogsEntriesWhereInput
  }

  export type ServerLogsEntriesCauseNullableCompositeFilter = {
    equals?: ServerLogsEntriesCauseObjectEqualityInput | null
    is?: ServerLogsEntriesCauseWhereInput | null
    isNot?: ServerLogsEntriesCauseWhereInput | null
    isSet?: boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type AppDataAssetPricesUpdateInput = {
    asset?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ServerLogsEntriesUpdateInput = {
    cause?: XOR<ServerLogsEntriesCauseNullableUpdateEnvelopeInput, ServerLogsEntriesCauseCreateInput> | null
    level?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: StringFieldUpdateOperationsInput | string
  }

  export type ServerLogsEntriesCauseWhereInput = {
    AND?: ServerLogsEntriesCauseWhereInput | ServerLogsEntriesCauseWhereInput[]
    OR?: ServerLogsEntriesCauseWhereInput[]
    NOT?: ServerLogsEntriesCauseWhereInput | ServerLogsEntriesCauseWhereInput[]
    code?: StringFilter<"ServerLogsEntriesCause"> | string
    errno?: IntFilter<"ServerLogsEntriesCause"> | number
    syscall?: StringFilter<"ServerLogsEntriesCause"> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type ServerLogsEntriesCauseNullableUpdateEnvelopeInput = {
    set?: ServerLogsEntriesCauseCreateInput | null
    upsert?: ServerLogsEntriesCauseUpsertInput
    unset?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type ServerLogsEntriesCauseUpsertInput = {
    set: ServerLogsEntriesCauseCreateInput | null
    update: ServerLogsEntriesCauseUpdateInput
  }

  export type ServerLogsEntriesCauseUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    errno?: IntFieldUpdateOperationsInput | number
    syscall?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}