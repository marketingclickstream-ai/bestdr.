// Parses the line-based body markup described in content/blog/README.md into blocks.
// Pure functions, so they are unit tested and shared by the page and the JSON-LD.

export type PostBlock =
  | { kind: "reviewer" }
  | { kind: "h2"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "note"; text: string }
  | { kind: "p"; text: string }
  | { kind: "faqs"; items: { question: string; answer: string }[] }
  | { kind: "sources"; text: string };

/** [[link: /path | anchor]] becomes the site's [anchor](/path) markup. */
export function convertInline(text: string): string {
  return text.replace(/\[\[link:\s*([^|\]]+?)\s*\|\s*([^\]]+?)\s*\]\]/g, (_m, href: string, label: string) => `[${label}](${href})`);
}

export function parseBody(lines: string[]): PostBlock[] {
  const blocks: PostBlock[] = [];
  let faqs: { question: string; answer: string }[] | null = null;
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    if (line === "[[reviewer]]") { blocks.push({ kind: "reviewer" }); continue; }
    const faq = /^\[\[faq:\s*(.+?)\s*\|\s*([\s\S]+?)\s*\]\]$/.exec(line);
    if (faq) {
      const item = { question: convertInline(faq[1] ?? ""), answer: convertInline(faq[2] ?? "") };
      if (faqs) faqs.push(item);
      else { faqs = [item]; blocks.push({ kind: "faqs", items: faqs }); }
      continue;
    }
    const src = /^\[\[sources:\s*([\s\S]+?)\s*\]\]$/.exec(line);
    if (src) { blocks.push({ kind: "sources", text: convertInline(src[1] ?? "") }); continue; }
    if (line.startsWith("## ")) { blocks.push({ kind: "h2", text: convertInline(line.slice(3)) }); continue; }
    if (line.startsWith("- ")) {
      const last = blocks[blocks.length - 1];
      const item = convertInline(line.slice(2));
      if (last && last.kind === "list") last.items.push(item);
      else blocks.push({ kind: "list", items: [item] });
      continue;
    }
    if (line.startsWith("> ")) { blocks.push({ kind: "note", text: convertInline(line.slice(2)) }); continue; }
    blocks.push({ kind: "p", text: convertInline(line) });
  }
  return blocks;
}

export function postFaqs(lines: string[]): { question: string; answer: string }[] {
  return parseBody(lines).flatMap((b) => (b.kind === "faqs" ? b.items : []));
}
