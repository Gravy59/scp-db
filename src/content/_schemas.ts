import { z } from "astro:content";

export const scpSchema = z
  .object({
    id: z.string(),
    objectClass: z.string(),
    alias: z.string(),
    summary: z.string(),
    author: z.string().default("Unknown"),
  })
  .strict();

export type SCPFrontmatter = z.infer<typeof scpSchema>;
