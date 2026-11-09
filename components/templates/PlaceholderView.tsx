import Link from "next/link";
import type { City, SiteData, Treatment } from "@/content/types";
import { breadcrumbList, graph, organization } from "@/lib/schema";
import { isLinkVisible } from "@/lib/pages";
import { waLink } from "@/lib/whatsapp";
import { Breadcrumbs } from "../layout/Breadcrumbs";
import { CallbackBand, WhatsAppBand } from "../sections/Bands";
import { DisclaimerSection } from "../sections/Trust";
import { OpenLeadButton } from "../ui/OpenLeadButton";
import { PageFrame } from "../ui/PageFrame";
import { SectionHead } from "../ui/SectionHead";

/**
 * Short page for a treatment (or treatment x city) whose editorial content is not written or
 * reviewed yet. Always noindex. It gives a visitor the useful part: a way to ask, and links on.
 */
export function PlaceholderView({ site, t, c }: { site: SiteData; t: Treatment; c: City | null }) {
  const path = c ? `/${t.slug}-in-${c.slug}` : `/${t.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Plastic surgery", path: "/plastic-surgery" },
    ...(c ? [{ name: t.name, path: `/${t.slug}` }, { name: `In ${c.name}`, path }] : [{ name: t.name, path }]),
  ];
  const title = c ? `${t.name} in ${c.name}` : t.name;
  const waMessage = `I have a question about ${t.name.toLowerCase()}${c ? ` in ${c.name}` : ""}`;
  const guide = c && isLinkVisible(`/${t.slug}`) ? `/${t.slug}` : null;
  const related = t.related.map((s) => site.treatments.find((x) => x.slug === s)).filter((x) => x && isLinkVisible(`/${x.slug}`));
  return (
    <PageFrame jsonLd={graph(organization(), breadcrumbList(crumbs))} treatment={t.slug} city={c?.slug ?? "other"} label={title.toLowerCase()}>
      <section className="hero" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <Breadcrumbs crumbs={crumbs} />
          <h1>{title}</h1>
          <p className="lead" style={{ marginTop: 16 }}>{t.summary}</p>
          <p>This page is being prepared. The cost lines, recovery calendar and risks will be added when a surgeon has reviewed them, and not before. {c ? `We have not confirmed a partner facility in ${c.name} yet.` : ""}</p>
          <div className="cta" style={{ marginTop: 16 }}>
            {waLink(waMessage) ? <a className="btn btn-wa" href={waLink(waMessage) ?? undefined}>Message us on WhatsApp</a> : <OpenLeadButton>Call me back</OpenLeadButton>}
          </div>
        </div>
      </section>
      <div className="wrap">
        <section className="sec">
          <SectionHead>Meanwhile</SectionHead>
          <ul className="plain">
            {guide && <li><Link href={guide}>{t.name}: the procedure guide</Link></li>}
            {isLinkVisible("/plastic-surgery") && <li><Link href="/plastic-surgery">All plastic surgery</Link></li>}
            {related.map((r) => r && <li key={r.slug}><Link href={`/${r.slug}`}>{r.name}</Link></li>)}
            {isLinkVisible("/how-we-verify-surgeons") && <li><Link href="/how-we-verify-surgeons">How we check surgeons</Link></li>}
          </ul>
        </section>
        <WhatsAppBand message={waMessage} />
        <CallbackBand treatment={t.slug} city={c?.slug ?? "other"} />
        <DisclaimerSection />
      </div>
    </PageFrame>
  );
}
