import { ZodError } from "zod"
import { initTRPC, TRPCError } from "@trpc/server";
import { db } from "~/db";

export const createTRPCContext = () => {
  return {
    db,
  }
}
type Context = {
  db: typeof db;
};

const t = initTRPC.context<Context>().create({
  errorFormatter({ shape, error }){
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const router = t.router;
export const publicProcedure = t.procedure;