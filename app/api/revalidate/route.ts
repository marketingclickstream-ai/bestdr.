import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { timingSafeEqual } from "node:crypto";

/**
 * POST /api/revalidate  { "paths": ["/gynecomastia-surgery-in-gurgaon"] }  (or {"all": true})
 * Header: x-revalidate-secret: <REVALIDATE_SECRET>
 * Call it from a Supabase database webhook (or CI) after a page is published or its data changes.
 */
export async function POST(req: Request) {
  const secret = process.env.REVALIDATE_SECRET ?? "";
  const given = req.headers.get("x-revalidate-secret") ?? "";
  const a = Buffer.from(secret), b = Buffer.from(given);
  if (!secret || a.length !== b.length || !timingSafeEqual(a, b)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const body = (await req.json().catch(() => ({}))) as { paths?: unknown; all?: unknown };
  if (body.all === true) {
    revalidatePath("/", "layout");
    return NextResponse.json({ ok: true, all: true });
  }
  const paths = Array.isArray(body.paths) ? body.paths.filter((p): p is string => typeof p === "string" && p.startsWith("/")).slice(0, 50) : [];
  paths.forEach((p) => revalidatePath(p));
  return NextResponse.json({ ok: true, paths });
}
