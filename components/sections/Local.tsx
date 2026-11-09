import type { City, CityTreatmentPage } from "@/content/types";
import { MapPlate } from "../illustrations/Plates";
import { Plate } from "../ui/Plate";
import { ResponsiveDetails } from "../ui/ResponsiveDetails";
import { Rich } from "../ui/Rich";
import { SampleChip } from "../ui/SampleChip";
import { SectionHead } from "../ui/SectionHead";

export function FacilitiesSection({ city, page }: { city: City; page: CityTreatmentPage }) {
  const f = page.facilities;
  if (!f) return null;
  return (
    <section className="sec" id="facilities">
      <SectionHead>Hospitals and day-care centres in {city.name}</SectionHead>
      <p className="lead">{f.intro}</p>
      <div className="full">
        <ResponsiveDetails summary="What to check in any facility" className="more dd full">
          <table className="gt">
            <caption>What to check in any facility</caption>
            <thead><tr><th scope="col">Check</th><th scope="col">Why it matters</th><th scope="col">Ask like this</th></tr></thead>
            <tbody>
              {f.checks.map((c) => (
                <tr key={c.check}><th scope="row">{c.check}</th><td data-l="Why">{c.why}</td><td data-l="Ask">{c.ask}</td></tr>
              ))}
            </tbody>
          </table>
        </ResponsiveDetails>
      </div>
      <p><Rich text="See [how we check partner facilities](/how-we-verify-surgeons), and the [medical review board](/medical-review-board) that reads this page." /></p>
    </section>
  );
}

export function GettingThereSection({ city, page, nearbyLine }: { city: City; page: CityTreatmentPage; nearbyLine: string | null }) {
  const t = page.travel;
  if (!t) return null;
  return (
    <section className="sec tint" id="getting-there">
      <SectionHead>Getting there and staying</SectionHead>
      <div className="blk rev full">
        <div>
          <p className="lead">{t.intro}</p>
          <p>
            <Rich text={`For other operations here, see [plastic surgery in ${city.name}](/plastic-surgery-in-${city.slug}).`} />
            {nearbyLine && <> <Rich text={nearbyLine} /></>}
          </p>
          <p><Rich text={t.metro} /></p>
        </div>
        <Plate n={5} caption={t.mapCaption}><MapPlate /></Plate>
      </div>
      <div className="full">
        <ResponsiveDetails summary="Rough road time from nearby areas" className="more dd full">
          <table className="gt">
            <caption className="cap-t"><span>Rough road time, off-peak.</span> <SampleChip /></caption>
            <thead><tr><th scope="col">From</th><th scope="col">Road time</th><th scope="col">Tip</th></tr></thead>
            <tbody>
              {t.roadTimes.map((r) => (
                <tr key={r.from}><th scope="row">{r.from}</th><td className="r" data-l="Time">{r.time}</td><td data-l="Tip">{r.tip}</td></tr>
              ))}
            </tbody>
          </table>
        </ResponsiveDetails>
      </div>
      <p>{t.privacyNote}</p>
    </section>
  );
}
