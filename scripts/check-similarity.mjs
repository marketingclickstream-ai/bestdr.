#!/usr/bin/env node
// Near-duplicate checker for bestdoctorsin copy.
// Builds 5-word shingles for every blog post and every other content file (treated as one page document),
// compares all pairs with Jaccard similarity, and flags:
//   1. pairs above the threshold (default 15 percent)
//   2. runs of repeated sentence openings inside one document (same first two words, 3 or more in a row)
//   3. identical sentences (7 or more words) that appear in 3 or more documents
//
//   node scripts/check-similarity.mjs                 scan content/**/*.ts under the current directory
//   node scripts/check-similarity.mjs --root DIR      scan DIR/content/**/*.ts
//   node scripts/check-similarity.mjs --threshold 12  change the pair threshold (percent)
//   node scripts/check-similarity.mjs --top 15        how many top pairs to print (default 15)
//   node scripts/check-similarity.mjs --only plastic- keep only pairs where one document id or file name contains the text
// Exit code 1 when any pair exceeds the threshold. Add to package.json: "check:similarity": "node scripts/check-similarity.mjs"

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, resolve, basename } from "node:path";

const argv = process.argv.slice(2);
const opt = (n, d) => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : d; };
const ROOT = resolve(opt("--root", process.cwd()));
const THRESHOLD = Number(opt("--threshold", "15")) / 100;
const TOP = Number(opt("--top", "15"));
const ONLY = opt("--only", "");
const K = 5;

function walk(dir, out = []) {
  let entries;
  try { entries = readdirSync(dir); } catch { return out; }
  for (const e of entries) {
    if (e === "node_modules" || e.startsWith(".")) continue;
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (p.endsWith(".ts") && !p.endsWith(".d.ts")) out.push(p);
  }
  return out;
}

// ---------- text extraction ----------

const cleanMarkup = (t) => t
  .replace(/\[\[sources:[^\]]*\]\]/g, " ")
  .replace(/\[\[reviewer\]\]/g, " ")
  .replace(/\[\[link:\s*[^|\]]*\|\s*([^\]]*)\]\]/g, "$1")
  .replace(/\[\[faq:\s*([^|\]]*)\|\s*([^\]]*)\]\]/g, "$1. $2")
  .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
  .replace(/^(?:##|-|>)\s+/gm, "");

/** Blog posts: one document per slug, built from title, excerpt and body. */
function blogDocs(file, src) {
  const docs = [];
  const parts = src.split(/\n\s*slug:\s*"/).slice(1);
  for (const part of parts) {
    const slug = part.slice(0, part.indexOf('"'));
    const title = /title:\s*"((?:[^"\\]|\\.)*)"/.exec(part)?.[1] ?? "";
    const bm = /body:\s*lines\(`([\s\S]*?)`\)/.exec(part);
    if (!bm) continue;
    const body = bm[1].replace(/\$\{T\}/g, "botulinum-toxin-injections");
    docs.push({ id: `post:${slug}`, file: basename(file), kind: "post", text: cleanMarkup(`${title}.\n${body}`) });
  }
  return docs;
}

/** Everything else: all long string literals in the file form one page document. */
function pageDoc(file, src) {
  const out = [];
  const strRe = /"((?:[^"\\\n]|\\.){30,})"|'((?:[^'\\\n]|\\.){30,})'|`((?:[^`\\]|\\.){30,})`/g;
  let m;
  while ((m = strRe.exec(src))) {
    const t = (m[1] ?? m[2] ?? m[3]).replace(/\\n/g, "\n");
    if (/^(?:https?:|\/|@\/|\.\/|\.\.\/)/.test(t) || /^[\w./-]+$/.test(t)) continue;
    out.push(cleanMarkup(t));
  }
  return out.length ? [{ id: `page:${relative(ROOT, file)}`, file: basename(file), kind: "page", text: out.join("\n") }] : [];
}

const docs = [];
for (const f of walk(join(ROOT, "content")).sort()) {
  const src = readFileSync(f, "utf8");
  const isBlog = /[\\/]content[\\/]blog[\\/]/.test(f) && !/(?:base|index)\.ts$/.test(f);
  if (isBlog) docs.push(...blogDocs(f, src));
  else if (!/[\\/]blog[\\/]/.test(f)) docs.push(...pageDoc(f, src));
}
// The README and stubs carry no copy of their own, so stub posts are skipped.
const live = docs.filter((d) => !/being written and has not been reviewed/.test(d.text) || d.text.split(/\s+/).length > 120);

// ---------- shingles and Jaccard ----------

