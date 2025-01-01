// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-integration-template.netlify.app",
  integrations: [
    starlight({
      title: "Astro Integration Template",
      logo: {
        src: "./src/assets/houston.webp",
      },
      social: {
        github: "https://github.com/florian-lefebvre/astro-integration-kit",
      },
      sidebar: [
        {
          label: "Get Started",
          items: [
            { label: "Prerequisites", link: "/get-started/prerequisites/" },
            { label: "Pick a template", link: "/get-started/pick-a-template/" },
          ],
        },
        {
          label: "Templates",
          items: [{ label: "Manual (AIK)", link: "/templates/manual-kit/" }],
        },
      ],
    }),
  ],
});
