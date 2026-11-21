import type { TreatmentContent } from "@/content/types";
import { Note } from "../ui/Note";
import { Rich } from "../ui/Rich";
import { SectionHead } from "../ui/SectionHead";

/**
 * City pages of non-surgical topics do not repeat the whole treatment guide. They show a short
 * description of what one visit involves and point to the guide for the full text.
 */
export function SessionSummary({ c, slug, name, heading }: { c: TreatmentContent; slug: string; name: string; heading: string }) {
  const o = c.operation;
  return (
    <section className="sec" id="session">
      <SectionHead>{heading}</SectionHead>
      <p className="lead"><Rich text={o.lead} /></p>
      <Note label="Ask the doctor">{o.ask}</Note>
      <p><Rich text={`The full explanation, with who it suits and the steps in order, is on the [${name} guide](/${slug}).`} /></p>
    </section>
  );
}

/** Risks in short, with the link to the full table on the guide. */
export function RisksShort({ c, slug }: { c: TreatmentContent; slug: string }) {
  const r = c.risks;
  return (
    <section className="sec tint" id="risks">
      <SectionHead>Risks in short</SectionHead>
      <p className="lead">{r.lead}</p>
      <p className="alert"><Rich text={r.alert} /></p>
      <p><Rich text={`The full table of risks, and who may be asked to wait, is on the [guide](/${slug}#risks). Read our [medical disclaimer](/medical-disclaimer).`} /></p>
    </section>
  );
}
