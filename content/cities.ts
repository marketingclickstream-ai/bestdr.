import type { City } from "./types";

export const cities: City[] = [
  {
    slug: "gurgaon",
    name: "Gurgaon",
    altName: "Gurugram",
    state: "Haryana",
    areas: ["Delhi", "Noida", "Faridabad", "Rewari"],
    summary: "Surgery in Gurgaon is done at partner hospitals and day-care centres. Most people come from Delhi, Noida, Faridabad or Rewari.",
    nearby: [{ citySlug: "delhi", lead: "Planning from South or East Delhi? Read", tail: "for local travel and price notes." }],
  },
  {
    slug: "delhi",
    name: "Delhi",
    state: "Delhi",
    areas: ["Noida", "Ghaziabad", "Faridabad", "Gurgaon"],
    summary: "Delhi pages are being prepared. No partner facility is confirmed in Delhi yet.",
    nearby: [{ citySlug: "gurgaon", lead: "Coming from Delhi? Read", tail: "for the road time and price notes." }],
  },
  {
    slug: "lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    areas: ["Barabanki", "Unnao", "Sitapur"],
    summary: "Lucknow pages are being prepared. No partner facility is confirmed in Lucknow yet.",
    nearby: [{ citySlug: "kanpur", lead: "Kanpur is the nearest other city we cover. See", tail: "." }],
  },
  {
    slug: "kanpur",
    name: "Kanpur",
    state: "Uttar Pradesh",
    areas: ["Unnao", "Kanpur Dehat"],
    summary: "Kanpur pages are being prepared. No partner facility is confirmed in Kanpur yet.",
    nearby: [{ citySlug: "lucknow", lead: "Lucknow is the nearest other city we cover. See", tail: "." }],
  },
];
