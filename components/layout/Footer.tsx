import Image from "next/image";
import Link from "next/link";
import { DISCLAIMER, NAME_LINE, TAGLINE, type NavLink } from "@/content/site";
import { ResponsiveDetails } from "../ui/ResponsiveDetails";
import { SampleChip } from "../ui/SampleChip";
import { CookieNote } from "./CookieNote";
import styles from "./Footer.module.css";

export function Footer({ groups }: { groups: { label: string; links: NavLink[] }[] }) {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.fbrand}>
          <Link className="logo" href="/" aria-label="Bestdoctorsin, home" style={{ justifySelf: "auto" }}>
            <Image className="lg" src="/assets/logo-reversed.png" width={480} height={131} alt="Bestdoctorsin" sizes="125px" loading="lazy" />
          </Link>
          <p>{TAGLINE}</p>
        </div>
        <div className={styles.fgrid}>
          {groups.map((g) => (
            <ResponsiveDetails key={g.label} className={styles.fg} summary={g.label} minWidth={768} bare>
              <ul>
                {g.links.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
                {g.label === "Legal" && <li><CookieNote /></li>}
              </ul>
            </ResponsiveDetails>
          ))}
        </div>
        <p>{DISCLAIMER} In an emergency call 112.</p>
        <p>{NAME_LINE}</p>
        <p>Grievance contact: [officer name and email] <SampleChip label="To be confirmed" />. Company registration: [number] <SampleChip label="To be confirmed" /></p>
        <p>Copyright 2026 Bestdoctorsin.</p>
      </div>
    </footer>
  );
}
