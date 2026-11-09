import type { NextConfig } from "next";

// Content-Security-Policy. The site loads nothing from third parties except click-to-load YouTube
// (no-cookie) frames. Next.js writes small inline scripts into static pages, so scripts allow
// 'unsafe-inline' (a per-request nonce would make every page dynamic and defeat ISR).
const dev = process.env.NODE_ENV !== "production";
// Optional chat widget (loaded only after a visitor clicks "Chat with us"). Its script origin, plus any extra origins
// it needs (comma-separated in CHATBOT_ORIGINS, e.g. "https://api.example.com,https://cdn.example.com"), are allowed here.
const originOf = (u: string): string => { try { return new URL(u).origin; } catch { return ""; } };
const chat = [originOf(process.env.NEXT_PUBLIC_CHATBOT_SRC ?? ""), ...(process.env.CHATBOT_ORIGINS ?? "").split(",").map((x) => originOf(x.trim()))].filter(Boolean);
const chatList = chat.length ? " " + [...new Set(chat)].join(" ") : "";
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${dev ? " 'unsafe-eval'" : ""}${chatList}`,
  `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com${chatList}`,
  "font-src 'self' https://fonts.gstatic.com data:",
  `img-src 'self' data: blob:${chatList}`,
  `connect-src 'self'${chatList}`,
  `frame-src https://www.youtube-nocookie.com${chatList}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

// A live site must have a working WhatsApp number (QA-01): fail the build instead of shipping a dead button.
if (process.env.NEXT_PUBLIC_INDEXING === "on" && !/^\d{11,15}$/.test((process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, ""))) {
  throw new Error("NEXT_PUBLIC_INDEXING=on needs a valid NEXT_PUBLIC_WHATSAPP_NUMBER (11 to 15 digits).");
}

const config: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: { formats: ["image/webp"] },
  async redirects() {
    return [
      // One URL per page (SEO plan C4): /blog is served from /learn.
      { source: "/blog", destination: "/learn", permanent: true },
      { source: "/blog/:slug", destination: "/learn/:slug", permanent: true },
      // The plan calls the page /how-we-work; the canonical URL is /how-we-verify-surgeons.
      { source: "/how-we-work", destination: "/how-we-verify-surgeons", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default config;
