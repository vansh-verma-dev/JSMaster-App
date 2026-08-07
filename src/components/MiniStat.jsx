import React from "react";

export default function MiniStat({ t, label, value, icon: Icon }) {
  return (
    <div className="rounded-lg p-3 text-center" style={{ backgroundColor: t.surface2 }}>
      <Icon size={15} className="mx-auto mb-1" style={{ color: t.textMuted }} />
      <p className="text-xs font-semibold" style={{ color: t.text }}>{value}</p>
      <p className="text-[10px]" style={{ color: t.textMuted }}>{label}</p>
    </div>
  );
}
