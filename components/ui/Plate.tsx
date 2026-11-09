/** Figure frame for the drawn plates: rule on top, caption underneath. */
export function Plate({ n, caption, children, captions }: { n: number; caption: string; children: React.ReactNode; captions?: { title: string; text: string }[] }) {
  const cols = captions?.length === 2 ? "caps2" : "caps";
  return (
    <figure className="pl">
      {children}
      {captions && (
        <div className={cols}>
          {captions.map((c) => <div key={c.title}><b>{c.title}</b><span>{c.text}</span></div>)}
        </div>
      )}
      <figcaption className="fcap"><b>Plate {n}.</b> {caption}</figcaption>
    </figure>
  );
}
