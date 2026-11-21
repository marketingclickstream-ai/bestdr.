import type { Metadata } from "next";
import { TreatmentsHub } from "@/components/templates/HubViews";
import { getSite } from "@/lib/data";
import { buildRegistry, primeLinks } from "@/lib/pages";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const live = buildRegistry(await getSite()).get("/treatments") === true;
  return buildMetadata({
    title: "Skin, Hair and Injectable Treatments in India",
    description: "Guides to acne treatment, hydrafacial, botulinum toxin injections, PRP, anti-aging care and hair transplant: downtime, risks, who should wait and cost factors.",
    path: "/treatments",
    index: live,
  });
}

export default async function Page() {
  await primeLinks();
  return <TreatmentsHub site={await getSite()} />;
}
