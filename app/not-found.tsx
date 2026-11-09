import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: { absolute: "Page not found | Bestdoctorsin" }, robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <main id="main">
      <div className="wrap" style={{ padding: "56px 0" }}>
        <h1>This page does not exist</h1>
        <p className="lead" style={{ marginTop: 16 }}>The link may be old, or the page may not be ready yet.</p>
        <p><Link className="lk" href="/">Go to the home page</Link></p>
      </div>
    </main>
  );
}
