import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  LayoutGrid,
  Network,
  ShieldQuestion,
  Zap,
  Braces,
  Repeat,
  FunctionSquare,
  Layers,
  Boxes,
  Timer,
  CircleDot,
  Sparkles,
} from "lucide-react";
import MobileBottomNav from "../components/mobilenav";
import Navbar from "../components/navbar";

// ---- Data: replace with your real 219 topics later ----
// (grouped so the page can grow without changing the UI)

const allTopics = [
  { name: "Variables", level: "easy", icon: CircleDot, bg: "bg-violet-600" },
  { name: "Data Types", level: "easy", icon: Boxes, bg: "bg-sky-600" },
  { name: "Functions", level: "easy", icon: FunctionSquare, bg: "bg-amber-600" },
  { name: "Loops in JS", level: "easy", icon: Repeat, bg: "bg-emerald-600" },
  { name: "Arrays in JS", level: "medium", icon: LayoutGrid, bg: "bg-rose-600" },
  { name: "Objects & OOP", level: "medium", icon: Braces, bg: "bg-fuchsia-600" },
  { name: "DOM in JS", level: "medium", icon: Network, bg: "bg-sky-600" },
  { name: "Promises in JS", level: "medium", icon: ShieldQuestion, bg: "bg-violet-600" },
  { name: "Async / Await", level: "hard", icon: Zap, bg: "bg-amber-600" },
  { name: "Closures", level: "hard", icon: Layers, bg: "bg-emerald-600" },
  { name: "Event Loop", level: "hard", icon: Timer, bg: "bg-rose-600" },
  { name: "Prototypes", level: "hard", icon: Sparkles, bg: "bg-fuchsia-600" },
];

const filters = [
  { id: "all", label: "All" },
  { id: "easy", label: "Easy" },
  { id: "medium", label: "Medium" },
  { id: "hard", label: "Hard" },
];

const levelStyles = {
  easy: "bg-emerald-50 text-emerald-600 border-emerald-200",
  medium: "bg-sky-50 text-sky-600 border-sky-200",
  hard: "bg-rose-50 text-rose-600 border-rose-200",
};

export default function CoursesPage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredTopics = allTopics.filter((t) => {
    const matchesQuery = t.name.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = activeFilter === "all" || t.level === activeFilter;
    return matchesQuery && matchesFilter;
  });

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-zinc-50 pb-24 md:pb-10">
        {/* ---------- Header ---------- */}
        <section className="w-full bg-gradient-to-br from-violet-700 via-violet-600 to-fuchsia-600 relative overflow-hidden rounded-b-[32px] pb-8">
          <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10" />
          <div className="absolute top-10 right-6 h-24 w-24 rounded-full bg-white/10" />

          <div className="max-w-5xl mx-auto px-5 pt-8 md:pt-12 relative">
            <h1 className="text-2xl md:text-4xl font-extrabold text-white">All Courses</h1>
            <p className="text-violet-100 text-sm md:text-base mt-1">
              219 topics — basics se advanced tak, apni speed se seekho.
            </p>

            {/* Search bar */}
            <div className="relative mt-5">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search topics..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl text-sm bg-white outline-none shadow-lg placeholder:text-zinc-400 text-zinc-900"
              />
            </div>
          </div>
        </section>

        <main className="max-w-5xl mx-auto px-4">
          {/* ---------- Filter chips ---------- */}
          <div className="flex gap-2 mt-5 mb-6 overflow-x-auto">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`shrink-0 text-sm font-semibold px-4 py-2 rounded-full transition-colors ${
                  activeFilter === f.id
                    ? "bg-violet-700 text-white"
                    : "bg-white text-zinc-600 border border-zinc-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* ---------- Topics grid ---------- */}
          {filteredTopics.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {filteredTopics.map((topic) => {
                const Icon = topic.icon;
                return (
                  <Link
                    key={topic.name}
                    to={`/courses/${topic.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`text-left rounded-2xl p-4 md:p-5 ${topic.bg} hover:brightness-110 hover:-translate-y-0.5 transition shadow-sm`}
                  >
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mb-3">
                      <Icon size={19} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div className="text-sm md:text-base font-bold text-white">{topic.name}</div>
                    <span
                      className={`inline-block text-[11px] font-mono px-2 py-0.5 rounded-full mt-2 border bg-white/15 border-white/20 text-white`}
                    >
                      {topic.level}
                    </span>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-zinc-400 text-sm">
                Koi topic nahi mila "{query}" ke liye
              </p>
            </div>
          )}
        </main>
      </div>
      <MobileBottomNav />
    </>
  );
}