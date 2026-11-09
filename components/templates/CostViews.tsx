import Link from "next/link";
import type { SiteData, Treatment } from "@/content/types";
import { inrRange } from "@/lib/format";
import { isLinkVisible } from "@/lib/pages";
import { breadcrumbList, graph, organization } from "@/lib/schema";
import { ExtrasLedger, QuoteChecker } from "../sections/Cost";
import { Rich } from "../ui/Rich";
import { CostTable } from "../sections/Cost";
import { costLines } from "@/lib/data";
import { FaqSection } from "../sections/Faq";
import { faqsFor } from "@/lib/data";
import { faqPage } from "@/lib/schema";
import { SampleChip } from "../ui/SampleChip";
import { SectionHead } from "../ui/SectionHead";
import { SimplePage } from "./SimplePage";

/** /cost: index of cost pages. */
export function CostIndex({ site }: { site: SiteData }) {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Cost", path: "/cost" }];
  const list = site.treatments.filter((t) => t.nationalRange && isLinkVisible(`/cost/${t.slug}`));
  return (
    <SimplePage
      crumbs={crumbs}
      h1="Surgery cost guides"
      lead="What changes the price of each operation, what a quote should list, and what is usually left out."
      extra={
        <section className="sec tint">
          <SectionHead>Cost pages</SectionHead>
          <ul className="plain">{list.map((t) => <li key={t.slug}><Link href={`/cost/${t.slug}`}>{t.name} cost in India</Link></li>)}</ul>
        </section>
      }
    />
  );
}

/** /cost/[treatment]: national page. City ranges live on the city pages, not here. */
export function NationalCostView({ site, t }: { site: SiteData; t: Treatment }) {
  const path = `/cost/${t.slug}`;
  const crumbs = [{ name: "Home", path: "/" }, { name: "Cost", path: "/cost" }, { name: `${t.name} cost`, path }];
  const r = t.nationalRange!;
  const cityPages = site.pages.filter((p) => p.treatmentSlug === t.slug && p.price && isLinkVisible(`/${t.slug}-in-${p.citySlug}`));
  const content = t.content;
  const faqs = faqsFor(site, t.slug, null).filter((f) => /insur|scar|weight|activity|technique|consult|pain|work|cost|price|anaesth/i.test(f.question)).slice(0, 6);
  return (
    <SimplePage
      crumbs={crumbs}
      h1={`${t.name} cost in India`}
      lead={`The usual total bill is a range, and the range depends on a few things you can ask about. The national range below is ${r.isSample ? "to be confirmed" : "dated " + r.validAsOf}.`}
      treatment={t.slug}
      waMessage={`I have a question about the cost of ${t.name.toLowerCase()}`}
      jsonLd={graph(organization(), breadcrumbList(crumbs), faqs.length > 0 && faqPage(faqs))}
      extra={
        <>
          <section className="sec tint" id="range">
            <SectionHead>The usual range</SectionHead>
            <div className="big" role="group" aria-label="Price range">
              <p className="k">{t.display?.priceLabel ?? "Usual total bill"}, India {r.isSample && <SampleChip label="To be confirmed" />}</p>
              <p className="v"><small>Rs</small> {inrRange(r.minInr, r.maxInr)}</p>
              <p className="n">{r.fromInr ? `Bills from about Rs ${r.fromInr.toLocaleString("en-IN")} are possible for small cases. ` : ""}Dated {r.validAsOf}. A final figure comes only after a surgeon has examined you.</p>
            </div>
          </section>
          {t.display?.costMode === "options" && (
            <section className="sec" id="by-area">
              <SectionHead>{t.display.costHeading ?? "What it costs"}</SectionHead>
              <div className="full">
                <CostTable
                  lines={costLines(site, t.slug, null)}
                  price={{ minInr: r.minInr, maxInr: r.maxInr, validAsOf: r.validAsOf, collectedOn: "2026-11-10", dataPoints: 1, sourceType: "founder_published", isSample: r.isSample, chipLabel: "To be confirmed", basis: "" }}
                  mode="options"
                  caption={t.display.costCaption ?? "Price table by case."}
                />
              </div>
              <p>There is no single headline figure, because a one-area plan and a full-body plan are different operations.</p>
            </section>
          )}
          <section className="sec" id="factors">
            <SectionHead>What changes the price</SectionHead>
            <table className="gt">
              <caption>Factors in a {t.name.toLowerCase()} quote</caption>
              <thead><tr><th scope="col">Factor</th><th scope="col">Why it matters</th></tr></thead>
              <tbody>{t.costFactors.map((f) => <tr key={f.factor}><th scope="row">{f.factor}</th><td data-l="Why">{f.why}</td></tr>)}</tbody>
            </table>
            {content && <ExtrasLedger items={content.extras} />}
          </section>
          {content && (
            <section className="sec" id="compare">
              <SectionHead>How to compare two quotes</SectionHead>
              <QuoteChecker checks={content.quoteChecks} />
              <p><Rich text="Read the longer guide: [how to compare two quotes](/learn/how-to-compare-surgery-quotes)." /></p>
              <p><Rich text={content.insurance} /></p>
              <p><Rich text={content.payment} /></p>
            </section>
          )}
          {faqs.length > 0 && <FaqSection faqs={faqs} heading="Questions about the cost" />}
          {cityPages.length > 0 && (
            <section className="sec tint" id="cities">
              <SectionHead>Ranges by city</SectionHead>
              <ul className="plain">
                {cityPages.map((p) => {
                  const c = site.cities.find((x) => x.slug === p.citySlug);
                  return c && p.price && <li key={c.slug}><Link href={`/${t.slug}-in-${c.slug}`}>{t.name} in {c.name}</Link>: {t.display?.priceLabel ? `${t.display.priceLabel}: ` : ""}Rs {inrRange(p.price.minInr, p.price.maxInr)} {p.price.isSample && <SampleChip label="To be confirmed" />}</li>;
                })}
              </ul>
            </section>
          )}
        </>
      }
    />
  );
}
