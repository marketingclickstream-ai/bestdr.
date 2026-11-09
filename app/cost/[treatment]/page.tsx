import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NationalCostView } from "@/components/templates/CostViews";
import { findTreatment, getSite } from "@/lib/data";
import { buildRegistry, primeLinks } from "@/lib/pages";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 3600;
type Props = { params: Promise<{ treatment: string }> };

export async function generateStaticParams() {
  return (await getSite()).treatments.filter((t) => t.nationalRange).map((t) => ({ treatment: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { treatment } = await params;
  const site = await getSite();
  const t = findTreatment(site, treatment);
  if (!t?.nationalRange) return { title: "Page not found", robots: { index: false, follow: false } };
  return buildMetadata({
    title: `${t.name} Cost in India: What Changes the Price`,
    description: `${t.name} cost in India: the usual range, the factors that change it, what a quote should list and what is left out.`,
    path: `/cost/${t.slug}`,
    index: buildRegistry(site).get(`/cost/${t.slug}`) === true,
  });
}

export default async function Page({ params }: Props) {
  const { treatment } = await params;
  await primeLinks();
  const site = await getSite();
  const t = findTreatment(site, treatment);
  if (!t?.nationalRange) notFound();
  return <NationalCostView site={site} t={t} />;
}
