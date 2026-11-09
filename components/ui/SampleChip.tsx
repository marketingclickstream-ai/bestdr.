/** The yellow chip that marks every placeholder price, time, name or date. */
export function SampleChip({ label = "Sample data" }: { label?: string }) {
  return <span className="sm">{label}</span>;
}
