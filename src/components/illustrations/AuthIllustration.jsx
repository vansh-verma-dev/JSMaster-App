import React from "react";

// Flat 2D illustration for the auth screen — person with a lock/key.
export default function AuthIllustration({ compact }) {
  return (
    <svg viewBox="0 0 320 320" className={compact ? "w-40" : "w-full max-w-xs"}>
      <defs>
        <linearGradient id="authGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#F0ABFC" />
        </linearGradient>
      </defs>
      <circle cx="160" cy="160" r="140" fill="url(#authGrad)" opacity="0.22" />

      {/* shield */}
      <path d="M160 60c26 10 46 14 62 14 4 46-6 108-62 138-56-30-66-92-62-138 16 0 36-4 62-14Z" fill="#FFFFFF" opacity="0.14" stroke="#F5F3FF" strokeWidth="2" />
      <circle cx="160" cy="150" r="22" fill="#FDE68A" />
      <rect x="148" y="150" width="24" height="26" rx="4" fill="#F5F3FF" />
      <rect x="152" y="140" width="16" height="18" rx="8" fill="none" stroke="#F5F3FF" strokeWidth="4" />

      {/* floating dots / sparkles */}
      <circle cx="70" cy="90" r="7" fill="#F472B6" />
      <circle cx="252" cy="70" r="5" fill="#FDE68A" />
      <circle cx="256" cy="220" r="8" fill="#F472B6" />
      <circle cx="58" cy="230" r="6" fill="#C4B5FD" />
      <text x="90" y="230" fontFamily="JetBrains Mono, monospace" fontSize="18" fill="#F5F3FF" opacity="0.85">{"{"}</text>
      <text x="222" y="120" fontFamily="JetBrains Mono, monospace" fontSize="18" fill="#F5F3FF" opacity="0.85">{"}"}</text>
    </svg>
  );
}
