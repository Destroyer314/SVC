import { pgTable, text, serial, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const resources = pgTable("resources", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  type: text("type").notNull(),
  url: text("url").notNull(),
});

export const metrics = pgTable("metrics", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  value: text("value").notNull(),
  description: text("description").notNull(),
});

export const partners = pgTable("partners", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  description: text("description").notNull(),
  organization: text("organization").notNull(),
});

export const insertResourceSchema = createInsertSchema(resources);
export const insertMetricSchema = createInsertSchema(metrics);
export const insertPartnerSchema = createInsertSchema(partners);

export type Resource = typeof resources.$inferSelect;
export type Metric = typeof metrics.$inferSelect;
export type Partner = typeof partners.$inferSelect;
