import React, { useState } from "react";
import { CheckCircle2, Circle, ChevronDown } from "lucide-react";
import { TASKS } from "../data/tasks";

export default function TasksPage({ t, completedTasks, setCompletedTasks }) {
  const [level, setLevel] = useState("Easy");
  const [openId, setOpenId] = useState(null);
  const levels = ["Easy", "Medium", "Hard"];
  const levelColor = { Easy: t.success, Medium: t.accent, Hard: "#F87171" };

  const toggle = (id) => setCompletedTasks((prev) => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl sm:text-3xl font-bold" style={{ color: t.text }}>Practice tasks</h1>
        <p className="text-sm mt-1" style={{ color: t.textMuted }}>Solve problems level by level. Mark them done as you go.</p>
      </div>

      <div className="flex gap-2">
        {levels.map((l) => (
          <button key={l} onClick={() => setLevel(l)} className="px-4 py-2 rounded-lg text-sm font-medium" style={level === l ? { backgroundColor: levelColor[l], color: "#0B0F17" } : { backgroundColor: t.surface, border: `1px solid ${t.border}`, color: t.text }}>
            {l} <span className="opacity-70">({TASKS[l].length})</span>
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {TASKS[level].map((task, i) => {
          const done = completedTasks.has(task.id);
          const open = openId === task.id;
          return (
            <div key={task.id} className="rounded-xl overflow-hidden" style={{ backgroundColor: t.surface, border: `1px solid ${t.border}` }}>
              <button onClick={() => setOpenId(open ? null : task.id)} className="w-full flex items-center gap-3 p-4 text-left">
                <button onClick={(e) => { e.stopPropagation(); toggle(task.id); }} className="flex-shrink-0">
                  {done ? <CheckCircle2 size={19} style={{ color: t.success }} /> : <Circle size={19} style={{ color: t.textMuted }} />}
                </button>
                <span className="font-mono text-xs" style={{ color: t.textMuted }}>{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm font-medium flex-1" style={{ color: t.text, textDecoration: done ? "line-through" : "none", opacity: done ? 0.6 : 1 }}>{task.title}</p>
                <ChevronDown size={16} style={{ color: t.textMuted, transform: open ? "rotate(180deg)" : "none", transition: "transform .2s" }} />
              </button>
              {open && (
                <div className="px-4 pb-4 pl-[3.1rem]">
                  <p className="text-sm leading-relaxed" style={{ color: t.textMuted }}>{task.desc}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
