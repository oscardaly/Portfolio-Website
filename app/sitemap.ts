import type { MetadataRoute } from "next";

import { site, projects } from "@/config";
import { blogPosts } from "@/app/blogs/data";

// Dynamic sitemap served at /sitemap.xml. Derives its URLs from the same config
// the site renders from, so new projects and blog posts appear automatically.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap = [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects
    .filter((p) => p.href)
    .map((p) => ({
      url: `${base}${p.href}`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    }));

  const blogRoutes: MetadataRoute.Sitemap = Array.from(blogPosts.keys()).map(
    (slug) => ({
      url: `${base}/blogs/${slug}`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    }),
  );

  return [...home, ...projectRoutes, ...blogRoutes];
}
