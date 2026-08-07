import React from "react";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetail({ t, project, go }) {
  return (
    <div className="space-y-6 max-w-2xl">
      <button onClick={() => go("projects")} className="text-sm font-medium flex items-center gap-1" style={{ color: t.textMuted }}>
        <ArrowLeft size={14} /> Back to projects
      </button>
      <div>
        <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: t.accentSoft, color: t.accent }}>{project.level}</span>
        <h1 className="font-display text-2xl sm:text-3xl font-bold mt-2" style={{ color: t.text }}>{project.title}</h1>
        <p className="text-sm mt-1" style={{ color: t.textMuted }}>{project.desc} · {project.tech}</p>
      </div>
      <div className="space-y-3">
        {project.steps.map((s, i) => (
          <div key={i} className="rounded-xl p-4 flex gap-3" style={{ backgroundColor: t.surface, border: `1px solid ${t.border}` }}>
            <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0" style={{ backgroundColor: t.accent, color: "#141414" }}>{i + 1}</span>
            <p className="text-sm leading-relaxed" style={{ color: t.text }}>{s}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
