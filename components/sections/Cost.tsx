import type { CostLine, PriceMeta } from "@/content/types";
import { inrRange, longDate } from "@/lib/format";
import { uniqueCostLines } from "@/lib/data";
import { FootRef } from "../ui/FootRef";
import { Note } from "../ui/Note";
import { Rich } from "../ui/Rich";
import { ResponsiveDetails } from "../ui/ResponsiveDetails";
import { SampleChip } from "../ui/SampleChip";
import { SectionHead } from "../ui/SectionHead";

/** The big range figure with its basis line. */
export function PriceFigure({ price, label }: { price: PriceMeta; label: string }) {
  return (
    <div className="big" role="group" aria-label="Price range">
      <p className="k">{label} <SampleChip label={price.isSample ? price.chipLabel : "Dated"} /><FootRef n={2} /></p>
      <p className="v"><small>Rs</small> {inrRange(price.minInr, price.maxInr)}</p>
      <p className="n">{price.basis}</p>
    </div>
  );
}

/** Price table: one row per fee, then the total. A fee with no separate figure reads "In the total". */
export function CostTable({ lines: raw, price, caption, mode = "sum" }: { lines: CostLine[]; price: PriceMeta; caption: string; mode?: "sum" | "options" }) {
  const lines = uniqueCostLines(raw); // the total counts unique lines only
  return (
    <table className="gt pt">
      <caption className="cap-t"><span>{caption}</span> <SampleChip label={price.isSample ? price.chipLabel : "Dated"} /></caption>
      <thead>
        <tr><th scope="col">{mode === "options" ? "Case" : "Line in the quote"}</th><th scope="col">Typical range, Rs</th><th scope="col">What it depends on</th></tr>
      </thead>
      <tbody>
        {lines.map((l) => (
          <tr key={l.component}>
            <th scope="row">{l.component}</th>
            <td className="r" data-l="Range">{l.minInr !== null && l.maxInr !== null ? inrRange(l.minInr, l.maxInr) : "In the total"}</td>
            <td data-l="Depends on">{l.note}</td>
          </tr>
        ))}
        {mode === "sum" && (
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

export function CostSection({ treatmentSlug, cityName, price, lines, extras, process, checks, termNote, mode = "sum", heading, caption, priceLabel }: {
  mode?: "sum" | "options";
  heading?: string;
  caption?: string;
  priceLabel?: string;
  treatmentSlug: string;
  cityName: string;
  price: PriceMeta;
  lines: CostLine[];
  extras: string[];
  process: { title: string; text: string }[];
  checks: string[];
  termNote?: string;
}) {
  return (
    <section className="sec tint" id="cost">
      <SectionHead>{heading ? `${heading} in ${cityName}` : `What it costs in ${cityName}, line by line`}</SectionHead>
      <p className="lead">One bill. The range below is {price.isSample ? "to be confirmed in writing for the partner hospital" : `dated ${longDate(price.collectedOn)}`}. The final number comes only after a surgeon has examined you.</p>
      <PriceFigure price={price} label={priceLabel ? `${priceLabel} in ${cityName}` : `Usual total bill in ${cityName}`} />
      <Note label="Ask in writing">A quote counts only if it lists the fees one by one and says what is left out. A single round number tells you nothing.</Note>
      <div className="full">
        <CostTable lines={lines} price={price} mode={mode} caption={caption ?? "Price table for the operation, both sides."} />
      </div>
      <ExtrasLedger items={extras} />
      <p style={{ marginTop: 14 }}>
        <Rich text={`[What changes the price](/cost/${treatmentSlug}) is explained on the national cost page. If you already hold a quote, learn how to [compare two quotes](/learn/how-to-compare-surgery-quotes) line by line.`} />
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

