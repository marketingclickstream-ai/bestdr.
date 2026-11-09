import type { Metadata } from "next";
import { LearnIndex } from "@/components/templates/LearnViews";
import { getSite } from "@/lib/data";
import { buildRegistry, primeLinks } from "@/lib/pages";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const live = buildRegistry(await getSite()).get("/learn") === true;
  return buildMetadata({ title: "Guides on Plastic Surgery: Plain Answers", description: "Short guides that answer one question about plastic surgery each: grades, fat or gland, quotes, and what to ask a surgeon.", path: "/learn", index: live });
}

export default async function Page() {
  await primeLinks();
  return <LearnIndex site={await getSite()} />;
}
