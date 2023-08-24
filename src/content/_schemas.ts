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

export const orientationSchema = z
  .object({
    part: z.number(),
    title: z.string(),
    attribution: z.object({
      author: z.string().default("Unknown"),
      adapted: z.boolean().default(false),
      ogTitle: z.string(),
    }),
  })
  .strict();

export type OrientationFrontmatter = z.infer<typeof orientationSchema>;
