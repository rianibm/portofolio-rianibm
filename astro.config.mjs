import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://rianibm.com',
  integrations: [mdx(), icon()],
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'always',
  },
  prefetch: {
    defaultStrategy: 'hover',
  },
});
