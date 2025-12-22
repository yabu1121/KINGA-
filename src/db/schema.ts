import { serial } from "drizzle-orm/mysql-core";
import { pgTable, text, varchar,  } from "drizzle-orm/pg-core";

// drizzleのschameテーブル src/db/schema.tsとindex.tsで
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: varchar("email", {length: 255}).notNull().unique(),
});