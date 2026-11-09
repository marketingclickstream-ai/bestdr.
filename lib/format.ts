/** Indian digit grouping: 1,20,000. */
export function inr(n: number): string {
  return n.toLocaleString("en-IN");
}

export function inrRange(min: number, max: number): string {
  return `${inr(min)} to ${inr(max)}`;
}

/** "2026-11-09" -> "09 Nov 2026" (fixed format so server and client always agree). */
export function longDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${d} ${months[Number(m) - 1]} ${y}`;
}

export function monthYear(ym: string): string {
  const [y, m] = ym.split("-");
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${months[Number(m) - 1]} ${y}`;
}

export function words(text: string): string[] {
  return text.toLowerCase().replace(/[^a-z0-9\s']/g, " ").split(/\s+/).filter(Boolean);
}
