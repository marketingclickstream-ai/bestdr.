import { LeadForm } from "../forms/LeadForm";
import { SampleChip } from "../ui/SampleChip";
import { waLink } from "@/lib/whatsapp";
import { OpenLeadButton } from "../ui/OpenLeadButton";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { CostChecker } from "./CostChecker";

/** CTA 1: check the range for your case. */
export function CostCheckerBand({ rangeText, chipLabel }: { rangeText: string; chipLabel: string | null }) {
  return (
    <section className="band" id="checker" aria-labelledby="chk-h">
      <div className="rule" aria-hidden="true" />
      <h2 id="chk-h">Check the range for your case</h2>
      <p>Two questions. You get the range from the price table above and what moves it, not a quote. <SampleChip /></p>
      <CostChecker rangeText={rangeText} chipLabel={chipLabel} />
    </section>
  );
}

/** CTA 2: WhatsApp banner. */
export function WhatsAppBand({ message }: { message: string }) {
  if (!waLink(message)) {
    return (
      <section className="band soft" id="wa-band" aria-labelledby="wa-h">
        <div className="row two">
          <div>
            <h2 id="wa-h">Prefer to talk? Ask for a call back</h2>
            <p>A coordinator calls at a time you choose. We do not call unless you ask.</p>
          </div>
          <div className="cta"><OpenLeadButton>Call me back</OpenLeadButton></div>
        </div>
      </section>
    );
  }
  return (
    <section className="band soft" id="wa-band" aria-labelledby="wa-h">
      <div className="row two">
        <div>
          <h2 id="wa-h">Send your questions on WhatsApp</h2>
          <p>We reply within 30 minutes, 9 am to 9 pm. <SampleChip /> Your message opens with the question already typed. We do not call unless you ask.</p>
        </div>
        <div className="cta"><WhatsAppButton message={message} /></div>
      </div>
    </section>
  );
}

/** CTA 3: inline call-back form (three labelled fields and consent). */
export function CallbackBand({ treatment, city }: { treatment: string; city: string }) {
  return (
    <section className="band" id="callback" aria-labelledby="cb-h">
      <div className="row two">
        <div>
          <div className="rule" aria-hidden="true" />
          <h2 id="cb-h">Ask for a call back</h2>
          <p>Three fields. We call at a time you choose, and you can say stop at any point.</p>
        </div>
        <LeadForm idPrefix="c" treatment={treatment} defaultCity={city} />
      </div>
    </section>
  );
}

