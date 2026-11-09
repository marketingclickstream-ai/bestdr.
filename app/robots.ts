import type { MetadataRoute } from "next";
import { INDEXING_ON, SITE_URL } from "@/lib/env";

// While indexing is off, crawling is blocked as well as noindexed. When it is on, crawlers may
// fetch everything; individual pages that fail the publish gate carry their own noindex tag.
export default function robots(): MetadataRoute.Robots {
  if (!INDEXING_ON) return { rules: [{ userAgent: "*", disallow: "/" }] };
  return { rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }], sitemap: `${SITE_URL}/sitemap.xml` };
}
