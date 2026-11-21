import Link from "next/link";
import type { FaqRow, SiteData, Treatment } from "@/content/types";
import { inrRange } from "@/lib/format";
import { isLinkVisible } from "@/lib/pages";
import { breadcrumbList, graph, organization } from "@/lib/schema";
import { careKindOf, costUnitOf, groupByCategory, hasCostPage, isNonSurgical, priceLabelOf } from "@/lib/topic";
import { ExtrasLedger, QuoteChecker } from "../sections/Cost";
import { Rich } from "../ui/Rich";
import { CostTable } from "../sections/Cost";
import { costLines } from "@/lib/data";
import { ExtraSections } from "../sections/Extra";
import { FaqSection } from "../sections/Faq";
import { faqsFor } from "@/lib/data";
import { faqPage } from "@/lib/schema";
import { SampleChip } from "../ui/SampleChip";
import { SectionHead } from "../ui/SectionHead";
import { SimplePage } from "./SimplePage";

/** /cost: index of cost pages, grouped by category. */
export function CostIndex({ site }: { site: SiteData }) {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Cost", path: "/cost" }];
  const list = site.treatments.filter((t) => hasCostPage(t) && isLinkVisible(`/cost/${t.slug}`));
  const groups = groupByCategory(list);
  return (
    <SimplePage
      crumbs={crumbs}
      h1="Cost guides"
      lead="What changes the price of each operation or treatment, what a quote should list, and what is usually left out."
      extra={
        <>
          {groups.map((g) => (
            <section className="sec tint" key={g.info.id} id={`cost-${g.info.id}`}>
              <SectionHead>{g.info.label}</SectionHead>
              <ul className="plain">{g.items.map((t) => <li key={t.slug}><Link href={`/cost/${t.slug}`}>{t.name} cost in India</Link></li>)}</ul>
            </section>
          ))}
        </>
      }
    />
  );
}

const UNIT_WORD = { total: "one bill", session: "per session", course: "per course", area: "per area", graft: "per graft" } as const;

