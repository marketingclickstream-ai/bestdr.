#!/usr/bin/env node
// Copy checker for bestdoctorsin content.
// Scans content/**/*.ts (and any extra paths given as arguments) for words and patterns the project
// rules forbid, then prints findings grouped by file. Exit code 1 when any error is found.
//
//   node scripts/check-copy.mjs              scan content/**/*.ts under the current directory
//   node scripts/check-copy.mjs --root DIR   scan DIR/content/**/*.ts
//   node scripts/check-copy.mjs --strict     warnings also fail the run
//   node scripts/check-copy.mjs --no-shape   skip the blog post length and link checks
//   node scripts/check-copy.mjs FILE...      scan only the named files
//
// Severity: "error" = banned word, dash, hospital or doctor name, regulated term, not-X-but-Y.
//           "warn"  = heuristics that need a human look (triads, title-case headings, post shape),
//                     and any finding on a comment line.
// Add to package.json scripts:  "check:copy": "node scripts/check-copy.mjs"

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, resolve, basename } from "node:path";

const argv = process.argv.slice(2);
const flag = (n) => argv.includes(n);
const rootIdx = argv.indexOf("--root");
const ROOT = resolve(rootIdx >= 0 ? argv[rootIdx + 1] : process.cwd());
const STRICT = flag("--strict");
const SHAPE = !flag("--no-shape");
const explicit = argv.filter((a, i) => !a.startsWith("--") && argv[i - 1] !== "--root");

// ---------- rules ----------

const BANNED = [
  ["best", /\bbest\b/gi],
  ["guarantee", /\bguarantee(?:s|d)?\b/gi],
  ["safe", /\bsaf(?:e|er|est|ely|ety)\b/gi],
  ["painless", /\bpainless(?:ly)?\b/gi],
  ["permanent", /\bpermanen(?:t|tly|ce)\b/gi],
  ["success rate", /\bsuccess\s+rates?\b/gi],
  ["lowest price", /\blowest\s+prices?\b/gi],
  ["cheapest", /\bcheapest\b/gi],
  ["affordable", /\baffordabl[ey]\b|\baffordability\b/gi],
  ["world-class", /\bworld[- ]class\b/gi],
  ["discount", /\bdiscount(?:s|ed)?\b/gi],
  ["offer", /\boffer(?:s|ed|ing)?\b/gi],
  ["100%", /(^|[^\w])100\s?%/g],
  ["scar-free", /\bscar[- ]free\b|\bno scars?\b/gi],
  ["cure", /\bcure(?:s|d)?\b/gi],
  ["miracle", /\bmiracles?\b|\bmiraculous\b/gi],
  ["instant results", /\binstant(?:ly)?\s+results?\b|\binstant\b/gi],
];

const DASHES = [["em dash", /—/g], ["en dash", /–/g], ["double hyphen", /\s--\s/g]];

const NAMES = [
  ["doctor name (Dr.)", /\bDr\.?\s+[A-Z][a-z]+/g],
  ["named hospital or clinic", /\b(?!Mayo\b|Cleveland\b)[A-Z][A-Za-z]+(?:\s+[A-Z][A-Za-z]+)*\s+(?:Hospitals?|Clinics?)\b/g],
  ["hospital or clinic as a proper name", /\b(?:Hospitals?|Clinics?)\s+(?:of|Pvt|Ltd)\b/g],
];
// Names that are sources, not facilities.
const NAME_ALLOW = [/Mayo Clinic/, /Cleveland Clinic/];

