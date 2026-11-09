import Link from "next/link";
import type { Crumb } from "@/lib/schema";
import styles from "./Breadcrumbs.module.css";

/** Visible breadcrumb. The last crumb is the current page; the list matches the BreadcrumbList JSON-LD. */
export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className={styles.crumb} aria-label="Breadcrumb">
      <ol>
        {crumbs.map((c, i) =>
          i === crumbs.length - 1 ? <li key={c.path} aria-current="page">{c.name}</li> : <li key={c.path}><Link href={c.path}>{c.name}</Link></li>,
        )}
      </ol>
    </nav>
  );
}
