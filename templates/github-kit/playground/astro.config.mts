import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { createResolver } from "astro-integration-kit";
import { hmrIntegration } from "astro-integration-kit/dev";

const { default: packageName } = await import("package-name");

// https://astro.build/config
export default defineConfig({
	integrations: [
		packageName(),
		hmrIntegration({
			directory: createResolver(import.meta.url).resolve("../packages/package-name/dist"),
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
