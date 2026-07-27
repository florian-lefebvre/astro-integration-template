import { defineConfig } from "tsdown";
import pkg from "./package.json" with { type: "json"};

export default defineConfig({
  entry: ["src/**/*.(ts|js)"],
  format: ["esm"],
  target: "node22",
  unbundle: true,
  dts: true,
  sourcemap: false,
  clean: true,
  splitting: false,
  minify: false,
  tsconfig: "tsconfig.json",
  deps: {
    neverBundle: [
      ...Object.keys(pkg.peerDependencies),
      // Keep Astro component as external, since Astro will take care of them
      /.*\.astro$/,
      // Keep virtual modules as external
      /^astro:.*/,
      // Keep JSON external so it's copied as an asset. Rolldown's
      // JSON handling generates named exports for valid-identifier top-level
      // keys, but in unbundle mode it emits the export specifiers without
      // declaring the bindings
      /.*\.json$/,
    ],
  },
});
