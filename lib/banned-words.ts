// Words and phrases that must not appear in rendered copy (advertising rules, project context).
// The brand name "Bestdoctorsin" is allowed and removed before scanning.

export const BANNED_TERMS = [
  "best",
  "guarantee",
  "safe",
  "painless",
  "permanent",
  "success rate",
  "lowest price",
  "cheapest",
  "affordable",
  "world-class",
  "discount",
  "offer",
  "100%",
] as const;

const patterns = BANNED_TERMS.map((term) => {
  const escaped = term.replace(/[.*+?^${}()|[\]\\%]/g, "\\$&").replace(/ /g, "\\s+");
  // "100%" has no word boundary after it; the others do.
  // Single words also match their common endings: safe -> safely, safety; offer -> offers, offered.
  const stem = term.includes(" ") ? "" : "(?:s|d|ed|ing|ly|ty)?";
  return { term, re: new RegExp(term === "100%" ? "(^|\\W)100%" : `\\b${escaped}${stem}\\b`, "gi") };
});

function stripBrand(text: string): string {
  return text.replace(/bestdoctorsin(\.com)?/gi, " ");
}

export interface BannedHit {
  term: string;
  context: string;
}

export function findBannedWords(text: string): BannedHit[] {
  const clean = stripBrand(text);
  const hits: BannedHit[] = [];
  for (const { term, re } of patterns) {
    re.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(clean))) {
      const at = m.index;
      hits.push({ term, context: clean.slice(Math.max(0, at - 30), at + term.length + 30).replace(/\s+/g, " ") });
    }
  }
  return hits;
}
