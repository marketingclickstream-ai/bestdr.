/** Margin note. Sits in the right column on wide screens and above the text on phones. */
export function Note({ label, children, desktopOnly = false }: { label: string; children: React.ReactNode; desktopOnly?: boolean }) {
  return (
    <aside className={desktopOnly ? "note dsk" : "note"}>
      <b className="nl">{label}</b>
      <p>{children}</p>
    </aside>
  );
}
