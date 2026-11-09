import type { City, CityTreatmentPage, SiteData, Treatment } from "@/content/types";
import { costLines, findReviewer } from "@/lib/data";
import { inrRange } from "@/lib/format";
import { cityFaqRows, cityPageStatus } from "@/lib/pages";
import { breadcrumbList, faqPage, graph, itemList, medicalWebPage, organization, videoObject } from "@/lib/schema";
import { nearbyLines, postsFor, relatedCards, videosFor } from "@/lib/view";
import { ChestSectionPlate } from "../illustrations/Plates";
import { Hero } from "../sections/Hero";
import { PageShell } from "../sections/PageShell";
import { CostCheckerBand, CallbackBand, WhatsAppBand } from "../sections/Bands";
import { CostSection } from "../sections/Cost";
import { FaqSection } from "../sections/Faq";
import { FacilitiesSection, GettingThereSection } from "../sections/Local";
import { FatOrGlandSection, OperationSection, RecoverySection, RisksSection } from "../sections/Medical";
import { NearbyCities, RelatedReads, RelatedTreatments } from "../sections/Related";
import { ChooseSurgeonSection, DisclaimerSection, InsuranceSection, ReviewerSection, TalkSection } from "../sections/Trust";
import { VideosSection } from "../sections/Videos";
import { PageFrame } from "../ui/PageFrame";
import { PlaceholderView } from "./PlaceholderView";

/**
 * /[treatment]-in-[city]. Everything on the page comes from data (content/ or Supabase):
 * the treatment's editorial content, the city page record, cost lines and FAQ rows.
 * A placeholder record, or a treatment with no written content, renders PlaceholderView.
 */
export function CityTreatmentView({ site, t, c, p }: { site: SiteData; t: Treatment; c: City; p: CityTreatmentPage }) {
  const content = t.content;
  if (!content || p.isPlaceholder || !p.price) return <PlaceholderView site={site} t={t} c={c} />;

  const path = `/${t.slug}-in-${c.slug}`;
  const reviewer = findReviewer(site, p.reviewerId ?? t.reviewerId);
  const lines = costLines(site, t.slug, c.slug);
  const faqs = cityFaqRows(site, t, c).all;
  const status = cityPageStatus(site, t, c, p);
  const posts = postsFor(site, t);
  const videos = videosFor(site, t);
  const near = nearbyLines(site, t, c);
  const first = near[0];
  const waMessage = `I have a question about ${t.name.toLowerCase()} in ${c.name}`;
  const range = inrRange(p.price.minInr, p.price.maxInr);
  const chip = p.price.isSample ? p.price.chipLabel : null;

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Plastic surgery", path: "/plastic-surgery" },
    { name: t.name, path: `/${t.slug}` },
    { name: `In ${c.name}`, path },
  ];

  const toc = [
    { id: "cost", label: "Cost" }, { id: "surgery", label: "The operation" }, { id: "fat-or-gland", label: "Fat or gland" },
    { id: "recovery", label: "Recovery" }, { id: "videos", label: "Videos" }, { id: "risks", label: "Risks" },
    { id: "getting-there", label: "Getting there" }, { id: "faq", label: "Questions" },
  ].filter((i) => i.id !== "videos" || videos.length > 0);

  const ld = graph(
    organization(),
    breadcrumbList(crumbs),
    medicalWebPage({ path, name: status.title, description: status.description, treatment: t, reviewer }),
    faqPage(faqs),
    ...videos.map(videoObject),
    posts.length > 0 && itemList("Related reads", posts.map((x) => ({ name: x.title, path: `/learn/${x.slug}` }))),
  );

  return (
    <PageFrame jsonLd={ld} treatment={t.slug} city={c.slug} label={`${t.name.toLowerCase()} in ${c.name}`}>
      <Hero
        crumbs={crumbs}
        title={t.name}
        titleEm={`in ${c.name}`}
        dek={content.dek}
        reviewer={reviewer}
        figure={{ label: `Usual total bill in ${c.name}`, value: range, chip, linkText: `${lines.length === 3 ? "Three" : lines.length} fees inside it`, href: "#cost" }}
        waMessage={waMessage}
        plate={<ChestSectionPlate />}
        plateCaption="The male chest in section. Gland sits behind the nipple, fat around it, muscle and rib beneath."
        shortAnswers={content.shortAnswers}
      />
      <PageShell toc={toc} chip={{ label: "Usual total bill", value: range, chip }} waMessage={waMessage}>
        <CostSection
          treatmentSlug={t.slug} cityName={c.name} price={p.price} lines={lines} extras={content.extras}
          process={content.quoteProcess} checks={content.quoteChecks}
          termNote="Day care means you go home the same day. Overnight means one night in a room, and it costs more."
        />
        <CostCheckerBand rangeText={range} chipLabel={chip} />
        <OperationSection c={content} />
        <FatOrGlandSection c={content} />
        <RecoverySection c={content} />
        <VideosSection videos={videos} />
        <RisksSection c={content} />
        <WhatsAppBand message={waMessage} />
        <FacilitiesSection city={c} page={p} />
        <GettingThereSection city={c} page={p} nearbyLine={first ? `${first.lead} [the same surgery in ${first.cityName}](${first.href}) for local travel notes.` : null} />
        <ChooseSurgeonSection />
        <CallbackBand treatment={t.slug} city={c.slug} />
        <InsuranceSection c={content} />
        <FaqSection faqs={faqs} patientQuestions={content.patientQuestions} />
        <RelatedReads posts={posts} />
        <RelatedTreatments cards={relatedCards(site, t, c)} />
        <NearbyCities lines={near.map((n) => n.line)} />
        <TalkSection waMessage={waMessage} />
        <ReviewerSection reviewer={reviewer} content={content} />
        <DisclaimerSection />
      </PageShell>
    </PageFrame>
  );
}
