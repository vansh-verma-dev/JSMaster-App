import React from "react";
import { ArrowLeft, CheckCircle2, Circle } from "lucide-react";
import Block from "../components/Block";

export default function TopicDetail({ t, topic, go, done, toggleDone }) {
  return (
    <div className="space-y-6 max-w-3xl">
      <button onClick={() => go("topics")} className="text-sm font-medium flex items-center gap-1" style={{ color: t.textMuted }}>
        <ArrowLeft size={14} /> Back to topics
      </button>

      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: t.accentSoft, color: t.accent }}>{topic.tag}</span>
          <h1 className="font-display text-2xl sm:text-3xl font-bold mt-2" style={{ color: t.text }}>{topic.title}</h1>
        </div>
        <button
          onClick={toggleDone}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold flex-shrink-0"
          style={done ? { backgroundColor: t.success, color: "#06231F" } : { border: `1px solid ${t.border}`, color: t.text }}
        >
          {done ? <CheckCircle2 size={14} /> : <Circle size={14} />} {done ? "Completed" : "Mark complete"}
        </button>
      </div>

      <Block t={t} label="Definition" text={topic.definition} />
      <Block t={t} label="Why use it" text={topic.why} />

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: t.textMuted }}>Example</p>
        <pre className="rounded-xl p-4 font-mono text-[13px] overflow-x-auto" style={{ backgroundColor: "#0D1117", color: "#C9D1D9", border: `1px solid ${t.border}` }}>
          {topic.example}
        </pre>
      </div>

      <Block t={t} label="Practice question" text={topic.practice} accent />

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: t.textMuted }}>3 interview questions</p>
        <div className="space-y-2">
          {topic.interview.map((q, i) => (
            <div key={i} className="rounded-lg p-3 flex gap-2.5 text-sm" style={{ backgroundColor: t.surface, border: `1px solid ${t.border}`, color: t.text }}>
              <span className="font-mono text-xs mt-0.5" style={{ color: t.accent }}>{i + 1}.</span>
              {q}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
