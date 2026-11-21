import { SLUGS } from "./slugs";

// Site-wide navigation. Every href is a URL from the SEO plan (12-seo-topical-plan.md).
// Links are filtered at render time: a link whose page does not exist, or (in LINK_MODE=live)
// is not published and gate-passing, is dropped from the HTML.

export interface NavLink {
  label: string;
  href: string;
  all?: boolean;
  /** Category heading shown above this link (and the links after it) in the menu. */
  group?: string;
}
export interface NavGroup { label: string; href: string; links: NavLink[]; alignRight?: boolean }

export const SITE_NAME = "Bestdoctorsin";
/** Date the editorial content was last changed. Used as sitemap lastmod and schema dateModified for pages that have no date of their own. Update it when copy changes. */
export const CONTENT_UPDATED = "2026-11-10";
export const CONTENT_FIRST_PUBLISHED = "2026-11-09";
export const TAGLINE = "India's patient guide to plastic surgery, skin and hair care, explained line by line.";
/** Surgery pages. */
export const DISCLAIMER =
  "Information on this site is for education, not medical advice. Outcomes vary from person to person. Talk to a registered surgeon before you decide.";
/** Skin, hair and injectable pages, and the footer. */
export const DISCLAIMER_GENERAL =
  "Information on this site is for education, not medical advice. Results vary from person to person. Talk to a registered doctor before you decide.";
export const NAME_LINE = "Bestdoctorsin is a name, not a ranking. We do not rank or rate doctors against each other.";

const S = SLUGS;

