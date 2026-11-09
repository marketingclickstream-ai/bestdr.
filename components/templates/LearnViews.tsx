import Link from "next/link";
import type { BlogPost, SiteData } from "@/content/types";
import { findReviewer } from "@/lib/data";
import { longDate } from "@/lib/format";
import { isLinkVisible } from "@/lib/pages";
import { parseBody, postFaqs, type PostBlock } from "@/lib/blog-body";
import { blogPosting, breadcrumbList, faqPage, graph, itemList, organization } from "@/lib/schema";
import { nextCitiesFor, siblingPosts } from "@/lib/view";
import { Breadcrumbs } from "../layout/Breadcrumbs";
import { ReadThumb1, ReadThumb2, ReadThumb3 } from "../illustrations/Plates";
import { CallbackBand, MidBanner, WhatsAppBand } from "../sections/Bands";
import { FaqSection } from "../sections/Faq";
import { DisclaimerSection } from "../sections/Trust";
import { ImageSlot } from "../ui/ImageSlot";
import { PageFrame } from "../ui/PageFrame";
import { Rich } from "../ui/Rich";
import { SampleChip } from "../ui/SampleChip";
import { SectionHead } from "../ui/SectionHead";
import { TopicFilter } from "../ui/TopicFilter";
import { SimplePage } from "./SimplePage";

const thumbs = { 1: ReadThumb1, 2: ReadThumb2, 3: ReadThumb3 } as const;

/** A guide is a draft until it is published and has a real reviewer. */
const isDraft = (p: BlogPost, site: SiteData) => {
  const r = findReviewer(site, p.reviewerId);
  return !p.published || !r || r.isSample;
};

