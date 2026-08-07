import React from "react";
import { Rocket } from "lucide-react";
import { PROJECTS } from "../data/projects";
import { cardColor } from "../data/theme";

export default function ProjectsList({ t, onOpen }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl sm:text-3xl font-bold" style={{ color: t.text }}>Build real projects</h1>
        <p className="text-sm mt-1" style={{ color: t.textMuted }}>Step-by-step guides — you write the code, we set the path.</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {PROJECTS.map((p, i) => {
          const c = cardColor(i + 2, t.mode);
          return (
            <button key={p.id} onClick={() => onOpen(p)} className="text-left rounded-xl p-4 flex flex-col gap-2 hover:-translate-y-0.5 transition-transform" style={{ backgroundColor: t.surface, border: `1px solid ${t.border}` }}>
              <span className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: c.bg }}>
                <Rocket size={16} style={{ color: c.fg }} />
              </span>
              <p className="font-medium text-sm" style={{ color: t.text }}>{p.title}</p>
              <p className="text-xs" style={{ color: t.textMuted }}>{p.desc}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: c.bg, color: c.fg }}>{p.level}</span>
                <span className="text-[10px]" style={{ color: t.textMuted }}>{p.tech}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
