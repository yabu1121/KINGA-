import { appRouter } from "~/server/root";
import { db } from "~/db";

// サーバーサイドで直接呼び出す用のクライアント
export const serverClient = appRouter.createCaller({
  db, 
});