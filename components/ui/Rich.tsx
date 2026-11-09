import type { ReactNode } from "react";
import Link from "next/link";
import { isLinkVisible } from "@/lib/pages";
import { SampleChip } from "./SampleChip";

// Renders the small markup used in content strings:
//   [text](/path)  link        **bold**  bold        {sample} {tbc} {pending}  chips
// A link to a page that is not live (LINK_MODE=live) is rendered as plain text.

const TOKEN = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\{(?:sample|tbc|pending)\})/g;
const CHIPS: Record<string, string> = { sample: "Sample data", tbc: "To be confirmed", pending: "Pending surgeon review" };

export function Rich({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter((p) => p !== "");
  const nodes: ReactNode[] = parts.map((part, i) => {
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) {
      const [, label = "", href = ""] = link;
      if (!isLinkVisible(href)) return label;
      if (href.startsWith("/") && !href.startsWith("/#") && !href.startsWith("#")) return <Link key={i} href={href}>{label}</Link>;
      return <a key={i} href={href} {...(href.startsWith("http") ? { rel: "noopener" } : {})}>{label}</a>;
    }
    const bold = /^\*\*([^*]+)\*\*$/.exec(part);
    if (bold) return <b key={i}>{bold[1]}</b>;
    const chip = /^\{(sample|tbc|pending)\}$/.exec(part);
    if (chip) return <SampleChip key={i} label={CHIPS[chip[1] as string]} />;
    return part;
  });
  return <>{nodes}</>;
}
