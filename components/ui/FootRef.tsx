/** Superscript link to a footnote in the sources block. */
export function FootRef({ n, id }: { n: number; id?: string }) {
  return (
    <sup>
      <a href={`#fn${n}`} id={id}>{n}</a>
    </sup>
  );
}
