import type { Reviewer, TreatmentContent } from "@/content/types";
import { longDate } from "@/lib/format";
import { ReviewerPortrait } from "../illustrations/Plates";
import { FootRef } from "../ui/FootRef";
import { OpenLeadButton } from "../ui/OpenLeadButton";
import { Rich } from "../ui/Rich";
import { SampleChip } from "../ui/SampleChip";
import { SectionHead } from "../ui/SectionHead";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { DISCLAIMER } from "@/content/site";
import styles from "./Reviewer.module.css";

export function ChooseSurgeonSection() {
  return (
    <section className="sec" id="choose">
      <SectionHead>How to choose a surgeon</SectionHead>
      <p className="none">No surgeon is <i>listed yet.</i></p>
      <p className="lead">We list a surgeon only after registration and accreditation are checked, in this order. We do not rank surgeons against each other.</p>
      <ol className="steps">
        <li><div><b>Registration</b><span>We look the surgeon up on the public register of the state medical council ourselves.</span></div></li>
        <li><div><b>Hospital</b><span>We ask for its accreditation certificate.</span></div></li>
        <li><div><b>Date</b><span>We record the day we checked, and show it.</span></div></li>
      </ol>
      <div className="spec" role="group" aria-label="Format example of a verification card" style={{ marginTop: 22 }}>
        <span className="tag">Format example, not a real surgeon</span>
        <dl>
          <div><dt>Council</dt><dd>State medical council <span className="blank" /></dd></div>
          <div><dt>Degree</dt><dd><span className="blank" /> as on the certificate</dd></div>
          <div><dt>Hospital</dt><dd>Accreditation body <span className="blank" />, valid till <span className="blank" /></dd></div>
          <div><dt>Checked on</dt><dd><span className="blank" /> by our staff</dd></div>
        </dl>
      </div>
      <details className="more">
        <summary>Five questions for any surgeon</summary>
        <div className="in">
          <ul className="plain">
            <li>Are you registered with a state medical council, and can I check the public register?</li>
            <li>How many of this operation do you do in a year?</li>
            <li>Which method will you use on me, and where will the scars be?</li>
            <li>Which anaesthesia, and who gives it?</li>
            <li>What happens if I need a second operation, and who pays?</li>
          </ul>
        </div>
      </details>
      <p><Rich text="Take our list with you: [questions to ask your surgeon](/learn/questions-to-ask-your-plastic-surgeon). [How we write and review](/editorial-policy) this page is public." /></p>
    </section>
  );
}

export function InsuranceSection({ c }: { c: TreatmentContent }) {
  return (
    <section className="sec" id="insurance">
      <SectionHead>Insurance and payment, plainly</SectionHead>
      <p><Rich text={c.insurance} /></p>
      <p><Rich text={c.payment} /></p>
      <p><Rich text="The [cost guides](/cost) list what each line covers." /><FootRef n={4} id="r4" /></p>
    </section>
  );
}

export function TalkSection({ waMessage }: { waMessage: string }) {
  return (
    <section className="sec tint" id="talk">
      <SectionHead>Rather talk first?</SectionHead>
      <p className="lead">Write on WhatsApp and nobody calls. Or ask for a call back, and we call at the time you choose.</p>
      <ol className="steps">
        <li><div><b>You write or leave a number</b><span>Name, mobile, city. That is all we ask for.</span></div></li>
        <li><div><b>A coordinator replies</b><span>Within 30 minutes, 9 am to 9 pm. <SampleChip /> No pressure to book.</span></div></li>
        <li><div><b>You decide, or stop</b><span>Say stop at any point and your details are deleted.</span></div></li>
      </ol>
      <div className="cta" style={{ marginTop: 20 }}>
        <WhatsAppButton message={waMessage} />
        <OpenLeadButton className="btn btn-line">Open the call-back sheet</OpenLeadButton>
      </div>
    </section>
  );
}

export function ReviewerSection({ reviewer, content }: { reviewer: Reviewer | null; content: TreatmentContent }) {
  return (
    <section className="sec" id="reviewer">
      <SectionHead>Reviewer and sources</SectionHead>
      <div className={styles.rv}>
        <figure style={{ margin: 0 }}>
          <ReviewerPortrait />
          <figcaption className="fcap" style={{ fontSize: "0.8125rem" }}>Photo needs consent</figcaption>
        </figure>
        <dl>
          <div><dt>Reviewed by</dt><dd>{reviewer ? <>{reviewer.name}, {reviewer.credential} {reviewer.isSample && <SampleChip />}</> : <>Pending. No reviewer is named yet.</>}</dd></div>
          <div><dt>Date reviewed</dt><dd>{reviewer ? <>{longDate(reviewer.reviewedOn)} {reviewer.isSample && <SampleChip />}</> : "Not reviewed yet"}</dd></div>
          <div><dt>Method</dt><dd>Sources read, wording checked against them, timings and ranges checked with partner quotes before any figure is published.</dd></div>
        </dl>
      </div>
      <p className="lh">Sources, for the reviewer to confirm</p>
      <ul className="src">
        {content.sources.map((s) => <li key={s.href}><a href={s.href} rel="noopener">{s.label}</a></li>)}
      </ul>
      <h3>Notes</h3>
      <ol className="fn">
        {content.footnotes.map((n, i) => <li key={i} id={`fn${i + 1}`}>{n}</li>)}
      </ol>
      <p style={{ marginTop: 12, fontSize: "14.5px" }}>
        <Rich text="How we write and check pages: [Editorial policy](/editorial-policy). Who reads them: [Medical review board](/medical-review-board)." />
      </p>
    </section>
  );
}

export function DisclaimerSection() {
  return (
    <section className="sec" id="disclaimer" style={{ paddingTop: 0 }}>
      <p className="disc" style={{ maxWidth: "none" }}>{DISCLAIMER} <Rich text="[Medical disclaimer](/medical-disclaimer)" /></p>
    </section>
  );
}

