import type { ImageSlotData, TreatmentContent, TreatmentDisplay } from "@/content/types";
import { AreasPlate, CannulaPlate } from "../illustrations/LipoPlates";
import { GradesPlate, TechniquePlate, TissueTypesPlate, VestPlate } from "../illustrations/Plates";
import { FootRef } from "../ui/FootRef";
import { Note } from "../ui/Note";
import { Plate } from "../ui/Plate";
import { ResponsiveDetails } from "../ui/ResponsiveDetails";
import { Rich } from "../ui/Rich";
import { SectionHead } from "../ui/SectionHead";

export function OperationSection({ c, d, slot }: { c: TreatmentContent; d?: TreatmentDisplay; slot?: ImageSlotData }) {
  const o = c.operation;
  const caps = d?.operationCaptions ?? [{ title: "Liposuction only", text: "Fat out, gland stays" }, { title: "Gland removal", text: "Small cut, with liposuction if needed" }];
  return (
    <section className="sec" id="surgery">
      <SectionHead>{d?.operationHeading ?? "What the operation involves: fat, gland or both"}</SectionHead>
      <div className="blk full">
        <div>
          <p className="lead"><Rich text={o.lead} /></p>
          <p><Rich text={o.body} /></p>
        </div>
        <Plate n={2} caption={o.caption} captions={caps} slot={slot}>
          {d?.operationPlate === "cannula" ? <CannulaPlate /> : <TechniquePlate />}
        </Plate>
      </div>
      <Note label="Ask the surgeon">{o.ask}</Note>
      <details className="more">
        <summary>How the operation is done</summary>
        <div className="in"><ul className="plain">{o.how.map((h) => <li key={h}><Rich text={h} /></li>)}</ul></div>
      </details>
      <h3>Who it suits</h3>
      <dl className="defs">
        {o.whoItSuits.map((w) => <div key={w.term}><dt>{w.term}</dt><dd><Rich text={w.text} /></dd></div>)}
      </dl>
    </section>
  );
}

