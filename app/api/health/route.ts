import { NextResponse } from "next/server";
import type { SiteData } from "@/content/types";
import { getSite } from "@/lib/data";
import { HAS_SUPABASE } from "@/lib/env";
import { loadFromSupabase } from "@/lib/data/supabase";
import { resolveSlug } from "@/lib/pages";

export const dynamic = "force-dynamic";

const BUILD_TIME = new Date().toISOString();

function counts(s: SiteData) {
  return {
    treatments: s.treatments.length,
    publishedTreatments: s.treatments.filter((t) => t.published).length,
    cities: s.cities.length,
    pages: s.pages.length,
    publishedPages: s.pages.filter((p) => p.published).length,
    faqs: s.faqs.length,
    posts: s.posts.length,
    reviewers: s.reviewers.length,
    resolvedGurgaonSlug: resolveSlug(s, "gynecomastia-surgery-in-gurgaon") !== null,
  };
}

/**
 * GET /api/health: counts only, no keys, URLs or row content.
 * "fresh" is a direct database read; "cached" is what the pages are built from.
 * If they differ, the site is serving stale data: call /api/revalidate or redeploy.
 */
export async function GET() {
  const body: Record<string, unknown> = { hasSupabase: HAS_SUPABASE, buildTime: BUILD_TIME };
  try {
    if (HAS_SUPABASE) body.fresh = counts(await loadFromSupabase({ fresh: true }));
    body.cached = counts(await getSite());
    Object.assign(body, body.fresh ?? body.cached);
    body.ok = true;
  } catch {
    body.ok = false;
    body.error = "read failed (see server logs)";
  }
  return NextResponse.json(body, { status: body.ok ? 200 : 503, headers: { "Cache-Control": "no-store" } });
}
