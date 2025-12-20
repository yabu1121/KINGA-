import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

/**
 * postRouter: 投稿に関するAPIエンドポイント
 * 
 * tRPCのルーターとプロシージャの基本的な使い方の例です
 */
export const postRouter = createTRPCRouter({
  /**
   * hello: シンプルなクエリプロシージャの例
   * 
   * - publicProcedure: 認証不要のプロシージャ
   * - input: zodスキーマでinputの型を定義
   * - query: データを取得する処理（副作用なし）
   */
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `こんにちは、${input.text}！`,
      };
    }),

  /**
   * ここに独自のプロシージャを追加できます
   * 
   * 例1: mutationプロシージャ（データの作成・更新・削除）
   * create: publicProcedure
   *   .input(z.object({ name: z.string().min(1) }))
   *   .mutation(async ({ input }) => {
   *     // データを保存する処理
   *     return { success: true, name: input.name };
   *   }),
   * 
   * 例2: 複雑なクエリ
   * getAll: publicProcedure.query(() => {
   *   // データベースから全データを取得
   *   return [{ id: 1, name: "Example" }];
   * }),
   */
});
