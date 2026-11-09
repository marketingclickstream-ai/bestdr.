/**
 * Analytics stub. OFF by default: renders nothing unless NEXT_PUBLIC_ANALYTICS=on and a script
 * URL is set. It adds one deferred script and nothing else. No form field values are ever
 * passed to it, and no third-party tracker is bundled with the site.
 */
export function Analytics() {
  const src = process.env.NEXT_PUBLIC_ANALYTICS_SRC;
  if (process.env.NEXT_PUBLIC_ANALYTICS !== "on" || !src) return null;
  const domain = process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN;
  return <script defer src={src} {...(domain ? { "data-domain": domain } : {})} />;
}
