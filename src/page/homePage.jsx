import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MoveRight,
  LayoutGrid,
  ShieldQuestion,
  Network,
  Zap,
  Braces,
  Repeat,
  Home as HomeIcon,
  Compass,
  Code2,
  User,
  ListChecks,
  MessageSquareCode,
  FolderGit2,
  CheckCircle2,
  Circle,
  Terminal,
  Clock,
  ChevronRight,
} from "lucide-react";

// ---- Data ----

const TOTAL_TOPICS = 219;
const TOPICS_DONE = 42;

const topics = [
  { name: "Arrays in JS", icon: LayoutGrid, bg: "bg-violet-600" },
  { name: "DOM in JS", icon: Network, bg: "bg-sky-600" },
  { name: "Promises in JS", icon: ShieldQuestion, bg: "bg-rose-600" },
  { name: "Async / Await", icon: Zap, bg: "bg-amber-600" },
  { name: "Objects & OOP", icon: Braces, bg: "bg-emerald-600" },
  { name: "Loops in JS", icon: Repeat, bg: "bg-fuchsia-600" },
];

const tasks = [
  { id: "reverse-string", title: "Reverse a string without .reverse()", level: "easy", time: "10 min", done: true },
  { id: "second-largest", title: "Find the second largest number in an array", level: "easy", time: "15 min", done: true },
  { id: "debounce-input", title: "Debounce a search input", level: "medium", time: "25 min", done: false },
  { id: "promise-queue", title: "Build a simple Promise queue", level: "hard", time: "40 min", done: false },
];

const interviewQs = [
  { q: "var, let aur const me kya farak hai?", level: "easy" },
  { q: "Closures kya hote hain, ek example do", level: "medium" },
  { q: "Event loop kaise kaam karta hai?", level: "hard" },
];

const projects = [
  { title: "Todo App", tags: ["DOM", "Events"], level: "easy", grad: "from-violet-500 to-fuchsia-600" },
  { title: "Weather App", tags: ["Fetch API", "Async"], level: "medium", grad: "from-sky-500 to-blue-600" },
  { title: "Expense Tracker", tags: ["Arrays", "LocalStorage"], level: "medium", grad: "from-emerald-500 to-teal-600" },
    { title: "Counter App", tags: ["Arrays", "LocalStorage"], level: "medium", grad: "from-red-500 to-red-600" },
];

const levelStyles = {
  easy: "bg-emerald-50 text-emerald-600 border-emerald-200",
  medium: "bg-sky-50 text-sky-600 border-sky-200",
  hard: "bg-rose-50 text-rose-600 border-rose-200",
};

// ---- Small building blocks ----

