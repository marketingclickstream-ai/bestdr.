import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { footerNav, mainNav, type NavGroup, type NavLink } from "@/content/site";
import { Analytics } from "@/components/Analytics";
import { LeadDialog } from "@/components/forms/LeadDialog";
import { SvgDefs } from "@/components/illustrations/SvgDefs";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ProtoBanner } from "@/components/layout/ProtoBanner";
import { StickyBar } from "@/components/layout/StickyBar";
import { SITE_URL, PROTOTYPE_BANNER } from "@/lib/env";
import { isLinkVisible, primeLinks } from "@/lib/pages";
import { waLink } from "@/lib/whatsapp";

// Fonts are self-hosted files (app/fonts), so the build needs no network and no Google request is made.
const serif = localFont({
  src: [
    { path: "./fonts/source-serif-4-latin-wght-normal.woff2", style: "normal", weight: "200 900" },
    { path: "./fonts/source-serif-4-latin-wght-italic.woff2", style: "italic", weight: "200 900" },
  ],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Charter", "Georgia", "serif"],
});
const sans = localFont({
  src: "./fonts/inter-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: "/assets/logo-mark.png" },
};

export const viewport: Viewport = { themeColor: "#0B3440", width: "device-width", initialScale: 1 };

function visibleGroups(): NavGroup[] {
  return mainNav
    .map((g) => {
      const links = g.links.filter((l) => isLinkVisible(l.href));
      const own = isLinkVisible(g.href);
      const href = own ? g.href : links[0]?.href;
      return href ? { ...g, href, links: links.length ? links : [{ label: g.label, href }] } : null;
    })
    .filter((g): g is NavGroup => g !== null);
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  await primeLinks();
  const groups = visibleGroups();
  const footerGroups = footerNav
    .map((g) => ({ label: g.label, links: g.links.filter((l: NavLink) => isLinkVisible(l.href)) }))
    .filter((g) => g.links.length > 0);
  const message = "I have a question about plastic surgery on Bestdoctorsin";
  const wa = waLink(message);

  return (
    <html lang="en-IN" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <SvgDefs />
        <div id="site">
          <a className="skip" href="#main">Skip to content</a>
          {PROTOTYPE_BANNER && <ProtoBanner />}
          <Header groups={groups} whatsappMessage={message} />
          {children}
          <Footer groups={footerGroups} />
          <StickyBar whatsappHref={wa} />
        </div>
        <MobileMenu groups={groups} whatsappHref={wa} />
        <LeadDialog whatsappHref={wa} />
        <Analytics />
      </body>
    </html>
  );
}