const words = (t) => t.toLowerCase().replace(/[^\p{L}\p{N}\s']/gu, " ").split(/\s+/).filter(Boolean);
const shingles = (w) => { const s = new Set(); for (let i = 0; i + K <= w.length; i++) s.add(w.slice(i, i + K).join(" ")); return s; };

for (const d of live) { d.words = words(d.text); d.sh = shingles(d.words); }

const pairs = [];
for (let i = 0; i < live.length; i++) {
  for (let j = i + 1; j < live.length; j++) {
    const a = live[i], b = live[j];
    if (ONLY && !(a.file.includes(ONLY) || a.id.includes(ONLY) || b.file.includes(ONLY) || b.id.includes(ONLY))) continue;
    if (a.sh.size < 40 || b.sh.size < 40) continue;
    let inter = 0;
    const [small, big] = a.sh.size < b.sh.size ? [a.sh, b.sh] : [b.sh, a.sh];
    for (const s of small) if (big.has(s)) inter++;
    const union = a.sh.size + b.sh.size - inter;
    pairs.push({ a: a.id, b: b.id, jaccard: inter / union, shared: inter, contain: inter / small.size });
  }
}
pairs.sort((x, y) => y.jaccard - x.jaccard);
const over = pairs.filter((p) => p.jaccard > THRESHOLD);

// ---------- sentence checks ----------

const sentences = (text) => text.replace(/\n+/g, ". ").split(/(?<=[.?!])\s+/).map((s) => s.trim()).filter(Boolean);
const opening = (s, n = 2) => words(s).slice(0, n).join(" ");

const openingFindings = [];
for (const d of live) {
  const ss = sentences(d.text);
  let run = 1;
  for (let i = 1; i <= ss.length; i++) {
    const same = i < ss.length && opening(ss[i]) && opening(ss[i]) === opening(ss[i - 1]);
    if (same) { run++; continue; }
    if (run >= 3) openingFindings.push({ id: d.id, opener: opening(ss[i - 1]), run });
    run = 1;
  }
}

const dupe = new Map();
for (const d of live) {
  const seen = new Set();
  for (const s of sentences(d.text)) {
    const w = words(s);
    if (w.length < 7) continue;
    const key = w.join(" ");
    if (seen.has(key)) continue;
    seen.add(key);
    if (!dupe.has(key)) dupe.set(key, []);
    dupe.get(key).push(d.id);
  }
}
const repeatedSentences = [...dupe.entries()].filter(([, ids]) => ids.length >= 3);

// ---------- report ----------

const pct = (x) => (x * 100).toFixed(1) + "%";
const plastic = live.filter((d) => /plastic|tummy|rhinoplasty|septoplasty|breast|keloid|mommy|diastasis|body-contouring|surgery-leave|consultation|quote|registration|wedding|season|revision|mini-vs/.test(d.id));
console.log(`Documents compared: ${live.length} (${live.filter((d) => d.kind === "post").length} posts, ${live.filter((d) => d.kind === "page").length} page files). Pairs: ${pairs.length}. Shingle size: ${K} words.`);
console.log(`\nTop ${TOP} pairs by Jaccard:`);
for (const p of pairs.slice(0, TOP)) console.log(`  ${pct(p.jaccard).padStart(6)}  (shared ${String(p.shared).padStart(4)}, containment ${pct(p.contain).padStart(6)})  ${p.a}  <>  ${p.b}`);
console.log(`\nPairs over ${THRESHOLD * 100}%: ${over.length}`);
for (const p of over) console.log(`  [error] ${pct(p.jaccard)}  ${p.a}  <>  ${p.b}`);
console.log(`\nRepeated sentence openings (3 or more in a row, same first two words): ${openingFindings.length}`);
for (const f of openingFindings) console.log(`  [warn] ${f.id}: "${f.opener}" x${f.run}`);
console.log(`\nIdentical sentences (7+ words) in 3 or more documents: ${repeatedSentences.length}`);
for (const [s, ids] of repeatedSentences.slice(0, 20)) console.log(`  [warn] x${ids.length}: ${s.slice(0, 90)}`);
const max = pairs[0]?.jaccard ?? 0;
const mean = pairs.length ? pairs.reduce((s, p) => s + p.jaccard, 0) / pairs.length : 0;
console.log(`\nMax pair ${pct(max)}, mean pair ${pct(mean)}, ${over.length} over threshold, ${openingFindings.length} opening runs, ${repeatedSentences.length} repeated sentences. (${plastic.length} plastic documents)`);
process.exit(over.length > 0 ? 1 : 0);
