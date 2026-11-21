import type { ExtraSection } from "@/content/types";
import { Note } from "../ui/Note";
import { Rich } from "../ui/Rich";
import { SectionHead } from "../ui/SectionHead";

/** Topic-specific blocks from content.extraSections, in order. */
export function ExtraSections({ sections }: { sections?: ExtraSection[] }) {
  if (!sections || sections.length === 0) return null;
  return (
    <>
      {sections.map((x) => (
        <section key={x.id} className={x.tint ? "sec tint" : "sec"} id={x.id}>
          <SectionHead>{x.heading}</SectionHead>
          {x.lead && <p className="lead"><Rich text={x.lead} /></p>}
          {x.paragraphs?.map((p) => <p key={p}><Rich text={p} /></p>)}
          {x.table && (
            <div className="full">
              <table className="gt">
                <caption>{x.table.caption}</caption>
                <thead><tr>{x.table.head.map((h) => <th scope="col" key={h}>{h}</th>)}</tr></thead>
                <tbody>
                  {x.table.rows.map((row) => (
                    <tr key={row[0]}>
                      <th scope="row">{row[0]}</th>
                      {row.slice(1).map((cell, i) => <td key={i} data-l={x.table!.head[i + 1]}><Rich text={cell} /></td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {x.defs && (
            <dl className="defs">
              {x.defs.map((d) => <div key={d.term}><dt>{d.term}</dt><dd><Rich text={d.text} /></dd></div>)}
            </dl>
          )}
          {x.bullets && <ul className="plain">{x.bullets.map((b) => <li key={b}><Rich text={b} /></li>)}</ul>}
          {x.note && <Note label={x.note.label}><Rich text={x.note.text} /></Note>}
        </section>
      ))}
    </>
  );
}
