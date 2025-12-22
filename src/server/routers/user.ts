// src/server/routers/user.ts
import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { db } from '@/db';
import { users } from '@/db/schema';

export const userRouter = router({
  // ユーザー取得クエリ
  getUsers: publicProcedure.query(async () => {
    // Drizzleを使ったSELECT
    return await db.select().from(users);
  }),

  // ユーザー作成ミューテーション
  createUser: publicProcedure
    .input(z.object({ 
      name: z.string(), 
      email: z.string().email() 
    }))
    .mutation(async ({ input }) => {
      // Drizzleを使ったINSERT
      const result = await db.insert(users).values(input).returning();
      return result[0];
    }),
});