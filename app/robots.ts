import type { MetadataRoute } from "next";

import { site } from "@/config";

// Served at /robots.txt. Allows everything and points crawlers at the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
