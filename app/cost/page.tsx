import type { Metadata } from "next";
import { CostIndex } from "@/components/templates/CostViews";
import { getSite } from "@/lib/data";
import { buildRegistry, primeLinks } from "@/lib/pages";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const live = buildRegistry(await getSite()).get("/cost") === true;
  return buildMetadata({ title: "Surgery Cost Guides: What Changes the Price", description: "What changes the price of plastic surgery in India, what a written quote should list, and what is usually left out.", path: "/cost", index: live });
}

export default async function Page() {
  await primeLinks();
  return <CostIndex site={await getSite()} />;
}
