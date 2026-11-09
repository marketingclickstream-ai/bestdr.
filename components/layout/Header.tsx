import Image from "next/image";
import Link from "next/link";
import type { NavGroup } from "@/content/site";
import { OpenLeadButton } from "../ui/OpenLeadButton";
import { WhatsAppIcon } from "../ui/WhatsAppButton";
import { waLink } from "@/lib/whatsapp";
import { DesktopNav } from "./DesktopNav";
import { MenuButton } from "./MenuButton";
import styles from "./Header.module.css";

export function Header({ groups, whatsappMessage }: { groups: NavGroup[]; whatsappMessage: string }) {
  const wa = waLink(whatsappMessage);
  return (
    <header className={styles.mast}>
      <div className="wrap">
        <MenuButton className={`ib ${styles.burger}`} />
        <Link className="logo" href="/" aria-label="Bestdoctorsin, home">
          <Image className="lg" src="/assets/logo.png" width={480} height={131} alt="Bestdoctorsin" sizes="186px" priority />
        </Link>
        <nav aria-label="Main" style={{ display: "contents" }}>
          <DesktopNav groups={groups} />
        </nav>
        {wa && (
          <a className={styles.hwa} href={wa} aria-label="Chat on WhatsApp">
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </a>
        )}
        <OpenLeadButton className={styles.hcb}>Call me back</OpenLeadButton>
      </div>
    </header>
  );
}
