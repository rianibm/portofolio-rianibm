import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import vercel from "@astrojs/vercel"; // versi static

export default defineConfig({
  site: 'https://rianibm.com',
  integrations: [mdx(), tailwind(), icon()],
  adapter: vercel(), // static build (tanpa output: 'server')
});
