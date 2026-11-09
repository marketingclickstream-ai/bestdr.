import type { Metadata } from "next";
import { PlasticSurgeryHub } from "@/components/templates/HubViews";
import { getSite } from "@/lib/data";
import { buildRegistry, primeLinks } from "@/lib/pages";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const live = buildRegistry(await getSite()).get("/plastic-surgery") === true;
  return buildMetadata({
    title: "Plastic Surgery in India: Operations, Cost, Recovery",
    description: "Guides to plastic and cosmetic surgery in India: what each operation involves, price lines, recovery by week and risks, with surgeon review marked.",
    path: "/plastic-surgery",
    index: live,
  });
}

export default async function Page() {
  await primeLinks();
  return <PlasticSurgeryHub site={await getSite()} />;
}
