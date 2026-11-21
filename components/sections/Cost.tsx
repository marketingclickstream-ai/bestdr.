import type { CareKind, CostLine, CostUnit, IncludeKeyDef, IncludeState, PriceMeta } from "@/content/types";
import { inrRange, longDate } from "@/lib/format";
import { uniqueCostLines } from "@/lib/data";
import { FootRef } from "../ui/FootRef";
import { Note } from "../ui/Note";
import { Rich } from "../ui/Rich";
import { ResponsiveDetails } from "../ui/ResponsiveDetails";
import { SampleChip } from "../ui/SampleChip";
import { SectionHead } from "../ui/SectionHead";

/** The big range figure with its basis line. */
export function PriceFigure({ price, label }: { price: PriceMeta | null; label: string }) {
  if (!price) {
    return (
      <div className="big" role="group" aria-label="Price range">
        <p className="k">{label} <SampleChip label="To be confirmed" /></p>
        <p className="v">To be confirmed</p>
        <p className="n">No dated range is shown yet. A range appears here only after dated written quotes are collected for this city.</p>
      </div>
    );
  }
  return (
    <div className="big" role="group" aria-label="Price range">
      <p className="k">{label} <SampleChip label={price.isSample ? price.chipLabel : "Dated"} /><FootRef n={2} /></p>
      <p className="v"><small>Rs</small> {inrRange(price.minInr, price.maxInr)}</p>
      <p className="n">{price.basis}</p>
    </div>
  );
}

