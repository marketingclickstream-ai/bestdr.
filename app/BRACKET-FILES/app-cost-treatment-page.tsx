import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NationalCostView } from "@/components/templates/CostViews";
import { findTreatment, getSite } from "@/lib/data";
import { buildRegistry, primeLinks } from "@/lib/pages";
import { buildMetadata, costMeta } from "@/lib/seo";
import { hasCostPage } from "@/lib/topic";

export const revalidate = 3600;
type Props = { params: Promise<{ treatment: string }> };

export async function generateStaticParams() {
  return (await getSite()).treatments.filter(hasCostPage).map((t) => ({ treatment: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { treatment } = await params;
  const site = await getSite();
  const t = findTreatment(site, treatment);
  if (!t || !hasCostPage(t)) return { title: "Page not found", robots: { index: false, follow: false } };
  const m = costMeta(t);
  return buildMetadata({
    title: t.costPage?.seoTitle ?? m.title,
    description: t.costPage?.metaDescription ?? m.description,
    path: `/cost/${t.slug}`,
    index: buildRegistry(site).get(`/cost/${t.slug}`) === true,
  });
}

export default async function Page({ params }: Props) {
  const { treatment } = await params;
  await primeLinks();
  const site = await getSite();
  const t = findTreatment(site, treatment);
  if (!t || !hasCostPage(t)) notFound();
  return <NationalCostView site={site} t={t} />;
}
