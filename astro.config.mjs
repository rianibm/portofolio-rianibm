import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import vercel from "@astrojs/vercel/static"; // versi static

export default defineConfig({
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  adapter: vercel(), // static build (tanpa output: 'server')
});
