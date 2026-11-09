import type { MetadataRoute } from "next";
import { getSite } from "@/lib/data";
import { INDEXING_ON, absoluteUrl } from "@/lib/env";
import { sitemapPaths } from "@/lib/pages";

// Only pages that are live (published, and for city pages passing G1-G13) are listed.
// With NEXT_PUBLIC_INDEXING=off the sitemap is empty.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!INDEXING_ON) return [];
  const now = new Date();
  return sitemapPaths(await getSite()).map((path) => ({ url: absoluteUrl(path), lastModified: now }));
}
