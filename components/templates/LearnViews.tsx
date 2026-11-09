import Link from "next/link";
import type { BlogPost, SiteData } from "@/content/types";
import { findReviewer } from "@/lib/data";
import { isLinkVisible } from "@/lib/pages";
import { blogPosting, breadcrumbList, graph, itemList, organization } from "@/lib/schema";
import { ReadThumb1, ReadThumb2, ReadThumb3 } from "../illustrations/Plates";
import { Rich } from "../ui/Rich";
import { SampleChip } from "../ui/SampleChip";
import { SectionHead } from "../ui/SectionHead";
import { SimplePage } from "./SimplePage";

const thumbs = { 1: ReadThumb1, 2: ReadThumb2, 3: ReadThumb3 } as const;

export function LearnIndex({ site }: { site: SiteData }) {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Guides", path: "/learn" }];
  const posts = site.posts.filter((p) => isLinkVisible(`/learn/${p.slug}`));
  return (
    <SimplePage
      crumbs={crumbs}
      h1="Guides"
      lead="Short guides that answer one question each. A guide is marked as a draft until a surgeon has reviewed it."
      jsonLd={graph(organization(), breadcrumbList(crumbs), itemList("Guides", posts.map((p) => ({ name: p.title, path: `/learn/${p.slug}` }))))}
      extra={
        <section className="sec">
          <SectionHead>All guides</SectionHead>
          <ul className="rr full">
            {posts.map((p) => {
              const Thumb = thumbs[p.thumb];
              return (
                <li key={p.slug}>
                  <Thumb />
                  <div>
                    <h3><Link href={`/learn/${p.slug}`}>{p.title}</Link></h3>
                    <p>{p.excerpt}</p>
                    <p className="meta">{p.minutes} min read {!p.published && <SampleChip label="Draft" />}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      }
    />
  );
}

export function LearnPost({ site, post }: { site: SiteData; post: BlogPost }) {
  const path = `/learn/${post.slug}`;
  const crumbs = [{ name: "Home", path: "/" }, { name: "Guides", path: "/learn" }, { name: post.title, path }];
  const reviewer = findReviewer(site, post.reviewerId);
  return (
    <SimplePage
      crumbs={crumbs}
      h1={post.title}
      lead={post.excerpt}
      treatment={post.treatmentSlug ?? ""}
      jsonLd={graph(organization(), breadcrumbList(crumbs), blogPosting(post, reviewer))}
      sections={[{ heading: "In this guide", paragraphs: post.body }]}
      extra={
        <p style={{ marginTop: 24 }}>
          {post.treatmentSlug && <Rich text={`Back to the [${site.treatments.find((t) => t.slug === post.treatmentSlug)?.name ?? "procedure"} guide](/${post.treatmentSlug}). `} />}
          <Rich text="[All guides](/learn)" />
        </p>
      }
    />
  );
}
