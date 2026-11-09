export function SectionHead({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <div className="hd">
      <h2 id={id}>{children}</h2>
    </div>
  );
}
