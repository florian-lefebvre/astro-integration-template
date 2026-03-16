import type { AstroIntegration } from "astro";

export function integration(): AstroIntegration {
	return {
		name: "package-name",
		hooks: {},
	};
}
