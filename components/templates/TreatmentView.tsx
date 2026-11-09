import Link from "next/link";
import type { SiteData, Treatment } from "@/content/types";
import { findReviewer } from "@/lib/data";
import { inrRange } from "@/lib/format";
import { faqsFor } from "@/lib/data";
import { isLinkVisible } from "@/lib/pages";
import { breadcrumbList, faqPage, graph, itemList, medicalWebPage, organization, videoObject } from "@/lib/schema";
import { postsFor, relatedCards, videosFor } from "@/lib/view";
import { ChestSectionPlate } from "../illustrations/Plates";
import { CallbackBand, WhatsAppBand } from "../sections/Bands";
import { FaqSection } from "../sections/Faq";
import { Hero } from "../sections/Hero";
import { FatOrGlandSection, OperationSection, RecoverySection, RisksSection } from "../sections/Medical";
import { PageShell } from "../sections/PageShell";
import { RelatedReads, RelatedTreatments } from "../sections/Related";
import { ChooseSurgeonSection, DisclaimerSection, InsuranceSection, ReviewerSection, TalkSection } from "../sections/Trust";
import { VideosSection } from "../sections/Videos";
import { PageFrame } from "../ui/PageFrame";
import { Rich } from "../ui/Rich";
import { SectionHead } from "../ui/SectionHead";
import { PlaceholderView } from "./PlaceholderView";
import { treatmentMeta } from "@/lib/seo";

/** /[treatment]: the procedure guide that city pages link up to (anchors #recovery and #risks live here). */
export function TreatmentView({ site, t }: { site: SiteData; t: Treatment }) {
  const content = t.content;
  if (!content) return <PlaceholderView site={site} t={t} c={null} />;
  const path = `/${t.slug}`;
  const reviewer = findReviewer(site, t.reviewerId);
  const meta = treatmentMeta(t);
  const faqs = faqsFor(site, t.slug, null);
  const posts = postsFor(site, t);
  const videos = videosFor(site, t);
  const liveCities = site.pages.filter((p) => p.treatmentSlug === t.slug && isLinkVisible(`/${t.slug}-in-${p.citySlug}`));
  const waMessage = `I have a question about ${t.name.toLowerCase()}`;
  const range = t.nationalRange ? inrRange(t.nationalRange.minInr, t.nationalRange.maxInr) : null;
  const chip = t.nationalRange?.isSample ? "To be confirmed" : null;
  const crumbs = [{ name: "Home", path: "/" }, { name: "Plastic surgery", path: "/plastic-surgery" }, { name: t.name, path }];
  const toc = [
    { id: "surgery", label: "The operation" }, { id: "fat-or-gland", label: "Fat or gland" }, { id: "recovery", label: "Recovery" },
    { id: "risks", label: "Risks" }, { id: "cost", label: "Cost" }, { id: "faq", label: "Questions" },
  ];
  const ld = graph(
    organization(), breadcrumbList(crumbs),
    medicalWebPage({ path, name: meta.title, description: meta.description, treatment: t, reviewer }),
    faqPage(faqs), ...videos.map(videoObject),
    posts.length > 0 && itemList("Related reads", posts.map((x) => ({ name: x.title, path: `/learn/${x.slug}` }))),
  );
  return (
    <PageFrame jsonLd={ld} treatment={t.slug} label={t.name.toLowerCase()}>
      <Hero
        crumbs={crumbs} title={t.name} titleEm="(male breast reduction)" dek={content.dek} reviewer={reviewer}
        figure={range ? { label: "Usual total bill in India", value: range, chip, linkText: "What changes the price", href: "#cost" } : null}
        waMessage={waMessage} plate={<ChestSectionPlate />}
        plateCaption="The male chest in section. Gland sits behind the nipple, fat around it, muscle and rib beneath."
        shortAnswers={content.shortAnswers}
      />
      <PageShell toc={toc} chip={range ? { label: "Usual total bill", value: range, chip } : null} waMessage={waMessage}>
        <OperationSection c={content} />
        <FatOrGlandSection c={content} />
        <RecoverySection c={content} />
        <VideosSection videos={videos} />
        <RisksSection c={content} />
        <section className="sec tint" id="cost">
          <SectionHead>What changes the price</SectionHead>
          <p className="lead">The price depends on the grade, the method and the hospital. <Rich text={`The [national cost page](/cost/${t.slug}) explains each factor.`} /></p>
          <ul className="plain">{t.costFactors.map((f) => <li key={f.factor}><b>{f.factor}:</b> {f.why}</li>)}</ul>
        </section>
        <WhatsAppBand message={waMessage} />
        <ChooseSurgeonSection />
        <CallbackBand treatment={t.slug} city="other" />
        <InsuranceSection c={content} />
        <FaqSection faqs={faqs} heading="Questions men ask" />
        <RelatedReads posts={posts} />
        <RelatedTreatments cards={relatedCards(site, t, null)} />
        {liveCities.length > 0 && (
          <section className="sec" id="available">
            <SectionHead>Available in</SectionHead>
            <ul className="plain">
              {liveCities.map((p) => {
                const c = site.cities.find((x) => x.slug === p.citySlug);
                return c && <li key={c.slug}><Link href={`/${t.slug}-in-${c.slug}`}>{t.name} in {c.name}</Link></li>;
              })}
            </ul>
          </section>
        )}
        <TalkSection waMessage={waMessage} />
        <ReviewerSection reviewer={reviewer} content={content} />
        <DisclaimerSection />
      </PageShell>
    </PageFrame>
  );
}
