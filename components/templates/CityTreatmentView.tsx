import type { City, CityTreatmentPage, SiteData, Treatment } from "@/content/types";
import { costLines, findReviewer } from "@/lib/data";
import { inrRange } from "@/lib/format";
import { cityFaqRows, cityPageStatus } from "@/lib/pages";
import { careKindOf, costUnitOf, hubCrumb, includeDefsOf, priceLabelOf } from "@/lib/topic";
import { breadcrumbList, faqPage, graph, itemList, medicalWebPage, organization, videoObject } from "@/lib/schema";
import { nearbyLines, postsFor, relatedCards, videosFor } from "@/lib/view";
import { ChestSectionPlate } from "../illustrations/Plates";
import { AreasPlate } from "../illustrations/LipoPlates";
import { NeutralPlate } from "../illustrations/NeutralPlate";
import { Hero } from "../sections/Hero";
import { PageShell } from "../sections/PageShell";
import { CostCheckerBand, CallbackBand, MidBanner, WhatsAppBand } from "../sections/Bands";
import { CostSection } from "../sections/Cost";
import { FaqSection } from "../sections/Faq";
import { CitySections, FacilitiesSection, GettingThereSection, LocalNotesSection } from "../sections/Local";
import { ExtraSections } from "../sections/Extra";
import { RisksShort, SessionSummary } from "../sections/Compact";
import { AreasSection, CompareSection, FatOrGlandSection, OperationSection, RecoverySection, RisksSection, TechniquesSection } from "../sections/Medical";
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
  if (!content || p.isPlaceholder) return <PlaceholderView site={site} t={t} c={c} />;

  const kind = careKindOf(t);
  const non = kind === "non-surgical";
  const drawn = t.category === "surgery" && !t.display?.noPlates; // the drawn plates (chest, compression garment, body areas) belong to plastic surgery pages
  const unit = costUnitOf(t);
  const priceLabel = priceLabelOf(t);
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
  // A page can be written before its price exists: the range slot then reads "To be confirmed".
  const range = p.price ? inrRange(p.price.minInr, p.price.maxInr) : "To be confirmed";
  const chip = !p.price ? "To be confirmed" : p.price.isSample ? p.price.chipLabel : null;

  const hub = hubCrumb(t);
  const crumbs = [
    { name: "Home", path: "/" },
    hub,
    { name: t.name, path: `/${t.slug}` },
    { name: `In ${c.name}`, path },
  ];

  const d = t.display;
  const sessionHeading = unit === "course" ? "What a course involves" : "What a session involves";
  const toc = [
    { id: "cost", label: "Cost" },
    non ? { id: "session", label: sessionHeading.replace("What ", "").replace(" involves", "") } : { id: "surgery", label: d?.tocLabels?.surgery ?? "The operation" },
    ...(!non ? (content.extraSections ?? []).map((x) => ({ id: x.id, label: x.tocLabel ?? x.heading })) : []),
    !non && content.fatOrGland ? { id: "fat-or-gland", label: "Fat or gland" } : null,
    !non && content.areas ? { id: "areas", label: d?.tocLabels?.choices ?? "Areas" } : null,
    !non && content.techniques && d?.labels?.tocTechniques ? { id: "techniques", label: d.labels.tocTechniques } : null,
    !non && content.compare ? { id: "compare", label: d?.labels?.tocCompare ?? "Other options" } : null,
    non ? null : { id: "recovery", label: d?.recoveryTocLabel ?? "Recovery" },
    { id: "videos", label: "Videos" }, { id: "risks", label: "Risks" },
    { id: "getting-there", label: "Getting there" },
    ...(p.sections ?? []).map((x) => ({ id: `city-${x.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`, label: x.heading })),
    { id: "faq", label: "Questions" },
  ].filter((i): i is { id: string; label: string } => i !== null && (i.id !== "videos" || videos.length > 0));

  const ld = graph(
    organization(),
    breadcrumbList(crumbs),
    medicalWebPage({ path, name: status.title, description: status.description, treatment: t, reviewer }),
    faqPage(faqs),
    ...videos.map(videoObject),
    posts.length > 0 && itemList("Related reads", posts.map((x) => ({ name: x.title, path: `/learn/${x.slug}` }))),
  );

  const linkText = d?.priceLinkText ?? (non ? "See the price lines" : `${lines.length === 3 ? "Three" : lines.length} fees inside it`);

  return (
    <PageFrame jsonLd={ld} treatment={t.slug} city={c.slug} label={`${t.name.toLowerCase()} in ${c.name}`}>
      <Hero
        crumbs={crumbs}
        title={p.h1 ?? t.name}
        titleEm={p.h1 ? undefined : `in ${c.name}`}
        dek={p.intro ?? content.dek}
        reviewer={reviewer}
        figure={{ label: `${priceLabel} in ${c.name}`, value: range, chip, pending: !p.price, linkText, href: "#cost" }}
        waMessage={waMessage}
        plate={!drawn || d?.heroPlate === "none" ? <NeutralPlate /> : d?.heroPlate === "areas" ? <AreasPlate /> : <ChestSectionPlate />}
        plateSlot={t.images?.hero}
        plateCaption={!drawn ? d?.heroPlateCaption : d?.heroPlateCaption ?? "The male chest in section. Gland sits behind the nipple, fat around it, muscle and rib beneath."}
        shortAnswers={content.shortAnswers}
      />
      <PageShell toc={toc} chip={{ label: priceLabel, value: range, chip, pending: !p.price }} waMessage={waMessage}>
        <CostSection
          treatmentSlug={t.slug} cityName={c.name} price={p.price} lines={lines} extras={content.extras}
          process={content.quoteProcess} checks={content.quoteChecks}
          termNote={non ? undefined : "Day care means you go home the same day. Overnight means one night in a room, and it costs more."}
          mode={d?.costMode} heading={d?.costHeading} caption={d?.costCaption} priceLabel={priceLabel}
          kind={kind} unit={unit} includeDefs={non ? includeDefsOf(t) : undefined} includes={p.includes} compareHref={d?.compareGuideHref}
        />
        {/* The grade and day-care checker is a surgery tool: it is never shown for skin, hair-medicine or injectable topics. */}
        {drawn && <CostCheckerBand rangeText={range} chipLabel={chip} />}
        {non ? (
          <>
            <SessionSummary c={content} slug={t.slug} name={t.name} heading={sessionHeading} />
            <MidBanner id="mid-1" heading="Not sure where to start?" text="Send one message. No photos needed, and nobody calls unless you ask." message={waMessage} />
            <VideosSection videos={videos} />
            <RisksShort c={content} slug={t.slug} />
          </>
        ) : (
          <>
            <OperationSection c={content} d={d} slot={t.images?.operation} kind={kind} plates={drawn} />
            <ExtraSections sections={content.extraSections} />
            <FatOrGlandSection c={content} />
            <AreasSection c={content} d={d} kind={kind} plates={drawn} />
            <TechniquesSection c={content} d={d} />
            <CompareSection c={content} d={d} />
            <MidBanner id="mid-1" heading={content.areas ? "Not sure which areas to ask about?" : "Not sure which you have?"} text="Send one message. No photos needed, and nobody calls unless you ask." message={waMessage} />
            <RecoverySection c={content} d={d} slot={t.images?.recovery} kind={kind} plates={drawn} />
            <MidBanner id="mid-2" heading="Plan your leave" text="Ask for a recovery plan that fits your job and your travel home." message={`${waMessage}: please send a recovery plan for my work`} label="Ask for a recovery plan" />
            <VideosSection videos={videos} />
            <RisksSection c={content} d={d} slug={t.slug} kind={kind} />
          </>
        )}
        <WhatsAppBand message={waMessage} />
        <FacilitiesSection city={c} page={p} kind={kind} />
        <GettingThereSection city={c} page={p} kind={kind} slot={p.images?.travel} nearbyLine={first ? `${first.lead} [the same ${non ? "treatment" : "surgery"} in ${first.cityName}](${first.href}) for local travel notes.` : null} />
        <LocalNotesSection city={c} page={p} />
        <CitySections page={p} />
        <ChooseSurgeonSection kind={kind} />
        <CallbackBand treatment={t.slug} city={c.slug} />
        <InsuranceSection c={content} />
        <FaqSection faqs={faqs} patientQuestions={non ? undefined : content.patientQuestions} heading={t.slug === "gynecomastia-surgery" ? "Questions men ask" : "Questions people ask"} />
        <RelatedReads posts={posts} />
        <RelatedTreatments cards={relatedCards(site, t, c)} nonSurgical={non} />
        <NearbyCities lines={near.map((n) => n.line)} />
        <TalkSection waMessage={waMessage} />
        <ReviewerSection reviewer={reviewer} content={content} />
        <DisclaimerSection kind={kind} />
      </PageShell>
    </PageFrame>
  );
}
