import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "@/components/ui/PageFrame";
import { SectionHead } from "@/components/ui/SectionHead";
import { SampleChip } from "@/components/ui/SampleChip";
import { WhatsAppBand } from "@/components/sections/Bands";
import { DisclaimerSection } from "@/components/sections/Trust";
import { getSite } from "@/lib/data";
import { homeIsIndexable, isLinkVisible, primeLinks } from "@/lib/pages";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbList, graph, organization } from "@/lib/schema";
import { groupByCategory } from "@/lib/topic";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite();
  return buildMetadata({
    title: "Plastic surgery, skin and hair care in India",
    description: "Plain guides to plastic surgery, skin, hair and injectable treatments in Delhi, Gurgaon, Kanpur and Lucknow: price lines, recovery or downtime, risks, and how we check doctors.",
    path: "/",
    // Draft chips on the home page keep it noindex until every treatment has content.
    index: homeIsIndexable(site),
  });
}

export default async function Home() {
  await primeLinks();
  const site = await getSite();
  const treatments = site.treatments.filter((t) => isLinkVisible(`/${t.slug}`));
  const cities = site.cities.filter((c) => isLinkVisible(`/plastic-surgery-in-${c.slug}`));
  return (
    <PageFrame jsonLd={graph(organization(), breadcrumbList([{ name: "Home", path: "/" }]))}>
      <section className="hero" style={{ paddingTop: 28 }}>
        <div className="wrap">
          <h1>Plastic surgery, skin and hair care in India, <em>explained line by line</em></h1>
          <p className="lead" style={{ marginTop: 16 }}>The price in writing, recovery or downtime, the risks to ask about, and how we check a doctor. Delhi, Gurgaon, Kanpur and Lucknow first.</p>
          <p>Bestdoctorsin is a name, not a ranking. We do not rank or rate doctors.</p>
        </div>
      </section>
      <div className="wrap">
        <section className="sec tint">
          <SectionHead>Operations and treatments</SectionHead>
          {groupByCategory(treatments).map((g) => (
            <div key={g.info.id}>
              <h3>{g.info.label}</h3>
              <ul className="plain">
                {g.items.map((t) => <li key={t.slug}><Link href={`/${t.slug}`}>{t.name}</Link>{!t.content && <> <SampleChip label="Draft" /></>}</li>)}
              </ul>
            </div>
          ))}
        </section>
        <section className="sec">
          <SectionHead>Cities</SectionHead>
          <ul className="plain">
            {cities.map((c) => <li key={c.slug}><Link href={`/plastic-surgery-in-${c.slug}`}>Plastic surgery in {c.name}</Link></li>)}
          </ul>
        </section>
        <WhatsAppBand message="I have a question about plastic surgery" />
        <DisclaimerSection />
      </div>
    </PageFrame>
  );
}
