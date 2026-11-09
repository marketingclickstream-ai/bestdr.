import { z } from "zod";
import { CITY_VALUES, MOBILE_PATTERN, MESSAGES } from "./lead-fields";

/**
 * Body accepted by POST /api/leads.
 * - `website` is the honeypot: real people never see or fill it.
 * - `consent` must be literally true. consent_at is set by the server, never by the browser.
 */
export const leadSchema = z.object({
  name: z.string().trim().min(1, MESSAGES.name).max(80),
  mobile: z
    .string()
    .transform((v) => v.replace(/\D/g, ""))
    .refine((v) => MOBILE_PATTERN.test(v), MESSAGES.phone),
  city: z.enum(CITY_VALUES),
  treatment: z
    .string()
    .regex(/^[a-z0-9-]{0,60}$/)
    .optional()
    .default(""),
  source: z
    .string()
    .regex(/^\/[a-z0-9/#_-]{0,150}$/i)
    .default("/"),
  consent: z.literal(true, { message: MESSAGES.consent }),
  website: z.string().max(200).optional().default(""),
});

export type LeadInput = z.infer<typeof leadSchema>;
