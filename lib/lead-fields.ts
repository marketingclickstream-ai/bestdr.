// Lead field rules shared by the browser form and the API route.
// Plain TypeScript on purpose: the browser must not download Zod just to check a phone number.

export const CITY_CHOICES = [
  { value: "delhi", label: "Delhi" },
  { value: "gurgaon", label: "Gurgaon" },
  { value: "kanpur", label: "Kanpur" },
  { value: "lucknow", label: "Lucknow" },
  { value: "other", label: "Other city" },
] as const;

export const CITY_VALUES = CITY_CHOICES.map((c) => c.value) as [string, ...string[]];

export const MOBILE_PATTERN = /^[6-9]\d{9}$/;

/** Version tag stored with every lead, so we can show which consent wording the person saw. */
export const CONSENT_VERSION = "2026-11-v1";

export const CONSENT_TEXT =
  "OK to contact me on this number about this enquiry. I can say stop at any point and my details will be deleted.";

export const MESSAGES = {
  name: "Enter your first name.",
  phone: "Mobile number needs 10 digits, starting with 6, 7, 8 or 9.",
  consent: "Tick the box so we know you agree.",
} as const;

export interface LeadFieldErrors {
  name?: string;
  phone?: string;
  consent?: string;
}

export function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

export function validateLeadFields(input: { name: string; phone: string; consent: boolean }): LeadFieldErrors {
  const errors: LeadFieldErrors = {};
  if (!input.name.trim()) errors.name = MESSAGES.name;
  if (!MOBILE_PATTERN.test(digitsOnly(input.phone))) errors.phone = MESSAGES.phone;
  if (!input.consent) errors.consent = MESSAGES.consent;
  return errors;
}