const REGULATED = [
  ["regrowth claim", /\bregrow(?:th|n|s|ing)?\b|\bhair\s+growth\b/gi],
  ["clearance claim", /\bclearance\b|\bFDA\b|\bUSFDA\b|\bCDSCO[- ]approved\b/g],
  ["acne clearing claim", /\bclears?\s+(?:your\s+)?(?:acne|skin)\b|\bacne[- ]free\b|\bclear\s+skin\s+in\b/gi],
  ["ageing reversal claim", /\breverse[sd]?\s+(?:the\s+)?ageing\b|\breverse[sd]?\s+(?:the\s+)?aging\b|\bnon[- ]surgical\s+facelift\b|\bturn\s+back\s+the\s+clock\b|\byounger[- ]looking\b|\banti[- ]?ageing\s+treatment\s+works\b/gi],
  ["unit or from-price promotion", /\bper[- ]unit\s+price\b|\bstarts?\s+from\b|\bstarting\s+at\b|\bfrom\s+Rs\.?\s?\d/gi],
  ["no-downtime claim", /\bno\s+downtime\b|\bwithout\s+downtime\b/gi],
];
// Botox is a prescription drug brand. Allowed in plain body text of the botulinum toxin files only,
// never on slug, title, name, label, alt or anchor lines. Add // allow-botox at the end of a line to allow it elsewhere.
const BOTOX = /\bbotox\b/gi;
const BOTOX_FILE = /botulinum|toxin/i;
const BOTOX_BLOCKED_LINE = /^\s*(?:slug|title|excerpt|name|menuName|label|alt|anchor|heading|h1|metaTitle)\s*:/;
const BOTOX_PATH_ALLOW = /content[\\/]slugs\.ts$/; // slug constants mention the alternate spelling in code

