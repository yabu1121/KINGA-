// 'use client' は不要です（サーバー側で動くコードのため）

import { desc, gte } from "drizzle-orm";
import { publicProcedure, router } from "../trpc";
import { ranking } from "~/db/schema";

export const RankingRouter = router({
  getAllRanking: publicProcedure.query(async ({ ctx }) => {
    const { db } = ctx;
    return await db
      .select()
      .from(ranking)
      .orderBy(desc(ranking.score));
  }),

  getTopFiveRanking: publicProcedure.query( async ({ ctx }) => {
    const { db } = ctx;
    const today = new Date();
    today.setHours(0,0,0,0);
    return await db
      .select()
      .from(ranking)
      .where(gte(ranking.created_at, today)) 
      .orderBy(desc(ranking.score))
      .limit(5);
  })
});