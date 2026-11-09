import { HAS_WHATSAPP, WHATSAPP_NUMBER } from "./env";

/**
 * wa.me link with a typed-in first message, or null when no valid number is configured.
 * Callers hide the WhatsApp button on null and offer the call-back sheet instead.
 */
export function waLink(message: string): string | null {
  if (!HAS_WHATSAPP) return null;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