export const mainNav: NavGroup[] = [
  { label: "Treatments", href: "/treatments", links: [
    { label: "Gynecomastia surgery", href: "/gynecomastia-surgery", group: "Plastic surgery" },
    { label: "Liposuction", href: "/liposuction" },
    { label: "Rhinoplasty", href: "/rhinoplasty" },
    { label: "Breast augmentation", href: "/breast-augmentation" },
    { label: "Tummy tuck", href: "/tummy-tuck" },
    { label: "Acne treatment", href: `/${S.acne}`, group: "Skin" },
    { label: "Hydrafacial", href: `/${S.hydrafacial}` },
    { label: "Anti-aging treatment", href: `/${S.antiAging}` },
    { label: "Botulinum toxin injections", href: `/${S.toxin}`, group: "Injectables" },
    { label: "PRP treatment", href: `/${S.prp}`, group: "Hair" },
    { label: "Hair transplant", href: `/${S.hairTransplant}` },
    { label: "All plastic surgery", href: "/plastic-surgery", all: true },
    { label: "All skin, hair and injectables", href: "/treatments", all: true },
  ] },
  { label: "Cities", href: "/plastic-surgery-in-gurgaon", links: [
    { label: "Gurgaon", href: "/plastic-surgery-in-gurgaon" },
    { label: "Delhi", href: "/plastic-surgery-in-delhi" },
    { label: "Lucknow", href: "/plastic-surgery-in-lucknow" },
    { label: "Kanpur", href: "/plastic-surgery-in-kanpur" },
  ] },
  { label: "Cost", href: "/cost", links: [
    { label: "Gynecomastia cost", href: "/cost/gynecomastia-surgery", group: "Plastic surgery" },
    { label: "Liposuction cost", href: "/cost/liposuction" },
    { label: "Acne treatment cost", href: `/cost/${S.acne}`, group: "Skin" },
    { label: "Hydrafacial cost", href: `/cost/${S.hydrafacial}` },
    { label: "Anti-aging treatment cost", href: `/cost/${S.antiAging}` },
    { label: "Botulinum toxin cost", href: `/cost/${S.toxin}`, group: "Injectables" },
    { label: "PRP cost", href: `/cost/${S.prp}`, group: "Hair" },
    { label: "Hair transplant cost", href: `/cost/${S.hairTransplant}` },
    { label: "How to compare two quotes", href: "/learn/how-to-compare-surgery-quotes", group: "Guides" },
    { label: "All cost pages", href: "/cost", all: true },
  ] },
  { label: "Recovery and risks", href: "/learn", links: [
    { label: "Gynecomastia recovery", href: "/gynecomastia-surgery#recovery", group: "Surgery" },
    { label: "Gynecomastia risks", href: "/gynecomastia-surgery#risks" },
    { label: "Gynecomastia grades", href: "/learn/gynecomastia-grades" },
    { label: "Fat or gland", href: "/learn/gynecomastia-fat-or-gland" },
    { label: "Liposuction recovery", href: "/liposuction#recovery" },
    { label: "Liposuction risks", href: "/liposuction#risks" },
    { label: "Hair transplant recovery", href: `/${S.hairTransplant}#recovery` },
    { label: "Hydrafacial downtime", href: `/${S.hydrafacial}#recovery`, group: "Skin and hair" },
    { label: "Acne treatment risks", href: `/${S.acne}#risks` },
    { label: "PRP side effects", href: "/learn/prp-side-effects" },
    { label: "Botulinum toxin side effects", href: "/learn/botulinum-toxin-side-effects", group: "Injectables" },
    { label: "All guides", href: "/learn", all: true },
  ] },
  { label: "Videos", href: "/videos", alignRight: true, links: [
    { label: "All videos", href: "/videos", all: true },
  ] },
  { label: "How we work", href: "/how-we-verify-surgeons", alignRight: true, links: [
    { label: "How we check doctors", href: "/how-we-verify-surgeons" },
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
    { label: "Breast augmentation", href: "/breast-augmentation" },
    { label: "Tummy tuck", href: "/tummy-tuck" },
    { label: "Acne treatment", href: `/${S.acne}` },
    { label: "Hydrafacial", href: `/${S.hydrafacial}` },
    { label: "Anti-aging treatment", href: `/${S.antiAging}` },
    { label: "Botulinum toxin injections", href: `/${S.toxin}` },
    { label: "PRP treatment", href: `/${S.prp}` },
    { label: "Hair transplant", href: `/${S.hairTransplant}` },
    { label: "All plastic surgery", href: "/plastic-surgery" },
    { label: "All skin, hair and injectables", href: "/treatments" },
  ] },
  { label: "Cities", links: [
    { label: "Gynecomastia surgery in Gurgaon", href: "/gynecomastia-surgery-in-gurgaon" },
    { label: "Gynecomastia surgery in Delhi", href: "/gynecomastia-surgery-in-delhi" },
    { label: "Liposuction in Gurgaon", href: "/liposuction-in-gurgaon" },
    { label: "Liposuction in Delhi", href: "/liposuction-in-delhi" },
    { label: "Hydrafacial in Delhi", href: `/${S.hydrafacial}-in-delhi` },
    { label: "Acne treatment in Gurgaon", href: `/${S.acne}-in-gurgaon` },
    { label: "Hair transplant in Delhi", href: `/${S.hairTransplant}-in-delhi` },
    { label: "Treatments in Gurgaon", href: "/plastic-surgery-in-gurgaon" },
    { label: "Treatments in Delhi", href: "/plastic-surgery-in-delhi" },
    { label: "Treatments in Lucknow", href: "/plastic-surgery-in-lucknow" },
    { label: "Treatments in Kanpur", href: "/plastic-surgery-in-kanpur" },
  ] },
  { label: "Cost", links: [
    { label: "Gynecomastia surgery cost", href: "/cost/gynecomastia-surgery" },
    { label: "Liposuction cost", href: "/cost/liposuction" },
    { label: "Acne treatment cost", href: `/cost/${S.acne}` },
    { label: "Hydrafacial cost", href: `/cost/${S.hydrafacial}` },
    { label: "Anti-aging treatment cost", href: `/cost/${S.antiAging}` },
    { label: "Botulinum toxin cost", href: `/cost/${S.toxin}` },
    { label: "PRP cost", href: `/cost/${S.prp}` },
    { label: "Hair transplant cost", href: `/cost/${S.hairTransplant}` },
    { label: "How to compare two quotes", href: "/learn/how-to-compare-surgery-quotes" },
    { label: "All cost pages", href: "/cost" },
  ] },
  { label: "Learn and blog", links: [
    { label: "Gynecomastia grades", href: "/learn/gynecomastia-grades" },
    { label: "Fat or gland?", href: "/learn/gynecomastia-fat-or-gland" },
    { label: "Pseudogynecomastia", href: "/learn/pseudogynecomastia" },
    { label: "Liposuction is not weight loss", href: "/learn/liposuction-vs-weight-loss" },
    { label: "Liposuction recovery, week by week", href: "/learn/liposuction-recovery-timeline" },
    { label: "Acne grades and when to see a doctor", href: "/learn/acne-grades-when-to-see-doctor" },
    { label: "Hydrafacial and regular facial", href: "/learn/hydrafacial-vs-regular-facial" },
    { label: "How long wrinkle injections last", href: "/learn/how-long-wrinkle-injections-last" },
    { label: "How PRP is made", href: "/learn/prp-how-it-is-made" },
    { label: "FUE, FUT and DHI compared", href: "/learn/hair-transplant-fue-fut-dhi" },
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
