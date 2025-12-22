import { drizzle } from "drizzle-orm/singlestore/driver";
import postgres from "postgres"
import * as schema from "./schema"

const queryQlient = postgres(process.env.DATABASE_URL!);
export const db = drizzle(queryQlient, { schema });