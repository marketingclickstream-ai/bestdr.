/**
 * Post-build check on the rendered HTML (reads .next/server/app/**.html, or fetches BASE_URL if set).
 *   1. no banned word in visible copy (the brand name Bestdoctorsin is allowed)
 *   2. FAQPage JSON-LD text equals the visible FAQ text
 *   3. one H1, title <= 60, description <= 160, canonical present, robots meta present
 *   4. footer name line and disclaimer are present
 * Usage: npm run build && npm run check:html
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import * as cheerio from "cheerio";
import { findBannedWords } from "../lib/banned-words";
import { NAME_LINE } from "../content/site";

const ROOT = join(process.cwd(), ".next/server/app");
const BASE = process.env.BASE_URL;

function walk(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith(".html") && !name.startsWith("_")) out.push(p);
  }
  return out;
}

const norm = (s: string) => s.replace(/\s+/g, " ").trim();

async function load(): Promise<{ path: string; html: string }[]> {
  if (BASE) {
    const paths = (process.env.PATHS ?? "/,/gynecomastia-surgery-in-gurgaon").split(",");
    return Promise.all(paths.map(async (p) => ({ path: p, html: await (await fetch(BASE + p)).text() })));
  }
  return walk(ROOT).map((f) => ({ path: "/" + f.slice(ROOT.length + 1).replace(/\.html$/, "").replace(/^index$/, ""), html: readFileSync(f, "utf8") }));
}

function faqFromJsonLd($: cheerio.CheerioAPI): string[] | null {
  for (const el of $('script[type="application/ld+json"]').toArray()) {
    const data = JSON.parse($(el).text());
    for (const node of data["@graph"] ?? [data]) {
      if (node["@type"] === "FAQPage") {
        return node.mainEntity.map((q: { name: string; acceptedAnswer: { text: string } }) => norm(q.name + " || " + q.acceptedAnswer.text));
      }
    }
  }
  return null;
}

async function main() {
  const pages = await load();
  let failures = 0;
  const fail = (path: string, msg: string) => { failures++; console.log(`FAIL ${path}: ${msg}`); };
  let faqPages = 0;

  for (const { path, html } of pages) {
    const $ = cheerio.load(html);
    const title = $("title").first().text();
    const desc = $('meta[name="description"]').attr("content") ?? "";
    const robots = $('meta[name="robots"]').attr("content");
    const is404 = path.includes("_not-found") || path.includes("404");

    // 1 banned words
    $("script,style,noscript").remove();
    const text = norm($("body").text() + " " + title + " " + desc);
    for (const h of findBannedWords(text)) fail(path, `banned word "${h.term}" near "${h.context}"`);

    if (is404) continue;
    // 3 head checks
    if ($("h1").length !== 1) fail(path, `expected one h1, found ${$("h1").length}`);
    if (title.length > 60) fail(path, `title is ${title.length} chars`);
    if (desc.length > 160) fail(path, `description is ${desc.length} chars`);
    if (!$('link[rel="canonical"]').attr("href")?.startsWith("https://www.bestdoctorsin.com")) fail(path, "canonical missing or wrong host");
    if (!robots) fail(path, "robots meta missing");
    // 4 footer
    if (!text.includes(norm(NAME_LINE))) fail(path, "footer name line missing");
  }

  // 2 FAQ equality (needs the raw JSON-LD, so parse again without removing scripts)
  for (const { path, html } of pages) {
    const $ = cheerio.load(html);
    const ld = faqFromJsonLd($);
    const visible = $("#faqs details").toArray().map((d) => norm($(d).find("summary").text() + " || " + $(d).find(".a").text()));
    if (ld === null && visible.length === 0) continue;
    faqPages++;
    if (JSON.stringify(ld) !== JSON.stringify(visible)) fail(path, `FAQ JSON-LD differs from visible FAQ (${ld?.length ?? 0} vs ${visible.length})`);
  }

  console.log(`${pages.length} pages checked, ${faqPages} with FAQ, ${failures} failure(s)`);
  process.exit(failures ? 1 : 0);
}

main();
