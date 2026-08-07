import React from "react";
import { NAV_ITEMS } from "../data/navItems";

export default function BottomNav({ t, page, go }) {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t px-2 pt-1.5 pb-[max(0.4rem,env(safe-area-inset-bottom))]"
      style={{ backgroundColor: t.surface + "F5", borderColor: t.border, backdropFilter: "blur(10px)" }}
    >
      <div className="flex items-center justify-between">
        {NAV_ITEMS.map((item) => {
          const active = page === item.id || (item.id === "topics" && page === "topicDetail") || (item.id === "projects" && page === "projectDetail");
          return (
            <button key={item.id} onClick={() => go(item.id)} className="flex-1 flex flex-col items-center gap-0.5 py-1.5 rounded-xl">
              <item.icon size={20} color={active ? t.accent : t.textMuted} strokeWidth={active ? 2.4 : 2} />
              <span className="text-[10px] font-medium" style={{ color: active ? t.accent : t.textMuted }}>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