function LevelTag({ level }) {
  return (
    <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${levelStyles[level]}`}>
      {level}
    </span>
  );
}

function SectionHeader({ title, badge = "bg-violet-600", icon: Icon }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2.5">
        {Icon && (
          <div className={`h-8 w-8 rounded-full ${badge} flex items-center justify-center`}>
            <Icon size={16} className="text-white" strokeWidth={2.5} />
          </div>
        )}
        <h2 className="text-base md:text-lg font-bold text-zinc-900">{title}</h2>
      </div>
      <button className="flex items-center gap-1 text-xs md:text-sm font-semibold text-violet-600 hover:text-violet-700">
        View All
        <MoveRight size={14} />
      </button>
    </div>
  );
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();
  const pct = Math.round((TOPICS_DONE / TOTAL_TOPICS) * 100);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pb-24 md:pb-10">
      {/* ---------------- Hero ---------------- */}
      <section className="w-full bg-white p-5 md:p-10 flex gap-2 justify-between items-center rounded-bl-4xl rounded-br-4xl shadow-sm">
        <div className="max-w-5xl w-full mx-auto flex items-center justify-between gap-4">
          <span>
            <h1 className="text-2xl md:text-5xl font-extrabold text-zinc-900 leading-tight">
              Learning with JS Master
            </h1>
            <p className="text-zinc-500 text-sm md:text-lg mt-1 md:mt-3">
              welcome to new journey
            </p>
          </span>

          <span>
            <img
              className="h-[120px] md:h-[200px] object-contain"
              src="https://i.pinimg.com/1200x/4a/ca/fe/4acafecd9b6e8bf88b2b80b971e338eb.jpg"
              alt="JS Master mascot"
            />
          </span>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4">
        {/* ---------------- Progress (proper gap now, not stuck to hero) ---------------- */}
        <section className="mt-6 mb-9">
          <div className="bg-white rounded-2xl shadow-md border border-zinc-100 p-4 md:p-5 flex items-center gap-4">
            <div className="relative h-14 w-14 md:h-16 md:w-16 shrink-0">
              <svg viewBox="0 0 36 36" className="h-14 w-14 md:h-16 md:w-16 -rotate-90">
                <circle cx="18" cy="18" r="15.5" fill="none" stroke="#ede9fe" strokeWidth="4" />
                <circle
                  cx="18"
                  cy="18"
                  r="15.5"
                  fill="none"
                  stroke="#7c3aed"
                  strokeWidth="4"
                  strokeDasharray={`${pct} 100`}
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs md:text-sm font-extrabold text-violet-700">
                {pct}%
              </span>
            </div>
            <div className="flex-1">
              <div className="text-sm md:text-base font-extrabold text-zinc-900">
                {TOPICS_DONE}/{TOTAL_TOPICS} topics complete
              </div>
              <div className="h-1.5 bg-zinc-200 rounded-full overflow-hidden mt-2">
                <div className="h-full bg-violet-600 rounded-full" style={{ width: `${pct}%` }} />
              </div>
              <div className="text-[11px] md:text-xs text-zinc-500 mt-1">
                {TOTAL_TOPICS - TOPICS_DONE} topics baaki hain, chalte raho 🚀
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Courses / Topics ---------------- */}
        <section className="mb-9">
          <SectionHeader title="Courses" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <button
                  key={topic.name}
                  className={`text-left rounded-2xl p-4 md:p-5 ${topic.bg} hover:brightness-110 hover:-translate-y-0.5 transition shadow-sm`}
                >
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mb-3">
                    <Icon size={19} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div className="text-sm md:text-base font-bold text-white">{topic.name}</div>
                </button>
              );
            })}
          </div>
        </section>

        {/* ---------------- Tasks (clickable -> goes to task page) ---------------- */}
        <section className="mb-9">
          <SectionHeader title="Practice Tasks" icon={ListChecks} badge="bg-sky-600" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {tasks.map((task) => (
              <button
                key={task.id}
                onClick={() => navigate(`/tasks/${task.id}`)}
                className="text-left bg-white rounded-2xl border border-zinc-100 shadow-sm p-4 flex items-start gap-3 hover:shadow-md hover:border-violet-200 transition"
              >
                <div
                  className={`h-9 w-9 rounded-full flex items-center justify-center shrink-0 ${
                    task.done ? "bg-emerald-100" : "bg-zinc-100"
                  }`}
                >
                  {task.done ? (
                    <CheckCircle2 size={18} className="text-emerald-600" strokeWidth={2.5} />
                  ) : (
                    <Circle size={18} className="text-zinc-400" strokeWidth={2.5} />
                  )}
                </div>
                <div className="flex-1">
                  <div className={`text-sm font-semibold ${task.done ? "text-zinc-400 line-through" : "text-zinc-900"}`}>
                    {task.title}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <LevelTag level={task.level} />
                    <span className="flex items-center gap-1 text-[11px] text-zinc-400">
                      <Clock size={12} />
                      {task.time}
                    </span>
                  </div>
                </div>
                <ChevronRight size={18} className="text-zinc-300 shrink-0 mt-1" />
              </button>
            ))}
          </div>
        </section>

        {/* ---------------- Interview Questions ---------------- */}
        <section className="mb-9">
          <SectionHeader title="Interview Questions" icon={MessageSquareCode} badge="bg-rose-600" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {interviewQs.map((item) => (
              <div
                key={item.q}
                className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-4 flex items-center justify-between gap-3 hover:shadow-md transition"
              >
                <span className="text-sm font-medium text-zinc-800">{item.q}</span>
                <LevelTag level={item.level} />
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- Projects: 2 columns on mobile ---------------- */}
        <section className="mb-6">
          <SectionHeader title="Build Projects" icon={FolderGit2} badge="bg-emerald-600" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {projects.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl border border-zinc-100 shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <div className={`h-16 md:h-20 bg-gradient-to-br ${p.grad} flex items-center justify-center`}>
                  <Terminal size={22} className="text-white/90" strokeWidth={2.5} />
                </div>
                <div className="p-3 md:p-3.5">
                  <div className="flex items-center justify-between mb-2 gap-1">
                    <span className="text-xs md:text-sm font-bold text-zinc-900 truncate">{p.title}</span>
                    <LevelTag level={p.level} />
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-[10px] md:text-[11px] font-mono text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ---------------- Mobile Bottom Nav ---------------- */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          {[
            { id: "home", label: "Home", icon: HomeIcon },
            { id: "topics", label: "Topics", icon: Compass },
            { id: "practice", label: "Practice", icon: Code2 },
            { id: "profile", label: "Profile", icon: User },
          ].map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className="flex flex-col items-center gap-1 flex-1 py-1"
              >
                <Icon size={20} className={active ? "text-violet-600" : "text-zinc-400"} strokeWidth={2.5} />
                <span className={`text-[10px] font-semibold ${active ? "text-violet-600" : "text-zinc-400"}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}