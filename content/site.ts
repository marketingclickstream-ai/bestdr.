// Site-wide navigation. Every href is a URL from the SEO plan (12-seo-topical-plan.md).
// Links are filtered at render time: a link whose page does not exist, or (in LINK_MODE=live)
// is not published and gate-passing, is dropped from the HTML.

export interface NavLink { label: string; href: string; all?: boolean }
export interface NavGroup { label: string; href: string; links: NavLink[]; alignRight?: boolean }

export const SITE_NAME = "Bestdoctorsin";
/** Date the editorial content was last changed. Used as sitemap lastmod and schema dateModified for pages that have no date of their own. Update it when copy changes. */
export const CONTENT_UPDATED = "2026-11-10";
export const CONTENT_FIRST_PUBLISHED = "2026-11-09";
export const TAGLINE = "India's surgery-first patient guide. Plastic and cosmetic surgery, explained line by line.";
export const DISCLAIMER =
  "Information on this site is for education, not medical advice. Outcomes vary from person to person. Talk to a registered surgeon before you decide.";
export const NAME_LINE = "Bestdoctorsin is a name, not a ranking. We do not rank or rate doctors against each other.";

export const mainNav: NavGroup[] = [
  { label: "Treatments", href: "/plastic-surgery", links: [
    { label: "Gynecomastia surgery", href: "/gynecomastia-surgery" },
    { label: "Liposuction", href: "/liposuction" },
    { label: "Rhinoplasty", href: "/rhinoplasty" },
    { label: "Hair transplant", href: "/hair-transplant" },
    { label: "Breast augmentation", href: "/breast-augmentation" },
    { label: "Tummy tuck", href: "/tummy-tuck" },
    { label: "All plastic surgery", href: "/plastic-surgery", all: true },
  ] },
  { label: "Cities", href: "/plastic-surgery-in-gurgaon", links: [
    { label: "Gurgaon", href: "/plastic-surgery-in-gurgaon" },
    { label: "Delhi", href: "/plastic-surgery-in-delhi" },
    { label: "Lucknow", href: "/plastic-surgery-in-lucknow" },
    { label: "Kanpur", href: "/plastic-surgery-in-kanpur" },
  ] },
  { label: "Cost", href: "/cost", links: [
    { label: "Gynecomastia cost", href: "/cost/gynecomastia-surgery" },
    { label: "Liposuction cost", href: "/cost/liposuction" },
    { label: "How to compare two quotes", href: "/learn/how-to-compare-surgery-quotes" },
    { label: "All cost pages", href: "/cost", all: true },
  ] },
  { label: "Recovery and risks", href: "/learn", links: [
    { label: "Gynecomastia recovery", href: "/gynecomastia-surgery#recovery" },
    { label: "Gynecomastia risks", href: "/gynecomastia-surgery#risks" },
    { label: "Gynecomastia grades", href: "/learn/gynecomastia-grades" },
    { label: "Fat or gland", href: "/learn/gynecomastia-fat-or-gland" },
    { label: "Liposuction recovery", href: "/liposuction#recovery" },
    { label: "Liposuction risks", href: "/liposuction#risks" },
    { label: "All guides", href: "/learn", all: true },
  ] },
  { label: "Videos", href: "/videos", alignRight: true, links: [
    { label: "All videos", href: "/videos", all: true },
  ] },
  { label: "How we work", href: "/how-we-verify-surgeons", alignRight: true, links: [
    { label: "How we check surgeons", href: "/how-we-verify-surgeons" },
    { label: "Medical review board", href: "/medical-review-board" },
    { label: "Editorial policy", href: "/editorial-policy" },
    { label: "About us", href: "/about" },
  ] },
];

export const footerNav: { label: string; links: NavLink[] }[] = [
  { label: "Treatments", links: [
    { label: "Gynecomastia surgery", href: "/gynecomastia-surgery" },
    { label: "Liposuction", href: "/liposuction" },
    { label: "Rhinoplasty", href: "/rhinoplasty" },
    { label: "Hair transplant", href: "/hair-transplant" },
    { label: "Breast augmentation", href: "/breast-augmentation" },
    { label: "Tummy tuck", href: "/tummy-tuck" },
    { label: "All plastic surgery", href: "/plastic-surgery" },
  ] },
  { label: "Cities", links: [
    { label: "Gynecomastia surgery in Gurgaon", href: "/gynecomastia-surgery-in-gurgaon" },
    { label: "Plastic surgery in Gurgaon", href: "/plastic-surgery-in-gurgaon" },
    { label: "Gynecomastia surgery in Delhi", href: "/gynecomastia-surgery-in-delhi" },
    { label: "Plastic surgery in Delhi", href: "/plastic-surgery-in-delhi" },
    { label: "Liposuction in Gurgaon", href: "/liposuction-in-gurgaon" },
    { label: "Liposuction in Delhi", href: "/liposuction-in-delhi" },
    { label: "Plastic surgery in Lucknow", href: "/plastic-surgery-in-lucknow" },
    { label: "Plastic surgery in Kanpur", href: "/plastic-surgery-in-kanpur" },
  ] },
  { label: "Cost", links: [
    { label: "Gynecomastia surgery cost", href: "/cost/gynecomastia-surgery" },
    { label: "Liposuction cost", href: "/cost/liposuction" },
    { label: "How to compare two quotes", href: "/learn/how-to-compare-surgery-quotes" },
    { label: "All cost pages", href: "/cost" },
  ] },
  { label: "Learn and blog", links: [
    { label: "Gynecomastia grades", href: "/learn/gynecomastia-grades" },
    { label: "Fat or gland?", href: "/learn/gynecomastia-fat-or-gland" },
    { label: "Pseudogynecomastia", href: "/learn/pseudogynecomastia" },
    { label: "Liposuction is not weight loss", href: "/learn/liposuction-vs-weight-loss" },
    { label: "Liposuction recovery, week by week", href: "/learn/liposuction-recovery-timeline" },
    { label: "Questions to ask your surgeon", href: "/learn/questions-to-ask-your-plastic-surgeon" },
    { label: "Videos", href: "/videos" },
    { label: "All guides", href: "/learn" },
  ] },
  { label: "Company and trust", links: [
    { label: "About us", href: "/about" },
    { label: "How we work", href: "/how-we-verify-surgeons" },
    { label: "Medical review board", href: "/medical-review-board" },
    { label: "Editorial policy", href: "/editorial-policy" },
    { label: "Contact and grievance", href: "/contact" },
  ] },
  { label: "Legal", links: [
    { label: "Privacy policy", href: "/privacy" },
    { label: "Medical disclaimer", href: "/medical-disclaimer" },
    { label: "Terms of use", href: "/terms" },
  ] },
];
