// Inline SVG illustrations from the approved design (13-final/page.html).
// Drawn for this site; no stock images. Fill patterns (#pg, #pf, #pm) and the
// #cb group come from <SvgDefs /> in app/layout.tsx.

/** Plate 1: the male chest in section. */
export function ChestSectionPlate() {
  return (
    <svg viewBox="0 0 330 176" role="img" aria-labelledby="t-p1">
      <title id="t-p1">
        Drawing of the male chest in section, labelled: rib, chest muscle, skin,
        fat, gland, nipple
      </title>
      <g transform="translate(92,8)">
        <path
          d="M62,24 C88,28 106,58 106,80 C106,102 88,132 62,136 L60,136 L60,24Z"
          fill="url(#pf)"
        />
        <use href="#cb" />
        <ellipse
          cx="82"
          cy="80"
          rx="22"
          ry="22"
          fill="url(#pg)"
          stroke="#0F4C5C"
          strokeWidth="1.6"
        />
        <path
          d="M62,24 C88,28 106,58 106,80 C106,102 88,132 62,136"
          fill="none"
          stroke="#0B3440"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M106,73 Q112,80 106,87"
          fill="#fff"
          stroke="#0B3440"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </g>
      <line x1="112" y1="50" x2="86" y2="18" stroke="#0B3440" strokeWidth="1" />
      <text
        x="80"
        y="22"
        textAnchor="end"
        fontFamily="Inter,sans-serif"
        fontSize="12"
        fill="#12222B"
      >
        Rib
      </text>
      <line
        x1="138"
        y1="128"
        x2="86"
        y2="146"
        stroke="#0B3440"
        strokeWidth="1"
      />
      <text
        x="80"
        y="150"
        textAnchor="end"
        fontFamily="Inter,sans-serif"
        fontSize="12"
        fill="#12222B"
      >
        Chest muscle
      </text>
      <line
        x1="196"
        y1="38"
        x2="256"
        y2="20"
        stroke="#0B3440"
        strokeWidth="1"
      />
      <text
        x="262"
        y="24"
        textAnchor="start"
        fontFamily="Inter,sans-serif"
        fontSize="12"
        fill="#12222B"
      >
        Skin
      </text>
      <line
        x1="178"
        y1="62"
        x2="256"
        y2="58"
        stroke="#0B3440"
        strokeWidth="1"
      />
      <text
        x="262"
        y="62"
        textAnchor="start"
        fontFamily="Inter,sans-serif"
        fontSize="12"
        fill="#12222B"
      >
        Fat
      </text>
      <line
        x1="206"
        y1="90"
        x2="256"
        y2="94"
        stroke="#0B3440"
        strokeWidth="1"
      />
      <text
        x="262"
        y="98"
        textAnchor="start"
        fontFamily="Inter,sans-serif"
        fontSize="12"
        fill="#12222B"
      >
        Gland
      </text>
      <line
        x1="204"
        y1="106"
        x2="256"
        y2="130"
        stroke="#0B3440"
        strokeWidth="1"
      />
      <text
        x="262"
        y="134"
        textAnchor="start"
        fontFamily="Inter,sans-serif"
        fontSize="12"
        fill="#12222B"
      >
        Nipple
      </text>
    </svg>
  );
}

