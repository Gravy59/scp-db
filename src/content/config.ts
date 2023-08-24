import { defineCollection } from "astro:content";
import { scpSchema } from "./_schemas";

const scp = defineCollection({
  schema: scpSchema,
});

export const collections = { scp };
