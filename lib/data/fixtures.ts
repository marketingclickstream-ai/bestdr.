import type { SiteData } from "@/content/types";
import { treatments } from "@/content/treatments";
import { cities } from "@/content/cities";
import { pages, costs } from "@/content/pages";
import { faqs } from "@/content/faqs";
import { reviewers } from "@/content/reviewers";
import { posts } from "@/content/blog";
import { videos } from "@/content/videos";

/** Built-in sample data. Used whenever the Supabase env vars are absent. */
export const fixtures: SiteData = { treatments, cities, pages, costs, faqs, reviewers, posts, videos };
