// Shared SVG fills and symbols used by the illustrations and the WhatsApp icon.
// Rendered once per page in the root layout.
export function SvgDefs() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern
          id="pg"
          width="5"
          height="5"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="5"
            stroke="#0F4C5C"
            strokeWidth="1.4"
          />
        </pattern>
        <pattern id="pf" width="7" height="7" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r=".9" fill="#0B3440" fillOpacity=".55" />
          <circle cx="5.5" cy="5.5" r=".9" fill="#0B3440" fillOpacity=".55" />
        </pattern>
        <pattern
          id="pm"
          width="6"
          height="6"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-20)"
        >
          <line
            x1="0"
            y1="0"
            x2="6"
            y2="0"
            stroke="#0B3440"
            strokeOpacity=".35"
            strokeWidth="1"
          />
        </pattern>
        <g id="cb">
          <path
            d="M36,14 Q64,80 36,146 L58,146 Q88,80 58,14 Z"
            fill="url(#pm)"
            stroke="#0B3440"
            strokeWidth="1.4"
          />
          <ellipse
            cx="22"
            cy="34"
            rx="7"
            ry="13"
            fill="#fff"
            stroke="#0B3440"
            strokeWidth="1.4"
          />
          <ellipse
            cx="22"
            cy="80"
            rx="7"
            ry="13"
            fill="#fff"
            stroke="#0B3440"
            strokeWidth="1.4"
          />
          <ellipse
            cx="22"
            cy="126"
            rx="7"
            ry="13"
            fill="#fff"
            stroke="#0B3440"
            strokeWidth="1.4"
          />
        </g>
        <symbol id="wa" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.2 14.8l-.3-.2-2.5.6.7-2.4-.2-.3A8 8 0 0 1 12 4zM9 7.5c-.3 0-.7.2-.9.5-.4.5-.8 1.2-.4 2.2.5 1.2 1.6 2.8 3.3 3.9 1.5 1 2.6 1.1 3.3.9.6-.2 1.1-.8 1.2-1.4 0-.2 0-.4-.2-.5l-1.6-.8c-.2-.1-.4 0-.5.1l-.6.7c-.1.1-.3.2-.5.1-.8-.4-1.6-1-2.2-1.9-.1-.2-.1-.3 0-.5l.5-.6c.1-.1.1-.3 0-.5l-.7-1.6c-.1-.2-.2-.3-.4-.3z" />
        </symbol>
      </defs>
    </svg>
  );
}
