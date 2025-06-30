
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model BankAccountDetails
 * 
 */
export type BankAccountDetails = $Result.DefaultSelection<Prisma.$BankAccountDetailsPayload>
/**
 * Model BeneficiaryAccountDetails
 * 
 */
export type BeneficiaryAccountDetails = $Result.DefaultSelection<Prisma.$BeneficiaryAccountDetailsPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bankAccountDetails`: Exposes CRUD operations for the **BankAccountDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BankAccountDetails
    * const bankAccountDetails = await prisma.bankAccountDetails.findMany()
    * ```
    */
  get bankAccountDetails(): Prisma.BankAccountDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.beneficiaryAccountDetails`: Exposes CRUD operations for the **BeneficiaryAccountDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BeneficiaryAccountDetails
    * const beneficiaryAccountDetails = await prisma.beneficiaryAccountDetails.findMany()
    * ```
    */
  get beneficiaryAccountDetails(): Prisma.BeneficiaryAccountDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    User: 'User',
    BankAccountDetails: 'BankAccountDetails',
    BeneficiaryAccountDetails: 'BeneficiaryAccountDetails',
    Invoice: 'Invoice'
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
      modelProps: "user" | "bankAccountDetails" | "beneficiaryAccountDetails" | "invoice"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      BankAccountDetails: {
        payload: Prisma.$BankAccountDetailsPayload<ExtArgs>
        fields: Prisma.BankAccountDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BankAccountDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BankAccountDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountDetailsPayload>
          }
          findFirst: {
            args: Prisma.BankAccountDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BankAccountDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountDetailsPayload>
          }
          findMany: {
            args: Prisma.BankAccountDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountDetailsPayload>[]
          }
          create: {
            args: Prisma.BankAccountDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountDetailsPayload>
          }
          createMany: {
            args: Prisma.BankAccountDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BankAccountDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountDetailsPayload>
          }
          update: {
            args: Prisma.BankAccountDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountDetailsPayload>
          }
          deleteMany: {
            args: Prisma.BankAccountDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BankAccountDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BankAccountDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountDetailsPayload>
          }
          aggregate: {
            args: Prisma.BankAccountDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBankAccountDetails>
          }
          groupBy: {
            args: Prisma.BankAccountDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BankAccountDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BankAccountDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<BankAccountDetailsCountAggregateOutputType> | number
          }
        }
      }
      BeneficiaryAccountDetails: {
        payload: Prisma.$BeneficiaryAccountDetailsPayload<ExtArgs>
        fields: Prisma.BeneficiaryAccountDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BeneficiaryAccountDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryAccountDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BeneficiaryAccountDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryAccountDetailsPayload>
          }
          findFirst: {
            args: Prisma.BeneficiaryAccountDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryAccountDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BeneficiaryAccountDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryAccountDetailsPayload>
          }
          findMany: {
            args: Prisma.BeneficiaryAccountDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryAccountDetailsPayload>[]
          }
          create: {
            args: Prisma.BeneficiaryAccountDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryAccountDetailsPayload>
          }
          createMany: {
            args: Prisma.BeneficiaryAccountDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BeneficiaryAccountDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryAccountDetailsPayload>
          }
          update: {
            args: Prisma.BeneficiaryAccountDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryAccountDetailsPayload>
          }
          deleteMany: {
            args: Prisma.BeneficiaryAccountDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BeneficiaryAccountDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BeneficiaryAccountDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryAccountDetailsPayload>
          }
          aggregate: {
            args: Prisma.BeneficiaryAccountDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBeneficiaryAccountDetails>
          }
          groupBy: {
            args: Prisma.BeneficiaryAccountDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BeneficiaryAccountDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BeneficiaryAccountDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<BeneficiaryAccountDetailsCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    user?: UserOmit
    bankAccountDetails?: BankAccountDetailsOmit
    beneficiaryAccountDetails?: BeneficiaryAccountDetailsOmit
    invoice?: InvoiceOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bankAccounts: number
    beneficiaryAccounts: number
    invoices: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccounts?: boolean | UserCountOutputTypeCountBankAccountsArgs
    beneficiaryAccounts?: boolean | UserCountOutputTypeCountBeneficiaryAccountsArgs
    invoices?: boolean | UserCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBankAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankAccountDetailsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBeneficiaryAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BeneficiaryAccountDetailsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }


  /**
   * Count Type BankAccountDetailsCountOutputType
   */

  export type BankAccountDetailsCountOutputType = {
    invoicesFrom: number
  }

  export type BankAccountDetailsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoicesFrom?: boolean | BankAccountDetailsCountOutputTypeCountInvoicesFromArgs
  }

  // Custom InputTypes
  /**
   * BankAccountDetailsCountOutputType without action
   */
  export type BankAccountDetailsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccountDetailsCountOutputType
     */
    select?: BankAccountDetailsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BankAccountDetailsCountOutputType without action
   */
  export type BankAccountDetailsCountOutputTypeCountInvoicesFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }


  /**
   * Count Type BeneficiaryAccountDetailsCountOutputType
   */

  export type BeneficiaryAccountDetailsCountOutputType = {
    invoicesTo: number
  }

  export type BeneficiaryAccountDetailsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoicesTo?: boolean | BeneficiaryAccountDetailsCountOutputTypeCountInvoicesToArgs
  }

  // Custom InputTypes
  /**
   * BeneficiaryAccountDetailsCountOutputType without action
   */
  export type BeneficiaryAccountDetailsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeneficiaryAccountDetailsCountOutputType
     */
    select?: BeneficiaryAccountDetailsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BeneficiaryAccountDetailsCountOutputType without action
   */
  export type BeneficiaryAccountDetailsCountOutputTypeCountInvoicesToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    nickName: string | null
    email: string | null
    password: string | null
    mobile: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    nickName: string | null
    email: string | null
    password: string | null
    mobile: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    nickName: number
    email: number
    password: number
    mobile: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    nickName?: true
    email?: true
    password?: true
    mobile?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    nickName?: true
    email?: true
    password?: true
    mobile?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    nickName?: true
    email?: true
    password?: true
    mobile?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    nickName: string
    email: string
    password: string
    mobile: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    nickName?: boolean
    email?: boolean
    password?: boolean
    mobile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bankAccounts?: boolean | User$bankAccountsArgs<ExtArgs>
    beneficiaryAccounts?: boolean | User$beneficiaryAccountsArgs<ExtArgs>
    invoices?: boolean | User$invoicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    nickName?: boolean
    email?: boolean
    password?: boolean
    mobile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "nickName" | "email" | "password" | "mobile" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccounts?: boolean | User$bankAccountsArgs<ExtArgs>
    beneficiaryAccounts?: boolean | User$beneficiaryAccountsArgs<ExtArgs>
    invoices?: boolean | User$invoicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bankAccounts: Prisma.$BankAccountDetailsPayload<ExtArgs>[]
      beneficiaryAccounts: Prisma.$BeneficiaryAccountDetailsPayload<ExtArgs>[]
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      nickName: string
      email: string
      password: string
      mobile: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bankAccounts<T extends User$bankAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$bankAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    beneficiaryAccounts<T extends User$beneficiaryAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$beneficiaryAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeneficiaryAccountDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoices<T extends User$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, User$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly nickName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly mobile: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.bankAccounts
   */
  export type User$bankAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccountDetails
     */
    select?: BankAccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccountDetails
     */
    omit?: BankAccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountDetailsInclude<ExtArgs> | null
    where?: BankAccountDetailsWhereInput
    orderBy?: BankAccountDetailsOrderByWithRelationInput | BankAccountDetailsOrderByWithRelationInput[]
    cursor?: BankAccountDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankAccountDetailsScalarFieldEnum | BankAccountDetailsScalarFieldEnum[]
  }

  /**
   * User.beneficiaryAccounts
   */
  export type User$beneficiaryAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeneficiaryAccountDetails
     */
    select?: BeneficiaryAccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BeneficiaryAccountDetails
     */
    omit?: BeneficiaryAccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryAccountDetailsInclude<ExtArgs> | null
    where?: BeneficiaryAccountDetailsWhereInput
    orderBy?: BeneficiaryAccountDetailsOrderByWithRelationInput | BeneficiaryAccountDetailsOrderByWithRelationInput[]
    cursor?: BeneficiaryAccountDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BeneficiaryAccountDetailsScalarFieldEnum | BeneficiaryAccountDetailsScalarFieldEnum[]
  }

  /**
   * User.invoices
   */
  export type User$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model BankAccountDetails
   */

  export type AggregateBankAccountDetails = {
    _count: BankAccountDetailsCountAggregateOutputType | null
    _avg: BankAccountDetailsAvgAggregateOutputType | null
    _sum: BankAccountDetailsSumAggregateOutputType | null
    _min: BankAccountDetailsMinAggregateOutputType | null
    _max: BankAccountDetailsMaxAggregateOutputType | null
  }

  export type BankAccountDetailsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    balance: Decimal | null
  }

  export type BankAccountDetailsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    balance: Decimal | null
  }

  export type BankAccountDetailsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    accountHolderName: string | null
    accountHolderNickName: string | null
    accountNumber: string | null
    accountType: string | null
    bankName: string | null
    balance: Decimal | null
    branch: string | null
    ifscCode: string | null
    pincode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BankAccountDetailsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    accountHolderName: string | null
    accountHolderNickName: string | null
    accountNumber: string | null
    accountType: string | null
    bankName: string | null
    balance: Decimal | null
    branch: string | null
    ifscCode: string | null
    pincode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BankAccountDetailsCountAggregateOutputType = {
    id: number
    userId: number
    accountHolderName: number
    accountHolderNickName: number
    accountNumber: number
    accountType: number
    bankName: number
    balance: number
    branch: number
    ifscCode: number
    pincode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BankAccountDetailsAvgAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
  }

  export type BankAccountDetailsSumAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
  }

  export type BankAccountDetailsMinAggregateInputType = {
    id?: true
    userId?: true
    accountHolderName?: true
    accountHolderNickName?: true
    accountNumber?: true
    accountType?: true
    bankName?: true
    balance?: true
    branch?: true
    ifscCode?: true
    pincode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BankAccountDetailsMaxAggregateInputType = {
    id?: true
    userId?: true
    accountHolderName?: true
    accountHolderNickName?: true
    accountNumber?: true
    accountType?: true
    bankName?: true
    balance?: true
    branch?: true
    ifscCode?: true
    pincode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BankAccountDetailsCountAggregateInputType = {
    id?: true
    userId?: true
    accountHolderName?: true
    accountHolderNickName?: true
    accountNumber?: true
    accountType?: true
    bankName?: true
    balance?: true
    branch?: true
    ifscCode?: true
    pincode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BankAccountDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankAccountDetails to aggregate.
     */
    where?: BankAccountDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccountDetails to fetch.
     */
    orderBy?: BankAccountDetailsOrderByWithRelationInput | BankAccountDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BankAccountDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccountDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccountDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BankAccountDetails
    **/
    _count?: true | BankAccountDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BankAccountDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BankAccountDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankAccountDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankAccountDetailsMaxAggregateInputType
  }

  export type GetBankAccountDetailsAggregateType<T extends BankAccountDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateBankAccountDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBankAccountDetails[P]>
      : GetScalarType<T[P], AggregateBankAccountDetails[P]>
  }




  export type BankAccountDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankAccountDetailsWhereInput
    orderBy?: BankAccountDetailsOrderByWithAggregationInput | BankAccountDetailsOrderByWithAggregationInput[]
    by: BankAccountDetailsScalarFieldEnum[] | BankAccountDetailsScalarFieldEnum
    having?: BankAccountDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankAccountDetailsCountAggregateInputType | true
    _avg?: BankAccountDetailsAvgAggregateInputType
    _sum?: BankAccountDetailsSumAggregateInputType
    _min?: BankAccountDetailsMinAggregateInputType
    _max?: BankAccountDetailsMaxAggregateInputType
  }

  export type BankAccountDetailsGroupByOutputType = {
    id: number
    userId: number
    accountHolderName: string
    accountHolderNickName: string
    accountNumber: string
    accountType: string
    bankName: string
    balance: Decimal
    branch: string
    ifscCode: string
    pincode: string
    createdAt: Date
    updatedAt: Date
    _count: BankAccountDetailsCountAggregateOutputType | null
    _avg: BankAccountDetailsAvgAggregateOutputType | null
    _sum: BankAccountDetailsSumAggregateOutputType | null
    _min: BankAccountDetailsMinAggregateOutputType | null
    _max: BankAccountDetailsMaxAggregateOutputType | null
  }

  type GetBankAccountDetailsGroupByPayload<T extends BankAccountDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankAccountDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankAccountDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankAccountDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], BankAccountDetailsGroupByOutputType[P]>
        }
      >
    >


  export type BankAccountDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountHolderName?: boolean
    accountHolderNickName?: boolean
    accountNumber?: boolean
    accountType?: boolean
    bankName?: boolean
    balance?: boolean
    branch?: boolean
    ifscCode?: boolean
    pincode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    invoicesFrom?: boolean | BankAccountDetails$invoicesFromArgs<ExtArgs>
    _count?: boolean | BankAccountDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankAccountDetails"]>



  export type BankAccountDetailsSelectScalar = {
    id?: boolean
    userId?: boolean
    accountHolderName?: boolean
    accountHolderNickName?: boolean
    accountNumber?: boolean
    accountType?: boolean
    bankName?: boolean
    balance?: boolean
    branch?: boolean
    ifscCode?: boolean
    pincode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BankAccountDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "accountHolderName" | "accountHolderNickName" | "accountNumber" | "accountType" | "bankName" | "balance" | "branch" | "ifscCode" | "pincode" | "createdAt" | "updatedAt", ExtArgs["result"]["bankAccountDetails"]>
  export type BankAccountDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    invoicesFrom?: boolean | BankAccountDetails$invoicesFromArgs<ExtArgs>
    _count?: boolean | BankAccountDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BankAccountDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BankAccountDetails"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      invoicesFrom: Prisma.$InvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      accountHolderName: string
      accountHolderNickName: string
      accountNumber: string
      accountType: string
      bankName: string
      balance: Prisma.Decimal
      branch: string
      ifscCode: string
      pincode: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bankAccountDetails"]>
    composites: {}
  }

  type BankAccountDetailsGetPayload<S extends boolean | null | undefined | BankAccountDetailsDefaultArgs> = $Result.GetResult<Prisma.$BankAccountDetailsPayload, S>

  type BankAccountDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BankAccountDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BankAccountDetailsCountAggregateInputType | true
    }

  export interface BankAccountDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BankAccountDetails'], meta: { name: 'BankAccountDetails' } }
    /**
     * Find zero or one BankAccountDetails that matches the filter.
     * @param {BankAccountDetailsFindUniqueArgs} args - Arguments to find a BankAccountDetails
     * @example
     * // Get one BankAccountDetails
     * const bankAccountDetails = await prisma.bankAccountDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BankAccountDetailsFindUniqueArgs>(args: SelectSubset<T, BankAccountDetailsFindUniqueArgs<ExtArgs>>): Prisma__BankAccountDetailsClient<$Result.GetResult<Prisma.$BankAccountDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BankAccountDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BankAccountDetailsFindUniqueOrThrowArgs} args - Arguments to find a BankAccountDetails
     * @example
     * // Get one BankAccountDetails
     * const bankAccountDetails = await prisma.bankAccountDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BankAccountDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, BankAccountDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BankAccountDetailsClient<$Result.GetResult<Prisma.$BankAccountDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankAccountDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountDetailsFindFirstArgs} args - Arguments to find a BankAccountDetails
     * @example
     * // Get one BankAccountDetails
     * const bankAccountDetails = await prisma.bankAccountDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BankAccountDetailsFindFirstArgs>(args?: SelectSubset<T, BankAccountDetailsFindFirstArgs<ExtArgs>>): Prisma__BankAccountDetailsClient<$Result.GetResult<Prisma.$BankAccountDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankAccountDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountDetailsFindFirstOrThrowArgs} args - Arguments to find a BankAccountDetails
     * @example
     * // Get one BankAccountDetails
     * const bankAccountDetails = await prisma.bankAccountDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BankAccountDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, BankAccountDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BankAccountDetailsClient<$Result.GetResult<Prisma.$BankAccountDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BankAccountDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BankAccountDetails
     * const bankAccountDetails = await prisma.bankAccountDetails.findMany()
     * 
     * // Get first 10 BankAccountDetails
     * const bankAccountDetails = await prisma.bankAccountDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankAccountDetailsWithIdOnly = await prisma.bankAccountDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BankAccountDetailsFindManyArgs>(args?: SelectSubset<T, BankAccountDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BankAccountDetails.
     * @param {BankAccountDetailsCreateArgs} args - Arguments to create a BankAccountDetails.
     * @example
     * // Create one BankAccountDetails
     * const BankAccountDetails = await prisma.bankAccountDetails.create({
     *   data: {
     *     // ... data to create a BankAccountDetails
     *   }
     * })
     * 
     */
    create<T extends BankAccountDetailsCreateArgs>(args: SelectSubset<T, BankAccountDetailsCreateArgs<ExtArgs>>): Prisma__BankAccountDetailsClient<$Result.GetResult<Prisma.$BankAccountDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BankAccountDetails.
     * @param {BankAccountDetailsCreateManyArgs} args - Arguments to create many BankAccountDetails.
     * @example
     * // Create many BankAccountDetails
     * const bankAccountDetails = await prisma.bankAccountDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BankAccountDetailsCreateManyArgs>(args?: SelectSubset<T, BankAccountDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BankAccountDetails.
     * @param {BankAccountDetailsDeleteArgs} args - Arguments to delete one BankAccountDetails.
     * @example
     * // Delete one BankAccountDetails
     * const BankAccountDetails = await prisma.bankAccountDetails.delete({
     *   where: {
     *     // ... filter to delete one BankAccountDetails
     *   }
     * })
     * 
     */
    delete<T extends BankAccountDetailsDeleteArgs>(args: SelectSubset<T, BankAccountDetailsDeleteArgs<ExtArgs>>): Prisma__BankAccountDetailsClient<$Result.GetResult<Prisma.$BankAccountDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BankAccountDetails.
     * @param {BankAccountDetailsUpdateArgs} args - Arguments to update one BankAccountDetails.
     * @example
     * // Update one BankAccountDetails
     * const bankAccountDetails = await prisma.bankAccountDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BankAccountDetailsUpdateArgs>(args: SelectSubset<T, BankAccountDetailsUpdateArgs<ExtArgs>>): Prisma__BankAccountDetailsClient<$Result.GetResult<Prisma.$BankAccountDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BankAccountDetails.
     * @param {BankAccountDetailsDeleteManyArgs} args - Arguments to filter BankAccountDetails to delete.
     * @example
     * // Delete a few BankAccountDetails
     * const { count } = await prisma.bankAccountDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BankAccountDetailsDeleteManyArgs>(args?: SelectSubset<T, BankAccountDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankAccountDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BankAccountDetails
     * const bankAccountDetails = await prisma.bankAccountDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BankAccountDetailsUpdateManyArgs>(args: SelectSubset<T, BankAccountDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BankAccountDetails.
     * @param {BankAccountDetailsUpsertArgs} args - Arguments to update or create a BankAccountDetails.
     * @example
     * // Update or create a BankAccountDetails
     * const bankAccountDetails = await prisma.bankAccountDetails.upsert({
     *   create: {
     *     // ... data to create a BankAccountDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BankAccountDetails we want to update
     *   }
     * })
     */
    upsert<T extends BankAccountDetailsUpsertArgs>(args: SelectSubset<T, BankAccountDetailsUpsertArgs<ExtArgs>>): Prisma__BankAccountDetailsClient<$Result.GetResult<Prisma.$BankAccountDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BankAccountDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountDetailsCountArgs} args - Arguments to filter BankAccountDetails to count.
     * @example
     * // Count the number of BankAccountDetails
     * const count = await prisma.bankAccountDetails.count({
     *   where: {
     *     // ... the filter for the BankAccountDetails we want to count
     *   }
     * })
    **/
    count<T extends BankAccountDetailsCountArgs>(
      args?: Subset<T, BankAccountDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankAccountDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BankAccountDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BankAccountDetailsAggregateArgs>(args: Subset<T, BankAccountDetailsAggregateArgs>): Prisma.PrismaPromise<GetBankAccountDetailsAggregateType<T>>

    /**
     * Group by BankAccountDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountDetailsGroupByArgs} args - Group by arguments.
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
      T extends BankAccountDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankAccountDetailsGroupByArgs['orderBy'] }
        : { orderBy?: BankAccountDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BankAccountDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankAccountDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BankAccountDetails model
   */
  readonly fields: BankAccountDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BankAccountDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BankAccountDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invoicesFrom<T extends BankAccountDetails$invoicesFromArgs<ExtArgs> = {}>(args?: Subset<T, BankAccountDetails$invoicesFromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BankAccountDetails model
   */
  interface BankAccountDetailsFieldRefs {
    readonly id: FieldRef<"BankAccountDetails", 'Int'>
    readonly userId: FieldRef<"BankAccountDetails", 'Int'>
    readonly accountHolderName: FieldRef<"BankAccountDetails", 'String'>
    readonly accountHolderNickName: FieldRef<"BankAccountDetails", 'String'>
    readonly accountNumber: FieldRef<"BankAccountDetails", 'String'>
    readonly accountType: FieldRef<"BankAccountDetails", 'String'>
    readonly bankName: FieldRef<"BankAccountDetails", 'String'>
    readonly balance: FieldRef<"BankAccountDetails", 'Decimal'>
    readonly branch: FieldRef<"BankAccountDetails", 'String'>
    readonly ifscCode: FieldRef<"BankAccountDetails", 'String'>
    readonly pincode: FieldRef<"BankAccountDetails", 'String'>
    readonly createdAt: FieldRef<"BankAccountDetails", 'DateTime'>
    readonly updatedAt: FieldRef<"BankAccountDetails", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BankAccountDetails findUnique
   */
  export type BankAccountDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccountDetails
     */
    select?: BankAccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccountDetails
     */
    omit?: BankAccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BankAccountDetails to fetch.
     */
    where: BankAccountDetailsWhereUniqueInput
  }

  /**
   * BankAccountDetails findUniqueOrThrow
   */
  export type BankAccountDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccountDetails
     */
    select?: BankAccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccountDetails
     */
    omit?: BankAccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BankAccountDetails to fetch.
     */
    where: BankAccountDetailsWhereUniqueInput
  }

  /**
   * BankAccountDetails findFirst
   */
  export type BankAccountDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccountDetails
     */
    select?: BankAccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccountDetails
     */
    omit?: BankAccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BankAccountDetails to fetch.
     */
    where?: BankAccountDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccountDetails to fetch.
     */
    orderBy?: BankAccountDetailsOrderByWithRelationInput | BankAccountDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankAccountDetails.
     */
    cursor?: BankAccountDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccountDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccountDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankAccountDetails.
     */
    distinct?: BankAccountDetailsScalarFieldEnum | BankAccountDetailsScalarFieldEnum[]
  }

  /**
   * BankAccountDetails findFirstOrThrow
   */
  export type BankAccountDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccountDetails
     */
    select?: BankAccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccountDetails
     */
    omit?: BankAccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BankAccountDetails to fetch.
     */
    where?: BankAccountDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccountDetails to fetch.
     */
    orderBy?: BankAccountDetailsOrderByWithRelationInput | BankAccountDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankAccountDetails.
     */
    cursor?: BankAccountDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccountDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccountDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankAccountDetails.
     */
    distinct?: BankAccountDetailsScalarFieldEnum | BankAccountDetailsScalarFieldEnum[]
  }

  /**
   * BankAccountDetails findMany
   */
  export type BankAccountDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccountDetails
     */
    select?: BankAccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccountDetails
     */
    omit?: BankAccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BankAccountDetails to fetch.
     */
    where?: BankAccountDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccountDetails to fetch.
     */
    orderBy?: BankAccountDetailsOrderByWithRelationInput | BankAccountDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BankAccountDetails.
     */
    cursor?: BankAccountDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccountDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccountDetails.
     */
    skip?: number
    distinct?: BankAccountDetailsScalarFieldEnum | BankAccountDetailsScalarFieldEnum[]
  }

  /**
   * BankAccountDetails create
   */
  export type BankAccountDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccountDetails
     */
    select?: BankAccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccountDetails
     */
    omit?: BankAccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a BankAccountDetails.
     */
    data: XOR<BankAccountDetailsCreateInput, BankAccountDetailsUncheckedCreateInput>
  }

  /**
   * BankAccountDetails createMany
   */
  export type BankAccountDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BankAccountDetails.
     */
    data: BankAccountDetailsCreateManyInput | BankAccountDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BankAccountDetails update
   */
  export type BankAccountDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccountDetails
     */
    select?: BankAccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccountDetails
     */
    omit?: BankAccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a BankAccountDetails.
     */
    data: XOR<BankAccountDetailsUpdateInput, BankAccountDetailsUncheckedUpdateInput>
    /**
     * Choose, which BankAccountDetails to update.
     */
    where: BankAccountDetailsWhereUniqueInput
  }

  /**
   * BankAccountDetails updateMany
   */
  export type BankAccountDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BankAccountDetails.
     */
    data: XOR<BankAccountDetailsUpdateManyMutationInput, BankAccountDetailsUncheckedUpdateManyInput>
    /**
     * Filter which BankAccountDetails to update
     */
    where?: BankAccountDetailsWhereInput
    /**
     * Limit how many BankAccountDetails to update.
     */
    limit?: number
  }

  /**
   * BankAccountDetails upsert
   */
  export type BankAccountDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccountDetails
     */
    select?: BankAccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccountDetails
     */
    omit?: BankAccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the BankAccountDetails to update in case it exists.
     */
    where: BankAccountDetailsWhereUniqueInput
    /**
     * In case the BankAccountDetails found by the `where` argument doesn't exist, create a new BankAccountDetails with this data.
     */
    create: XOR<BankAccountDetailsCreateInput, BankAccountDetailsUncheckedCreateInput>
    /**
     * In case the BankAccountDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BankAccountDetailsUpdateInput, BankAccountDetailsUncheckedUpdateInput>
  }

  /**
   * BankAccountDetails delete
   */
  export type BankAccountDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccountDetails
     */
    select?: BankAccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccountDetails
     */
    omit?: BankAccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountDetailsInclude<ExtArgs> | null
    /**
     * Filter which BankAccountDetails to delete.
     */
    where: BankAccountDetailsWhereUniqueInput
  }

  /**
   * BankAccountDetails deleteMany
   */
  export type BankAccountDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankAccountDetails to delete
     */
    where?: BankAccountDetailsWhereInput
    /**
     * Limit how many BankAccountDetails to delete.
     */
    limit?: number
  }

  /**
   * BankAccountDetails.invoicesFrom
   */
  export type BankAccountDetails$invoicesFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * BankAccountDetails without action
   */
  export type BankAccountDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccountDetails
     */
    select?: BankAccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccountDetails
     */
    omit?: BankAccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountDetailsInclude<ExtArgs> | null
  }


  /**
   * Model BeneficiaryAccountDetails
   */

  export type AggregateBeneficiaryAccountDetails = {
    _count: BeneficiaryAccountDetailsCountAggregateOutputType | null
    _avg: BeneficiaryAccountDetailsAvgAggregateOutputType | null
    _sum: BeneficiaryAccountDetailsSumAggregateOutputType | null
    _min: BeneficiaryAccountDetailsMinAggregateOutputType | null
    _max: BeneficiaryAccountDetailsMaxAggregateOutputType | null
  }

  export type BeneficiaryAccountDetailsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BeneficiaryAccountDetailsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BeneficiaryAccountDetailsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    accountHolderName: string | null
    accountHolderNickName: string | null
    accountNumber: string | null
    accountType: string | null
    bankName: string | null
    branch: string | null
    ifscCode: string | null
    pincode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BeneficiaryAccountDetailsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    accountHolderName: string | null
    accountHolderNickName: string | null
    accountNumber: string | null
    accountType: string | null
    bankName: string | null
    branch: string | null
    ifscCode: string | null
    pincode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BeneficiaryAccountDetailsCountAggregateOutputType = {
    id: number
    userId: number
    accountHolderName: number
    accountHolderNickName: number
    accountNumber: number
    accountType: number
    bankName: number
    branch: number
    ifscCode: number
    pincode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BeneficiaryAccountDetailsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BeneficiaryAccountDetailsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BeneficiaryAccountDetailsMinAggregateInputType = {
    id?: true
    userId?: true
    accountHolderName?: true
    accountHolderNickName?: true
    accountNumber?: true
    accountType?: true
    bankName?: true
    branch?: true
    ifscCode?: true
    pincode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BeneficiaryAccountDetailsMaxAggregateInputType = {
    id?: true
    userId?: true
    accountHolderName?: true
    accountHolderNickName?: true
    accountNumber?: true
    accountType?: true
    bankName?: true
    branch?: true
    ifscCode?: true
    pincode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BeneficiaryAccountDetailsCountAggregateInputType = {
    id?: true
    userId?: true
    accountHolderName?: true
    accountHolderNickName?: true
    accountNumber?: true
    accountType?: true
    bankName?: true
    branch?: true
    ifscCode?: true
    pincode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BeneficiaryAccountDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BeneficiaryAccountDetails to aggregate.
     */
    where?: BeneficiaryAccountDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BeneficiaryAccountDetails to fetch.
     */
    orderBy?: BeneficiaryAccountDetailsOrderByWithRelationInput | BeneficiaryAccountDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BeneficiaryAccountDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BeneficiaryAccountDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BeneficiaryAccountDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BeneficiaryAccountDetails
    **/
    _count?: true | BeneficiaryAccountDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BeneficiaryAccountDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BeneficiaryAccountDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BeneficiaryAccountDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BeneficiaryAccountDetailsMaxAggregateInputType
  }

  export type GetBeneficiaryAccountDetailsAggregateType<T extends BeneficiaryAccountDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateBeneficiaryAccountDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBeneficiaryAccountDetails[P]>
      : GetScalarType<T[P], AggregateBeneficiaryAccountDetails[P]>
  }




  export type BeneficiaryAccountDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BeneficiaryAccountDetailsWhereInput
    orderBy?: BeneficiaryAccountDetailsOrderByWithAggregationInput | BeneficiaryAccountDetailsOrderByWithAggregationInput[]
    by: BeneficiaryAccountDetailsScalarFieldEnum[] | BeneficiaryAccountDetailsScalarFieldEnum
    having?: BeneficiaryAccountDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BeneficiaryAccountDetailsCountAggregateInputType | true
    _avg?: BeneficiaryAccountDetailsAvgAggregateInputType
    _sum?: BeneficiaryAccountDetailsSumAggregateInputType
    _min?: BeneficiaryAccountDetailsMinAggregateInputType
    _max?: BeneficiaryAccountDetailsMaxAggregateInputType
  }

  export type BeneficiaryAccountDetailsGroupByOutputType = {
    id: number
    userId: number
    accountHolderName: string
    accountHolderNickName: string
    accountNumber: string
    accountType: string
    bankName: string
    branch: string
    ifscCode: string
    pincode: string
    createdAt: Date
    updatedAt: Date
    _count: BeneficiaryAccountDetailsCountAggregateOutputType | null
    _avg: BeneficiaryAccountDetailsAvgAggregateOutputType | null
    _sum: BeneficiaryAccountDetailsSumAggregateOutputType | null
    _min: BeneficiaryAccountDetailsMinAggregateOutputType | null
    _max: BeneficiaryAccountDetailsMaxAggregateOutputType | null
  }

  type GetBeneficiaryAccountDetailsGroupByPayload<T extends BeneficiaryAccountDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BeneficiaryAccountDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BeneficiaryAccountDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BeneficiaryAccountDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], BeneficiaryAccountDetailsGroupByOutputType[P]>
        }
      >
    >


  export type BeneficiaryAccountDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountHolderName?: boolean
    accountHolderNickName?: boolean
    accountNumber?: boolean
    accountType?: boolean
    bankName?: boolean
    branch?: boolean
    ifscCode?: boolean
    pincode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    invoicesTo?: boolean | BeneficiaryAccountDetails$invoicesToArgs<ExtArgs>
    _count?: boolean | BeneficiaryAccountDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["beneficiaryAccountDetails"]>



  export type BeneficiaryAccountDetailsSelectScalar = {
    id?: boolean
    userId?: boolean
    accountHolderName?: boolean
    accountHolderNickName?: boolean
    accountNumber?: boolean
    accountType?: boolean
    bankName?: boolean
    branch?: boolean
    ifscCode?: boolean
    pincode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BeneficiaryAccountDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "accountHolderName" | "accountHolderNickName" | "accountNumber" | "accountType" | "bankName" | "branch" | "ifscCode" | "pincode" | "createdAt" | "updatedAt", ExtArgs["result"]["beneficiaryAccountDetails"]>
  export type BeneficiaryAccountDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    invoicesTo?: boolean | BeneficiaryAccountDetails$invoicesToArgs<ExtArgs>
    _count?: boolean | BeneficiaryAccountDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BeneficiaryAccountDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BeneficiaryAccountDetails"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      invoicesTo: Prisma.$InvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      accountHolderName: string
      accountHolderNickName: string
      accountNumber: string
      accountType: string
      bankName: string
      branch: string
      ifscCode: string
      pincode: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["beneficiaryAccountDetails"]>
    composites: {}
  }

  type BeneficiaryAccountDetailsGetPayload<S extends boolean | null | undefined | BeneficiaryAccountDetailsDefaultArgs> = $Result.GetResult<Prisma.$BeneficiaryAccountDetailsPayload, S>

  type BeneficiaryAccountDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BeneficiaryAccountDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BeneficiaryAccountDetailsCountAggregateInputType | true
    }

  export interface BeneficiaryAccountDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BeneficiaryAccountDetails'], meta: { name: 'BeneficiaryAccountDetails' } }
    /**
     * Find zero or one BeneficiaryAccountDetails that matches the filter.
     * @param {BeneficiaryAccountDetailsFindUniqueArgs} args - Arguments to find a BeneficiaryAccountDetails
     * @example
     * // Get one BeneficiaryAccountDetails
     * const beneficiaryAccountDetails = await prisma.beneficiaryAccountDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BeneficiaryAccountDetailsFindUniqueArgs>(args: SelectSubset<T, BeneficiaryAccountDetailsFindUniqueArgs<ExtArgs>>): Prisma__BeneficiaryAccountDetailsClient<$Result.GetResult<Prisma.$BeneficiaryAccountDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BeneficiaryAccountDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BeneficiaryAccountDetailsFindUniqueOrThrowArgs} args - Arguments to find a BeneficiaryAccountDetails
     * @example
     * // Get one BeneficiaryAccountDetails
     * const beneficiaryAccountDetails = await prisma.beneficiaryAccountDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BeneficiaryAccountDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, BeneficiaryAccountDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BeneficiaryAccountDetailsClient<$Result.GetResult<Prisma.$BeneficiaryAccountDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BeneficiaryAccountDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiaryAccountDetailsFindFirstArgs} args - Arguments to find a BeneficiaryAccountDetails
     * @example
     * // Get one BeneficiaryAccountDetails
     * const beneficiaryAccountDetails = await prisma.beneficiaryAccountDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BeneficiaryAccountDetailsFindFirstArgs>(args?: SelectSubset<T, BeneficiaryAccountDetailsFindFirstArgs<ExtArgs>>): Prisma__BeneficiaryAccountDetailsClient<$Result.GetResult<Prisma.$BeneficiaryAccountDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BeneficiaryAccountDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiaryAccountDetailsFindFirstOrThrowArgs} args - Arguments to find a BeneficiaryAccountDetails
     * @example
     * // Get one BeneficiaryAccountDetails
     * const beneficiaryAccountDetails = await prisma.beneficiaryAccountDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BeneficiaryAccountDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, BeneficiaryAccountDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BeneficiaryAccountDetailsClient<$Result.GetResult<Prisma.$BeneficiaryAccountDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BeneficiaryAccountDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiaryAccountDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BeneficiaryAccountDetails
     * const beneficiaryAccountDetails = await prisma.beneficiaryAccountDetails.findMany()
     * 
     * // Get first 10 BeneficiaryAccountDetails
     * const beneficiaryAccountDetails = await prisma.beneficiaryAccountDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const beneficiaryAccountDetailsWithIdOnly = await prisma.beneficiaryAccountDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BeneficiaryAccountDetailsFindManyArgs>(args?: SelectSubset<T, BeneficiaryAccountDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeneficiaryAccountDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BeneficiaryAccountDetails.
     * @param {BeneficiaryAccountDetailsCreateArgs} args - Arguments to create a BeneficiaryAccountDetails.
     * @example
     * // Create one BeneficiaryAccountDetails
     * const BeneficiaryAccountDetails = await prisma.beneficiaryAccountDetails.create({
     *   data: {
     *     // ... data to create a BeneficiaryAccountDetails
     *   }
     * })
     * 
     */
    create<T extends BeneficiaryAccountDetailsCreateArgs>(args: SelectSubset<T, BeneficiaryAccountDetailsCreateArgs<ExtArgs>>): Prisma__BeneficiaryAccountDetailsClient<$Result.GetResult<Prisma.$BeneficiaryAccountDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BeneficiaryAccountDetails.
     * @param {BeneficiaryAccountDetailsCreateManyArgs} args - Arguments to create many BeneficiaryAccountDetails.
     * @example
     * // Create many BeneficiaryAccountDetails
     * const beneficiaryAccountDetails = await prisma.beneficiaryAccountDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BeneficiaryAccountDetailsCreateManyArgs>(args?: SelectSubset<T, BeneficiaryAccountDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BeneficiaryAccountDetails.
     * @param {BeneficiaryAccountDetailsDeleteArgs} args - Arguments to delete one BeneficiaryAccountDetails.
     * @example
     * // Delete one BeneficiaryAccountDetails
     * const BeneficiaryAccountDetails = await prisma.beneficiaryAccountDetails.delete({
     *   where: {
     *     // ... filter to delete one BeneficiaryAccountDetails
     *   }
     * })
     * 
     */
    delete<T extends BeneficiaryAccountDetailsDeleteArgs>(args: SelectSubset<T, BeneficiaryAccountDetailsDeleteArgs<ExtArgs>>): Prisma__BeneficiaryAccountDetailsClient<$Result.GetResult<Prisma.$BeneficiaryAccountDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BeneficiaryAccountDetails.
     * @param {BeneficiaryAccountDetailsUpdateArgs} args - Arguments to update one BeneficiaryAccountDetails.
     * @example
     * // Update one BeneficiaryAccountDetails
     * const beneficiaryAccountDetails = await prisma.beneficiaryAccountDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BeneficiaryAccountDetailsUpdateArgs>(args: SelectSubset<T, BeneficiaryAccountDetailsUpdateArgs<ExtArgs>>): Prisma__BeneficiaryAccountDetailsClient<$Result.GetResult<Prisma.$BeneficiaryAccountDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BeneficiaryAccountDetails.
     * @param {BeneficiaryAccountDetailsDeleteManyArgs} args - Arguments to filter BeneficiaryAccountDetails to delete.
     * @example
     * // Delete a few BeneficiaryAccountDetails
     * const { count } = await prisma.beneficiaryAccountDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BeneficiaryAccountDetailsDeleteManyArgs>(args?: SelectSubset<T, BeneficiaryAccountDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BeneficiaryAccountDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiaryAccountDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BeneficiaryAccountDetails
     * const beneficiaryAccountDetails = await prisma.beneficiaryAccountDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BeneficiaryAccountDetailsUpdateManyArgs>(args: SelectSubset<T, BeneficiaryAccountDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BeneficiaryAccountDetails.
     * @param {BeneficiaryAccountDetailsUpsertArgs} args - Arguments to update or create a BeneficiaryAccountDetails.
     * @example
     * // Update or create a BeneficiaryAccountDetails
     * const beneficiaryAccountDetails = await prisma.beneficiaryAccountDetails.upsert({
     *   create: {
     *     // ... data to create a BeneficiaryAccountDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BeneficiaryAccountDetails we want to update
     *   }
     * })
     */
    upsert<T extends BeneficiaryAccountDetailsUpsertArgs>(args: SelectSubset<T, BeneficiaryAccountDetailsUpsertArgs<ExtArgs>>): Prisma__BeneficiaryAccountDetailsClient<$Result.GetResult<Prisma.$BeneficiaryAccountDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BeneficiaryAccountDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiaryAccountDetailsCountArgs} args - Arguments to filter BeneficiaryAccountDetails to count.
     * @example
     * // Count the number of BeneficiaryAccountDetails
     * const count = await prisma.beneficiaryAccountDetails.count({
     *   where: {
     *     // ... the filter for the BeneficiaryAccountDetails we want to count
     *   }
     * })
    **/
    count<T extends BeneficiaryAccountDetailsCountArgs>(
      args?: Subset<T, BeneficiaryAccountDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BeneficiaryAccountDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BeneficiaryAccountDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiaryAccountDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BeneficiaryAccountDetailsAggregateArgs>(args: Subset<T, BeneficiaryAccountDetailsAggregateArgs>): Prisma.PrismaPromise<GetBeneficiaryAccountDetailsAggregateType<T>>

    /**
     * Group by BeneficiaryAccountDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiaryAccountDetailsGroupByArgs} args - Group by arguments.
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
      T extends BeneficiaryAccountDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BeneficiaryAccountDetailsGroupByArgs['orderBy'] }
        : { orderBy?: BeneficiaryAccountDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BeneficiaryAccountDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBeneficiaryAccountDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BeneficiaryAccountDetails model
   */
  readonly fields: BeneficiaryAccountDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BeneficiaryAccountDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BeneficiaryAccountDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invoicesTo<T extends BeneficiaryAccountDetails$invoicesToArgs<ExtArgs> = {}>(args?: Subset<T, BeneficiaryAccountDetails$invoicesToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BeneficiaryAccountDetails model
   */
  interface BeneficiaryAccountDetailsFieldRefs {
    readonly id: FieldRef<"BeneficiaryAccountDetails", 'Int'>
    readonly userId: FieldRef<"BeneficiaryAccountDetails", 'Int'>
    readonly accountHolderName: FieldRef<"BeneficiaryAccountDetails", 'String'>
    readonly accountHolderNickName: FieldRef<"BeneficiaryAccountDetails", 'String'>
    readonly accountNumber: FieldRef<"BeneficiaryAccountDetails", 'String'>
    readonly accountType: FieldRef<"BeneficiaryAccountDetails", 'String'>
    readonly bankName: FieldRef<"BeneficiaryAccountDetails", 'String'>
    readonly branch: FieldRef<"BeneficiaryAccountDetails", 'String'>
    readonly ifscCode: FieldRef<"BeneficiaryAccountDetails", 'String'>
    readonly pincode: FieldRef<"BeneficiaryAccountDetails", 'String'>
    readonly createdAt: FieldRef<"BeneficiaryAccountDetails", 'DateTime'>
    readonly updatedAt: FieldRef<"BeneficiaryAccountDetails", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BeneficiaryAccountDetails findUnique
   */
  export type BeneficiaryAccountDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeneficiaryAccountDetails
     */
    select?: BeneficiaryAccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BeneficiaryAccountDetails
     */
    omit?: BeneficiaryAccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryAccountDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BeneficiaryAccountDetails to fetch.
     */
    where: BeneficiaryAccountDetailsWhereUniqueInput
  }

  /**
   * BeneficiaryAccountDetails findUniqueOrThrow
   */
  export type BeneficiaryAccountDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeneficiaryAccountDetails
     */
    select?: BeneficiaryAccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BeneficiaryAccountDetails
     */
    omit?: BeneficiaryAccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryAccountDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BeneficiaryAccountDetails to fetch.
     */
    where: BeneficiaryAccountDetailsWhereUniqueInput
  }

  /**
   * BeneficiaryAccountDetails findFirst
   */
  export type BeneficiaryAccountDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeneficiaryAccountDetails
     */
    select?: BeneficiaryAccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BeneficiaryAccountDetails
     */
    omit?: BeneficiaryAccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryAccountDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BeneficiaryAccountDetails to fetch.
     */
    where?: BeneficiaryAccountDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BeneficiaryAccountDetails to fetch.
     */
    orderBy?: BeneficiaryAccountDetailsOrderByWithRelationInput | BeneficiaryAccountDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BeneficiaryAccountDetails.
     */
    cursor?: BeneficiaryAccountDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BeneficiaryAccountDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BeneficiaryAccountDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BeneficiaryAccountDetails.
     */
    distinct?: BeneficiaryAccountDetailsScalarFieldEnum | BeneficiaryAccountDetailsScalarFieldEnum[]
  }

  /**
   * BeneficiaryAccountDetails findFirstOrThrow
   */
  export type BeneficiaryAccountDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeneficiaryAccountDetails
     */
    select?: BeneficiaryAccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BeneficiaryAccountDetails
     */
    omit?: BeneficiaryAccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryAccountDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BeneficiaryAccountDetails to fetch.
     */
    where?: BeneficiaryAccountDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BeneficiaryAccountDetails to fetch.
     */
    orderBy?: BeneficiaryAccountDetailsOrderByWithRelationInput | BeneficiaryAccountDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BeneficiaryAccountDetails.
     */
    cursor?: BeneficiaryAccountDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BeneficiaryAccountDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BeneficiaryAccountDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BeneficiaryAccountDetails.
     */
    distinct?: BeneficiaryAccountDetailsScalarFieldEnum | BeneficiaryAccountDetailsScalarFieldEnum[]
  }

  /**
   * BeneficiaryAccountDetails findMany
   */
  export type BeneficiaryAccountDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeneficiaryAccountDetails
     */
    select?: BeneficiaryAccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BeneficiaryAccountDetails
     */
    omit?: BeneficiaryAccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryAccountDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BeneficiaryAccountDetails to fetch.
     */
    where?: BeneficiaryAccountDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BeneficiaryAccountDetails to fetch.
     */
    orderBy?: BeneficiaryAccountDetailsOrderByWithRelationInput | BeneficiaryAccountDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BeneficiaryAccountDetails.
     */
    cursor?: BeneficiaryAccountDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BeneficiaryAccountDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BeneficiaryAccountDetails.
     */
    skip?: number
    distinct?: BeneficiaryAccountDetailsScalarFieldEnum | BeneficiaryAccountDetailsScalarFieldEnum[]
  }

  /**
   * BeneficiaryAccountDetails create
   */
  export type BeneficiaryAccountDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeneficiaryAccountDetails
     */
    select?: BeneficiaryAccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BeneficiaryAccountDetails
     */
    omit?: BeneficiaryAccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryAccountDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a BeneficiaryAccountDetails.
     */
    data: XOR<BeneficiaryAccountDetailsCreateInput, BeneficiaryAccountDetailsUncheckedCreateInput>
  }

  /**
   * BeneficiaryAccountDetails createMany
   */
  export type BeneficiaryAccountDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BeneficiaryAccountDetails.
     */
    data: BeneficiaryAccountDetailsCreateManyInput | BeneficiaryAccountDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BeneficiaryAccountDetails update
   */
  export type BeneficiaryAccountDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeneficiaryAccountDetails
     */
    select?: BeneficiaryAccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BeneficiaryAccountDetails
     */
    omit?: BeneficiaryAccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryAccountDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a BeneficiaryAccountDetails.
     */
    data: XOR<BeneficiaryAccountDetailsUpdateInput, BeneficiaryAccountDetailsUncheckedUpdateInput>
    /**
     * Choose, which BeneficiaryAccountDetails to update.
     */
    where: BeneficiaryAccountDetailsWhereUniqueInput
  }

  /**
   * BeneficiaryAccountDetails updateMany
   */
  export type BeneficiaryAccountDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BeneficiaryAccountDetails.
     */
    data: XOR<BeneficiaryAccountDetailsUpdateManyMutationInput, BeneficiaryAccountDetailsUncheckedUpdateManyInput>
    /**
     * Filter which BeneficiaryAccountDetails to update
     */
    where?: BeneficiaryAccountDetailsWhereInput
    /**
     * Limit how many BeneficiaryAccountDetails to update.
     */
    limit?: number
  }

  /**
   * BeneficiaryAccountDetails upsert
   */
  export type BeneficiaryAccountDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeneficiaryAccountDetails
     */
    select?: BeneficiaryAccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BeneficiaryAccountDetails
     */
    omit?: BeneficiaryAccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryAccountDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the BeneficiaryAccountDetails to update in case it exists.
     */
    where: BeneficiaryAccountDetailsWhereUniqueInput
    /**
     * In case the BeneficiaryAccountDetails found by the `where` argument doesn't exist, create a new BeneficiaryAccountDetails with this data.
     */
    create: XOR<BeneficiaryAccountDetailsCreateInput, BeneficiaryAccountDetailsUncheckedCreateInput>
    /**
     * In case the BeneficiaryAccountDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BeneficiaryAccountDetailsUpdateInput, BeneficiaryAccountDetailsUncheckedUpdateInput>
  }

  /**
   * BeneficiaryAccountDetails delete
   */
  export type BeneficiaryAccountDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeneficiaryAccountDetails
     */
    select?: BeneficiaryAccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BeneficiaryAccountDetails
     */
    omit?: BeneficiaryAccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryAccountDetailsInclude<ExtArgs> | null
    /**
     * Filter which BeneficiaryAccountDetails to delete.
     */
    where: BeneficiaryAccountDetailsWhereUniqueInput
  }

  /**
   * BeneficiaryAccountDetails deleteMany
   */
  export type BeneficiaryAccountDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BeneficiaryAccountDetails to delete
     */
    where?: BeneficiaryAccountDetailsWhereInput
    /**
     * Limit how many BeneficiaryAccountDetails to delete.
     */
    limit?: number
  }

  /**
   * BeneficiaryAccountDetails.invoicesTo
   */
  export type BeneficiaryAccountDetails$invoicesToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * BeneficiaryAccountDetails without action
   */
  export type BeneficiaryAccountDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeneficiaryAccountDetails
     */
    select?: BeneficiaryAccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BeneficiaryAccountDetails
     */
    omit?: BeneficiaryAccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryAccountDetailsInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: Decimal | null
    fromBankAccountId: number | null
    toBeneficiaryAccountId: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: Decimal | null
    fromBankAccountId: number | null
    toBeneficiaryAccountId: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: number | null
    userId: number | null
    invoiceTitle: string | null
    amount: Decimal | null
    description: string | null
    payeeEmail: string | null
    payeeContact: string | null
    paymentDate: Date | null
    status: string | null
    fromBankAccountId: number | null
    toBeneficiaryAccountId: number | null
    transactionDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    invoiceTitle: string | null
    amount: Decimal | null
    description: string | null
    payeeEmail: string | null
    payeeContact: string | null
    paymentDate: Date | null
    status: string | null
    fromBankAccountId: number | null
    toBeneficiaryAccountId: number | null
    transactionDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    userId: number
    invoiceTitle: number
    amount: number
    description: number
    payeeEmail: number
    payeeContact: number
    paymentDate: number
    status: number
    fromBankAccountId: number
    toBeneficiaryAccountId: number
    transactionDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    fromBankAccountId?: true
    toBeneficiaryAccountId?: true
  }

  export type InvoiceSumAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    fromBankAccountId?: true
    toBeneficiaryAccountId?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    userId?: true
    invoiceTitle?: true
    amount?: true
    description?: true
    payeeEmail?: true
    payeeContact?: true
    paymentDate?: true
    status?: true
    fromBankAccountId?: true
    toBeneficiaryAccountId?: true
    transactionDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    userId?: true
    invoiceTitle?: true
    amount?: true
    description?: true
    payeeEmail?: true
    payeeContact?: true
    paymentDate?: true
    status?: true
    fromBankAccountId?: true
    toBeneficiaryAccountId?: true
    transactionDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    userId?: true
    invoiceTitle?: true
    amount?: true
    description?: true
    payeeEmail?: true
    payeeContact?: true
    paymentDate?: true
    status?: true
    fromBankAccountId?: true
    toBeneficiaryAccountId?: true
    transactionDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: number
    userId: number
    invoiceTitle: string
    amount: Decimal
    description: string | null
    payeeEmail: string
    payeeContact: string
    paymentDate: Date
    status: string
    fromBankAccountId: number
    toBeneficiaryAccountId: number
    transactionDate: Date
    createdAt: Date
    updatedAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    invoiceTitle?: boolean
    amount?: boolean
    description?: boolean
    payeeEmail?: boolean
    payeeContact?: boolean
    paymentDate?: boolean
    status?: boolean
    fromBankAccountId?: boolean
    toBeneficiaryAccountId?: boolean
    transactionDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    fromBankAccount?: boolean | BankAccountDetailsDefaultArgs<ExtArgs>
    toBeneficiaryAccount?: boolean | BeneficiaryAccountDetailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>



  export type InvoiceSelectScalar = {
    id?: boolean
    userId?: boolean
    invoiceTitle?: boolean
    amount?: boolean
    description?: boolean
    payeeEmail?: boolean
    payeeContact?: boolean
    paymentDate?: boolean
    status?: boolean
    fromBankAccountId?: boolean
    toBeneficiaryAccountId?: boolean
    transactionDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "invoiceTitle" | "amount" | "description" | "payeeEmail" | "payeeContact" | "paymentDate" | "status" | "fromBankAccountId" | "toBeneficiaryAccountId" | "transactionDate" | "createdAt" | "updatedAt", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    fromBankAccount?: boolean | BankAccountDetailsDefaultArgs<ExtArgs>
    toBeneficiaryAccount?: boolean | BeneficiaryAccountDetailsDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      fromBankAccount: Prisma.$BankAccountDetailsPayload<ExtArgs>
      toBeneficiaryAccount: Prisma.$BeneficiaryAccountDetailsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      invoiceTitle: string
      amount: Prisma.Decimal
      description: string | null
      payeeEmail: string
      payeeContact: string
      paymentDate: Date
      status: string
      fromBankAccountId: number
      toBeneficiaryAccountId: number
      transactionDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
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
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fromBankAccount<T extends BankAccountDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BankAccountDetailsDefaultArgs<ExtArgs>>): Prisma__BankAccountDetailsClient<$Result.GetResult<Prisma.$BankAccountDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toBeneficiaryAccount<T extends BeneficiaryAccountDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BeneficiaryAccountDetailsDefaultArgs<ExtArgs>>): Prisma__BeneficiaryAccountDetailsClient<$Result.GetResult<Prisma.$BeneficiaryAccountDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'Int'>
    readonly userId: FieldRef<"Invoice", 'Int'>
    readonly invoiceTitle: FieldRef<"Invoice", 'String'>
    readonly amount: FieldRef<"Invoice", 'Decimal'>
    readonly description: FieldRef<"Invoice", 'String'>
    readonly payeeEmail: FieldRef<"Invoice", 'String'>
    readonly payeeContact: FieldRef<"Invoice", 'String'>
    readonly paymentDate: FieldRef<"Invoice", 'DateTime'>
    readonly status: FieldRef<"Invoice", 'String'>
    readonly fromBankAccountId: FieldRef<"Invoice", 'Int'>
    readonly toBeneficiaryAccountId: FieldRef<"Invoice", 'Int'>
    readonly transactionDate: FieldRef<"Invoice", 'DateTime'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
    readonly updatedAt: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    nickName: 'nickName',
    email: 'email',
    password: 'password',
    mobile: 'mobile',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BankAccountDetailsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    accountHolderName: 'accountHolderName',
    accountHolderNickName: 'accountHolderNickName',
    accountNumber: 'accountNumber',
    accountType: 'accountType',
    bankName: 'bankName',
    balance: 'balance',
    branch: 'branch',
    ifscCode: 'ifscCode',
    pincode: 'pincode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BankAccountDetailsScalarFieldEnum = (typeof BankAccountDetailsScalarFieldEnum)[keyof typeof BankAccountDetailsScalarFieldEnum]


  export const BeneficiaryAccountDetailsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    accountHolderName: 'accountHolderName',
    accountHolderNickName: 'accountHolderNickName',
    accountNumber: 'accountNumber',
    accountType: 'accountType',
    bankName: 'bankName',
    branch: 'branch',
    ifscCode: 'ifscCode',
    pincode: 'pincode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BeneficiaryAccountDetailsScalarFieldEnum = (typeof BeneficiaryAccountDetailsScalarFieldEnum)[keyof typeof BeneficiaryAccountDetailsScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    invoiceTitle: 'invoiceTitle',
    amount: 'amount',
    description: 'description',
    payeeEmail: 'payeeEmail',
    payeeContact: 'payeeContact',
    paymentDate: 'paymentDate',
    status: 'status',
    fromBankAccountId: 'fromBankAccountId',
    toBeneficiaryAccountId: 'toBeneficiaryAccountId',
    transactionDate: 'transactionDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    nickName: 'nickName',
    email: 'email',
    password: 'password',
    mobile: 'mobile'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const BankAccountDetailsOrderByRelevanceFieldEnum: {
    accountHolderName: 'accountHolderName',
    accountHolderNickName: 'accountHolderNickName',
    accountNumber: 'accountNumber',
    accountType: 'accountType',
    bankName: 'bankName',
    branch: 'branch',
    ifscCode: 'ifscCode',
    pincode: 'pincode'
  };

  export type BankAccountDetailsOrderByRelevanceFieldEnum = (typeof BankAccountDetailsOrderByRelevanceFieldEnum)[keyof typeof BankAccountDetailsOrderByRelevanceFieldEnum]


  export const BeneficiaryAccountDetailsOrderByRelevanceFieldEnum: {
    accountHolderName: 'accountHolderName',
    accountHolderNickName: 'accountHolderNickName',
    accountNumber: 'accountNumber',
    accountType: 'accountType',
    bankName: 'bankName',
    branch: 'branch',
    ifscCode: 'ifscCode',
    pincode: 'pincode'
  };

  export type BeneficiaryAccountDetailsOrderByRelevanceFieldEnum = (typeof BeneficiaryAccountDetailsOrderByRelevanceFieldEnum)[keyof typeof BeneficiaryAccountDetailsOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const InvoiceOrderByRelevanceFieldEnum: {
    invoiceTitle: 'invoiceTitle',
    description: 'description',
    payeeEmail: 'payeeEmail',
    payeeContact: 'payeeContact',
    status: 'status'
  };

  export type InvoiceOrderByRelevanceFieldEnum = (typeof InvoiceOrderByRelevanceFieldEnum)[keyof typeof InvoiceOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    nickName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    mobile?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bankAccounts?: BankAccountDetailsListRelationFilter
    beneficiaryAccounts?: BeneficiaryAccountDetailsListRelationFilter
    invoices?: InvoiceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nickName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mobile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bankAccounts?: BankAccountDetailsOrderByRelationAggregateInput
    beneficiaryAccounts?: BeneficiaryAccountDetailsOrderByRelationAggregateInput
    invoices?: InvoiceOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    nickName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    mobile?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bankAccounts?: BankAccountDetailsListRelationFilter
    beneficiaryAccounts?: BeneficiaryAccountDetailsListRelationFilter
    invoices?: InvoiceListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nickName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mobile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    nickName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    mobile?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BankAccountDetailsWhereInput = {
    AND?: BankAccountDetailsWhereInput | BankAccountDetailsWhereInput[]
    OR?: BankAccountDetailsWhereInput[]
    NOT?: BankAccountDetailsWhereInput | BankAccountDetailsWhereInput[]
    id?: IntFilter<"BankAccountDetails"> | number
    userId?: IntFilter<"BankAccountDetails"> | number
    accountHolderName?: StringFilter<"BankAccountDetails"> | string
    accountHolderNickName?: StringFilter<"BankAccountDetails"> | string
    accountNumber?: StringFilter<"BankAccountDetails"> | string
    accountType?: StringFilter<"BankAccountDetails"> | string
    bankName?: StringFilter<"BankAccountDetails"> | string
    balance?: DecimalFilter<"BankAccountDetails"> | Decimal | DecimalJsLike | number | string
    branch?: StringFilter<"BankAccountDetails"> | string
    ifscCode?: StringFilter<"BankAccountDetails"> | string
    pincode?: StringFilter<"BankAccountDetails"> | string
    createdAt?: DateTimeFilter<"BankAccountDetails"> | Date | string
    updatedAt?: DateTimeFilter<"BankAccountDetails"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    invoicesFrom?: InvoiceListRelationFilter
  }

  export type BankAccountDetailsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountHolderName?: SortOrder
    accountHolderNickName?: SortOrder
    accountNumber?: SortOrder
    accountType?: SortOrder
    bankName?: SortOrder
    balance?: SortOrder
    branch?: SortOrder
    ifscCode?: SortOrder
    pincode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    invoicesFrom?: InvoiceOrderByRelationAggregateInput
    _relevance?: BankAccountDetailsOrderByRelevanceInput
  }

  export type BankAccountDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    accountNumber?: string
    AND?: BankAccountDetailsWhereInput | BankAccountDetailsWhereInput[]
    OR?: BankAccountDetailsWhereInput[]
    NOT?: BankAccountDetailsWhereInput | BankAccountDetailsWhereInput[]
    userId?: IntFilter<"BankAccountDetails"> | number
    accountHolderName?: StringFilter<"BankAccountDetails"> | string
    accountHolderNickName?: StringFilter<"BankAccountDetails"> | string
    accountType?: StringFilter<"BankAccountDetails"> | string
    bankName?: StringFilter<"BankAccountDetails"> | string
    balance?: DecimalFilter<"BankAccountDetails"> | Decimal | DecimalJsLike | number | string
    branch?: StringFilter<"BankAccountDetails"> | string
    ifscCode?: StringFilter<"BankAccountDetails"> | string
    pincode?: StringFilter<"BankAccountDetails"> | string
    createdAt?: DateTimeFilter<"BankAccountDetails"> | Date | string
    updatedAt?: DateTimeFilter<"BankAccountDetails"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    invoicesFrom?: InvoiceListRelationFilter
  }, "id" | "accountNumber">

  export type BankAccountDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountHolderName?: SortOrder
    accountHolderNickName?: SortOrder
    accountNumber?: SortOrder
    accountType?: SortOrder
    bankName?: SortOrder
    balance?: SortOrder
    branch?: SortOrder
    ifscCode?: SortOrder
    pincode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BankAccountDetailsCountOrderByAggregateInput
    _avg?: BankAccountDetailsAvgOrderByAggregateInput
    _max?: BankAccountDetailsMaxOrderByAggregateInput
    _min?: BankAccountDetailsMinOrderByAggregateInput
    _sum?: BankAccountDetailsSumOrderByAggregateInput
  }

  export type BankAccountDetailsScalarWhereWithAggregatesInput = {
    AND?: BankAccountDetailsScalarWhereWithAggregatesInput | BankAccountDetailsScalarWhereWithAggregatesInput[]
    OR?: BankAccountDetailsScalarWhereWithAggregatesInput[]
    NOT?: BankAccountDetailsScalarWhereWithAggregatesInput | BankAccountDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BankAccountDetails"> | number
    userId?: IntWithAggregatesFilter<"BankAccountDetails"> | number
    accountHolderName?: StringWithAggregatesFilter<"BankAccountDetails"> | string
    accountHolderNickName?: StringWithAggregatesFilter<"BankAccountDetails"> | string
    accountNumber?: StringWithAggregatesFilter<"BankAccountDetails"> | string
    accountType?: StringWithAggregatesFilter<"BankAccountDetails"> | string
    bankName?: StringWithAggregatesFilter<"BankAccountDetails"> | string
    balance?: DecimalWithAggregatesFilter<"BankAccountDetails"> | Decimal | DecimalJsLike | number | string
    branch?: StringWithAggregatesFilter<"BankAccountDetails"> | string
    ifscCode?: StringWithAggregatesFilter<"BankAccountDetails"> | string
    pincode?: StringWithAggregatesFilter<"BankAccountDetails"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BankAccountDetails"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BankAccountDetails"> | Date | string
  }

  export type BeneficiaryAccountDetailsWhereInput = {
    AND?: BeneficiaryAccountDetailsWhereInput | BeneficiaryAccountDetailsWhereInput[]
    OR?: BeneficiaryAccountDetailsWhereInput[]
    NOT?: BeneficiaryAccountDetailsWhereInput | BeneficiaryAccountDetailsWhereInput[]
    id?: IntFilter<"BeneficiaryAccountDetails"> | number
    userId?: IntFilter<"BeneficiaryAccountDetails"> | number
    accountHolderName?: StringFilter<"BeneficiaryAccountDetails"> | string
    accountHolderNickName?: StringFilter<"BeneficiaryAccountDetails"> | string
    accountNumber?: StringFilter<"BeneficiaryAccountDetails"> | string
    accountType?: StringFilter<"BeneficiaryAccountDetails"> | string
    bankName?: StringFilter<"BeneficiaryAccountDetails"> | string
    branch?: StringFilter<"BeneficiaryAccountDetails"> | string
    ifscCode?: StringFilter<"BeneficiaryAccountDetails"> | string
    pincode?: StringFilter<"BeneficiaryAccountDetails"> | string
    createdAt?: DateTimeFilter<"BeneficiaryAccountDetails"> | Date | string
    updatedAt?: DateTimeFilter<"BeneficiaryAccountDetails"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    invoicesTo?: InvoiceListRelationFilter
  }

  export type BeneficiaryAccountDetailsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountHolderName?: SortOrder
    accountHolderNickName?: SortOrder
    accountNumber?: SortOrder
    accountType?: SortOrder
    bankName?: SortOrder
    branch?: SortOrder
    ifscCode?: SortOrder
    pincode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    invoicesTo?: InvoiceOrderByRelationAggregateInput
    _relevance?: BeneficiaryAccountDetailsOrderByRelevanceInput
  }

  export type BeneficiaryAccountDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    accountNumber?: string
    AND?: BeneficiaryAccountDetailsWhereInput | BeneficiaryAccountDetailsWhereInput[]
    OR?: BeneficiaryAccountDetailsWhereInput[]
    NOT?: BeneficiaryAccountDetailsWhereInput | BeneficiaryAccountDetailsWhereInput[]
    userId?: IntFilter<"BeneficiaryAccountDetails"> | number
    accountHolderName?: StringFilter<"BeneficiaryAccountDetails"> | string
    accountHolderNickName?: StringFilter<"BeneficiaryAccountDetails"> | string
    accountType?: StringFilter<"BeneficiaryAccountDetails"> | string
    bankName?: StringFilter<"BeneficiaryAccountDetails"> | string
    branch?: StringFilter<"BeneficiaryAccountDetails"> | string
    ifscCode?: StringFilter<"BeneficiaryAccountDetails"> | string
    pincode?: StringFilter<"BeneficiaryAccountDetails"> | string
    createdAt?: DateTimeFilter<"BeneficiaryAccountDetails"> | Date | string
    updatedAt?: DateTimeFilter<"BeneficiaryAccountDetails"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    invoicesTo?: InvoiceListRelationFilter
  }, "id" | "accountNumber">

  export type BeneficiaryAccountDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountHolderName?: SortOrder
    accountHolderNickName?: SortOrder
    accountNumber?: SortOrder
    accountType?: SortOrder
    bankName?: SortOrder
    branch?: SortOrder
    ifscCode?: SortOrder
    pincode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BeneficiaryAccountDetailsCountOrderByAggregateInput
    _avg?: BeneficiaryAccountDetailsAvgOrderByAggregateInput
    _max?: BeneficiaryAccountDetailsMaxOrderByAggregateInput
    _min?: BeneficiaryAccountDetailsMinOrderByAggregateInput
    _sum?: BeneficiaryAccountDetailsSumOrderByAggregateInput
  }

  export type BeneficiaryAccountDetailsScalarWhereWithAggregatesInput = {
    AND?: BeneficiaryAccountDetailsScalarWhereWithAggregatesInput | BeneficiaryAccountDetailsScalarWhereWithAggregatesInput[]
    OR?: BeneficiaryAccountDetailsScalarWhereWithAggregatesInput[]
    NOT?: BeneficiaryAccountDetailsScalarWhereWithAggregatesInput | BeneficiaryAccountDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BeneficiaryAccountDetails"> | number
    userId?: IntWithAggregatesFilter<"BeneficiaryAccountDetails"> | number
    accountHolderName?: StringWithAggregatesFilter<"BeneficiaryAccountDetails"> | string
    accountHolderNickName?: StringWithAggregatesFilter<"BeneficiaryAccountDetails"> | string
    accountNumber?: StringWithAggregatesFilter<"BeneficiaryAccountDetails"> | string
    accountType?: StringWithAggregatesFilter<"BeneficiaryAccountDetails"> | string
    bankName?: StringWithAggregatesFilter<"BeneficiaryAccountDetails"> | string
    branch?: StringWithAggregatesFilter<"BeneficiaryAccountDetails"> | string
    ifscCode?: StringWithAggregatesFilter<"BeneficiaryAccountDetails"> | string
    pincode?: StringWithAggregatesFilter<"BeneficiaryAccountDetails"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BeneficiaryAccountDetails"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BeneficiaryAccountDetails"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: IntFilter<"Invoice"> | number
    userId?: IntFilter<"Invoice"> | number
    invoiceTitle?: StringFilter<"Invoice"> | string
    amount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Invoice"> | string | null
    payeeEmail?: StringFilter<"Invoice"> | string
    payeeContact?: StringFilter<"Invoice"> | string
    paymentDate?: DateTimeFilter<"Invoice"> | Date | string
    status?: StringFilter<"Invoice"> | string
    fromBankAccountId?: IntFilter<"Invoice"> | number
    toBeneficiaryAccountId?: IntFilter<"Invoice"> | number
    transactionDate?: DateTimeFilter<"Invoice"> | Date | string
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    fromBankAccount?: XOR<BankAccountDetailsScalarRelationFilter, BankAccountDetailsWhereInput>
    toBeneficiaryAccount?: XOR<BeneficiaryAccountDetailsScalarRelationFilter, BeneficiaryAccountDetailsWhereInput>
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    invoiceTitle?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    payeeEmail?: SortOrder
    payeeContact?: SortOrder
    paymentDate?: SortOrder
    status?: SortOrder
    fromBankAccountId?: SortOrder
    toBeneficiaryAccountId?: SortOrder
    transactionDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    fromBankAccount?: BankAccountDetailsOrderByWithRelationInput
    toBeneficiaryAccount?: BeneficiaryAccountDetailsOrderByWithRelationInput
    _relevance?: InvoiceOrderByRelevanceInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    userId?: IntFilter<"Invoice"> | number
    invoiceTitle?: StringFilter<"Invoice"> | string
    amount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Invoice"> | string | null
    payeeEmail?: StringFilter<"Invoice"> | string
    payeeContact?: StringFilter<"Invoice"> | string
    paymentDate?: DateTimeFilter<"Invoice"> | Date | string
    status?: StringFilter<"Invoice"> | string
    fromBankAccountId?: IntFilter<"Invoice"> | number
    toBeneficiaryAccountId?: IntFilter<"Invoice"> | number
    transactionDate?: DateTimeFilter<"Invoice"> | Date | string
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    fromBankAccount?: XOR<BankAccountDetailsScalarRelationFilter, BankAccountDetailsWhereInput>
    toBeneficiaryAccount?: XOR<BeneficiaryAccountDetailsScalarRelationFilter, BeneficiaryAccountDetailsWhereInput>
  }, "id">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    invoiceTitle?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    payeeEmail?: SortOrder
    payeeContact?: SortOrder
    paymentDate?: SortOrder
    status?: SortOrder
    fromBankAccountId?: SortOrder
    toBeneficiaryAccountId?: SortOrder
    transactionDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Invoice"> | number
    userId?: IntWithAggregatesFilter<"Invoice"> | number
    invoiceTitle?: StringWithAggregatesFilter<"Invoice"> | string
    amount?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    payeeEmail?: StringWithAggregatesFilter<"Invoice"> | string
    payeeContact?: StringWithAggregatesFilter<"Invoice"> | string
    paymentDate?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    status?: StringWithAggregatesFilter<"Invoice"> | string
    fromBankAccountId?: IntWithAggregatesFilter<"Invoice"> | number
    toBeneficiaryAccountId?: IntWithAggregatesFilter<"Invoice"> | number
    transactionDate?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    nickName: string
    email: string
    password: string
    mobile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccounts?: BankAccountDetailsCreateNestedManyWithoutUserInput
    beneficiaryAccounts?: BeneficiaryAccountDetailsCreateNestedManyWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    nickName: string
    email: string
    password: string
    mobile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccounts?: BankAccountDetailsUncheckedCreateNestedManyWithoutUserInput
    beneficiaryAccounts?: BeneficiaryAccountDetailsUncheckedCreateNestedManyWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccounts?: BankAccountDetailsUpdateManyWithoutUserNestedInput
    beneficiaryAccounts?: BeneficiaryAccountDetailsUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccounts?: BankAccountDetailsUncheckedUpdateManyWithoutUserNestedInput
    beneficiaryAccounts?: BeneficiaryAccountDetailsUncheckedUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    nickName: string
    email: string
    password: string
    mobile: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankAccountDetailsCreateInput = {
    accountHolderName: string
    accountHolderNickName: string
    accountNumber: string
    accountType?: string
    bankName: string
    balance?: Decimal | DecimalJsLike | number | string
    branch: string
    ifscCode: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBankAccountsInput
    invoicesFrom?: InvoiceCreateNestedManyWithoutFromBankAccountInput
  }

  export type BankAccountDetailsUncheckedCreateInput = {
    id?: number
    userId: number
    accountHolderName: string
    accountHolderNickName: string
    accountNumber: string
    accountType?: string
    bankName: string
    balance?: Decimal | DecimalJsLike | number | string
    branch: string
    ifscCode: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invoicesFrom?: InvoiceUncheckedCreateNestedManyWithoutFromBankAccountInput
  }

  export type BankAccountDetailsUpdateInput = {
    accountHolderName?: StringFieldUpdateOperationsInput | string
    accountHolderNickName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    branch?: StringFieldUpdateOperationsInput | string
    ifscCode?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBankAccountsNestedInput
    invoicesFrom?: InvoiceUpdateManyWithoutFromBankAccountNestedInput
  }

  export type BankAccountDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    accountHolderName?: StringFieldUpdateOperationsInput | string
    accountHolderNickName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    branch?: StringFieldUpdateOperationsInput | string
    ifscCode?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoicesFrom?: InvoiceUncheckedUpdateManyWithoutFromBankAccountNestedInput
  }

  export type BankAccountDetailsCreateManyInput = {
    id?: number
    userId: number
    accountHolderName: string
    accountHolderNickName: string
    accountNumber: string
    accountType?: string
    bankName: string
    balance?: Decimal | DecimalJsLike | number | string
    branch: string
    ifscCode: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankAccountDetailsUpdateManyMutationInput = {
    accountHolderName?: StringFieldUpdateOperationsInput | string
    accountHolderNickName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    branch?: StringFieldUpdateOperationsInput | string
    ifscCode?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankAccountDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    accountHolderName?: StringFieldUpdateOperationsInput | string
    accountHolderNickName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    branch?: StringFieldUpdateOperationsInput | string
    ifscCode?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeneficiaryAccountDetailsCreateInput = {
    accountHolderName: string
    accountHolderNickName: string
    accountNumber: string
    accountType?: string
    bankName: string
    branch: string
    ifscCode: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBeneficiaryAccountsInput
    invoicesTo?: InvoiceCreateNestedManyWithoutToBeneficiaryAccountInput
  }

  export type BeneficiaryAccountDetailsUncheckedCreateInput = {
    id?: number
    userId: number
    accountHolderName: string
    accountHolderNickName: string
    accountNumber: string
    accountType?: string
    bankName: string
    branch: string
    ifscCode: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invoicesTo?: InvoiceUncheckedCreateNestedManyWithoutToBeneficiaryAccountInput
  }

  export type BeneficiaryAccountDetailsUpdateInput = {
    accountHolderName?: StringFieldUpdateOperationsInput | string
    accountHolderNickName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    ifscCode?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBeneficiaryAccountsNestedInput
    invoicesTo?: InvoiceUpdateManyWithoutToBeneficiaryAccountNestedInput
  }

  export type BeneficiaryAccountDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    accountHolderName?: StringFieldUpdateOperationsInput | string
    accountHolderNickName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    ifscCode?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoicesTo?: InvoiceUncheckedUpdateManyWithoutToBeneficiaryAccountNestedInput
  }

  export type BeneficiaryAccountDetailsCreateManyInput = {
    id?: number
    userId: number
    accountHolderName: string
    accountHolderNickName: string
    accountNumber: string
    accountType?: string
    bankName: string
    branch: string
    ifscCode: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BeneficiaryAccountDetailsUpdateManyMutationInput = {
    accountHolderName?: StringFieldUpdateOperationsInput | string
    accountHolderNickName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    ifscCode?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeneficiaryAccountDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    accountHolderName?: StringFieldUpdateOperationsInput | string
    accountHolderNickName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    ifscCode?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    invoiceTitle: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    payeeEmail: string
    payeeContact: string
    paymentDate: Date | string
    status?: string
    transactionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutInvoicesInput
    fromBankAccount: BankAccountDetailsCreateNestedOneWithoutInvoicesFromInput
    toBeneficiaryAccount: BeneficiaryAccountDetailsCreateNestedOneWithoutInvoicesToInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: number
    userId: number
    invoiceTitle: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    payeeEmail: string
    payeeContact: string
    paymentDate: Date | string
    status?: string
    fromBankAccountId: number
    toBeneficiaryAccountId: number
    transactionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateInput = {
    invoiceTitle?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    payeeEmail?: StringFieldUpdateOperationsInput | string
    payeeContact?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInvoicesNestedInput
    fromBankAccount?: BankAccountDetailsUpdateOneRequiredWithoutInvoicesFromNestedInput
    toBeneficiaryAccount?: BeneficiaryAccountDetailsUpdateOneRequiredWithoutInvoicesToNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    invoiceTitle?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    payeeEmail?: StringFieldUpdateOperationsInput | string
    payeeContact?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    fromBankAccountId?: IntFieldUpdateOperationsInput | number
    toBeneficiaryAccountId?: IntFieldUpdateOperationsInput | number
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyInput = {
    id?: number
    userId: number
    invoiceTitle: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    payeeEmail: string
    payeeContact: string
    paymentDate: Date | string
    status?: string
    fromBankAccountId: number
    toBeneficiaryAccountId: number
    transactionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    invoiceTitle?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    payeeEmail?: StringFieldUpdateOperationsInput | string
    payeeContact?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    invoiceTitle?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    payeeEmail?: StringFieldUpdateOperationsInput | string
    payeeContact?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    fromBankAccountId?: IntFieldUpdateOperationsInput | number
    toBeneficiaryAccountId?: IntFieldUpdateOperationsInput | number
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BankAccountDetailsListRelationFilter = {
    every?: BankAccountDetailsWhereInput
    some?: BankAccountDetailsWhereInput
    none?: BankAccountDetailsWhereInput
  }

  export type BeneficiaryAccountDetailsListRelationFilter = {
    every?: BeneficiaryAccountDetailsWhereInput
    some?: BeneficiaryAccountDetailsWhereInput
    none?: BeneficiaryAccountDetailsWhereInput
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type BankAccountDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BeneficiaryAccountDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nickName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mobile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nickName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mobile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nickName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mobile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BankAccountDetailsOrderByRelevanceInput = {
    fields: BankAccountDetailsOrderByRelevanceFieldEnum | BankAccountDetailsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BankAccountDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountHolderName?: SortOrder
    accountHolderNickName?: SortOrder
    accountNumber?: SortOrder
    accountType?: SortOrder
    bankName?: SortOrder
    balance?: SortOrder
    branch?: SortOrder
    ifscCode?: SortOrder
    pincode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankAccountDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
  }

  export type BankAccountDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountHolderName?: SortOrder
    accountHolderNickName?: SortOrder
    accountNumber?: SortOrder
    accountType?: SortOrder
    bankName?: SortOrder
    balance?: SortOrder
    branch?: SortOrder
    ifscCode?: SortOrder
    pincode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankAccountDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountHolderName?: SortOrder
    accountHolderNickName?: SortOrder
    accountNumber?: SortOrder
    accountType?: SortOrder
    bankName?: SortOrder
    balance?: SortOrder
    branch?: SortOrder
    ifscCode?: SortOrder
    pincode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankAccountDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BeneficiaryAccountDetailsOrderByRelevanceInput = {
    fields: BeneficiaryAccountDetailsOrderByRelevanceFieldEnum | BeneficiaryAccountDetailsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BeneficiaryAccountDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountHolderName?: SortOrder
    accountHolderNickName?: SortOrder
    accountNumber?: SortOrder
    accountType?: SortOrder
    bankName?: SortOrder
    branch?: SortOrder
    ifscCode?: SortOrder
    pincode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BeneficiaryAccountDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BeneficiaryAccountDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountHolderName?: SortOrder
    accountHolderNickName?: SortOrder
    accountNumber?: SortOrder
    accountType?: SortOrder
    bankName?: SortOrder
    branch?: SortOrder
    ifscCode?: SortOrder
    pincode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BeneficiaryAccountDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountHolderName?: SortOrder
    accountHolderNickName?: SortOrder
    accountNumber?: SortOrder
    accountType?: SortOrder
    bankName?: SortOrder
    branch?: SortOrder
    ifscCode?: SortOrder
    pincode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BeneficiaryAccountDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BankAccountDetailsScalarRelationFilter = {
    is?: BankAccountDetailsWhereInput
    isNot?: BankAccountDetailsWhereInput
  }

  export type BeneficiaryAccountDetailsScalarRelationFilter = {
    is?: BeneficiaryAccountDetailsWhereInput
    isNot?: BeneficiaryAccountDetailsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InvoiceOrderByRelevanceInput = {
    fields: InvoiceOrderByRelevanceFieldEnum | InvoiceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    invoiceTitle?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    payeeEmail?: SortOrder
    payeeContact?: SortOrder
    paymentDate?: SortOrder
    status?: SortOrder
    fromBankAccountId?: SortOrder
    toBeneficiaryAccountId?: SortOrder
    transactionDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    fromBankAccountId?: SortOrder
    toBeneficiaryAccountId?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    invoiceTitle?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    payeeEmail?: SortOrder
    payeeContact?: SortOrder
    paymentDate?: SortOrder
    status?: SortOrder
    fromBankAccountId?: SortOrder
    toBeneficiaryAccountId?: SortOrder
    transactionDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    invoiceTitle?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    payeeEmail?: SortOrder
    payeeContact?: SortOrder
    paymentDate?: SortOrder
    status?: SortOrder
    fromBankAccountId?: SortOrder
    toBeneficiaryAccountId?: SortOrder
    transactionDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    fromBankAccountId?: SortOrder
    toBeneficiaryAccountId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BankAccountDetailsCreateNestedManyWithoutUserInput = {
    create?: XOR<BankAccountDetailsCreateWithoutUserInput, BankAccountDetailsUncheckedCreateWithoutUserInput> | BankAccountDetailsCreateWithoutUserInput[] | BankAccountDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankAccountDetailsCreateOrConnectWithoutUserInput | BankAccountDetailsCreateOrConnectWithoutUserInput[]
    createMany?: BankAccountDetailsCreateManyUserInputEnvelope
    connect?: BankAccountDetailsWhereUniqueInput | BankAccountDetailsWhereUniqueInput[]
  }

  export type BeneficiaryAccountDetailsCreateNestedManyWithoutUserInput = {
    create?: XOR<BeneficiaryAccountDetailsCreateWithoutUserInput, BeneficiaryAccountDetailsUncheckedCreateWithoutUserInput> | BeneficiaryAccountDetailsCreateWithoutUserInput[] | BeneficiaryAccountDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BeneficiaryAccountDetailsCreateOrConnectWithoutUserInput | BeneficiaryAccountDetailsCreateOrConnectWithoutUserInput[]
    createMany?: BeneficiaryAccountDetailsCreateManyUserInputEnvelope
    connect?: BeneficiaryAccountDetailsWhereUniqueInput | BeneficiaryAccountDetailsWhereUniqueInput[]
  }

  export type InvoiceCreateNestedManyWithoutUserInput = {
    create?: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput> | InvoiceCreateWithoutUserInput[] | InvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutUserInput | InvoiceCreateOrConnectWithoutUserInput[]
    createMany?: InvoiceCreateManyUserInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type BankAccountDetailsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BankAccountDetailsCreateWithoutUserInput, BankAccountDetailsUncheckedCreateWithoutUserInput> | BankAccountDetailsCreateWithoutUserInput[] | BankAccountDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankAccountDetailsCreateOrConnectWithoutUserInput | BankAccountDetailsCreateOrConnectWithoutUserInput[]
    createMany?: BankAccountDetailsCreateManyUserInputEnvelope
    connect?: BankAccountDetailsWhereUniqueInput | BankAccountDetailsWhereUniqueInput[]
  }

  export type BeneficiaryAccountDetailsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BeneficiaryAccountDetailsCreateWithoutUserInput, BeneficiaryAccountDetailsUncheckedCreateWithoutUserInput> | BeneficiaryAccountDetailsCreateWithoutUserInput[] | BeneficiaryAccountDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BeneficiaryAccountDetailsCreateOrConnectWithoutUserInput | BeneficiaryAccountDetailsCreateOrConnectWithoutUserInput[]
    createMany?: BeneficiaryAccountDetailsCreateManyUserInputEnvelope
    connect?: BeneficiaryAccountDetailsWhereUniqueInput | BeneficiaryAccountDetailsWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput> | InvoiceCreateWithoutUserInput[] | InvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutUserInput | InvoiceCreateOrConnectWithoutUserInput[]
    createMany?: InvoiceCreateManyUserInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BankAccountDetailsUpdateManyWithoutUserNestedInput = {
    create?: XOR<BankAccountDetailsCreateWithoutUserInput, BankAccountDetailsUncheckedCreateWithoutUserInput> | BankAccountDetailsCreateWithoutUserInput[] | BankAccountDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankAccountDetailsCreateOrConnectWithoutUserInput | BankAccountDetailsCreateOrConnectWithoutUserInput[]
    upsert?: BankAccountDetailsUpsertWithWhereUniqueWithoutUserInput | BankAccountDetailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BankAccountDetailsCreateManyUserInputEnvelope
    set?: BankAccountDetailsWhereUniqueInput | BankAccountDetailsWhereUniqueInput[]
    disconnect?: BankAccountDetailsWhereUniqueInput | BankAccountDetailsWhereUniqueInput[]
    delete?: BankAccountDetailsWhereUniqueInput | BankAccountDetailsWhereUniqueInput[]
    connect?: BankAccountDetailsWhereUniqueInput | BankAccountDetailsWhereUniqueInput[]
    update?: BankAccountDetailsUpdateWithWhereUniqueWithoutUserInput | BankAccountDetailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BankAccountDetailsUpdateManyWithWhereWithoutUserInput | BankAccountDetailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BankAccountDetailsScalarWhereInput | BankAccountDetailsScalarWhereInput[]
  }

  export type BeneficiaryAccountDetailsUpdateManyWithoutUserNestedInput = {
    create?: XOR<BeneficiaryAccountDetailsCreateWithoutUserInput, BeneficiaryAccountDetailsUncheckedCreateWithoutUserInput> | BeneficiaryAccountDetailsCreateWithoutUserInput[] | BeneficiaryAccountDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BeneficiaryAccountDetailsCreateOrConnectWithoutUserInput | BeneficiaryAccountDetailsCreateOrConnectWithoutUserInput[]
    upsert?: BeneficiaryAccountDetailsUpsertWithWhereUniqueWithoutUserInput | BeneficiaryAccountDetailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BeneficiaryAccountDetailsCreateManyUserInputEnvelope
    set?: BeneficiaryAccountDetailsWhereUniqueInput | BeneficiaryAccountDetailsWhereUniqueInput[]
    disconnect?: BeneficiaryAccountDetailsWhereUniqueInput | BeneficiaryAccountDetailsWhereUniqueInput[]
    delete?: BeneficiaryAccountDetailsWhereUniqueInput | BeneficiaryAccountDetailsWhereUniqueInput[]
    connect?: BeneficiaryAccountDetailsWhereUniqueInput | BeneficiaryAccountDetailsWhereUniqueInput[]
    update?: BeneficiaryAccountDetailsUpdateWithWhereUniqueWithoutUserInput | BeneficiaryAccountDetailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BeneficiaryAccountDetailsUpdateManyWithWhereWithoutUserInput | BeneficiaryAccountDetailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BeneficiaryAccountDetailsScalarWhereInput | BeneficiaryAccountDetailsScalarWhereInput[]
  }

  export type InvoiceUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput> | InvoiceCreateWithoutUserInput[] | InvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutUserInput | InvoiceCreateOrConnectWithoutUserInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutUserInput | InvoiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvoiceCreateManyUserInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutUserInput | InvoiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutUserInput | InvoiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BankAccountDetailsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BankAccountDetailsCreateWithoutUserInput, BankAccountDetailsUncheckedCreateWithoutUserInput> | BankAccountDetailsCreateWithoutUserInput[] | BankAccountDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankAccountDetailsCreateOrConnectWithoutUserInput | BankAccountDetailsCreateOrConnectWithoutUserInput[]
    upsert?: BankAccountDetailsUpsertWithWhereUniqueWithoutUserInput | BankAccountDetailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BankAccountDetailsCreateManyUserInputEnvelope
    set?: BankAccountDetailsWhereUniqueInput | BankAccountDetailsWhereUniqueInput[]
    disconnect?: BankAccountDetailsWhereUniqueInput | BankAccountDetailsWhereUniqueInput[]
    delete?: BankAccountDetailsWhereUniqueInput | BankAccountDetailsWhereUniqueInput[]
    connect?: BankAccountDetailsWhereUniqueInput | BankAccountDetailsWhereUniqueInput[]
    update?: BankAccountDetailsUpdateWithWhereUniqueWithoutUserInput | BankAccountDetailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BankAccountDetailsUpdateManyWithWhereWithoutUserInput | BankAccountDetailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BankAccountDetailsScalarWhereInput | BankAccountDetailsScalarWhereInput[]
  }

  export type BeneficiaryAccountDetailsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BeneficiaryAccountDetailsCreateWithoutUserInput, BeneficiaryAccountDetailsUncheckedCreateWithoutUserInput> | BeneficiaryAccountDetailsCreateWithoutUserInput[] | BeneficiaryAccountDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BeneficiaryAccountDetailsCreateOrConnectWithoutUserInput | BeneficiaryAccountDetailsCreateOrConnectWithoutUserInput[]
    upsert?: BeneficiaryAccountDetailsUpsertWithWhereUniqueWithoutUserInput | BeneficiaryAccountDetailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BeneficiaryAccountDetailsCreateManyUserInputEnvelope
    set?: BeneficiaryAccountDetailsWhereUniqueInput | BeneficiaryAccountDetailsWhereUniqueInput[]
    disconnect?: BeneficiaryAccountDetailsWhereUniqueInput | BeneficiaryAccountDetailsWhereUniqueInput[]
    delete?: BeneficiaryAccountDetailsWhereUniqueInput | BeneficiaryAccountDetailsWhereUniqueInput[]
    connect?: BeneficiaryAccountDetailsWhereUniqueInput | BeneficiaryAccountDetailsWhereUniqueInput[]
    update?: BeneficiaryAccountDetailsUpdateWithWhereUniqueWithoutUserInput | BeneficiaryAccountDetailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BeneficiaryAccountDetailsUpdateManyWithWhereWithoutUserInput | BeneficiaryAccountDetailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BeneficiaryAccountDetailsScalarWhereInput | BeneficiaryAccountDetailsScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput> | InvoiceCreateWithoutUserInput[] | InvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutUserInput | InvoiceCreateOrConnectWithoutUserInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutUserInput | InvoiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvoiceCreateManyUserInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutUserInput | InvoiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutUserInput | InvoiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBankAccountsInput = {
    create?: XOR<UserCreateWithoutBankAccountsInput, UserUncheckedCreateWithoutBankAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBankAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type InvoiceCreateNestedManyWithoutFromBankAccountInput = {
    create?: XOR<InvoiceCreateWithoutFromBankAccountInput, InvoiceUncheckedCreateWithoutFromBankAccountInput> | InvoiceCreateWithoutFromBankAccountInput[] | InvoiceUncheckedCreateWithoutFromBankAccountInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutFromBankAccountInput | InvoiceCreateOrConnectWithoutFromBankAccountInput[]
    createMany?: InvoiceCreateManyFromBankAccountInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutFromBankAccountInput = {
    create?: XOR<InvoiceCreateWithoutFromBankAccountInput, InvoiceUncheckedCreateWithoutFromBankAccountInput> | InvoiceCreateWithoutFromBankAccountInput[] | InvoiceUncheckedCreateWithoutFromBankAccountInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutFromBankAccountInput | InvoiceCreateOrConnectWithoutFromBankAccountInput[]
    createMany?: InvoiceCreateManyFromBankAccountInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutBankAccountsNestedInput = {
    create?: XOR<UserCreateWithoutBankAccountsInput, UserUncheckedCreateWithoutBankAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBankAccountsInput
    upsert?: UserUpsertWithoutBankAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBankAccountsInput, UserUpdateWithoutBankAccountsInput>, UserUncheckedUpdateWithoutBankAccountsInput>
  }

  export type InvoiceUpdateManyWithoutFromBankAccountNestedInput = {
    create?: XOR<InvoiceCreateWithoutFromBankAccountInput, InvoiceUncheckedCreateWithoutFromBankAccountInput> | InvoiceCreateWithoutFromBankAccountInput[] | InvoiceUncheckedCreateWithoutFromBankAccountInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutFromBankAccountInput | InvoiceCreateOrConnectWithoutFromBankAccountInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutFromBankAccountInput | InvoiceUpsertWithWhereUniqueWithoutFromBankAccountInput[]
    createMany?: InvoiceCreateManyFromBankAccountInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutFromBankAccountInput | InvoiceUpdateWithWhereUniqueWithoutFromBankAccountInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutFromBankAccountInput | InvoiceUpdateManyWithWhereWithoutFromBankAccountInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutFromBankAccountNestedInput = {
    create?: XOR<InvoiceCreateWithoutFromBankAccountInput, InvoiceUncheckedCreateWithoutFromBankAccountInput> | InvoiceCreateWithoutFromBankAccountInput[] | InvoiceUncheckedCreateWithoutFromBankAccountInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutFromBankAccountInput | InvoiceCreateOrConnectWithoutFromBankAccountInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutFromBankAccountInput | InvoiceUpsertWithWhereUniqueWithoutFromBankAccountInput[]
    createMany?: InvoiceCreateManyFromBankAccountInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutFromBankAccountInput | InvoiceUpdateWithWhereUniqueWithoutFromBankAccountInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutFromBankAccountInput | InvoiceUpdateManyWithWhereWithoutFromBankAccountInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBeneficiaryAccountsInput = {
    create?: XOR<UserCreateWithoutBeneficiaryAccountsInput, UserUncheckedCreateWithoutBeneficiaryAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBeneficiaryAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type InvoiceCreateNestedManyWithoutToBeneficiaryAccountInput = {
    create?: XOR<InvoiceCreateWithoutToBeneficiaryAccountInput, InvoiceUncheckedCreateWithoutToBeneficiaryAccountInput> | InvoiceCreateWithoutToBeneficiaryAccountInput[] | InvoiceUncheckedCreateWithoutToBeneficiaryAccountInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutToBeneficiaryAccountInput | InvoiceCreateOrConnectWithoutToBeneficiaryAccountInput[]
    createMany?: InvoiceCreateManyToBeneficiaryAccountInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutToBeneficiaryAccountInput = {
    create?: XOR<InvoiceCreateWithoutToBeneficiaryAccountInput, InvoiceUncheckedCreateWithoutToBeneficiaryAccountInput> | InvoiceCreateWithoutToBeneficiaryAccountInput[] | InvoiceUncheckedCreateWithoutToBeneficiaryAccountInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutToBeneficiaryAccountInput | InvoiceCreateOrConnectWithoutToBeneficiaryAccountInput[]
    createMany?: InvoiceCreateManyToBeneficiaryAccountInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutBeneficiaryAccountsNestedInput = {
    create?: XOR<UserCreateWithoutBeneficiaryAccountsInput, UserUncheckedCreateWithoutBeneficiaryAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBeneficiaryAccountsInput
    upsert?: UserUpsertWithoutBeneficiaryAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBeneficiaryAccountsInput, UserUpdateWithoutBeneficiaryAccountsInput>, UserUncheckedUpdateWithoutBeneficiaryAccountsInput>
  }

  export type InvoiceUpdateManyWithoutToBeneficiaryAccountNestedInput = {
    create?: XOR<InvoiceCreateWithoutToBeneficiaryAccountInput, InvoiceUncheckedCreateWithoutToBeneficiaryAccountInput> | InvoiceCreateWithoutToBeneficiaryAccountInput[] | InvoiceUncheckedCreateWithoutToBeneficiaryAccountInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutToBeneficiaryAccountInput | InvoiceCreateOrConnectWithoutToBeneficiaryAccountInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutToBeneficiaryAccountInput | InvoiceUpsertWithWhereUniqueWithoutToBeneficiaryAccountInput[]
    createMany?: InvoiceCreateManyToBeneficiaryAccountInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutToBeneficiaryAccountInput | InvoiceUpdateWithWhereUniqueWithoutToBeneficiaryAccountInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutToBeneficiaryAccountInput | InvoiceUpdateManyWithWhereWithoutToBeneficiaryAccountInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutToBeneficiaryAccountNestedInput = {
    create?: XOR<InvoiceCreateWithoutToBeneficiaryAccountInput, InvoiceUncheckedCreateWithoutToBeneficiaryAccountInput> | InvoiceCreateWithoutToBeneficiaryAccountInput[] | InvoiceUncheckedCreateWithoutToBeneficiaryAccountInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutToBeneficiaryAccountInput | InvoiceCreateOrConnectWithoutToBeneficiaryAccountInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutToBeneficiaryAccountInput | InvoiceUpsertWithWhereUniqueWithoutToBeneficiaryAccountInput[]
    createMany?: InvoiceCreateManyToBeneficiaryAccountInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutToBeneficiaryAccountInput | InvoiceUpdateWithWhereUniqueWithoutToBeneficiaryAccountInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutToBeneficiaryAccountInput | InvoiceUpdateManyWithWhereWithoutToBeneficiaryAccountInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    connect?: UserWhereUniqueInput
  }

  export type BankAccountDetailsCreateNestedOneWithoutInvoicesFromInput = {
    create?: XOR<BankAccountDetailsCreateWithoutInvoicesFromInput, BankAccountDetailsUncheckedCreateWithoutInvoicesFromInput>
    connectOrCreate?: BankAccountDetailsCreateOrConnectWithoutInvoicesFromInput
    connect?: BankAccountDetailsWhereUniqueInput
  }

  export type BeneficiaryAccountDetailsCreateNestedOneWithoutInvoicesToInput = {
    create?: XOR<BeneficiaryAccountDetailsCreateWithoutInvoicesToInput, BeneficiaryAccountDetailsUncheckedCreateWithoutInvoicesToInput>
    connectOrCreate?: BeneficiaryAccountDetailsCreateOrConnectWithoutInvoicesToInput
    connect?: BeneficiaryAccountDetailsWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    upsert?: UserUpsertWithoutInvoicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvoicesInput, UserUpdateWithoutInvoicesInput>, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type BankAccountDetailsUpdateOneRequiredWithoutInvoicesFromNestedInput = {
    create?: XOR<BankAccountDetailsCreateWithoutInvoicesFromInput, BankAccountDetailsUncheckedCreateWithoutInvoicesFromInput>
    connectOrCreate?: BankAccountDetailsCreateOrConnectWithoutInvoicesFromInput
    upsert?: BankAccountDetailsUpsertWithoutInvoicesFromInput
    connect?: BankAccountDetailsWhereUniqueInput
    update?: XOR<XOR<BankAccountDetailsUpdateToOneWithWhereWithoutInvoicesFromInput, BankAccountDetailsUpdateWithoutInvoicesFromInput>, BankAccountDetailsUncheckedUpdateWithoutInvoicesFromInput>
  }

  export type BeneficiaryAccountDetailsUpdateOneRequiredWithoutInvoicesToNestedInput = {
    create?: XOR<BeneficiaryAccountDetailsCreateWithoutInvoicesToInput, BeneficiaryAccountDetailsUncheckedCreateWithoutInvoicesToInput>
    connectOrCreate?: BeneficiaryAccountDetailsCreateOrConnectWithoutInvoicesToInput
    upsert?: BeneficiaryAccountDetailsUpsertWithoutInvoicesToInput
    connect?: BeneficiaryAccountDetailsWhereUniqueInput
    update?: XOR<XOR<BeneficiaryAccountDetailsUpdateToOneWithWhereWithoutInvoicesToInput, BeneficiaryAccountDetailsUpdateWithoutInvoicesToInput>, BeneficiaryAccountDetailsUncheckedUpdateWithoutInvoicesToInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BankAccountDetailsCreateWithoutUserInput = {
    accountHolderName: string
    accountHolderNickName: string
    accountNumber: string
    accountType?: string
    bankName: string
    balance?: Decimal | DecimalJsLike | number | string
    branch: string
    ifscCode: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invoicesFrom?: InvoiceCreateNestedManyWithoutFromBankAccountInput
  }

  export type BankAccountDetailsUncheckedCreateWithoutUserInput = {
    id?: number
    accountHolderName: string
    accountHolderNickName: string
    accountNumber: string
    accountType?: string
    bankName: string
    balance?: Decimal | DecimalJsLike | number | string
    branch: string
    ifscCode: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invoicesFrom?: InvoiceUncheckedCreateNestedManyWithoutFromBankAccountInput
  }

  export type BankAccountDetailsCreateOrConnectWithoutUserInput = {
    where: BankAccountDetailsWhereUniqueInput
    create: XOR<BankAccountDetailsCreateWithoutUserInput, BankAccountDetailsUncheckedCreateWithoutUserInput>
  }

  export type BankAccountDetailsCreateManyUserInputEnvelope = {
    data: BankAccountDetailsCreateManyUserInput | BankAccountDetailsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BeneficiaryAccountDetailsCreateWithoutUserInput = {
    accountHolderName: string
    accountHolderNickName: string
    accountNumber: string
    accountType?: string
    bankName: string
    branch: string
    ifscCode: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invoicesTo?: InvoiceCreateNestedManyWithoutToBeneficiaryAccountInput
  }

  export type BeneficiaryAccountDetailsUncheckedCreateWithoutUserInput = {
    id?: number
    accountHolderName: string
    accountHolderNickName: string
    accountNumber: string
    accountType?: string
    bankName: string
    branch: string
    ifscCode: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invoicesTo?: InvoiceUncheckedCreateNestedManyWithoutToBeneficiaryAccountInput
  }

  export type BeneficiaryAccountDetailsCreateOrConnectWithoutUserInput = {
    where: BeneficiaryAccountDetailsWhereUniqueInput
    create: XOR<BeneficiaryAccountDetailsCreateWithoutUserInput, BeneficiaryAccountDetailsUncheckedCreateWithoutUserInput>
  }

  export type BeneficiaryAccountDetailsCreateManyUserInputEnvelope = {
    data: BeneficiaryAccountDetailsCreateManyUserInput | BeneficiaryAccountDetailsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceCreateWithoutUserInput = {
    invoiceTitle: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    payeeEmail: string
    payeeContact: string
    paymentDate: Date | string
    status?: string
    transactionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromBankAccount: BankAccountDetailsCreateNestedOneWithoutInvoicesFromInput
    toBeneficiaryAccount: BeneficiaryAccountDetailsCreateNestedOneWithoutInvoicesToInput
  }

  export type InvoiceUncheckedCreateWithoutUserInput = {
    id?: number
    invoiceTitle: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    payeeEmail: string
    payeeContact: string
    paymentDate: Date | string
    status?: string
    fromBankAccountId: number
    toBeneficiaryAccountId: number
    transactionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutUserInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput>
  }

  export type InvoiceCreateManyUserInputEnvelope = {
    data: InvoiceCreateManyUserInput | InvoiceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BankAccountDetailsUpsertWithWhereUniqueWithoutUserInput = {
    where: BankAccountDetailsWhereUniqueInput
    update: XOR<BankAccountDetailsUpdateWithoutUserInput, BankAccountDetailsUncheckedUpdateWithoutUserInput>
    create: XOR<BankAccountDetailsCreateWithoutUserInput, BankAccountDetailsUncheckedCreateWithoutUserInput>
  }

  export type BankAccountDetailsUpdateWithWhereUniqueWithoutUserInput = {
    where: BankAccountDetailsWhereUniqueInput
    data: XOR<BankAccountDetailsUpdateWithoutUserInput, BankAccountDetailsUncheckedUpdateWithoutUserInput>
  }

  export type BankAccountDetailsUpdateManyWithWhereWithoutUserInput = {
    where: BankAccountDetailsScalarWhereInput
    data: XOR<BankAccountDetailsUpdateManyMutationInput, BankAccountDetailsUncheckedUpdateManyWithoutUserInput>
  }

  export type BankAccountDetailsScalarWhereInput = {
    AND?: BankAccountDetailsScalarWhereInput | BankAccountDetailsScalarWhereInput[]
    OR?: BankAccountDetailsScalarWhereInput[]
    NOT?: BankAccountDetailsScalarWhereInput | BankAccountDetailsScalarWhereInput[]
    id?: IntFilter<"BankAccountDetails"> | number
    userId?: IntFilter<"BankAccountDetails"> | number
    accountHolderName?: StringFilter<"BankAccountDetails"> | string
    accountHolderNickName?: StringFilter<"BankAccountDetails"> | string
    accountNumber?: StringFilter<"BankAccountDetails"> | string
    accountType?: StringFilter<"BankAccountDetails"> | string
    bankName?: StringFilter<"BankAccountDetails"> | string
    balance?: DecimalFilter<"BankAccountDetails"> | Decimal | DecimalJsLike | number | string
    branch?: StringFilter<"BankAccountDetails"> | string
    ifscCode?: StringFilter<"BankAccountDetails"> | string
    pincode?: StringFilter<"BankAccountDetails"> | string
    createdAt?: DateTimeFilter<"BankAccountDetails"> | Date | string
    updatedAt?: DateTimeFilter<"BankAccountDetails"> | Date | string
  }

  export type BeneficiaryAccountDetailsUpsertWithWhereUniqueWithoutUserInput = {
    where: BeneficiaryAccountDetailsWhereUniqueInput
    update: XOR<BeneficiaryAccountDetailsUpdateWithoutUserInput, BeneficiaryAccountDetailsUncheckedUpdateWithoutUserInput>
    create: XOR<BeneficiaryAccountDetailsCreateWithoutUserInput, BeneficiaryAccountDetailsUncheckedCreateWithoutUserInput>
  }

  export type BeneficiaryAccountDetailsUpdateWithWhereUniqueWithoutUserInput = {
    where: BeneficiaryAccountDetailsWhereUniqueInput
    data: XOR<BeneficiaryAccountDetailsUpdateWithoutUserInput, BeneficiaryAccountDetailsUncheckedUpdateWithoutUserInput>
  }

  export type BeneficiaryAccountDetailsUpdateManyWithWhereWithoutUserInput = {
    where: BeneficiaryAccountDetailsScalarWhereInput
    data: XOR<BeneficiaryAccountDetailsUpdateManyMutationInput, BeneficiaryAccountDetailsUncheckedUpdateManyWithoutUserInput>
  }

  export type BeneficiaryAccountDetailsScalarWhereInput = {
    AND?: BeneficiaryAccountDetailsScalarWhereInput | BeneficiaryAccountDetailsScalarWhereInput[]
    OR?: BeneficiaryAccountDetailsScalarWhereInput[]
    NOT?: BeneficiaryAccountDetailsScalarWhereInput | BeneficiaryAccountDetailsScalarWhereInput[]
    id?: IntFilter<"BeneficiaryAccountDetails"> | number
    userId?: IntFilter<"BeneficiaryAccountDetails"> | number
    accountHolderName?: StringFilter<"BeneficiaryAccountDetails"> | string
    accountHolderNickName?: StringFilter<"BeneficiaryAccountDetails"> | string
    accountNumber?: StringFilter<"BeneficiaryAccountDetails"> | string
    accountType?: StringFilter<"BeneficiaryAccountDetails"> | string
    bankName?: StringFilter<"BeneficiaryAccountDetails"> | string
    branch?: StringFilter<"BeneficiaryAccountDetails"> | string
    ifscCode?: StringFilter<"BeneficiaryAccountDetails"> | string
    pincode?: StringFilter<"BeneficiaryAccountDetails"> | string
    createdAt?: DateTimeFilter<"BeneficiaryAccountDetails"> | Date | string
    updatedAt?: DateTimeFilter<"BeneficiaryAccountDetails"> | Date | string
  }

  export type InvoiceUpsertWithWhereUniqueWithoutUserInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutUserInput, InvoiceUncheckedUpdateWithoutUserInput>
    create: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutUserInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutUserInput, InvoiceUncheckedUpdateWithoutUserInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutUserInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutUserInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: IntFilter<"Invoice"> | number
    userId?: IntFilter<"Invoice"> | number
    invoiceTitle?: StringFilter<"Invoice"> | string
    amount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Invoice"> | string | null
    payeeEmail?: StringFilter<"Invoice"> | string
    payeeContact?: StringFilter<"Invoice"> | string
    paymentDate?: DateTimeFilter<"Invoice"> | Date | string
    status?: StringFilter<"Invoice"> | string
    fromBankAccountId?: IntFilter<"Invoice"> | number
    toBeneficiaryAccountId?: IntFilter<"Invoice"> | number
    transactionDate?: DateTimeFilter<"Invoice"> | Date | string
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
  }

  export type UserCreateWithoutBankAccountsInput = {
    firstName: string
    lastName: string
    nickName: string
    email: string
    password: string
    mobile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    beneficiaryAccounts?: BeneficiaryAccountDetailsCreateNestedManyWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBankAccountsInput = {
    id?: number
    firstName: string
    lastName: string
    nickName: string
    email: string
    password: string
    mobile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    beneficiaryAccounts?: BeneficiaryAccountDetailsUncheckedCreateNestedManyWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBankAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBankAccountsInput, UserUncheckedCreateWithoutBankAccountsInput>
  }

  export type InvoiceCreateWithoutFromBankAccountInput = {
    invoiceTitle: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    payeeEmail: string
    payeeContact: string
    paymentDate: Date | string
    status?: string
    transactionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutInvoicesInput
    toBeneficiaryAccount: BeneficiaryAccountDetailsCreateNestedOneWithoutInvoicesToInput
  }

  export type InvoiceUncheckedCreateWithoutFromBankAccountInput = {
    id?: number
    userId: number
    invoiceTitle: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    payeeEmail: string
    payeeContact: string
    paymentDate: Date | string
    status?: string
    toBeneficiaryAccountId: number
    transactionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutFromBankAccountInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutFromBankAccountInput, InvoiceUncheckedCreateWithoutFromBankAccountInput>
  }

  export type InvoiceCreateManyFromBankAccountInputEnvelope = {
    data: InvoiceCreateManyFromBankAccountInput | InvoiceCreateManyFromBankAccountInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBankAccountsInput = {
    update: XOR<UserUpdateWithoutBankAccountsInput, UserUncheckedUpdateWithoutBankAccountsInput>
    create: XOR<UserCreateWithoutBankAccountsInput, UserUncheckedCreateWithoutBankAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBankAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBankAccountsInput, UserUncheckedUpdateWithoutBankAccountsInput>
  }

  export type UserUpdateWithoutBankAccountsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    beneficiaryAccounts?: BeneficiaryAccountDetailsUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBankAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    beneficiaryAccounts?: BeneficiaryAccountDetailsUncheckedUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InvoiceUpsertWithWhereUniqueWithoutFromBankAccountInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutFromBankAccountInput, InvoiceUncheckedUpdateWithoutFromBankAccountInput>
    create: XOR<InvoiceCreateWithoutFromBankAccountInput, InvoiceUncheckedCreateWithoutFromBankAccountInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutFromBankAccountInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutFromBankAccountInput, InvoiceUncheckedUpdateWithoutFromBankAccountInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutFromBankAccountInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutFromBankAccountInput>
  }

  export type UserCreateWithoutBeneficiaryAccountsInput = {
    firstName: string
    lastName: string
    nickName: string
    email: string
    password: string
    mobile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccounts?: BankAccountDetailsCreateNestedManyWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBeneficiaryAccountsInput = {
    id?: number
    firstName: string
    lastName: string
    nickName: string
    email: string
    password: string
    mobile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccounts?: BankAccountDetailsUncheckedCreateNestedManyWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBeneficiaryAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBeneficiaryAccountsInput, UserUncheckedCreateWithoutBeneficiaryAccountsInput>
  }

  export type InvoiceCreateWithoutToBeneficiaryAccountInput = {
    invoiceTitle: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    payeeEmail: string
    payeeContact: string
    paymentDate: Date | string
    status?: string
    transactionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutInvoicesInput
    fromBankAccount: BankAccountDetailsCreateNestedOneWithoutInvoicesFromInput
  }

  export type InvoiceUncheckedCreateWithoutToBeneficiaryAccountInput = {
    id?: number
    userId: number
    invoiceTitle: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    payeeEmail: string
    payeeContact: string
    paymentDate: Date | string
    status?: string
    fromBankAccountId: number
    transactionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutToBeneficiaryAccountInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutToBeneficiaryAccountInput, InvoiceUncheckedCreateWithoutToBeneficiaryAccountInput>
  }

  export type InvoiceCreateManyToBeneficiaryAccountInputEnvelope = {
    data: InvoiceCreateManyToBeneficiaryAccountInput | InvoiceCreateManyToBeneficiaryAccountInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBeneficiaryAccountsInput = {
    update: XOR<UserUpdateWithoutBeneficiaryAccountsInput, UserUncheckedUpdateWithoutBeneficiaryAccountsInput>
    create: XOR<UserCreateWithoutBeneficiaryAccountsInput, UserUncheckedCreateWithoutBeneficiaryAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBeneficiaryAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBeneficiaryAccountsInput, UserUncheckedUpdateWithoutBeneficiaryAccountsInput>
  }

  export type UserUpdateWithoutBeneficiaryAccountsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccounts?: BankAccountDetailsUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBeneficiaryAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccounts?: BankAccountDetailsUncheckedUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InvoiceUpsertWithWhereUniqueWithoutToBeneficiaryAccountInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutToBeneficiaryAccountInput, InvoiceUncheckedUpdateWithoutToBeneficiaryAccountInput>
    create: XOR<InvoiceCreateWithoutToBeneficiaryAccountInput, InvoiceUncheckedCreateWithoutToBeneficiaryAccountInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutToBeneficiaryAccountInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutToBeneficiaryAccountInput, InvoiceUncheckedUpdateWithoutToBeneficiaryAccountInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutToBeneficiaryAccountInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutToBeneficiaryAccountInput>
  }

  export type UserCreateWithoutInvoicesInput = {
    firstName: string
    lastName: string
    nickName: string
    email: string
    password: string
    mobile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccounts?: BankAccountDetailsCreateNestedManyWithoutUserInput
    beneficiaryAccounts?: BeneficiaryAccountDetailsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvoicesInput = {
    id?: number
    firstName: string
    lastName: string
    nickName: string
    email: string
    password: string
    mobile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccounts?: BankAccountDetailsUncheckedCreateNestedManyWithoutUserInput
    beneficiaryAccounts?: BeneficiaryAccountDetailsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvoicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
  }

  export type BankAccountDetailsCreateWithoutInvoicesFromInput = {
    accountHolderName: string
    accountHolderNickName: string
    accountNumber: string
    accountType?: string
    bankName: string
    balance?: Decimal | DecimalJsLike | number | string
    branch: string
    ifscCode: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBankAccountsInput
  }

  export type BankAccountDetailsUncheckedCreateWithoutInvoicesFromInput = {
    id?: number
    userId: number
    accountHolderName: string
    accountHolderNickName: string
    accountNumber: string
    accountType?: string
    bankName: string
    balance?: Decimal | DecimalJsLike | number | string
    branch: string
    ifscCode: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankAccountDetailsCreateOrConnectWithoutInvoicesFromInput = {
    where: BankAccountDetailsWhereUniqueInput
    create: XOR<BankAccountDetailsCreateWithoutInvoicesFromInput, BankAccountDetailsUncheckedCreateWithoutInvoicesFromInput>
  }

  export type BeneficiaryAccountDetailsCreateWithoutInvoicesToInput = {
    accountHolderName: string
    accountHolderNickName: string
    accountNumber: string
    accountType?: string
    bankName: string
    branch: string
    ifscCode: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBeneficiaryAccountsInput
  }

  export type BeneficiaryAccountDetailsUncheckedCreateWithoutInvoicesToInput = {
    id?: number
    userId: number
    accountHolderName: string
    accountHolderNickName: string
    accountNumber: string
    accountType?: string
    bankName: string
    branch: string
    ifscCode: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BeneficiaryAccountDetailsCreateOrConnectWithoutInvoicesToInput = {
    where: BeneficiaryAccountDetailsWhereUniqueInput
    create: XOR<BeneficiaryAccountDetailsCreateWithoutInvoicesToInput, BeneficiaryAccountDetailsUncheckedCreateWithoutInvoicesToInput>
  }

  export type UserUpsertWithoutInvoicesInput = {
    update: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type UserUpdateWithoutInvoicesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccounts?: BankAccountDetailsUpdateManyWithoutUserNestedInput
    beneficiaryAccounts?: BeneficiaryAccountDetailsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccounts?: BankAccountDetailsUncheckedUpdateManyWithoutUserNestedInput
    beneficiaryAccounts?: BeneficiaryAccountDetailsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BankAccountDetailsUpsertWithoutInvoicesFromInput = {
    update: XOR<BankAccountDetailsUpdateWithoutInvoicesFromInput, BankAccountDetailsUncheckedUpdateWithoutInvoicesFromInput>
    create: XOR<BankAccountDetailsCreateWithoutInvoicesFromInput, BankAccountDetailsUncheckedCreateWithoutInvoicesFromInput>
    where?: BankAccountDetailsWhereInput
  }

  export type BankAccountDetailsUpdateToOneWithWhereWithoutInvoicesFromInput = {
    where?: BankAccountDetailsWhereInput
    data: XOR<BankAccountDetailsUpdateWithoutInvoicesFromInput, BankAccountDetailsUncheckedUpdateWithoutInvoicesFromInput>
  }

  export type BankAccountDetailsUpdateWithoutInvoicesFromInput = {
    accountHolderName?: StringFieldUpdateOperationsInput | string
    accountHolderNickName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    branch?: StringFieldUpdateOperationsInput | string
    ifscCode?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBankAccountsNestedInput
  }

  export type BankAccountDetailsUncheckedUpdateWithoutInvoicesFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    accountHolderName?: StringFieldUpdateOperationsInput | string
    accountHolderNickName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    branch?: StringFieldUpdateOperationsInput | string
    ifscCode?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeneficiaryAccountDetailsUpsertWithoutInvoicesToInput = {
    update: XOR<BeneficiaryAccountDetailsUpdateWithoutInvoicesToInput, BeneficiaryAccountDetailsUncheckedUpdateWithoutInvoicesToInput>
    create: XOR<BeneficiaryAccountDetailsCreateWithoutInvoicesToInput, BeneficiaryAccountDetailsUncheckedCreateWithoutInvoicesToInput>
    where?: BeneficiaryAccountDetailsWhereInput
  }

  export type BeneficiaryAccountDetailsUpdateToOneWithWhereWithoutInvoicesToInput = {
    where?: BeneficiaryAccountDetailsWhereInput
    data: XOR<BeneficiaryAccountDetailsUpdateWithoutInvoicesToInput, BeneficiaryAccountDetailsUncheckedUpdateWithoutInvoicesToInput>
  }

  export type BeneficiaryAccountDetailsUpdateWithoutInvoicesToInput = {
    accountHolderName?: StringFieldUpdateOperationsInput | string
    accountHolderNickName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    ifscCode?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBeneficiaryAccountsNestedInput
  }

  export type BeneficiaryAccountDetailsUncheckedUpdateWithoutInvoicesToInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    accountHolderName?: StringFieldUpdateOperationsInput | string
    accountHolderNickName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    ifscCode?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankAccountDetailsCreateManyUserInput = {
    id?: number
    accountHolderName: string
    accountHolderNickName: string
    accountNumber: string
    accountType?: string
    bankName: string
    balance?: Decimal | DecimalJsLike | number | string
    branch: string
    ifscCode: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BeneficiaryAccountDetailsCreateManyUserInput = {
    id?: number
    accountHolderName: string
    accountHolderNickName: string
    accountNumber: string
    accountType?: string
    bankName: string
    branch: string
    ifscCode: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateManyUserInput = {
    id?: number
    invoiceTitle: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    payeeEmail: string
    payeeContact: string
    paymentDate: Date | string
    status?: string
    fromBankAccountId: number
    toBeneficiaryAccountId: number
    transactionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankAccountDetailsUpdateWithoutUserInput = {
    accountHolderName?: StringFieldUpdateOperationsInput | string
    accountHolderNickName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    branch?: StringFieldUpdateOperationsInput | string
    ifscCode?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoicesFrom?: InvoiceUpdateManyWithoutFromBankAccountNestedInput
  }

  export type BankAccountDetailsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountHolderName?: StringFieldUpdateOperationsInput | string
    accountHolderNickName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    branch?: StringFieldUpdateOperationsInput | string
    ifscCode?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoicesFrom?: InvoiceUncheckedUpdateManyWithoutFromBankAccountNestedInput
  }

  export type BankAccountDetailsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountHolderName?: StringFieldUpdateOperationsInput | string
    accountHolderNickName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    branch?: StringFieldUpdateOperationsInput | string
    ifscCode?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeneficiaryAccountDetailsUpdateWithoutUserInput = {
    accountHolderName?: StringFieldUpdateOperationsInput | string
    accountHolderNickName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    ifscCode?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoicesTo?: InvoiceUpdateManyWithoutToBeneficiaryAccountNestedInput
  }

  export type BeneficiaryAccountDetailsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountHolderName?: StringFieldUpdateOperationsInput | string
    accountHolderNickName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    ifscCode?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoicesTo?: InvoiceUncheckedUpdateManyWithoutToBeneficiaryAccountNestedInput
  }

  export type BeneficiaryAccountDetailsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountHolderName?: StringFieldUpdateOperationsInput | string
    accountHolderNickName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    ifscCode?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUpdateWithoutUserInput = {
    invoiceTitle?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    payeeEmail?: StringFieldUpdateOperationsInput | string
    payeeContact?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromBankAccount?: BankAccountDetailsUpdateOneRequiredWithoutInvoicesFromNestedInput
    toBeneficiaryAccount?: BeneficiaryAccountDetailsUpdateOneRequiredWithoutInvoicesToNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceTitle?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    payeeEmail?: StringFieldUpdateOperationsInput | string
    payeeContact?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    fromBankAccountId?: IntFieldUpdateOperationsInput | number
    toBeneficiaryAccountId?: IntFieldUpdateOperationsInput | number
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceTitle?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    payeeEmail?: StringFieldUpdateOperationsInput | string
    payeeContact?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    fromBankAccountId?: IntFieldUpdateOperationsInput | number
    toBeneficiaryAccountId?: IntFieldUpdateOperationsInput | number
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyFromBankAccountInput = {
    id?: number
    userId: number
    invoiceTitle: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    payeeEmail: string
    payeeContact: string
    paymentDate: Date | string
    status?: string
    toBeneficiaryAccountId: number
    transactionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateWithoutFromBankAccountInput = {
    invoiceTitle?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    payeeEmail?: StringFieldUpdateOperationsInput | string
    payeeContact?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInvoicesNestedInput
    toBeneficiaryAccount?: BeneficiaryAccountDetailsUpdateOneRequiredWithoutInvoicesToNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutFromBankAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    invoiceTitle?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    payeeEmail?: StringFieldUpdateOperationsInput | string
    payeeContact?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    toBeneficiaryAccountId?: IntFieldUpdateOperationsInput | number
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyWithoutFromBankAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    invoiceTitle?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    payeeEmail?: StringFieldUpdateOperationsInput | string
    payeeContact?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    toBeneficiaryAccountId?: IntFieldUpdateOperationsInput | number
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyToBeneficiaryAccountInput = {
    id?: number
    userId: number
    invoiceTitle: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    payeeEmail: string
    payeeContact: string
    paymentDate: Date | string
    status?: string
    fromBankAccountId: number
    transactionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateWithoutToBeneficiaryAccountInput = {
    invoiceTitle?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    payeeEmail?: StringFieldUpdateOperationsInput | string
    payeeContact?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInvoicesNestedInput
    fromBankAccount?: BankAccountDetailsUpdateOneRequiredWithoutInvoicesFromNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutToBeneficiaryAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    invoiceTitle?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    payeeEmail?: StringFieldUpdateOperationsInput | string
    payeeContact?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    fromBankAccountId?: IntFieldUpdateOperationsInput | number
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyWithoutToBeneficiaryAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    invoiceTitle?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    payeeEmail?: StringFieldUpdateOperationsInput | string
    payeeContact?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    fromBankAccountId?: IntFieldUpdateOperationsInput | number
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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