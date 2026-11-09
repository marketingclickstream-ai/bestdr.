import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { staticPages } from "@/content/static-pages";
import { CityTreatmentView } from "@/components/templates/CityTreatmentView";
import { CityHub } from "@/components/templates/HubViews";
import { SimplePage } from "@/components/templates/SimplePage";
import { TreatmentView } from "@/components/templates/TreatmentView";
import { getSite } from "@/lib/data";
import { allRootSlugs, buildRegistry, cityPageStatus, primeLinks, resolveSlug, staticIsIndexable } from "@/lib/pages";
import { buildMetadata, treatmentMeta } from "@/lib/seo";


// One dynamic segment serves every root-level URL, but only slugs that match an allow-list
// (a treatment, treatment-in-city, plastic-surgery-in-city, or a policy page) are pages.
// Anything else is a real 404 (SEO plan C3).

export const revalidate = 3600;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const site = await getSite();
  return [...allRootSlugs(site), ...staticPages.map((p) => p.slug)].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const site = await getSite();
  const staticPage = staticPages.find((p) => p.slug === slug);
  if (staticPage) return buildMetadata({ title: staticPage.title, description: staticPage.description, path: `/${slug}`, index: staticIsIndexable(staticPage) });
  const hit = resolveSlug(site, slug);
  if (!hit) return { title: "Page not found", robots: { index: false, follow: false } };
  const live = buildRegistry(site).get(`/${slug}`) === true;
  if (hit.kind === "treatment") {
    const m = treatmentMeta(hit.treatment);
    return buildMetadata({ ...m, path: `/${slug}`, index: live && Boolean(hit.treatment.content) });
  }
  if (hit.kind === "city-hub") {
    return buildMetadata({ title: `Plastic Surgery in ${hit.city.name}: Operations, Cost, Travel`, description: hit.city.summary, path: `/${slug}`, index: live });
  }
  const status = cityPageStatus(site, hit.treatment, hit.city, hit.page);
  return buildMetadata({ title: status.title, description: status.description, path: `/${slug}`, index: status.live });
}

export default async function RootSlugPage({ params }: Props) {
  const { slug } = await params;
  await primeLinks();
  const site = await getSite();

  const sp = staticPages.find((p) => p.slug === slug);
  if (sp) {
    const crumbs = [{ name: "Home", path: "/" }, { name: sp.h1, path: `/${sp.slug}` }];
    return <SimplePage crumbs={crumbs} h1={sp.h1} lead={sp.lead} sections={sp.sections} />;
  }

  const hit = resolveSlug(site, slug);
  if (!hit) notFound();
  if (hit.kind === "treatment") return <TreatmentView site={site} t={hit.treatment} />;
  if (hit.kind === "city-hub") return <CityHub site={site} c={hit.city} />;
  return <CityTreatmentView site={site} t={hit.treatment} c={hit.city} p={hit.page} />;
}
