// Two simple schematic drawings for the liposuction page. Drawn in the same ink-and-teal style as the
// other plates. They are placeholders for a commissioned diagram and carry no claim about results.

export function AreasPlate() {
  const dot = (cx: number, cy: number, n: number) => (
    <g key={n}>
      <circle cx={cx} cy={cy} r={9} fill="#0F4C5C" />
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="Inter, sans-serif">{n}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 330 176" role="img" aria-labelledby="t-areas">
      <title id="t-areas">Outline of a body with numbered areas: 1 chin and neck, 2 chest, 3 upper arm, 4 abdomen, 5 waist and flank, 6 hip and thigh</title>
      <rect width="330" height="176" fill="#E3EFF1" />
      <g fill="none" stroke="#0B3440" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="120" cy="26" r="14" />
        <path d="M120 40v8M96 56c10-8 38-8 48 0l6 34c1 8-3 14-6 24l-3 52M96 56l-6 34c-1 8 3 14 6 24l3 52M96 56l-22 40M144 56l22 40M108 114h24" />
      </g>
      {dot(120, 48, 1)}{dot(120, 66, 2)}{dot(80, 80, 3)}{dot(120, 92, 4)}{dot(98, 100, 5)}{dot(112, 128, 6)}
      <g fontFamily="Inter, sans-serif" fontSize="11" fill="#12222B">
        <text x="190" y="40">1 Chin and neck</text><text x="190" y="62">2 Chest</text><text x="190" y="84">3 Upper arm</text>
        <text x="190" y="106">4 Abdomen</text><text x="190" y="128">5 Waist and flank</text><text x="190" y="150">6 Hip and thigh</text>
      </g>
    </svg>
  );
}

export function CannulaPlate() {
  return (
    <svg viewBox="0 0 330 176" role="img" aria-labelledby="t-cann">
      <title id="t-cann">Schematic section: skin, a layer of fat with a thin tube entering through a tiny cut, and muscle below</title>
      <rect width="330" height="176" fill="#E3EFF1" />
      <rect x="20" y="30" width="290" height="10" fill="#C9A27E" />
      <rect x="20" y="40" width="290" height="62" fill="#F3E3A8" />
      <rect x="20" y="102" width="290" height="44" fill="#B45B4B" opacity=".75" />
      <g stroke="#0B3440" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M58 24l60 44M118 68l82 12M200 80l30 4" />
        <path d="M130 62c20 6 40 8 70 12" strokeDasharray="4 5" />
      </g>
      <circle cx="58" cy="30" r="3" fill="#0B3440" />
      <g fontFamily="Inter, sans-serif" fontSize="11" fill="#12222B">
        <text x="26" y="22">Tiny cut</text><text x="236" y="72">Thin tube</text>
        <text x="26" y="124" fill="#fff">Muscle stays untouched</text><text x="26" y="92">Fat layer</text>
      </g>
    </svg>
  );
}
