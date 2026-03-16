import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import packageName from "package-name";

// https://astro.build/config
export default defineConfig({
	integrations: [packageName()],
	vite: {
		plugins: [tailwindcss()],
	},
});
