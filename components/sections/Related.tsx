import Link from "next/link";
import type { BlogPost, City, Treatment } from "@/content/types";
import { inrRange } from "@/lib/format";
import { isLinkVisible } from "@/lib/pages";
import { ReadThumb1, ReadThumb2, ReadThumb3, TreatmentIcon1, TreatmentIcon2, TreatmentIcon3 } from "../illustrations/Plates";
import { ImageSlot } from "../ui/ImageSlot";
import { Rich } from "../ui/Rich";
import { SampleChip } from "../ui/SampleChip";
import { SectionHead } from "../ui/SectionHead";

const thumbs = { 1: ReadThumb1, 2: ReadThumb2, 3: ReadThumb3 } as const;
const icons = { 1: TreatmentIcon1, 2: TreatmentIcon2, 3: TreatmentIcon3 } as const;

/** Up to three guides chosen by topic. Cards are plain links with no schema. */
export function RelatedReads({ posts }: { posts: BlogPost[] }) {
  const shown = posts.filter((p) => isLinkVisible(`/learn/${p.slug}`)).slice(0, 3);
  if (shown.length === 0) return null;
  return (
    <section className="sec" id="related-reads">
      <SectionHead>Related reads</SectionHead>
      <ul className="rr full">
        {shown.map((p) => {
          const Thumb = thumbs[p.thumb];
          return (
            <li key={p.slug}>
              <Thumb />
              <div>
                <h3><Link href={`/learn/${p.slug}`}>{p.title}</Link></h3>
                <p>{p.excerpt}</p>
                <p className="meta">{p.minutes} min read {(!p.published || !p.reviewerId || p.reviewerId.startsWith("sample")) && <SampleChip label="Pending review" />}</p>
              </div>
            </li>
          );
        })}
      </ul>
      {isLinkVisible("/learn") && <p style={{ marginTop: 16 }}><Link className="lk" href="/learn">All guides</Link></p>}
    </section>
  );
}

export interface TreatmentCard { treatment: Treatment; rangeLabel: string; range: string }

export function RelatedTreatments({ cards }: { cards: TreatmentCard[] }) {
  const shown = cards.filter((c) => isLinkVisible(`/${c.treatment.slug}`));
  if (shown.length === 0) return null;
  return (
    <section className="sec tint" id="related-treatments">
      <SectionHead>Related treatments</SectionHead>
      <p className="cap-t" style={{ margin: "0 0 8px" }}>Ranges and times below are sample data. <SampleChip /></p>
      <ul className="rr full">
        {shown.map(({ treatment: t, rangeLabel, range }) => {
          const Icon = icons[t.icon];
          return (
            <li key={t.slug}>
              <div><ImageSlot slot={t.images?.card} ratio="1 / 1" sizes="120px"><Icon /></ImageSlot></div>
              <div>
                <h3><Link href={`/${t.slug}`}>{t.name}</Link></h3>
                <p>{t.cardBlurb}</p>
                <dl>
                  <div><dt>{rangeLabel}</dt><dd>{range}</dd></div>
                  <div><dt>Desk work</dt><dd>{t.deskWork}</dd></div>
                </dl>
              </div>
            </li>
          );
        })}
      </ul>
      {isLinkVisible("/plastic-surgery") && <p style={{ marginTop: 16 }}><Rich text="Browse [all plastic surgery](/plastic-surgery) pages." /></p>}
    </section>
  );
}

/** At most two links to nearby cities, each with a reason. Only pages that are live. */
export function NearbyCities({ lines }: { lines: string[] }) {
  if (lines.length === 0) return null;
  return (
    <section className="sec" id="nearby">
      <SectionHead>Nearby cities</SectionHead>
      {lines.slice(0, 2).map((l) => <p key={l}><Rich text={l} /></p>)}
    </section>
  );
}

export function treatmentRange(t: Treatment, city: City | null, cityRange: { min: number; max: number } | null): { rangeLabel: string; range: string } {
  if (city && cityRange) return { rangeLabel: `${city.name} range`, range: `Rs ${inrRange(cityRange.min, cityRange.max)}` };
  if (t.nationalRange) return { rangeLabel: "Typical range", range: `Rs ${inrRange(t.nationalRange.minInr, t.nationalRange.maxInr)}` };
  return { rangeLabel: "Typical range", range: "To be confirmed" };
}
