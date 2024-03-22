import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import packageName from "package-name";
import {
	defineIntegration,
	createResolver,
} from "../package/node_modules/astro-integration-kit/dist/core/index.js";
import { watchIntegration } from "../package/node_modules/astro-integration-kit/dist/utilities/index.js";
import { z } from "astro/zod";
import { fileURLToPath } from "node:url";

const hmrIntegration = defineIntegration({
	name: "hmr",
	optionsSchema: z.object({
		path: z.string(),
	}),
	setup({ options }) {
		return {
			"astro:config:setup": (params) => {
				const { config } = params;

				const { resolve } = createResolver(fileURLToPath(config.root));
				const dir = resolve(options.path);
				console.log({ dir });

				watchIntegration({ ...params, dir });
			},
		};
	},
});

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		packageName(),
		hmrIntegration({ path: "../package/dist" }),
	],
});