const HEURISTIC_ERR = [
  ["not-X-but-Y", /\bnot\s+(?:just|only|merely|simply)\b/gi],
  ["not-X-but-Y", /\b(?:is|are|was|were|does|do|did)\s+not\s+[^.;:!?]{1,60},\s+(?:but|it\s+(?:is|'s)|they\s+are)\b/gi],
  ["not-X-but-Y", /\b(?:isn't|aren't|it's\s+not|it\s+is\s+not|this\s+is\s+not|that\s+is\s+not)\s+[^.;:!?]{1,60}[,;]\s+(?:but|it's|it\s+is|this\s+is)\b/gi],
  ["not-X-but-Y", /\bnot\s+[^.;:!?]{1,40}\s+but\s+(?!also\b)[a-z]/gi],
  ["not-X-but-Y (split)", /\bdoes\s+not\s+mean\b[^.]*\.\s+It\s+means\b/gi],
    ["stock AI word", /\b(?:delve|tapestry|testament|seamless(?:ly)?|cutting[- ]edge|unlock(?:ing)?|empower(?:s|ing)?|pivotal|crucial|vibrant|robust|landscape|journey|in today's world|game[- ]chang(?:er|ing))\b/gi],
  ["staged opener", /\b(?:let's dive|let's explore|here's what you need to know|here's the thing|honestly\?|real talk)\b/gi],
  ["sales or lowest-price word", /\b(?:cheap|bargain|lowest|top[- ]rated|leading|renowned|state[- ]of[- ]the[- ]art|breathtaking|stunning)\b/gi],
];

// Three single words in a row ("A, B, and C") are often a real list, so this is a warning only.
const TRIAD = /(?<![\w-])([A-Za-z-]+), ([A-Za-z-]+),? (?:and|or) ([A-Za-z-]+)(?=[.;:)]|$)/g;
// Title-case headings: three or more capitalised words after the first.
const RATHER = /\brather\s+than\b/gi;
const TITLE_CASE_H2 = /^##\s+[A-Z][a-z]+(?:\s+[A-Z][a-z]+){2,}\s*$/;

// ---------- helpers ----------

function walk(dir, out = []) {
  let entries;
  try { entries = readdirSync(dir); } catch { return out; }
  for (const e of entries) {
    if (e === "node_modules" || e.startsWith(".")) continue;
    const p = join(dir, e);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (p.endsWith(".ts") && !p.endsWith(".d.ts")) out.push(p);
  }
  return out;
}

const brandless = (s) => s.replace(/bestdoctorsin(?:\.com)?/gi, (m) => " ".repeat(m.length));
const isComment = (line) => /^\s*(?:\/\/|\/\*|\*)/.test(line);
const findings = [];
function add(file, lineNo, severity, rule, text, match) {
  const i = Math.max(0, text.indexOf(match));
  const start = Math.max(0, i - 25);
  const ctx = text.slice(start, i + match.length + 25).trim();
  findings.push({ file, line: lineNo, severity, rule, ctx });
}

// A regulated phrase that the copy itself warns against ("do not assume there is no downtime", "no per-unit price")
// is a statement of a rule, not a claim. Skip those when the phrase sits right after a negation.
const NEGATED = /(?:\b(?:not|never|no|nobody|avoid|without)\b[^.;:]{0,40})$/i;
const NEGATABLE = new Set(["no-downtime claim", "unit or from-price promotion"]);

function scanPatterns(file, lineNo, text, list, severity, ruleSuffix = "") {
  for (const [rule, re] of list) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(text))) {
      if (NEGATABLE.has(rule) && NEGATED.test(text.slice(0, m.index))) continue;
      add(file, lineNo, severity, rule + ruleSuffix, text, m[0].trim() || m[0]);
      if (m[0].length === 0) re.lastIndex++;
    }
  }
}

// ---------- per-file scan ----------

function scanFile(abs) {
  const rel = relative(ROOT, abs);
  const src = readFileSync(abs, "utf8");
  const rows = src.split("\n");
  const allowBotox = BOTOX_FILE.test(basename(abs));
  const skipBotox = BOTOX_PATH_ALLOW.test(abs);
  rows.forEach((raw, idx) => {
    const lineNo = idx + 1;
    const text = brandless(raw);
    const comment = isComment(raw);
    const sev = (s) => (comment ? "warn" : s);
    const tag = comment ? " [comment]" : "";
    scanPatterns(rel, lineNo, text, BANNED, sev("error"), tag);
    scanPatterns(rel, lineNo, text, DASHES, sev("error"), tag);
    // hospital and doctor names
    for (const [rule, re] of NAMES) {
      re.lastIndex = 0;
      let m;
      while ((m = re.exec(text))) {
        if (NAME_ALLOW.some((a) => a.test(m[0]))) continue;
        add(rel, lineNo, sev("error"), rule + tag, text, m[0]);
      }
    }
    scanPatterns(rel, lineNo, text, REGULATED, sev("error"), tag);
    scanPatterns(rel, lineNo, text, HEURISTIC_ERR, sev("error"), tag);
    // Botox
    BOTOX.lastIndex = 0;
    let bm;
    while ((bm = BOTOX.exec(text))) {
      if (skipBotox || /allow-botox/.test(raw)) continue;
      if (!allowBotox) add(rel, lineNo, sev("error"), "Botox brand outside the botulinum toxin files" + tag, text, bm[0]);
      else if (BOTOX_BLOCKED_LINE.test(raw)) add(rel, lineNo, sev("error"), "Botox brand in a slug, title or label" + tag, text, bm[0]);
    }
    // warnings
    RATHER.lastIndex = 0;
    let rm;
    while ((rm = RATHER.exec(text))) add(rel, lineNo, "warn", "rather than (check for a not-X-but-Y contrast)", text, rm[0]);
    TRIAD.lastIndex = 0;
    let tm;
    while ((tm = TRIAD.exec(text))) {
      if (comment || /^\s*(?:import|export|const|type|interface|##)/.test(raw)) continue;
      add(rel, lineNo, "warn", "possible forced triad", text, tm[0]);
    }
    if (TITLE_CASE_H2.test(raw.trim())) add(rel, lineNo, "warn", "heading not in sentence case", text, raw.trim());
  });
  if (SHAPE && /[\\/]content[\\/]blog[\\/]/.test(abs) && !/(?:base|index)\.ts$/.test(abs)) shapeCheck(rel, src);
}

// ---------- blog post shape ----------

const HUBS = {
  acne: "/acne-treatment", hydrafacial: "/hydrafacial", "botulinum-toxin": "/botulinum-toxin-injections",
  "anti-aging": "/anti-aging-treatment", prp: "/prp-treatment", "hair-transplant": "/hair-transplant",
};

function plainWords(body) {
  const t = body
    .replace(/\[\[sources:[^\]]*\]\]/g, " ")
    .replace(/\[\[reviewer\]\]/g, " ")
    .replace(/\[\[link:\s*[^|\]]*\|\s*([^\]]*)\]\]/g, "$1")
    .replace(/\[\[faq:\s*([^|\]]*)\|\s*([^\]]*)\]\]/g, "$1 $2")
    .replace(/^(?:##|-|>)\s+/gm, "");
  return t.split(/\s+/).filter(Boolean);
}

function shapeCheck(rel, src) {
  const stem = basename(rel, ".ts");
  const hub = HUBS[stem];
  const parts = src.split(/\n\s*slug:\s*"/).slice(1);
  for (const part of parts) {
    const slug = part.slice(0, part.indexOf('"'));
    const lineNo = src.slice(0, src.indexOf(`slug: "${slug}"`)).split("\n").length;
    const title = /title:\s*"((?:[^"\\]|\\.)*)"/.exec(part)?.[1] ?? "";
    const excerpt = /excerpt:\s*"((?:[^"\\]|\\.)*)"/.exec(part)?.[1] ?? "";
    const bm = /body:\s*lines\(`([\s\S]*?)`\)/.exec(part);
    if (!bm) continue;
    // Files that keep the slug in one constant write links as /${T}; resolve it to the default slug.
    const body = bm[1].replace(/\$\{T\}/g, "botulinum-toxin-injections");
    const w = plainWords(body);
    const wshape = (rule, msg) => findings.push({ file: rel, line: lineNo, severity: "warn", rule: `post shape: ${rule}`, ctx: `${slug}: ${msg}` });
    if (title.length > 60) wshape("title", `${title.length} characters (max 60)`);
    if (excerpt.length > 155) wshape("meta", `${excerpt.length} characters (max 155)`);
    if (w.length < 600 || w.length > 900) wshape("length", `${w.length} words (target 600 to 900)`);
    const lineArr = body.trim().split("\n").map((x) => x.trim()).filter(Boolean);
    if (lineArr[0] !== "[[reviewer]]") wshape("reviewer", "first line is not [[reviewer]]");
    const intro = lineArr.find((l, i) => i > 0 && !/^(##|-|>|\[\[)/.test(l)) ?? "";
    const iw = intro.replace(/\[\[link:\s*[^|\]]*\|\s*([^\]]*)\]\]/g, "$1").split(/\s+/).filter(Boolean);
    const firstSentence = intro.split(/(?<=[.?!])\s/).slice(0, 2).join(" ").split(/\s+/).length;
    if (firstSentence > 60) wshape("intro", `first two sentences are ${firstSentence} words (answer within 60)`);
    if (iw.length > 110) wshape("intro", `intro paragraph is ${iw.length} words`);
    if (!/\[\[faq:/.test(body)) wshape("faq", "no FAQ block");
    if (!/\[\[sources:/.test(body)) wshape("sources", "no sources line");
    if (!/^##\s/m.test(body)) wshape("headings", "no H2 sections");
    if (hub && !body.includes(`[[link: ${hub} |`)) wshape("links", `no link to hub ${hub}`);
    if (!/\[\[link:\s*\/cost\//.test(body)) wshape("links", "no link to a cost page");
    if (!/\[\[link:\s*\/[a-z-]+-in-(?:delhi|gurgaon|lucknow|kanpur)\s*\|/.test(body)) wshape("links", "no link to a city page");
    if ((body.match(/\[\[link:\s*\/learn\//g) ?? []).length < 2) wshape("links", "fewer than 2 related post links");
    // FAQ lines must hold exactly one separator and no nested markup.
    for (const m of body.matchAll(/\[\[faq:([^\n]*)\]\]$/gm)) {
      const inner = m[1];
      if (inner.includes("[[") || (inner.match(/ \| /g) ?? []).length !== 1) wshape("faq format", `bad FAQ line: ${inner.slice(0, 50)}`);
    }
  }
}

// ---------- run ----------

const files = explicit.length ? explicit.map((f) => resolve(f)) : walk(join(ROOT, "content"));
files.sort();
for (const f of files) scanFile(f);

const errors = findings.filter((f) => f.severity === "error");
const warns = findings.filter((f) => f.severity === "warn");
const byFile = new Map();
for (const f of findings) {
  if (!byFile.has(f.file)) byFile.set(f.file, []);
  byFile.get(f.file).push(f);
}
for (const [file, list] of byFile) {
  console.log(`\n${file}`);
  for (const f of list) console.log(`  ${f.line}: [${f.severity}] ${f.rule}: ${f.ctx}`);
}
console.log(`\nScanned ${files.length} files. ${errors.length} errors, ${warns.length} warnings.`);
process.exit(errors.length > 0 || (STRICT && warns.length > 0) ? 1 : 0);
