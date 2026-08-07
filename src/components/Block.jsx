import React from "react";

export default function Block({ t, label, text, accent }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: t.textMuted }}>{label}</p>
      <p className="text-sm leading-relaxed rounded-xl p-4" style={{ backgroundColor: accent ? t.accentSoft : t.surface, border: `1px solid ${t.border}`, color: t.text }}>{text}</p>
    </div>
  );
}
