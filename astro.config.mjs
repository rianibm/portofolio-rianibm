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
    build: {
      // Keep page scripts as external files (never inlined into HTML) so
      // script-src can drop 'unsafe-inline' without a per-page hash list.
      // See scripts/csp-hashes.mjs for the remaining is:inline components.
      assetsInlineLimit: (filePath) => {
        if (/\.m?js$/.test(filePath)) return false;
      },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
  prefetch: {
    defaultStrategy: 'hover',
  },
});
