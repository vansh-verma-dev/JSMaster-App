import React from "react";

// Flat 2D illustration — person coding at a laptop, purple/pink accents.
// Drawn from scratch with basic shapes (no external image / no copyrighted art).
export default function HeroIllustration({ t }) {
  return (
    <div className="relative flex items-center justify-center py-4">
      <svg viewBox="0 0 420 360" className="w-full max-w-md">
        <defs>
          <linearGradient id="blobGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={t.accent} stopOpacity="0.28" />
            <stop offset="100%" stopColor={t.accent2} stopOpacity="0.22" />
          </linearGradient>
        </defs>
        {/* background blob */}
        <path fill="url(#blobGrad)" d="M210 20c85 0 150 62 158 138 7 66-45 128-118 152-79 26-168-2-196-70C24 174 40 92 108 50c30-19 66-30 102-30Z" />

        {/* floating chips */}
        <g>
          <rect x="26" y="48" rx="10" width="72" height="30" fill={t.accent} opacity="0.9" />
          <text x="62" y="68" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="14" fill="#141414" fontWeight="700">{"</>"}</text>
        </g>
        <g>
          <circle cx="352" cy="78" r="22" fill={t.accent2} opacity="0.9" />
          <text x="352" y="84" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="16" fill="#141414" fontWeight="700">{"{}"}</text>
        </g>
        <g>
          <rect x="330" y="230" rx="10" width="58" height="58" fill={t.accent} opacity="0.16" stroke={t.accent} strokeWidth="2" />
          <text x="359" y="266" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="20" fill={t.accent}>✓</text>
        </g>

        {/* desk */}
        <rect x="90" y="272" width="240" height="14" rx="7" fill={t.surface2} stroke={t.border} />
        <rect x="110" y="286" width="14" height="46" fill={t.surface2} stroke={t.border} />
        <rect x="296" y="286" width="14" height="46" fill={t.surface2} stroke={t.border} />

        {/* laptop */}
        <rect x="150" y="214" width="120" height="72" rx="8" fill="#0D1117" stroke={t.border} strokeWidth="2" />
        <rect x="160" y="222" width="100" height="46" rx="4" fill="#161B22" />
        <text x="210" y="240" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={t.accent}>const skill</text>
        <text x="210" y="252" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={t.accent2}>= "JavaScript"</text>
        <rect x="140" y="286" width="140" height="8" rx="4" fill="#1F2937" />

        {/* person */}
        <circle cx="210" cy="150" r="30" fill="#2C1E4A" />
        <circle cx="210" cy="146" r="22" fill="#E9C9A8" />
        <path d="M188 138c2-16 42-16 44 0-6-6-38-6-44 0Z" fill="#241535" />
        <path d="M150 236c4-38 30-58 60-58s56 20 60 58c2 16-10 20-60 20s-62-4-60-20Z" fill={t.accent} />
        <path d="M150 236c4-38 30-58 60-58v78c-50 0-62-4-60-20Z" fill={t.accent2} opacity="0.55" />
        <rect x="168" y="228" width="26" height="16" rx="6" fill="#E9C9A8" />
        <rect x="226" y="228" width="26" height="16" rx="6" fill="#E9C9A8" />
      </svg>
    </div>
  );
}
