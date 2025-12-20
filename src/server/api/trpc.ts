/**
 * tRPCのコンテキストとプロシージャの定義
 * 
 * ここでは、tRPC APIのコンテキストとプロシージャ（publicProcedure等）を定義します。
 */
import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";

/**
 * tRPCのコンテキストを作成
 * 
 * コンテキストには全てのプロシージャでアクセスできるデータを含めます。
 * 例: データベース接続、認証情報、リクエストヘッダーなど
 */
export const createTRPCContext = async (opts: { headers: Headers }) => {
  return {
    // ここにコンテキストに含めたいデータを追加できます
    // 例: db, session, など
    headers: opts.headers,
  };
};

/**
 * tRPCインスタンスを初期化
 */
const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

/**
 * tRPCルーターを作成するヘルパー関数
 */
export const createCallerFactory = t.createCallerFactory;

/**
 * ルーターを作成
 */
export const createTRPCRouter = t.router;

/**
 * publicProcedure: 認証不要なプロシージャ
 * 
 * 誰でもアクセスできるAPIエンドポイントを作成する際に使用します。
 */
export const publicProcedure = t.procedure;

/**
 * ここに独自のプロシージャを追加できます
 * 
 * 例: 認証が必要なプロシージャ
 * export const protectedProcedure = t.procedure.use(async ({ ctx, next }) => {
 *   if (!ctx.session || !ctx.session.user) {
 *     throw new TRPCError({ code: "UNAUTHORIZED" });
 *   }
 *   return next({
 *     ctx: {
 *       session: { ...ctx.session, user: ctx.session.user },
 *     },
 *   });
 * });
 */