export function LearnIndex({ site }: { site: SiteData }) {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Guides", path: "/learn" }];
  const posts = site.posts.filter((p) => isLinkVisible(`/learn/${p.slug}`));
  const topics = [
    { id: "all", label: "All", count: posts.length },
    ...site.treatments
      .map((t) => ({ id: t.slug, label: t.menuName, count: posts.filter((p) => p.treatmentSlug === t.slug).length }))
      .filter((t) => t.count > 0),
    { id: "general", label: "General", count: posts.filter((p) => !p.treatmentSlug).length },
  ].filter((t) => t.count > 0);
  return (
    <SimplePage
      crumbs={crumbs}
      h1="Guides"
      lead="Short guides that answer one question each. A guide is marked as pending until a surgeon has reviewed it."
      jsonLd={graph(organization(), breadcrumbList(crumbs), itemList("Guides", posts.map((p) => ({ name: p.title, path: `/learn/${p.slug}` }))))}
      extra={
        <section className="sec">
          <SectionHead>All guides</SectionHead>
          <TopicFilter topics={topics} listId="guide-list" />
          <ul className="rr full" id="guide-list">
            {posts.map((p) => {
              const Thumb = thumbs[p.thumb];
              return (
                <li key={p.slug} data-topic={p.treatmentSlug ?? "general"}>
                  <ImageSlot slot={p.cover} ratio="16 / 9" sizes="(min-width:1180px) 20vw, 40vw"><Thumb /></ImageSlot>
                  <div>
                    <h3><Link href={`/learn/${p.slug}`}>{p.title}</Link></h3>
                    <p>{p.excerpt}</p>
                    <p className="meta">{p.minutes} min read {isDraft(p, site) && <SampleChip label="Pending review" />}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      }
    />
  );
}

function Blocks({ blocks, bannerAt, message, reviewerLine }: { blocks: PostBlock[]; bannerAt: number; message: string; reviewerLine: React.ReactNode }) {
  return (
    <>
      {blocks.map((b, i) => {
        const key = `${b.kind}-${i}`;
        const banner = i === bannerAt ? <MidBanner key={`mid-${i}`} id="post-mid" heading="Want this for your city?" text="Ask on WhatsApp. The message already names this guide, and nobody calls unless you ask." message={message} /> : null;
        let node: React.ReactNode = null;
        switch (b.kind) {
          case "reviewer": node = <p key={key} className="byline">{reviewerLine}</p>; break;
          case "h2": node = <h2 key={key}>{b.text}</h2>; break;
          case "list": node = <ul key={key} className="plain">{b.items.map((x) => <li key={x}><Rich text={x} /></li>)}</ul>; break;
          case "note": node = <p key={key} className="callout"><Rich text={b.text} /></p>; break;
          case "p": node = <p key={key}><Rich text={b.text} /></p>; break;
          case "sources": node = <p key={key} className="srcline"><b>Sources:</b> <Rich text={b.text} /></p>; break;
          case "faqs": node = null; break; // rendered as one group after the body
        }
        return <span key={`w-${i}`} style={{ display: "contents" }}>{banner}{node}</span>;
      })}
    </>
  );
}

export function LearnPost({ site, post }: { site: SiteData; post: BlogPost }) {
  const path = `/learn/${post.slug}`;
  const crumbs = [{ name: "Home", path: "/" }, { name: "Guides", path: "/learn" }, { name: post.title, path }];
  const reviewer = findReviewer(site, post.reviewerId);
  const treatment = site.treatments.find((t) => t.slug === post.treatmentSlug);
  const blocks = parseBody(post.body);
  const faqs = postFaqs(post.body);
  const faqRows = faqs.map((f, i) => ({ id: `post-faq-${i + 1}`, treatmentSlug: post.treatmentSlug ?? "", citySlug: null, order: i + 1, question: f.question, answer: f.answer }));
  const siblings = siblingPosts(site, post);
  const cities = nextCitiesFor(post).map((slug) => site.cities.find((c) => c.slug === slug)).filter((c): c is NonNullable<typeof c> => Boolean(c));
  const waMessage = `I read "${post.title}" on Bestdoctorsin and have a question`;
  // The mid-post banner goes before the H2 nearest the middle of the article.
  const h2s = blocks.map((b, i) => (b.kind === "h2" ? i : -1)).filter((i) => i >= 0);
  const bannerAt = h2s.length >= 3 ? (h2s[Math.floor(h2s.length / 2)] ?? -1) : -1;
  const reviewerLine = reviewer
    ? <>Reviewed by <b>{reviewer.name}</b>, {reviewer.credential}, on {longDate(reviewer.reviewedOn)}. {reviewer.isSample && <SampleChip />}</>
    : <>Medical review is pending. No reviewer is named yet.</>;
  const ld = graph(organization(), breadcrumbList(crumbs), blogPosting(post, reviewer), faqs.length > 0 && faqPage(faqs));
  const Thumb = thumbs[post.thumb];
  const hasReviewerLine = blocks.some((b) => b.kind === "reviewer");

  return (
    <PageFrame jsonLd={ld} treatment={post.treatmentSlug ?? ""} label={post.title.toLowerCase()}>
      <section className="hero" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <Breadcrumbs crumbs={crumbs} />
          <h1>{post.title}</h1>
          <p className="lead" style={{ marginTop: 16 }}><Rich text={post.excerpt} /></p>
          <p className="meta">{post.minutes} min read. Updated {longDate(post.dateModified)}.</p>
        </div>
      </section>
      <div className="wrap post">
        <figure className="postcover">
          <ImageSlot slot={post.cover} ratio="16 / 9" sizes="(min-width:1180px) 50vw, 100vw"><Thumb /></ImageSlot>
          {post.cover?.caption && <figcaption className="fcap">{post.cover.caption}</figcaption>}
        </figure>
        {!hasReviewerLine && <p className="byline">{reviewerLine}</p>}
        <Blocks blocks={blocks} bannerAt={bannerAt} message={waMessage} reviewerLine={reviewerLine} />
        {faqRows.length > 0 && <FaqSection faqs={faqRows} heading="Questions on this topic" />}
        <section className="sec" id="next-steps">
          <SectionHead>Where to go next</SectionHead>
          <ul className="plain">
            {treatment && <li><Rich text={`The full guide: [${treatment.name}](/${treatment.slug}).`} /></li>}
            {treatment?.nationalRange && <li><Rich text={`What it costs: [${treatment.name} cost in India](/cost/${treatment.slug}).`} /></li>}
            {siblings.map((s) => <li key={s.slug}><Rich text={`Related guide: [${s.title}](/learn/${s.slug}).`} /></li>)}
            <li><Rich text="Before you book: [questions to ask your plastic surgeon](/learn/questions-to-ask-your-plastic-surgeon) and [how to compare two quotes](/learn/how-to-compare-surgery-quotes)." /></li>
            {treatment && cities.map((c) => <li key={c.slug}><Rich text={`For a local plan: [${treatment.name} in ${c.name}](/${treatment.slug}-in-${c.slug}).`} /></li>)}
          </ul>
        </section>
        <CallbackBand treatment={post.treatmentSlug ?? ""} city="other" />
        <WhatsAppBand message={waMessage} />
        <DisclaimerSection />
      </div>
    </PageFrame>
  );
}
