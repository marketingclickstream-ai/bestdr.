import type { BlogPost, FaqRow, Reviewer, Treatment, VideoItem } from "@/content/types";
import { absoluteUrl, SITE_URL } from "./env";

// JSON-LD builders. Each returns a plain object; <JsonLd> prints it.
// Rules: schema text equals visible text; no Physician / Hospital / LocalBusiness / Review /
// Offer markup; reviewedBy and lastReviewed only when a real (non-sample) reviewer is shown.

export const ORG_ID = `${SITE_URL}/#org`;

export function organization() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Bestdoctorsin",
    url: SITE_URL,
    logo: `${SITE_URL}/assets/logo-mark.png`,
  };
}

export interface Crumb { name: string; path: string }

export function breadcrumbList(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: absoluteUrl(c.path) })),
  };
}

/** Markup stripped to the text a visitor reads. */
export function plainText(rich: string): string {
  return rich.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "").replace(/\{(sample|tbc|pending)\}/g, "").replace(/\s+/g, " ").trim();
}

export function faqPage(faqs: Pick<FaqRow, "question" | "answer">[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: plainText(f.answer) } })),
  };
}

export function medicalWebPage(args: {
  path: string;
  name: string;
  description: string;
  treatment: Treatment;
  reviewer: Reviewer | null;
}) {
  const { treatment: t, reviewer } = args;
  const real = reviewer && !reviewer.isSample ? reviewer : null;
  return {
    "@type": "MedicalWebPage",
    "@id": `${absoluteUrl(args.path)}#page`,
    url: absoluteUrl(args.path),
    name: args.name,
    description: args.description,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
    ...(real ? { reviewedBy: { "@type": "Person", name: real.name, jobTitle: real.credential }, lastReviewed: real.reviewedOn } : {}),
    about: {
      "@type": "MedicalProcedure",
      name: t.name,
      ...(t.alternateName ? { alternateName: t.alternateName } : {}),
      procedureType: t.procedure.procedureType,
      bodyLocation: t.procedure.bodyLocation,
      howPerformed: t.procedure.howPerformed,
      preparation: t.procedure.preparation,
      followup: t.procedure.followup,
    },
  };
}

/** Sample videos stay out of the markup once indexing is on (SEO plan: sample titles never go to schema). */
export function videoObject(v: VideoItem) {
  if (v.isSample || !v.youtubeId) return null;
  return {
    "@type": "VideoObject",
    name: v.title,
    description: v.description,
    thumbnailUrl: [absoluteUrl(`/assets/video-${v.slug}.jpg`)],
    uploadDate: v.uploadDate,
    duration: v.isoDuration,
    embedUrl: `https://www.youtube-nocookie.com/embed/${v.youtubeId}`,
    url: absoluteUrl(`/videos/${v.slug}`),
    transcript: v.transcript,
  };
}

export function itemList(name: string, items: { name: string; path: string }[]) {
  return {
    "@type": "ItemList",
    name,
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, url: absoluteUrl(it.path) })),
  };
}

export function blogPosting(post: BlogPost, reviewer: Reviewer | null) {
  const real = reviewer && !reviewer.isSample ? reviewer : null;
  return {
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    mainEntityOfPage: absoluteUrl(`/learn/${post.slug}`),
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
    ...(real ? { reviewedBy: { "@type": "Person", name: real.name, jobTitle: real.credential } } : {}),
  };
}

export function graph(...nodes: (object | null | undefined | false)[]) {
  return { "@context": "https://schema.org", "@graph": nodes.filter(Boolean) };
}