/** /cost/[treatment]: national page. City ranges live on the city pages, not here. */
export function NationalCostView({ site, t }: { site: SiteData; t: Treatment }) {
  const path = `/cost/${t.slug}`;
  const crumbs = [{ name: "Home", path: "/" }, { name: "Cost", path: "/cost" }, { name: `${t.name} cost`, path }];
  const r = t.nationalRange; // may be missing for a topic whose range is still pending
  const non = isNonSurgical(t);
  const kind = careKindOf(t);
  const unit = costUnitOf(t);
  const cp = t.costPage;
  const cityPages = site.pages.filter((p) => p.treatmentSlug === t.slug && p.price && isLinkVisible(`/${t.slug}-in-${p.citySlug}`));
  const content = t.content;
  const nationalLines = costLines(site, t.slug, null);
  const hubFaqs = faqsFor(site, t.slug, null);
  const costFaqs: FaqRow[] = cp
    ? cp.faqs.map((f, i) => ({ id: `cost-faq-${i + 1}`, treatmentSlug: t.slug, citySlug: null, order: i + 1, question: f.q, answer: f.a }))
    : hubFaqs.filter((f) => /insur|scar|weight|activity|technique|consult|pain|work|cost|price|anaesth|session|course/i.test(f.question)).slice(0, 6);
  const priceMeta = r ? { minInr: r.minInr, maxInr: r.maxInr, validAsOf: r.validAsOf, collectedOn: "2026-11-10", dataPoints: 1, sourceType: "founder_published" as const, isSample: r.isSample, chipLabel: "To be confirmed", basis: "" } : null;
  const priceLabel = priceLabelOf(t);
  const showOptions = t.display?.costMode === "options" || non || Boolean(cp);
  const compareHref = t.display?.compareGuideHref ?? (non ? null : "/learn/how-to-compare-surgery-quotes");

  const lead = cp?.answer ?? (r
    ? `The usual ${non ? "cost" : "total bill"} is a range${non ? `, priced ${UNIT_WORD[unit]}` : ""}, and the range depends on a few things you can ask about. The national range below is ${r.isSample ? "to be confirmed" : "dated " + r.validAsOf}.`
    : `The price of ${t.name.toLowerCase()} depends on a few things you can ask about. No dated national range is shown yet. {tbc}`);

  return (
    <SimplePage
      crumbs={crumbs}
      h1={cp?.h1 ?? `${t.name} cost in India`}
      lead={lead}
      treatment={t.slug}
      kind={kind}
      waMessage={`I have a question about the cost of ${t.name.toLowerCase()}`}
      jsonLd={graph(organization(), breadcrumbList(crumbs), costFaqs.length > 0 && faqPage(costFaqs))}
      extra={
        <>
          <section className="sec tint" id="range">
            <SectionHead>{cp?.rangeHeading ?? "The usual range"}</SectionHead>
            {r ? (
              <div className="big" role="group" aria-label="Price range">
                <p className="k">{priceLabel}, India {r.isSample && <SampleChip label="To be confirmed" />}</p>
                <p className="v"><small>Rs</small> {inrRange(r.minInr, r.maxInr)}</p>
                <p className="n">{r.fromInr ? `Bills from about Rs ${r.fromInr.toLocaleString("en-IN")} are possible for small cases. ` : ""}Dated {r.validAsOf}. A final figure comes only after {non ? "a doctor" : "a surgeon"} has examined you.</p>
              </div>
            ) : (
              <div className="big" role="group" aria-label="Price range">
                <p className="k">{priceLabel}, India <SampleChip label="To be confirmed" /></p>
                <p className="v">To be confirmed</p>
                <p className="n">No figure is shown until dated written quotes are collected. Nothing here is copied from another site.</p>
              </div>
            )}
          </section>
          {showOptions && nationalLines.length > 0 && (
            <section className="sec" id="by-area">
              <SectionHead>{t.display?.costHeading ?? (non ? "What it costs, line by line" : "What it costs")}</SectionHead>
              <div className="full">
                <CostTable lines={nationalLines} price={priceMeta} mode="options" caption={cp?.rangeCaption ?? t.display?.costCaption ?? "Price table by case."} />
              </div>
              <p>{non ? "There is no single headline figure, because each line is a different part of the plan." : "There is no single headline figure, because a one-area plan and a full-body plan are different operations."}</p>
            </section>
          )}
          {cp?.planner && (
            <section className="sec" id="planner">
              <SectionHead>{cp.planner.heading}</SectionHead>
              <p className="lead"><Rich text={cp.planner.formula} /></p>
              <ol className="steps">
                {cp.planner.steps.map((s) => <li key={s}><div><span><Rich text={s} /></span></div></li>)}
              </ol>
            </section>
          )}
          <ExtraSections sections={cp?.extraSections} />
          <section className="sec" id="factors">
            <SectionHead>What changes the price</SectionHead>
            <table className="gt">
              <caption>Factors in a {t.name.toLowerCase()} quote</caption>
              <thead><tr><th scope="col">Factor</th><th scope="col">Why it matters</th></tr></thead>
              <tbody>{(cp?.factors ?? t.costFactors).map((f) => <tr key={f.factor}><th scope="row">{f.factor}</th><td data-l="Why"><Rich text={f.why} /></td></tr>)}</tbody>
            </table>
            {(cp?.notIncluded ?? content?.extras) && <ExtrasLedger items={cp?.notIncluded ?? content?.extras ?? []} />}
          </section>
          {(content || cp) && (
            <section className="sec" id="compare">
              <SectionHead>How to compare two quotes</SectionHead>
              {cp ? <ul className="plain">{cp.compareQuotes.map((q) => <li key={q}><Rich text={q} /></li>)}</ul> : content && <QuoteChecker checks={content.quoteChecks} />}
              {compareHref && <p><Rich text={`Read the longer guide: [how to compare two quotes](${compareHref}).`} /></p>}
              {(cp?.insurance ?? content?.insurance) && <p><Rich text={(cp?.insurance ?? content?.insurance) as string} /></p>}
              {(cp?.payment ?? content?.payment) && <p><Rich text={(cp?.payment ?? content?.payment) as string} /></p>}
              {cp?.method && <p><Rich text={cp.method} /></p>}
            </section>
          )}
          {costFaqs.length > 0 && <FaqSection faqs={costFaqs} heading="Questions about the cost" />}
          {cp && cp.sources.length > 0 && (
            <section className="sec" id="sources">
              <SectionHead>Sources</SectionHead>
              <ul className="src">{cp.sources.map((s) => <li key={s.href}><a href={s.href} rel="noopener">{s.label}</a></li>)}</ul>
            </section>
          )}
          {cityPages.length > 0 && (
            <section className="sec tint" id="cities">
              <SectionHead>Ranges by city</SectionHead>
              <ul className="plain">
                {cityPages.map((p) => {
                  const c = site.cities.find((x) => x.slug === p.citySlug);
                  return c && p.price && <li key={c.slug}><Link href={`/${t.slug}-in-${c.slug}`}>{t.name} in {c.name}</Link>: {priceLabel}: Rs {inrRange(p.price.minInr, p.price.maxInr)} {p.price.isSample && <SampleChip label="To be confirmed" />}</li>;
                })}
              </ul>
            </section>
          )}
        </>
      }
    />
  );
}
