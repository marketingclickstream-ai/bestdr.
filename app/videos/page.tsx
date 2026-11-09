import type { Metadata } from "next";
import { VideosSection } from "@/components/sections/Videos";
import { SimplePage } from "@/components/templates/SimplePage";
import { getSite } from "@/lib/data";
import { buildRegistry, primeLinks } from "@/lib/pages";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const live = buildRegistry(await getSite()).get("/videos") === true;
  return buildMetadata({ title: "Videos on Gynecomastia and Recovery", description: "Short videos on gynecomastia grades, causes and recovery week by week, each with a written transcript.", path: "/videos", index: live });
}

export default async function Page() {
  await primeLinks();
  const site = await getSite();
  return (
    <SimplePage
      crumbs={[{ name: "Home", path: "/" }, { name: "Videos", path: "/videos" }]}
      h1="Videos"
      lead="Short videos with a written transcript under each. The player loads only after you press play."
      extra={<VideosSection videos={site.videos} />}
    />
  );
}
