import type { BlogPost } from "../types";

const STUB = "This guide is being written and has not been reviewed by a surgeon yet. It is not published to search engines.";

// Stubs: title, excerpt and reading time are working drafts. Body text is added by the editor
// and signed off by the reviewer before `published` is set to true.
const stub = (p: Omit<BlogPost, "body" | "reviewerId" | "published" | "datePublished" | "dateModified" | "treatmentSlug">): BlogPost => ({
  ...p,
  treatmentSlug: "gynecomastia-surgery",
  body: [STUB, p.excerpt],
  reviewerId: null,
  published: false,
  datePublished: "2026-11-09",
  dateModified: "2026-11-09",
});

export const posts: BlogPost[] = [
  stub({
    slug: "gynecomastia-grades",
    title: "Gynecomastia grades 1 to 4: what each stage looks like",
    excerpt: "A plain guide to how doctors describe the size and spread of chest tissue, with a diagram.",
    minutes: 5,
    thumb: 1,
  }),
  stub({
    slug: "gynecomastia-fat-or-gland",
    title: "Fat or gland? What a doctor checks before suggesting surgery",
    excerpt: "The difference between chest fat and breast tissue, and why the answer changes the plan.",
    minutes: 4,
    thumb: 2,
  }),
  stub({
    slug: "pseudogynecomastia",
    title: "Pseudogynecomastia: when the chest is soft but there is no gland",
    excerpt: "What it means, how it is told apart, and which options people discuss with a doctor.",
    minutes: 4,
    thumb: 3,
  }),
  stub({
    slug: "male-chest-exercise-and-fat",
    title: "Can chest exercise change gynecomastia?",
    excerpt: "What exercise does to muscle and fat, and where it stops helping.",
    minutes: 4,
    thumb: 2,
  }),
  stub({
    slug: "gynecomastia-causes",
    title: "Causes of gynecomastia: puberty, medicines, hormones and weight",
    excerpt: "The usual reasons the male chest grows, and which ones a doctor can treat first.",
    minutes: 5,
    thumb: 1,
  }),
  stub({
    slug: "gynecomastia-liposuction-vs-gland-removal",
    title: "Liposuction only, or gland removal? How the plan is chosen",
    excerpt: "A side-by-side look at the two approaches and what decides between them.",
    minutes: 5,
    thumb: 3,
  }),
  { ...stub({
    slug: "questions-to-ask-your-plastic-surgeon",
    title: "Questions to ask your plastic surgeon before you book",
    excerpt: "A checklist you can screenshot: registration, anaesthesia, what the quote includes.",
    minutes: 3,
    thumb: 2,
  }), treatmentSlug: null },
  { ...stub({
    slug: "how-to-compare-surgery-quotes",
    title: "How to compare two surgery quotes line by line",
    excerpt: "Why two quotes can look different and what to check in each line.",
    minutes: 4,
    thumb: 1,
  }), treatmentSlug: null },
];
