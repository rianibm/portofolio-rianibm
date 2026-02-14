import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog");
  const site = "https://rianibm.com";
  const today = new Date().toISOString().split("T")[0];

  const staticPages = [
    { url: "/", priority: "1.0" },
    { url: "/about", priority: "0.8" },
    { url: "/works", priority: "0.8" },
  ];

  const workPages = posts.map((post) => ({
    url: `/works/${post.id}`,
    priority: "0.6",
  }));

  const allPages = [...staticPages, ...workPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${site}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap.trim(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
