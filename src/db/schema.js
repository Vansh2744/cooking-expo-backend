import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";

export const favouritesTable = pgTable("favourites", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  recipeId: integer("receipe_id").notNull(),
  title: text("title").notNull(),
  image: text("image"),
  cookTime: text("cook_time"),
  serving: text("serving"),
  createdAt: timestamp("created_at").defaultNow(),
});
