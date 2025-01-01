import { defineCollection } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({ type: "content", schema: docsSchema() }),
};
