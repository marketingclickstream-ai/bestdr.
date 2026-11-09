import type { MetadataRoute } from "next";
import { getSite } from "@/lib/data";
import { INDEXING_ON, absoluteUrl } from "@/lib/env";
import { CONTENT_UPDATED } from "@/content/site";
import { sitemapPaths } from "@/lib/pages";

// Only pages that are live (published, and for city pages passing G1-G13) are listed.
// With NEXT_PUBLIC_INDEXING=off the sitemap is empty.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!INDEXING_ON) return [];
  const site = await getSite();
  // lastmod is the real content date, not the build time (a sitemap that always says "now" gets ignored).
  const postDates = new Map(site.posts.map((p) => [`/learn/${p.slug}`, p.dateModified]));
  return sitemapPaths(site).map((path) => ({ url: absoluteUrl(path), lastModified: new Date(postDates.get(path) ?? CONTENT_UPDATED) }));
}
