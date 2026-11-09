import type { Crumb } from "@/lib/schema";
import { breadcrumbList, graph, organization } from "@/lib/schema";
import { Breadcrumbs } from "../layout/Breadcrumbs";
import { WhatsAppBand } from "../sections/Bands";
import { DisclaimerSection } from "../sections/Trust";
import { PageFrame } from "../ui/PageFrame";
import { Rich } from "../ui/Rich";
import { SectionHead } from "../ui/SectionHead";

export interface SimpleSection { heading: string; paragraphs?: string[]; list?: string[] }

/** Narrow single-column page for trust, policy and legal text, and for index pages with a short intro. */
export function SimplePage({ crumbs, h1, lead, sections, extra, jsonLd, waMessage = "I have a question about plastic surgery", treatment = "", city = "other" }: {
  crumbs: Crumb[];
  h1: string;
  lead: string;
  sections?: SimpleSection[];
  extra?: React.ReactNode;
  jsonLd?: object;
  waMessage?: string;
  treatment?: string;
  city?: string;
}) {
  return (
    <PageFrame jsonLd={jsonLd ?? graph(organization(), breadcrumbList(crumbs))} treatment={treatment} city={city}>
      <section className="hero" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <Breadcrumbs crumbs={crumbs} />
          <h1>{h1}</h1>
          <p className="lead" style={{ marginTop: 16 }}><Rich text={lead} /></p>
        </div>
      </section>
      <div className="wrap">
        {sections?.map((s) => (
          <section className="sec" key={s.heading}>
            <SectionHead>{s.heading}</SectionHead>
            {s.paragraphs?.map((p) => <p key={p}><Rich text={p} /></p>)}
            {s.list && <ul className="plain">{s.list.map((l) => <li key={l}><Rich text={l} /></li>)}</ul>}
          </section>
        ))}
        {extra}
        <WhatsAppBand message={waMessage} />
        <DisclaimerSection />
      </div>
    </PageFrame>
  );
}
