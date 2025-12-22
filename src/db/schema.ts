// pg-core PostgreSQL用のsupabaseのやつ
import { pgTable, text, varchar, serial, timestamp, integer } from "drizzle-orm/pg-core";

// drizzleのschameテーブル src/db/schema.tsとindex.tsで
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: varchar("email", {length: 255}).notNull().unique(),
});

export const ranking = pgTable("ranking", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  score: integer("score").notNull(),
  created_at: timestamp("created_at").defaultNow()
})