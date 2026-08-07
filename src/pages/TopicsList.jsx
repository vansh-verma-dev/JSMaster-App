import React, { useState } from "react";
import { Search, CheckCircle2, ChevronRight } from "lucide-react";
import { TOPICS } from "../data/topics";
import { cardColor } from "../data/theme";

export default function TopicsList({ t, go, completedTopics, onOpen }) {
  const [query, setQuery] = useState("");
  const filtered = TOPICS.filter((tp) => tp.title.toLowerCase().includes(query.toLowerCase()) || tp.tag.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl sm:text-3xl font-bold" style={{ color: t.text }}>Topics roadmap</h1>
        <p className="text-sm mt-1" style={{ color: t.textMuted }}>Work through each topic — definition, example, practice and interview questions.</p>
      </div>

      <div className="relative">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: t.textMuted }} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search topics..."
          className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none"
          style={{ backgroundColor: t.surface, border: `1px solid ${t.border}`, color: t.text }}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map((topic) => {
          const c = cardColor(TOPICS.findIndex((x) => x.id === topic.id), t.mode);
          return (
            <button
              key={topic.id}
              onClick={() => onOpen(topic)}
              className="text-left rounded-xl p-4 flex items-start gap-3 hover:-translate-y-0.5 transition-transform"
              style={{ backgroundColor: t.surface, border: `1px solid ${t.border}` }}
            >
              <span className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: c.bg }}>
                <topic.icon size={16} style={{ color: c.fg }} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-sm" style={{ color: t.text }}>{topic.title}</p>
                  {completedTopics.has(topic.id) && <CheckCircle2 size={14} style={{ color: t.success }} />}
                </div>
                <p className="text-xs mt-1" style={{ color: t.textMuted }}>{topic.summary}</p>
                <span className="inline-block mt-2 text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: c.bg, color: c.fg }}>{topic.tag}</span>
              </div>
              <ChevronRight size={16} style={{ color: t.textMuted, flexShrink: 0 }} />
            </button>
          );
        })}
        {filtered.length === 0 && (
          <p className="text-sm col-span-2 text-center py-10" style={{ color: t.textMuted }}>No topics match "{query}".</p>
        )}
      </div>
    </div>
  );
}
