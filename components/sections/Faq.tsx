import type { FaqRow } from "@/content/types";
import { Rich } from "../ui/Rich";
import { SampleChip } from "../ui/SampleChip";
import { SectionHead } from "../ui/SectionHead";

export interface PatientQuestion { q: string; href: string; linkText: string }

/**
 * Patient questions (links into the page) and the FAQ. The FAQ is plain <details>, so every
 * answer is in the HTML. The same rows feed the FAQPage JSON-LD (see lib/schema.ts).
 */
export function FaqSection({ faqs, patientQuestions, heading = "Questions men ask" }: { faqs: FaqRow[]; patientQuestions?: PatientQuestion[]; heading?: string }) {
  return (
    <section className="sec tint" id="faq">
      <SectionHead>{heading}</SectionHead>
      {patientQuestions && patientQuestions.length > 0 && (
        <>
          <h3 id="patient-questions">Questions patients ask us <SampleChip /></h3>
          <ul className="pq">
            {patientQuestions.map((p) => <li key={p.q}><q>{p.q}</q><a href={p.href}>{p.linkText}</a></li>)}
          </ul>
        </>
      )}
      <h3>Answers to {faqs.length} common questions</h3>
      <div className="faqs" id="faqs">
        {faqs.map((f) => (
          <details key={f.id} id={f.id}>
            <summary>{f.question}</summary>
            <div className="a"><p><Rich text={f.answer} /></p></div>
          </details>
        ))}
      </div>
    </section>
  );
}
