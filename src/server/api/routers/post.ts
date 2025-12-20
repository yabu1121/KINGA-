import { z } from "zod";
import { createTRPCRouter, BaseProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: BaseProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
});
