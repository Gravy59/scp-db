import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), sitemap()],
  site: "https://scp-db-zeta.vercel.app",
  redirects: {
    "/orientation": "/orientation/welcome",
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/noop",
    },
  },
});