export function FatOrGlandSection({ c }: { c: TreatmentContent }) {
  const f = c.fatOrGland;
  if (!f) return null;
  return (
    <section className="sec" id="fat-or-gland">
      <SectionHead>Is it fat or gland? When surgery is not the first step</SectionHead>
      <div className="blk rev full">
        <div>
          <p className="lead"><Rich text={f.lead} /></p>
          <p><Rich text={f.body} /></p>
        </div>
        <figure className="pl">
          <TissueTypesPlate />
          <div className="caps">
            <div><b>Mostly gland</b><span>Firm disc behind the nipple</span></div>
            <div><b>Mostly fat</b><span>Soft, spread across the chest</span></div>
            <div><b>Both</b><span>The common case</span></div>
          </div>
          <GradesPlate />
          <figcaption className="fcap"><b>Plate 3.</b> Tissue types, then grades I to IV.</figcaption>
        </figure>
      </div>
      <Note label="Term"><Rich text={f.term} /></Note>
      <div className="full">
        <table className="gt">
          <caption>Gland and fat compared</caption>
          <thead><tr><th scope="col">What you notice</th><th scope="col">Gland</th><th scope="col">Fat (pseudogynecomastia)</th></tr></thead>
          <tbody>
            {f.tissueTable.map((r) => (
              <tr key={r.feature}><th scope="row">{r.feature}</th><td data-l="Gland">{r.gland}</td><td data-l="Fat">{r.fat}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <dl className="defs">
        <div><dt>See a doctor soon</dt><dd>{f.seeDoctor}</dd></div>
      </dl>
      <div className="cols">
        <ResponsiveDetails summary="Possible causes">
          <ul className="plain">{f.causes.map((x) => <li key={x}>{x}</li>)}</ul>
        </ResponsiveDetails>
        <ResponsiveDetails summary="Signs to watch for">
          <ul className="plain">{f.symptoms.map((x) => <li key={x}>{x}</li>)}</ul>
        </ResponsiveDetails>
      </div>
      <ResponsiveDetails summary="Myths: what does not remove gland">
        <ul className="plain">{f.myths.map((x) => <li key={x}>{x}</li>)}</ul>
      </ResponsiveDetails>
      <h3 id="grades">Grades: how big, and what that usually means<FootRef n={5} id="r5" /></h3>
      <ResponsiveDetails summary="Grades I to IV and the usual approach" className="more dd full">
        <table className="rt">
          <caption>{f.gradesCaption}</caption>
          <thead><tr><th scope="col">Grade</th><th scope="col">What it looks like</th><th scope="col">Usual approach</th></tr></thead>
          <tbody>
            {f.grades.map((g) => (
              <tr key={g.grade}><th scope="row">{g.grade}</th><td data-l="Looks like">{g.looks}</td><td data-l="Usual approach">{g.approach}</td></tr>
            ))}
          </tbody>
        </table>
      </ResponsiveDetails>
    </section>
  );
}

export function RecoverySection({ c, d, slot }: { c: TreatmentContent; d?: TreatmentDisplay; slot?: ImageSlotData }) {
  const r = c.recovery;
  return (
    <section className="sec tint" id="recovery">
      <SectionHead>{d?.recoveryHeading ?? "Recovery calendar: day 0 to week 12"}</SectionHead>
      <div className="blk full">
        <div>
          <p className="lead"><Rich text={r.lead} /><FootRef n={3} id="r3" /></p>
          <p><Rich text={r.body} /></p>
        </div>
        <Plate n={4} caption="Compression garment: worn as advised by the surgeon." slot={slot}><VestPlate /></Plate>
      </div>
      <div className="pf">
        {r.highlights.map((h) => (
          <div key={h.big}>
            <b>{h.pre && <><small>{h.pre}</small> </>}{h.big}{h.post && <> <small>{h.post}</small></>}</b>
            <span>{h.text}</span>
          </div>
        ))}
      </div>
      <div className="full">
        <table className="gt">
          <caption className="cap-t"><span>What most people notice and do, by time since the operation.</span></caption>
          <thead><tr><th scope="col">When</th><th scope="col">What you may notice</th><th scope="col">What you can do</th></tr></thead>
          <tbody>
            {r.timeline.map((t) => (
              <tr key={t.when}><th scope="row">{t.when}</th><td data-l="Notice">{t.notice}</td><td data-l="Do">{t.doThis}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <ResponsiveDetails summary="Quick grid: what you can do and when">
        <table className="when">
          <caption className="sr">Typical recovery: what you can do, by time since the operation</caption>
          <thead><tr><td></td>{r.grid.cols.map((c2) => <th scope="col" key={c2}>{c2}</th>)}</tr></thead>
          <tbody>
            {r.grid.rows.map((row) => (
              <tr key={row.label}><th scope="row">{row.label}</th>{row.cells.map((cell, i) => <td key={i} className={cell.state}>{cell.text}</td>)}</tr>
            ))}
          </tbody>
        </table>
        <p className="key" aria-hidden="true"><span>Not yet</span><span className="m">Some, or ask the surgeon</span><span className="y">Yes</span></p>
      </ResponsiveDetails>
      <p>{r.closing}</p>
    </section>
  );
}

export function RisksSection({ c, d }: { c: TreatmentContent; d?: TreatmentDisplay }) {
  const r = c.risks;
  return (
    <section className="sec tint" id="risks">
      <SectionHead>Risks, and when to call the doctor</SectionHead>
      <p className="lead">{r.lead}</p>
      <div className="full">
        <table className="gt">
          <caption>Risks to ask about, and what you can do</caption>
          <thead><tr><th scope="col">Risk</th><th scope="col">What it means</th><th scope="col">What you can do or ask</th></tr></thead>
          <tbody>
            {r.rows.map((x) => (
              <tr key={x.risk}><th scope="row">{x.risk}</th><td data-l="Means">{x.means}</td><td data-l="Ask">{x.ask}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="alert"><Rich text={r.alert} /></p>
      <div className="cols">
        <ResponsiveDetails summary="The surgeon may ask you to wait"><ul className="plain">{r.wait.map((x) => <li key={x}>{x}</li>)}</ul></ResponsiveDetails>
        <ResponsiveDetails summary="Tell the surgeon at the first visit"><ul className="plain">{r.tell.map((x) => <li key={x}>{x}</li>)}</ul></ResponsiveDetails>
      </div>
      <p><Rich text={`See [risks in more detail](${d?.riskGuideHref ?? "/gynecomastia-surgery#risks"}) on the procedure guide, and our [medical disclaimer](/medical-disclaimer).`} /></p>
    </section>
  );
}


/** Liposuction: which areas, and how the price differs by area. */
export function AreasSection({ c }: { c: TreatmentContent }) {
  const a = c.areas;
  if (!a) return null;
  return (
    <section className="sec" id="areas">
      <SectionHead>Which areas can be treated</SectionHead>
      <div className="blk rev full">
        <div>
          <p className="lead"><Rich text={a.lead} /></p>
          <p><Rich text={a.body} /></p>
        </div>
        <Plate n={3} caption="Areas where liposuction is commonly planned." ratio="3 / 2"><AreasPlate /></Plate>
      </div>
      <div className="full">
        <table className="gt">
          <caption>Areas, and what changes the plan and the price in each</caption>
          <thead><tr><th scope="col">Area</th><th scope="col">Usually</th><th scope="col">What it depends on</th></tr></thead>
          <tbody>
            {a.rows.map((r) => (
              <tr key={r.area}><th scope="row">{r.area}</th><td data-l="Usually">{r.usual}</td><td data-l="Depends on"><Rich text={r.depends} /></td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <Note label="Ask the surgeon">{a.note}</Note>
    </section>
  );
}

/** Liposuction: technique comparison table (generic names). */
export function TechniquesSection({ c }: { c: TreatmentContent }) {
  const t = c.techniques;
  if (!t) return null;
  return (
    <section className="sec" id="techniques">
      <SectionHead>Techniques compared</SectionHead>
      <p className="lead"><Rich text={t.lead} /></p>
      <div className="full">
        <table className="gt">
          <caption>Liposuction techniques in plain words</caption>
          <thead><tr><th scope="col">Technique</th><th scope="col">How it works</th><th scope="col">Often used for</th><th scope="col">Ask like this</th></tr></thead>
          <tbody>
            {t.rows.map((r) => (
              <tr key={r.name}><th scope="row">{r.name}</th><td data-l="How">{r.how}</td><td data-l="Often for">{r.often}</td><td data-l="Ask">{r.ask}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <p><Rich text={t.note} /></p>
    </section>
  );
}

/** Liposuction: versus tummy tuck, non-surgical options and who should wait. */
export function CompareSection({ c }: { c: TreatmentContent }) {
  const m = c.compare;
  if (!m) return null;
  return (
    <section className="sec tint" id="compare">
      <SectionHead>Liposuction, a tummy tuck, or non-surgical options</SectionHead>
      <p className="lead"><Rich text={m.tummyTuckLead} /></p>
      <div className="full">
        <table className="gt">
          <caption>Liposuction and tummy tuck compared</caption>
          <thead><tr><th scope="col">What you notice</th><th scope="col">Liposuction</th><th scope="col">Tummy tuck</th></tr></thead>
          <tbody>
            {m.tummyTuck.map((r) => (
              <tr key={r.feature}><th scope="row">{r.feature}</th><td data-l="Liposuction">{r.lipo}</td><td data-l="Tummy tuck">{r.tuck}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3>Non-surgical options</h3>
      <p><Rich text={m.nonSurgicalLead} /></p>
      <dl className="defs">
        {m.nonSurgical.map((n) => <div key={n.name}><dt>{n.name}</dt><dd>{n.text}</dd></div>)}
      </dl>
      <p><Rich text={m.nonSurgicalNote} /></p>
      <ResponsiveDetails summary="Who is often asked to wait">
        <ul className="plain">{m.whoShouldWait.map((x) => <li key={x}>{x}</li>)}</ul>
      </ResponsiveDetails>
    </section>
  );
}
