import { RankingRouter } from "./routers/ranking";
import { router } from "./trpc";

export const appRouter = router({
  ranking: RankingRouter
})

// 動的タイプ宣言
export type AppRouter = typeof appRouter;