import React from "react";
import { User, Sun, Moon, UserCircle2, ShieldCheck } from "lucide-react";
import { NAV_ITEMS } from "../data/navItems";

export default function TopBar({ t, mode, setMode, page, go, user, accountOpen, setAccountOpen }) {
  return (
    <header
      className="sticky top-0 z-40 backdrop-blur border-b"
      style={{ backgroundColor: t.bg + "E6", borderColor: t.border }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button onClick={() => go("home")} className="flex items-center gap-2 group">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-sm"
            style={{ backgroundColor: t.accent, color: "#141414" }}
          >
            JS
          </span>
          <span className="font-display font-semibold text-lg tracking-tight" style={{ color: t.text }}>
            JSMaster
          </span>
        </button>

        {/* desktop nav row */}
        <nav className="hidden md:flex items-center gap-1 rounded-full p-1" style={{ backgroundColor: t.surface, border: `1px solid ${t.border}` }}>
          {NAV_ITEMS.map((item) => {
            const active = page === item.id || (item.id === "topics" && page === "topicDetail") || (item.id === "projects" && page === "projectDetail");
            return (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center gap-1.5"
                style={active ? { backgroundColor: t.accent, color: "#141414" } : { color: t.textMuted }}
              >
                <item.icon size={15} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{ backgroundColor: t.surface, border: `1px solid ${t.border}`, color: t.text }}
            aria-label="Toggle theme"
          >
            {mode === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <div className="relative">
            <button
              onClick={() => setAccountOpen((o) => !o)}
              className="w-9 h-9 rounded-full flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: t.surface, border: `1px solid ${t.border}` }}
            >
              {user?.avatar ? (
                <img src={user.avatar} alt="" className="w-full h-full object-cover" />
              ) : (
                <User size={16} style={{ color: t.text }} />
              )}
            </button>

            {accountOpen && (
              <div
                className="absolute right-0 mt-2 w-48 rounded-xl overflow-hidden shadow-xl z-50"
                style={{ backgroundColor: t.surface, border: `1px solid ${t.border}` }}
              >
                {user ? (
                  <>
                    <div className="px-4 py-3 border-b" style={{ borderColor: t.border }}>
                      <p className="text-sm font-semibold truncate" style={{ color: t.text }}>{user.name}</p>
                      <p className="text-xs truncate" style={{ color: t.textMuted }}>{user.email}</p>
                    </div>
                    <button onClick={() => go("profile")} className="w-full text-left px-4 py-2.5 text-sm flex items-center gap-2" style={{ color: t.text }}>
                      <UserCircle2 size={15} /> Profile
                    </button>
                    <button onClick={() => go("terms")} className="w-full text-left px-4 py-2.5 text-sm flex items-center gap-2" style={{ color: t.text }}>
                      <ShieldCheck size={15} /> Terms & Privacy
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => go("auth")} className="w-full text-left px-4 py-2.5 text-sm flex items-center gap-2" style={{ color: t.text }}>
                      <User size={15} /> Sign in / Sign up
                    </button>
                    <button onClick={() => go("terms")} className="w-full text-left px-4 py-2.5 text-sm flex items-center gap-2" style={{ color: t.text }}>
                      <ShieldCheck size={15} /> Terms & Privacy
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
