import { defineContentConfig, defineCollection } from "@nuxt/content";
import path from "node:path";

export default defineContentConfig({
	collections: {
		docs: defineCollection({
			type: "page",
			source: {
				include: "**/*.md",
				cwd: path.resolve("content/docs_collection_weird_name"),
			},
		}),
		blog: defineCollection({
			type: "page",
			source: {
				include: "**/*.md",
				cwd: path.resolve("content/blog"),
			},
		}),
	},
});
