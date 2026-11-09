import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LearnPost } from "@/components/templates/LearnViews";
import { findPost, getSite } from "@/lib/data";
import { buildRegistry, primeLinks } from "@/lib/pages";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 3600;
type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getSite()).posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(await getSite(), slug);
  if (!post) return { title: "Page not found", robots: { index: false, follow: false } };
  return buildMetadata({ title: post.title, description: post.excerpt, path: `/learn/${post.slug}`, index: buildRegistry(await getSite()).get(`/learn/${post.slug}`) === true });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  await primeLinks();
  const site = await getSite();
  const post = findPost(site, slug);
  if (!post) notFound();
  return <LearnPost site={site} post={post} />;
}
