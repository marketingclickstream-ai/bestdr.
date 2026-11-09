import { NextResponse } from "next/server";
import { INDEXING_ON, HAS_SUPABASE } from "@/lib/env";
import { leadSchema } from "@/lib/lead-schema";
import { storeLead } from "@/lib/leads-store";
import { rateLimit } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  return (fwd?.split(",")[0] ?? req.headers.get("x-real-ip") ?? "unknown").trim();
}

/** POST /api/leads: validate, drop bots, rate limit, store. No OTP, no third-party calls. */
export async function POST(req: Request) {
  const limit = rateLimit(`lead:${clientIp(req)}`);
  if (!limit.ok) {
    return NextResponse.json({ ok: false, error: "Too many requests. Please try again later." }, { status: 429, headers: { "Retry-After": String(limit.retryAfterSec) } });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    const fields = Object.fromEntries(parsed.error.issues.map((i) => [String(i.path[0] ?? "form"), i.message]));
    return NextResponse.json({ ok: false, error: "Please check the form.", fields }, { status: 422 });
  }

  // Honeypot: a filled hidden field means a bot. Answer as if it worked, store nothing.
  if (parsed.data.website.trim() !== "") return NextResponse.json({ ok: true });

  // No database connected: say so (202, stored:false) so the form can show a demo-mode message.
  // A live site (indexing on) refuses outright instead.
  if (!HAS_SUPABASE) {
    if (INDEXING_ON) return NextResponse.json({ ok: false, error: "Enquiries are temporarily unavailable. Please use WhatsApp." }, { status: 503 });
    return NextResponse.json({ ok: true, stored: false }, { status: 202 });
  }

  const result = await storeLead(parsed.data);
  if (result.error) {
    console.error("lead insert failed:", result.error);
    return NextResponse.json({ ok: false, error: "Could not save your enquiry. Please use WhatsApp." }, { status: 502 });
  }
  return NextResponse.json({ ok: true, stored: result.stored });
}
