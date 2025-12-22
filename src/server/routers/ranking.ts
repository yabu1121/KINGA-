import { desc, gte } from "drizzle-orm";
import { publicProcedure, router } from "../trpc";
import { ranking } from "~/db/schema";
import z from "zod";

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
  }),
  postScore: publicProcedure
  .input(
    z.object({
      name: z.string().min(1, "名前を入力してください"),
      score: z.number().nonnegative(), // nonnegative: 非負
    })
  )
  .mutation( async ({ctx, input}) => {
    const { db } = ctx;
    await db
    .insert(ranking)
    .values({
      name: input.name,
      score: input.score,
    });
    return { success: true, message: "ランキングに登録しました。"}
  })
});