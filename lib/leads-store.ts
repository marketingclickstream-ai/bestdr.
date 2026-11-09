import { createClient } from "@supabase/supabase-js";
import { HAS_SUPABASE, SUPABASE_ANON_KEY, SUPABASE_URL } from "./env";
import { CONSENT_VERSION } from "./lead-fields";
import type { LeadInput } from "./lead-schema";

export interface StoreResult { stored: boolean; error?: string }

/**
 * Saves a lead with the anon key. The database policy allows INSERT only, so even this key
 * cannot read leads back. consent_at is stamped here, on the server.
 * Without Supabase configured nothing is stored (and nothing personal is logged).
 */
export async function storeLead(lead: LeadInput, now = new Date()): Promise<StoreResult> {
  if (!HAS_SUPABASE) return { stored: false };
  const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, { auth: { persistSession: false } });
  const { error } = await db.from("leads").insert({
    name: lead.name,
    mobile: lead.mobile,
    city: lead.city,
    treatment: lead.treatment,
    source: lead.source,
    consent_at: now.toISOString(),
    consent_version: CONSENT_VERSION,
  });
  return error ? { stored: false, error: error.message } : { stored: true };
}
