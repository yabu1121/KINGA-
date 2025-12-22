// 'use client' は不要です（サーバー側で動くコードのため）

import { desc } from "drizzle-orm";
import { publicProcedure, router } from "../trpc";
import { ranking } from "~/db/schema";

export const RankingRouter = router({
  // 引数の { ctx } を括弧 () で囲む必要があります
  getRanking: publicProcedure.query(async ({ ctx }) => {
    const { db } = ctx;
    return await db
      .select()
      .from(ranking)
      .orderBy(desc(ranking.score));
  }),
});