/** Plate 2: liposuction only versus gland removal. */
export function TechniquePlate() {
  return (
    <svg viewBox="0 0 450 168" role="img" aria-labelledby="t-cmp">
      <title id="t-cmp">
        Two chest sections side by side. Left: a suction tube removes fat and
        the gland stays. Right: the gland is taken out through a small cut at
        the lower edge of the areola
      </title>
      <g transform="translate(14,10)">
        <path
          d="M62,24 C86,28 104,58 104,80 C104,102 86,132 62,136 L60,136 L60,24Z"
          fill="url(#pf)"
        />
        <use href="#cb" />
        <ellipse
          cx="82"
          cy="80"
          rx="12"
          ry="12"
          fill="url(#pg)"
          stroke="#0F4C5C"
          strokeWidth="1.6"
        />
        <path
          d="M62,24 C86,28 104,58 104,80 C104,102 86,132 62,136"
          fill="none"
          stroke="#0B3440"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M104,73 Q110,80 104,87"
          fill="#fff"
          stroke="#0B3440"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M128,36 L72,64"
          stroke="#12222B"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M72,64 L58,52 M72,64 L56,66 M72,64 L60,80"
          stroke="#12222B"
          strokeWidth="1.4"
          strokeDasharray="3 3"
          strokeLinecap="round"
        />
      </g>
      <line
        x1="225"
        y1="10"
        x2="225"
        y2="158"
        stroke="#849299"
        strokeDasharray="2 4"
      />
      <g transform="translate(250,10)">
        <path
          d="M62,24 C78,28 96,58 96,80 C96,102 78,132 62,136 L60,136 L60,24Z"
          fill="url(#pf)"
        />
        <use href="#cb" />
        <ellipse
          cx="78"
          cy="80"
          rx="17"
          ry="17"
          fill="url(#pg)"
          stroke="#0F4C5C"
          strokeWidth="1.6"
          strokeDasharray="4 3"
          fillOpacity=".3"
        />
        <path
          d="M62,24 C78,28 96,58 96,80 C96,102 78,132 62,136"
          fill="none"
          stroke="#0B3440"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M96,73 Q102,80 96,87"
          fill="#fff"
          stroke="#0B3440"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M86,93 Q94,100 102,92"
          fill="none"
          stroke="#12222B"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

/** Plate 3a: mostly gland, mostly fat, both. */
export function TissueTypesPlate() {
  return (
    <svg viewBox="0 0 450 160" role="img" aria-labelledby="t-p3a">
      <title id="t-p3a">
        Three chest sections side by side: mostly gland, mostly fat, and both
      </title>
      <g transform="translate(-10,0)">
        <path
          d="M62,24 C74,28 92,58 92,80 C92,102 74,132 62,136 L60,136 L60,24Z"
          fill="url(#pf)"
        />
        <use href="#cb" />
        <ellipse
          cx="84"
          cy="80"
          rx="24"
          ry="24"
          fill="url(#pg)"
          stroke="#0F4C5C"
          strokeWidth="1.6"
        />
        <path
          d="M62,24 C74,28 92,58 92,80 C92,102 74,132 62,136"
          fill="none"
          stroke="#0B3440"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M92,73 Q98,80 92,87"
          fill="#fff"
          stroke="#0B3440"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </g>
      <g transform="translate(140,0)">
        <path
          d="M62,24 C84,28 102,58 102,80 C102,102 84,132 62,136 L60,136 L60,24Z"
          fill="url(#pf)"
        />
        <use href="#cb" />
        <ellipse
          cx="76"
          cy="80"
          rx="9"
          ry="9"
          fill="url(#pg)"
          stroke="#0F4C5C"
          strokeWidth="1.6"
        />
        <path
          d="M62,24 C84,28 102,58 102,80 C102,102 84,132 62,136"
          fill="none"
          stroke="#0B3440"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M102,73 Q108,80 102,87"
          fill="#fff"
          stroke="#0B3440"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </g>
      <g transform="translate(290,0)">
        <path
          d="M62,24 C80,28 98,58 98,80 C98,102 80,132 62,136 L60,136 L60,24Z"
          fill="url(#pf)"
        />
        <use href="#cb" />
        <ellipse
          cx="78"
          cy="80"
          rx="18"
          ry="18"
          fill="url(#pg)"
          stroke="#0F4C5C"
          strokeWidth="1.6"
        />
        <path
          d="M62,24 C80,28 98,58 98,80 C98,102 80,132 62,136"
          fill="none"
          stroke="#0B3440"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M98,73 Q104,80 98,87"
          fill="#fff"
          stroke="#0B3440"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

/** Plate 3b: grades I to IV. */
export function GradesPlate() {
  return (
    <svg
      viewBox="0 0 440 138"
      role="img"
      aria-labelledby="t-p3b"
      style={{
        marginTop: "14px",
        borderTop: "1px solid #E3E8EA",
        paddingTop: "6px",
      }}
    >
      <title id="t-p3b">
        Four chest outlines from grade I to grade IV; grades III and IV show
        loose skin as a dashed line
      </title>
      <g transform="translate(16,6)">
        <path
          d="M0,0 L0,100"
          stroke="#0B3440"
          strokeWidth="1.2"
          strokeDasharray="1 4"
        />
        <path
          d="M4,8 C8,10 12,24 12,44 C12,64 8,76 4,80"
          fill="none"
          stroke="#0B3440"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <ellipse
          cx="9"
          cy="44"
          rx="6"
          ry="9"
          fill="#0F4C5C"
          fillOpacity=".14"
          stroke="#0F4C5C"
          strokeWidth="1.2"
        />
        <text
          x="30"
          y="134"
          fontFamily="Source Serif 4,Charter,Georgia,serif"
          fontSize="17"
          fontWeight="600"
          fill="#0B3440"
          textAnchor="middle"
        >
          I
        </text>
      </g>
      <g transform="translate(124,6)">
        <path
          d="M0,0 L0,100"
          stroke="#0B3440"
          strokeWidth="1.2"
          strokeDasharray="1 4"
        />
        <path
          d="M4,8 C13,10 22,24 22,44 C22,64 13,76 4,80"
          fill="none"
          stroke="#0B3440"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <ellipse
          cx="16"
          cy="44"
          rx="9"
          ry="13"
          fill="#0F4C5C"
          fillOpacity=".14"
          stroke="#0F4C5C"
          strokeWidth="1.2"
        />
        <text
          x="30"
          y="134"
          fontFamily="Source Serif 4,Charter,Georgia,serif"
          fontSize="17"
          fontWeight="600"
          fill="#0B3440"
          textAnchor="middle"
        >
          II
        </text>
      </g>
      <g transform="translate(232,6)">
        <path
          d="M0,0 L0,100"
          stroke="#0B3440"
          strokeWidth="1.2"
          strokeDasharray="1 4"
        />
        <path
          d="M4,8 C14,10 24,24 24,44 C24,64 14,76 4,80"
          fill="none"
          stroke="#0B3440"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M24,50 C27,84 16,98 4,100"
          fill="none"
          stroke="#0F4C5C"
          strokeWidth="1.6"
          strokeDasharray="4 3"
        />
        <ellipse
          cx="17"
          cy="44"
          rx="10"
          ry="14"
          fill="#0F4C5C"
          fillOpacity=".14"
          stroke="#0F4C5C"
          strokeWidth="1.2"
        />
        <text
          x="30"
          y="134"
          fontFamily="Source Serif 4,Charter,Georgia,serif"
          fontSize="17"
          fontWeight="600"
          fill="#0B3440"
          textAnchor="middle"
        >
          III
        </text>
      </g>
      <g transform="translate(340,6)">
        <path
          d="M0,0 L0,100"
          stroke="#0B3440"
          strokeWidth="1.2"
          strokeDasharray="1 4"
        />
        <path
          d="M4,8 C19,10 34,24 34,44 C34,64 19,76 4,80"
          fill="none"
          stroke="#0B3440"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M34,50 C37,98 20,112 4,114"
          fill="none"
          stroke="#0F4C5C"
          strokeWidth="1.6"
          strokeDasharray="4 3"
        />
        <ellipse
          cx="24"
          cy="44"
          rx="13"
          ry="18"
          fill="#0F4C5C"
          fillOpacity=".14"
          stroke="#0F4C5C"
          strokeWidth="1.2"
        />
        <text
          x="30"
          y="134"
          fontFamily="Source Serif 4,Charter,Georgia,serif"
          fontSize="17"
          fontWeight="600"
          fill="#0B3440"
          textAnchor="middle"
        >
          IV
        </text>
      </g>
    </svg>
  );
}

/** Plate 4: compression vest. */
export function VestPlate() {
  return (
    <svg viewBox="0 0 300 214" role="img" aria-labelledby="t-vest">
      <title id="t-vest">
        Front view of a torso in a shirt with a close-fitting compression vest
        drawn under it, with a front zip and shoulder straps
      </title>
      <path
        d="M112,16 C122,34 178,34 188,16 L238,36 C260,46 268,68 268,98 L262,204 L38,204 L32,98 C32,68 40,46 62,36 Z"
        fill="#fff"
        stroke="#0B3440"
        strokeWidth="1.6"
        strokeDasharray="5 4"
      />
      <path
        d="M92,40 C100,52 108,58 116,58 L184,58 C192,58 200,52 208,40 L216,44 C220,80 222,150 218,196 L82,196 C78,150 80,80 84,44 Z"
        fill="#E3EFF1"
        stroke="#0B3440"
        strokeWidth="2"
      />
      <path d="M150,58 V196" stroke="#0B3440" strokeWidth="1.6" />
      <path
        d="M144,70 h12 M144,90 h12 M144,110 h12 M144,130 h12 M144,150 h12 M144,170 h12"
        stroke="#0F4C5C"
        strokeWidth="1.4"
      />
      <path
        d="M92,40 L84,44 M208,40 L216,44"
        stroke="#0B3440"
        strokeWidth="2"
      />
      <text
        x="248"
        y="124"
        fontFamily="Inter,sans-serif"
        fontSize="12"
        fill="#12222B"
        textAnchor="end"
      >
        Shirt
      </text>
      <text
        x="104"
        y="124"
        fontFamily="Inter,sans-serif"
        fontSize="12"
        fill="#12222B"
        textAnchor="middle"
      >
        Vest
      </text>
    </svg>
  );
}

/** Plate 5: travel map outline, no building marked. */
export function MapPlate() {
  return (
    <svg viewBox="0 0 360 206" role="img" aria-labelledby="t-map">
      <title id="t-map">
        Simple outline map: Delhi, Noida, Faridabad and Rewari, each joined by a
        dashed line to a ring marking Gurgaon. No building is marked.
      </title>
      <rect x="1" y="1" width="358" height="204" fill="#fff" stroke="#E3E8EA" />
      <path
        d="M236,6 C214,54 240,100 214,148 C204,172 214,190 206,202"
        fill="none"
        stroke="#A9D1DA"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <text
        x="248"
        y="196"
        fontFamily="Source Serif 4,Georgia,serif"
        fontStyle="italic"
        fontSize="13"
        fill="#5B6B73"
      >
        Yamuna
      </text>
      <g stroke="#0F4C5C" strokeWidth="1.6" strokeDasharray="5 4" fill="none">
        <path d="M138,56 L88,124" />
        <path d="M286,66 L92,126" />
        <path d="M276,150 L94,132" />
        <path d="M40,184 L82,138" />
      </g>
      <g fill="#0B3440">
        <circle cx="138" cy="56" r="7" />
        <circle cx="286" cy="66" r="7" />
        <circle cx="276" cy="150" r="7" />
        <circle cx="40" cy="184" r="6" />
      </g>
      <circle
        cx="88"
        cy="130"
        r="15"
        fill="none"
        stroke="#0B3440"
        strokeWidth="3"
      />
      <circle cx="88" cy="130" r="6" fill="#0B3440" />
      <g fontFamily="Inter,sans-serif" fontSize="14" fill="#12222B">
        <text x="150" y="46">
          Delhi
        </text>
        <text x="298" y="56">
          Noida
        </text>
        <text x="286" y="176">
          Faridabad
        </text>
        <text x="50" y="200">
          Rewari
        </text>
        <text x="30" y="104" fontWeight="600">
          Gurgaon (Gurugram)
        </text>
      </g>
    </svg>
  );
}

/** Video poster 1. */
export function PosterGrades() {
  return (
    <svg viewBox="0 0 320 180" role="img" aria-labelledby="t-v1">
      <title id="t-v1">
        Poster: animated chest diagram showing the four grades
      </title>
      <rect width="320" height="180" fill="#E3EFF1" />
      <path
        d="M104,20 C110,24 118,40 118,58 C118,76 110,88 104,92"
        fill="none"
        stroke="#0B3440"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M158,20 C172,24 180,40 180,58 C180,76 172,88 158,92"
        fill="none"
        stroke="#0B3440"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M212,20 C230,24 238,40 238,58 C238,76 230,88 212,92"
        fill="none"
        stroke="#0B3440"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M238,64 C240,106 224,114 212,116"
        fill="none"
        stroke="#0F4C5C"
        strokeWidth="1.6"
        strokeDasharray="4 3"
      />
      <path
        d="M266,20 C290,24 298,40 298,58 C298,76 290,88 266,92"
        fill="none"
        stroke="#0B3440"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M298,64 C300,114 284,122 266,124"
        fill="none"
        stroke="#0F4C5C"
        strokeWidth="1.6"
        strokeDasharray="4 3"
      />
      <g
        fontFamily="Source Serif 4,Georgia,serif"
        fontWeight="600"
        fontSize="15"
        fill="#0B3440"
        textAnchor="middle"
      >
        <text x="114" y="148">
          I
        </text>
        <text x="174" y="148">
          II
        </text>
        <text x="228" y="148">
          III
        </text>
        <text x="286" y="148">
          IV
        </text>
      </g>
    </svg>
  );
}

/** Video poster 2. */
export function PosterRecovery() {
  return (
    <svg viewBox="0 0 320 180" role="img" aria-labelledby="t-v2">
      <title id="t-v2">
        Poster: calendar graphic with weeks 1 to 12 marked
      </title>
      <rect width="320" height="180" fill="#E3EFF1" />
      <rect
        x="26"
        y="34"
        width="38"
        height="44"
        fill="#0F4C5C"
        stroke="#0B3440"
      />
      <rect
        x="70"
        y="34"
        width="38"
        height="44"
        fill="#0F4C5C"
        stroke="#0B3440"
      />
      <rect
        x="114"
        y="34"
        width="38"
        height="44"
        fill="#0F4C5C"
        stroke="#0B3440"
      />
      <rect
        x="158"
        y="34"
        width="38"
        height="44"
        fill="#fff"
        stroke="#0B3440"
      />
      <rect
        x="202"
        y="34"
        width="38"
        height="44"
        fill="#fff"
        stroke="#0B3440"
      />
      <rect
        x="246"
        y="34"
        width="38"
        height="44"
        fill="#0F4C5C"
        stroke="#0B3440"
      />
      <rect
        x="26"
        y="86"
        width="38"
        height="44"
        fill="#0F4C5C"
        stroke="#0B3440"
      />
      <rect
        x="70"
        y="86"
        width="38"
        height="44"
        fill="#0F4C5C"
        stroke="#0B3440"
      />
      <rect
        x="114"
        y="86"
        width="38"
        height="44"
        fill="#0F4C5C"
        stroke="#0B3440"
      />
      <rect
        x="158"
        y="86"
        width="38"
        height="44"
        fill="#fff"
        stroke="#0B3440"
      />
      <rect
        x="202"
        y="86"
        width="38"
        height="44"
        fill="#fff"
        stroke="#0B3440"
      />
      <rect
        x="246"
        y="86"
        width="38"
        height="44"
        fill="#fff"
        stroke="#0B3440"
      />
      <text
        x="45"
        y="62"
        textAnchor="middle"
        fontFamily="Inter,sans-serif"
        fontSize="13"
        fontWeight="600"
        fill="#fff"
      >
        1
      </text>
      <text
        x="89"
        y="62"
        textAnchor="middle"
        fontFamily="Inter,sans-serif"
        fontSize="13"
        fontWeight="600"
        fill="#fff"
      >
        2
      </text>
      <text
        x="133"
        y="62"
        textAnchor="middle"
        fontFamily="Inter,sans-serif"
        fontSize="13"
        fontWeight="600"
        fill="#fff"
      >
        3
      </text>
      <text
        x="177"
        y="62"
        textAnchor="middle"
        fontFamily="Inter,sans-serif"
        fontSize="13"
        fontWeight="600"
        fill="#0B3440"
      >
        4
      </text>
      <text
        x="221"
        y="62"
        textAnchor="middle"
        fontFamily="Inter,sans-serif"
        fontSize="13"
        fontWeight="600"
        fill="#0B3440"
      >
        5
      </text>
      <text
        x="265"
        y="62"
        textAnchor="middle"
        fontFamily="Inter,sans-serif"
        fontSize="13"
        fontWeight="600"
        fill="#fff"
      >
        6
      </text>
      <text
        x="45"
        y="114"
        textAnchor="middle"
        fontFamily="Inter,sans-serif"
        fontSize="13"
        fontWeight="600"
        fill="#fff"
      >
        7
      </text>
      <text
        x="89"
        y="114"
        textAnchor="middle"
        fontFamily="Inter,sans-serif"
        fontSize="13"
        fontWeight="600"
        fill="#fff"
      >
        8
      </text>
      <text
        x="133"
        y="114"
        textAnchor="middle"
        fontFamily="Inter,sans-serif"
        fontSize="13"
        fontWeight="600"
        fill="#fff"
      >
        9
      </text>
      <text
        x="177"
        y="114"
        textAnchor="middle"
        fontFamily="Inter,sans-serif"
        fontSize="13"
        fontWeight="600"
        fill="#0B3440"
      >
        10
      </text>
      <text
        x="221"
        y="114"
        textAnchor="middle"
        fontFamily="Inter,sans-serif"
        fontSize="13"
        fontWeight="600"
        fill="#0B3440"
      >
        11
      </text>
      <text
        x="265"
        y="114"
        textAnchor="middle"
        fontFamily="Inter,sans-serif"
        fontSize="13"
        fontWeight="600"
        fill="#0B3440"
      >
        12
      </text>
      <text
        x="26"
        y="24"
        fontFamily="Source Serif 4,Georgia,serif"
        fontStyle="italic"
        fontSize="15"
        fill="#0B3440"
      >
        Weeks 1 to 12
      </text>
    </svg>
  );
}

/** Portrait placeholder (no photo without written consent). */
export function ReviewerPortrait() {
  return (
    <svg viewBox="0 0 120 120" role="img" aria-labelledby="t-pt">
      <title id="t-pt">
        Portrait placeholder for the reviewing surgeon. No photo until written
        consent is given.
      </title>
      <rect
        x="1"
        y="1"
        width="118"
        height="118"
        fill="#E3EFF1"
        stroke="#0B3440"
        strokeDasharray="4 3"
      />
      <circle
        cx="60"
        cy="46"
        r="20"
        fill="none"
        stroke="#0B3440"
        strokeWidth="2.4"
      />
      <path
        d="M22,112 C22,84 40,76 60,76 C80,76 98,84 98,112"
        fill="none"
        stroke="#0B3440"
        strokeWidth="2.4"
      />
    </svg>
  );
}

export function ReadThumb1() {
  return (
    <svg
      className="th"
      viewBox="0 0 300 150"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="300" height="150" fill="#E3EFF1" />
      <path
        d="M30,20 C35,24 43,40 43,58 C43,76 35,88 30,92"
        fill="none"
        stroke="#0B3440"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M100,20 C111,24 119,40 119,58 C119,76 111,88 100,92"
        fill="none"
        stroke="#0B3440"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M170,20 C185,24 193,40 193,58 C193,76 185,88 170,92"
        fill="none"
        stroke="#0B3440"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M193,64 C195,105 179,113 170,115"
        fill="none"
        stroke="#0F4C5C"
        strokeWidth="1.6"
        strokeDasharray="4 3"
      />
      <path
        d="M240,20 C260,24 268,40 268,58 C268,76 260,88 240,92"
        fill="none"
        stroke="#0B3440"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M268,64 C270,110 254,118 240,120"
        fill="none"
        stroke="#0F4C5C"
        strokeWidth="1.6"
        strokeDasharray="4 3"
      />
    </svg>
  );
}

export function ReadThumb2() {
  return (
    <svg
      className="th"
      viewBox="0 0 300 150"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="300" height="150" fill="#E3EFF1" />
      <circle
        cx="95"
        cy="75"
        r="42"
        fill="url(#pg)"
        stroke="#0F4C5C"
        strokeWidth="2"
      />
      <circle
        cx="205"
        cy="75"
        r="42"
        fill="url(#pf)"
        stroke="#0B3440"
        strokeWidth="2"
      />
      <path d="M150,30 V120" stroke="#849299" strokeDasharray="2 4" />
    </svg>
  );
}

export function ReadThumb3() {
  return (
    <svg
      className="th"
      viewBox="0 0 300 150"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="300" height="150" fill="#E3EFF1" />
      <path
        d="M110,25 C150,30 175,55 175,78 C175,100 150,122 110,126"
        fill="url(#pf)"
        stroke="#0B3440"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M110,25 V126"
        stroke="#0B3440"
        strokeWidth="2"
        strokeDasharray="2 5"
      />
    </svg>
  );
}

export function TreatmentIcon1() {
  return (
    <svg className="ic2" viewBox="0 0 44 44" aria-hidden="true">
      <path d="M14,6 C20,14 20,30 14,38 M30,6 C24,14 24,30 30,38" />
      <path d="M17,18 h10 M17,25 h10" strokeDasharray="2 3" />
    </svg>
  );
}

export function TreatmentIcon2() {
  return (
    <svg className="ic2" viewBox="0 0 44 44" aria-hidden="true">
      <path d="M10,6 C8,18 10,30 18,38 M34,6 C36,18 34,30 26,38" />
      <path d="M12,26 C20,31 24,31 32,26" strokeDasharray="3 3" />
    </svg>
  );
}

export function TreatmentIcon3() {
  return (
    <svg className="ic2" viewBox="0 0 44 44" aria-hidden="true">
      <path d="M8,8 V36" />
      <circle cx="26" cy="22" r="11" />
      <circle cx="26" cy="22" r="3" />
    </svg>
  );
}
