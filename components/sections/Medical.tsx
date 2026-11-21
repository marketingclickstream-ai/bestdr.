import type { CareKind, ImageSlotData, TreatmentContent, TreatmentDisplay } from "@/content/types";
import { AreasPlate, CannulaPlate } from "../illustrations/LipoPlates";
import { NeutralPlate } from "../illustrations/NeutralPlate";
import { GradesPlate, TechniquePlate, TissueTypesPlate, VestPlate } from "../illustrations/Plates";
import { FootRef } from "../ui/FootRef";
import { Note } from "../ui/Note";
import { Plate } from "../ui/Plate";
import { ResponsiveDetails } from "../ui/ResponsiveDetails";
import { Rich } from "../ui/Rich";
import { SectionHead } from "../ui/SectionHead";

export function OperationSection({ c, d, slot, kind = "surgical", plates = true }: { c: TreatmentContent; d?: TreatmentDisplay; slot?: ImageSlotData; kind?: CareKind; /** false: no drawn plates (topics other than plastic surgery) */ plates?: boolean }) {
  const o = c.operation;
  const non = kind === "non-surgical";
  const plate = d?.operationPlate ?? (plates ? "technique" : "none");
  const caps = d?.operationCaptions ?? (!plates || plate === "none" ? undefined : [{ title: "Liposuction only", text: "Fat out, gland stays" }, { title: "Gland removal", text: "Small cut, with liposuction if needed" }]);
  const text = (
    <div>
      <p className="lead"><Rich text={o.lead} /></p>
      <p><Rich text={o.body} /></p>
    </div>
  );
  return (
    <section className="sec" id="surgery">
      <SectionHead>{d?.operationHeading ?? (non ? "What it involves" : "What the operation involves: fat, gland or both")}</SectionHead>
      {plate === "none" && !slot?.imageSrc ? text : (
        <div className="blk full">
          {text}
          <Plate n={2} caption={o.caption} captions={caps} slot={slot}>
            {plate === "cannula" ? <CannulaPlate /> : plate === "none" ? <NeutralPlate /> : <TechniquePlate />}
          </Plate>
        </div>
      )}
      <Note label={non ? "Ask the doctor" : "Ask the surgeon"}>{o.ask}</Note>
      <details className="more">
        <summary>{d?.operationHowLabel ?? (non ? "How it is done" : "How the operation is done")}</summary>
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

export function RecoverySection({ c, d, slot, kind = "surgical", plates = true }: { c: TreatmentContent; d?: TreatmentDisplay; slot?: ImageSlotData; kind?: CareKind; plates?: boolean }) {
  const r = c.recovery;
  const non = kind === "non-surgical";
  const text = (
    <div>
      <p className="lead"><Rich text={r.lead} /><FootRef n={3} id="r3" /></p>
      <p><Rich text={r.body} /></p>
    </div>
  );
  return (
    <section className="sec tint" id="recovery">
      <SectionHead>{d?.recoveryHeading ?? (non ? "Downtime and aftercare" : "Recovery calendar: day 0 to week 12")}</SectionHead>
      {/* The compression garment drawing belongs to surgery only. */}
      {!plates ? text : (
        <div className="blk full">
          {text}
          <Plate n={4} caption="Compression garment: worn as advised by the surgeon." slot={slot}><VestPlate /></Plate>
        </div>
      )}
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
          <caption className="cap-t"><span>{d?.timelineCaption ?? (non ? "What most people notice and do, by time since the session." : "What most people notice and do, by time since the operation.")}</span></caption>
          <thead><tr><th scope="col">When</th><th scope="col">What you may notice</th><th scope="col">What you can do</th></tr></thead>
          <tbody>
            {r.timeline.map((t) => (
              <tr key={t.when}><th scope="row">{t.when}</th><td data-l="Notice">{t.notice}</td><td data-l="Do">{t.doThis}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <ResponsiveDetails summary={d?.gridSummary ?? "Quick grid: what you can do and when"}>
        <table className="when">
          <caption className="sr">{non ? "Typical downtime: what you can do, by time since the session" : "Typical recovery: what you can do, by time since the operation"}</caption>
          <thead><tr><td></td>{r.grid.cols.map((c2) => <th scope="col" key={c2}>{c2}</th>)}</tr></thead>
          <tbody>
            {r.grid.rows.map((row) => (
              <tr key={row.label}><th scope="row">{row.label}</th>{row.cells.map((cell, i) => <td key={i} className={cell.state}>{cell.text}</td>)}</tr>
            ))}
          </tbody>
        </table>
        <p className="key" aria-hidden="true"><span>Not yet</span><span className="m">{non ? "Some, or ask the doctor" : "Some, or ask the surgeon"}</span><span className="y">Yes</span></p>
      </ResponsiveDetails>
      <p>{r.closing}</p>
    </section>
  );
}

export function RisksSection({ c, d, slug, kind = "surgical" }: { c: TreatmentContent; d?: TreatmentDisplay; slug: string; kind?: CareKind }) {
  const r = c.risks;
  const pro = kind === "non-surgical" ? "doctor" : "surgeon";
  return (
    <section className="sec tint" id="risks">
      <SectionHead>{d?.risksHeading ?? "Risks, and when to call the doctor"}</SectionHead>
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
        <ResponsiveDetails summary={`The ${pro} may ask you to wait`}><ul className="plain">{r.wait.map((x) => <li key={x}>{x}</li>)}</ul></ResponsiveDetails>
        <ResponsiveDetails summary={`Tell the ${pro} at the first visit`}><ul className="plain">{r.tell.map((x) => <li key={x}>{x}</li>)}</ul></ResponsiveDetails>
      </div>
      <p><Rich text={`See [risks in more detail](${d?.riskGuideHref ?? `/${slug}#risks`}) on the procedure guide, and our [medical disclaimer](/medical-disclaimer).`} /></p>
    </section>
  );
}


/** Liposuction: which areas, and how the price differs by area. */
export function AreasSection({ c, d, kind = "surgical", plates = true }: { c: TreatmentContent; d?: TreatmentDisplay; kind?: CareKind; plates?: boolean }) {
  const a = c.areas;
  if (!a) return null;
  const l = d?.labels;
  const text = (
    <div>
      <p className="lead"><Rich text={a.lead} /></p>
      <p><Rich text={a.body} /></p>
    </div>
  );
  return (
    <section className="sec" id="areas">
      <SectionHead>{l?.areasHeading ?? "Which areas can be treated"}</SectionHead>
      {l?.areasNoPlate || !plates ? text : (
        <div className="blk rev full">
          {text}
          <Plate n={3} caption="Areas where liposuction is commonly planned." ratio="3 / 2"><AreasPlate /></Plate>
        </div>
      )}
      <div className="full">
        <table className="gt">
          <caption>{l?.areasCaption ?? "Areas, and what changes the plan and the price in each"}</caption>
          <thead><tr><th scope="col">Area</th><th scope="col">Usually</th><th scope="col">What it depends on</th></tr></thead>
          <tbody>
            {a.rows.map((r) => (
              <tr key={r.area}><th scope="row">{r.area}</th><td data-l="Usually">{r.usual}</td><td data-l="Depends on"><Rich text={r.depends} /></td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <Note label={kind === "non-surgical" ? "Ask the doctor" : "Ask the surgeon"}>{a.note}</Note>
    </section>
  );
}

/** Liposuction: technique comparison table (generic names). */
export function TechniquesSection({ c, d }: { c: TreatmentContent; d?: TreatmentDisplay }) {
  const t = c.techniques;
  if (!t) return null;
  const l = d?.labels;
  return (
    <section className="sec" id="techniques">
      <SectionHead>{l?.techniquesHeading ?? "Techniques compared"}</SectionHead>
      <p className="lead"><Rich text={t.lead} /></p>
      <div className="full">
        <table className="gt">
          <caption>{l?.techniquesCaption ?? "Liposuction techniques in plain words"}</caption>
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
export function CompareSection({ c, d }: { c: TreatmentContent; d?: TreatmentDisplay }) {
  const m = c.compare;
  if (!m) return null;
  const l = d?.labels;
  const cols = l?.compareColumns ?? ["What you notice", "Liposuction", "Tummy tuck"];
  return (
    <section className="sec tint" id="compare">
      <SectionHead>{l?.compareHeading ?? "Liposuction, a tummy tuck, or non-surgical options"}</SectionHead>
      <p className="lead"><Rich text={m.tummyTuckLead} /></p>
      <div className="full">
        <table className="gt">
          <caption>{l?.compareCaption ?? "Liposuction and tummy tuck compared"}</caption>
          <thead><tr><th scope="col">{cols[0]}</th><th scope="col">{cols[1]}</th><th scope="col">{cols[2]}</th></tr></thead>
          <tbody>
            {m.tummyTuck.map((r) => (
              <tr key={r.feature}><th scope="row">{r.feature}</th><td data-l={cols[1]}>{r.lipo}</td><td data-l={cols[2]}>{r.tuck}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3>{l?.compareAltHeading ?? "Non-surgical options"}</h3>
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
