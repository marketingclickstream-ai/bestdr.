// All environment switches in one place. NEXT_PUBLIC_* values are inlined at build time.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.bestdoctorsin.com").replace(/\/$/, "");
export const INDEXING_ON = process.env.NEXT_PUBLIC_INDEXING === "on";
export const LINK_MODE: "all" | "live" =
  process.env.NEXT_PUBLIC_LINK_MODE === "live" ? "live" : process.env.NEXT_PUBLIC_LINK_MODE === "all" ? "all" : INDEXING_ON ? "live" : "all";
export const PROTOTYPE_BANNER = process.env.NEXT_PUBLIC_PROTOTYPE_BANNER !== "off";
export const HI_ENABLED = process.env.NEXT_PUBLIC_HI_ENABLED === "on";
/** Digits only. A value that is not 11 to 15 digits (unset, or a placeholder like 91XXXXXXXXXX) counts as "no number". */
export const WHATSAPP_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, "");
export const HAS_WHATSAPP = /^\d{11,15}$/.test(WHATSAPP_NUMBER);
// Values pasted into a dashboard often carry spaces or quotes; strip them. The Vercel integration may
// provide the key under the older (ANON_KEY) or the newer (PUBLISHABLE_KEY) name; either works.
const clean = (v: string | undefined): string => (v ?? "").trim().replace(/^["']|["']$/g, "").trim();
export const SUPABASE_URL = clean(process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL);
export const SUPABASE_ANON_KEY = clean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);
export const HAS_SUPABASE = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}
