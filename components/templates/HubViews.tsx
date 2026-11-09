import Link from "next/link";
import type { City, SiteData } from "@/content/types";
import { isLinkVisible } from "@/lib/pages";
import { breadcrumbList, graph, itemList, organization } from "@/lib/schema";
import { treatmentRangeText } from "@/lib/view";
import { SampleChip } from "../ui/SampleChip";
import { SectionHead } from "../ui/SectionHead";
import { SimplePage } from "./SimplePage";

/** /plastic-surgery: every treatment page, grouped nowhere, linked once each. */
export function PlasticSurgeryHub({ site }: { site: SiteData }) {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Plastic surgery", path: "/plastic-surgery" }];
  const shown = site.treatments.filter((t) => isLinkVisible(`/${t.slug}`));
  return (
    <SimplePage
      crumbs={crumbs}
      h1="Plastic surgery in India"
      lead="One page per operation: what it is, the price line by line, recovery by week, and the risks to ask about. Pages without a surgeon's review are marked."
      jsonLd={graph(organization(), breadcrumbList(crumbs), itemList("Plastic surgery guides", shown.map((t) => ({ name: t.name, path: `/${t.slug}` }))))}
      sections={[{ heading: "How we write these pages", paragraphs: ["See our [editorial policy](/editorial-policy) and [how we check surgeons](/how-we-verify-surgeons)."] }]}
      extra={
        <section className="sec tint" id="treatments">
          <SectionHead>Operations</SectionHead>
          <ul className="rr full">
            {shown.map((t) => (
              <li key={t.slug}>
                <div />
                <div>
                  <h3><Link href={`/${t.slug}`}>{t.name}</Link></h3>
                  <p>{t.summary}</p>
                  <p className="meta">{t.content ? "Full guide" : <>Being prepared <SampleChip label="Draft" /></>}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      }
    />
  );
}

/** /plastic-surgery-in-[city]: what is available in the city and links to its treatment pages. */
export function CityHub({ site, c }: { site: SiteData; c: City }) {
  const path = `/plastic-surgery-in-${c.slug}`;
  const crumbs = [{ name: "Home", path: "/" }, { name: "Plastic surgery", path: "/plastic-surgery" }, { name: `In ${c.name}`, path }];
  const pages = site.pages.filter((p) => p.citySlug === c.slug && isLinkVisible(`/${p.treatmentSlug}-in-${c.slug}`));
  return (
    <SimplePage
      crumbs={crumbs}
      h1={`Plastic surgery in ${c.name}`}
      lead={c.summary}
      city={c.slug}
      waMessage={`I have a question about plastic surgery in ${c.name}`}
      jsonLd={graph(organization(), breadcrumbList(crumbs), itemList(`Plastic surgery pages for ${c.name}`, pages.map((p) => ({ name: site.treatments.find((t) => t.slug === p.treatmentSlug)?.name ?? p.treatmentSlug, path: `/${p.treatmentSlug}-in-${c.slug}` }))))}
      extra={
        <section className="sec tint" id="available">
          <SectionHead>Operations in {c.name}</SectionHead>
          {pages.length === 0 ? <p>No page for {c.name} is ready yet.</p> : (
            <ul className="rr full">
              {pages.map((p) => {
                const t = site.treatments.find((x) => x.slug === p.treatmentSlug);
                if (!t) return null;
                return (
                  <li key={t.slug}>
                    <div />
                    <div>
                      <h3><Link href={`/${t.slug}-in-${c.slug}`}>{t.name} in {c.name}</Link></h3>
                      <p>{treatmentRangeText(p)}</p>
                      <p className="meta">{p.isPlaceholder ? <>Being prepared <SampleChip label="Draft" /></> : <>Price lines, recovery, risks</>}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      }
    />
  );
}
