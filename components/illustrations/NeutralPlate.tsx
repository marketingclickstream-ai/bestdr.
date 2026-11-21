/** Neutral picture frame for topics without a drawn plate. Replaced by the founder's photo through the image slot. */
export function NeutralPlate({ label = "Image to come" }: { label?: string }) {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label={label} style={{ width: "100%", height: "auto", display: "block" }}>
      <rect x="1" y="1" width="398" height="298" rx="6" fill="var(--p100)" stroke="var(--bds)" />
      <circle cx="200" cy="130" r="34" fill="none" stroke="var(--bds)" strokeWidth="2" />
      <path d="M150 210c0-30 22-48 50-48s50 18 50 48" fill="none" stroke="var(--bds)" strokeWidth="2" />
      <text x="200" y="262" textAnchor="middle" fontSize="14" fill="var(--muted)" fontFamily="inherit">{label}</text>
    </svg>
  );
}