/** Price table: one row per fee, then the total. A fee with no separate figure reads "In the total". */
export function CostTable({ lines: raw, price, caption, mode = "sum" }: { lines: CostLine[]; price: PriceMeta | null; caption: string; mode?: "sum" | "options" }) {
  const lines = uniqueCostLines(raw); // the total counts unique lines only
  return (
    <table className="gt pt">
      <caption className="cap-t"><span>{caption}</span> <SampleChip label={!price || price.isSample ? (price?.chipLabel ?? "To be confirmed") : "Dated"} /></caption>
      <thead>
        <tr><th scope="col">{mode === "options" ? "Case" : "Line in the quote"}</th><th scope="col">Typical range, Rs</th><th scope="col">What it depends on</th></tr>
      </thead>
      <tbody>
        {lines.map((l) => (
          <tr key={l.component}>
            <th scope="row">{l.component}</th>
            <td className="r" data-l="Range">{l.minInr !== null && l.maxInr !== null ? inrRange(l.minInr, l.maxInr) : mode === "options" ? <SampleChip label="To be confirmed" /> : "In the total"}</td>
            <td data-l="Depends on">{l.note}</td>
          </tr>
        ))}
        {mode === "sum" && price && (
          <tr className="tot">
            <th scope="row">Total, {lines.length === 3 ? "three fees" : `${lines.length} lines`}</th>
            <td className="r" data-l="Range">{inrRange(price.minInr, price.maxInr)}</td>
            <td data-l="Depends on">Sum of the lines above</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export function ExtrasLedger({ items }: { items: string[] }) {
  return (
    <>
      <p className="lh">Not in the range: ask for these in writing</p>
      <ul className="ledger xtra">
        {items.map((x) => <li key={x}><span className="l">{x}</span><i></i><em>ask</em></li>)}
      </ul>
    </>
  );
}

/** Tick table for comparing two written quotes. Nothing is saved or sent. */
export function QuoteChecker({ checks }: { checks: string[] }) {
  return (
    <ResponsiveDetails summary="Compare two written quotes (tick table)">
      <table className="cmp">
        <caption>Tick what each written quote contains. Nothing is saved or sent.</caption>
        <thead>
          <tr><th scope="col">Does the quote&hellip;</th><th scope="col">Quote A</th><th scope="col">Quote B</th></tr>
        </thead>
        <tbody>
          {checks.map((c) => (
            <tr key={c}>
              <th scope="row">{c}</th>
              {["A", "B"].map((q) => (
                <td key={q}><label><input type="checkbox" /><span className="sr">Quote {q}: {c}</span></label></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </ResponsiveDetails>
  );
}

const STATE_TEXT: Record<IncludeState, string> = { included: "Included", excluded: "Not included", varies: "Varies, ask", unknown: "To be confirmed" };

/** Non-surgical topics: what the price covers, row by row, and the question to ask for each. */
export function IncludesTable({ defs, includes }: { defs: readonly IncludeKeyDef[]; includes: Partial<Record<string, IncludeState>> }) {
  if (defs.length === 0) return null;
  return (
    <div className="full">
      <table className="gt">
        <caption>What the price covers, and what to ask</caption>
        <thead><tr><th scope="col">Item</th><th scope="col">Status</th><th scope="col">Ask like this</th></tr></thead>
        <tbody>
          {defs.map((d) => {
            const state = includes[d.key] ?? "unknown";
            return (
              <tr key={d.key}>
                <th scope="row">{d.label}</th>
                <td data-l="Status">{state === "unknown" ? <SampleChip label="To be confirmed" /> : STATE_TEXT[state]}</td>
                <td data-l="Ask">{d.ask}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const UNIT_PHRASE: Record<CostUnit, string> = { total: "one bill", session: "per session", course: "per course", area: "per area", graft: "per graft" };

export function CostSection({ treatmentSlug, cityName, price, lines, extras, process, checks, termNote, mode, heading, caption, priceLabel, kind = "surgical", unit = "total", includeDefs, includes, compareHref }: {
  mode?: "sum" | "options";
  heading?: string;
  caption?: string;
  priceLabel?: string;
  treatmentSlug: string;
  cityName: string;
  price: PriceMeta | null;
  lines: CostLine[];
  extras: string[];
  process: { title: string; text: string }[];
  checks: string[];
  termNote?: string;
  kind?: CareKind;
  unit?: CostUnit;
  /** Non-surgical: rows of the include table. */
  includeDefs?: readonly IncludeKeyDef[];
  includes?: Partial<Record<string, IncludeState>>;
  /** Guide linked as "compare two quotes". Surgical default is the surgery guide; none for non-surgical unless set. */
  compareHref?: string;
}) {
  const non = kind === "non-surgical";
  const effectiveMode = mode ?? (non ? "options" : "sum");
  const pro = non ? "doctor" : "surgeon";
  const sampleOrNone = !price || price.isSample;
  const href = compareHref ?? (non ? null : "/learn/how-to-compare-surgery-quotes");
  return (
    <section className="sec tint" id="cost">
      <SectionHead>{heading ? `${heading} in ${cityName}` : non ? `What it costs in ${cityName}, line by line` : `What it costs in ${cityName}, line by line`}</SectionHead>
      {non ? (
        <p className="lead">Most lines are priced {UNIT_PHRASE[unit]}, and a line that is not says so. The range is {sampleOrNone ? "to be confirmed in writing with the partner clinic" : `dated ${longDate(price!.collectedOn)}`}. The final figure comes only after a {pro} has examined you.</p>
      ) : (
        <p className="lead">One bill. The range below is {sampleOrNone ? "to be confirmed in writing for the partner hospital" : `dated ${longDate(price!.collectedOn)}`}. The final number comes only after a {pro} has examined you.</p>
      )}
      <PriceFigure price={price} label={priceLabel ? `${priceLabel} in ${cityName}` : `Usual total bill in ${cityName}`} />
      <Note label="Ask in writing">A quote counts only if it lists the {non ? "lines" : "fees"} one by one and says what is left out. A single round number tells you nothing.</Note>
      <div className="full">
        <CostTable lines={lines} price={price} mode={effectiveMode} caption={caption ?? (non ? "Price lines, each with its own range." : "Price table for the operation, both sides.")} />
      </div>
      {non && includeDefs && <IncludesTable defs={includeDefs} includes={includes ?? {}} />}
      <ExtrasLedger items={extras} />
      <p style={{ marginTop: 14 }}>
        <Rich text={`[What changes the price](/cost/${treatmentSlug}) is explained on the national cost page.${href ? ` If you already hold a quote, learn how to [compare two quotes](${href}) line by line.` : ""}`} />
      </p>
      {termNote && <Note label="Term" desktopOnly>{termNote}</Note>}
      <h3>How you get to a quote</h3>
      <ol className="steps">
        {process.map((s) => <li key={s.title}><div><b>{s.title}</b><span>{s.text}</span></div></li>)}
      </ol>
      <QuoteChecker checks={checks} />
    </section>
  );
}
