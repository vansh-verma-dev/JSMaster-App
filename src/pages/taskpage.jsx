import { useState } from "react";
import Navbar from "../componentes/navbar";
import Sidebar from "../componentes/sidebar";
import TASKS from "../data/taskData";
import {
  IoLeafOutline,
  IoFlashOutline,
  IoFlameOutline,
  IoTrophyOutline,
  IoCheckmarkCircle,
  IoChevronDown,
  IoCodeSlashOutline,
  IoListOutline,
} from "react-icons/io5";
import BottomNav from "../componentes/Bottomnav";

const LEVELS = [
  { key: "easy", label: "Easy", desc: "Core JS fundamentals", icon: IoLeafOutline, active: "bg-emerald-600 text-white border-emerald-600", idle: "text-emerald-700 border-emerald-200 hover:bg-emerald-50", accent: "text-emerald-600", bg: "bg-emerald-500", barFrom: "from-emerald-400", barTo: "to-emerald-300" },
  { key: "medium", label: "Medium", desc: "Real-world building blocks", icon: IoFlashOutline, active: "bg-blue-600 text-white border-blue-600", idle: "text-blue-700 border-blue-200 hover:bg-blue-50", accent: "text-blue-600", bg: "bg-blue-500", barFrom: "from-blue-400", barTo: "to-blue-300" },
  { key: "hard", label: "Hard", desc: "Deep async & systems logic", icon: IoFlameOutline, active: "bg-amber-600 text-white border-amber-600", idle: "text-amber-700 border-amber-200 hover:bg-amber-50", accent: "text-amber-600", bg: "bg-amber-500", barFrom: "from-amber-400", barTo: "to-amber-300" },
  { key: "pro", label: "Pro", desc: "Senior-level system design", icon: IoTrophyOutline, active: "bg-rose-600 text-white border-rose-600", idle: "text-rose-700 border-rose-200 hover:bg-rose-50", accent: "text-rose-600", bg: "bg-rose-500", barFrom: "from-rose-400", barTo: "to-rose-300" },
];

function Tasks() {
  const [levelKey, setLevelKey] = useState("easy");
  const [completedByLevel, setCompletedByLevel] = useState({});
  const [expandedId, setExpandedId] = useState(null);

  const level = LEVELS.find((l) => l.key === levelKey);
  const tasks = TASKS[levelKey];
  const completed = completedByLevel[levelKey] || new Set();

  const selectLevel = (key) => {
    setLevelKey(key);
    setExpandedId(null);
  };

  const toggleDone = (id) => {
    setCompletedByLevel((prev) => {
      const current = new Set(prev[levelKey] || []);
      current.has(id) ? current.delete(id) : current.add(id);
      return { ...prev, [levelKey]: current };
    });
  };

  const progressPct = tasks.length ? Math.round((completed.size / tasks.length) * 100) : 0;

  return (
    <div>
      <Navbar />
      <div className="flex bg-white">
        <Sidebar />

        <div className="flex-1 h-[90vh] overflow-y-auto p-4 sm:p-6 pt-5">
          {/* ---------- Hero ---------- */}
          <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-3xl p-5 sm:p-8 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-white/5 blur-xl" />
            <IoCodeSlashOutline className="absolute right-4 sm:right-8 top-4 sm:top-6 text-white/10 text-[80px] sm:text-[120px] rotate-12 pointer-events-none" />
            <span className="relative inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-[11px] sm:text-xs font-medium px-3 py-1 rounded-full">
              <IoCodeSlashOutline className="text-sm" />
              Practice like it's an interview
            </span>
            <h1 className="relative text-2xl sm:text-3xl font-bold text-white mt-3">
              Coding Tasks
            </h1>
            <p className="relative text-gray-300 text-xs sm:text-sm mt-2 max-w-md">
              100 real, hand-written coding challenges across 4 levels — the kind you'd actually get asked to solve in a technical round.
            </p>
            <span className="relative inline-flex items-center gap-1.5 bg-white/10 text-white text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-full mt-4">
              25 tasks per level
            </span>
          </div>

          {/* ---------- Level filter buttons ---------- */}
          <div className="mt-6 flex flex-wrap gap-2">
            {LEVELS.map(({ key, label, icon: Icon, active, idle }) => {
              const isActive = key === levelKey;
              return (
                <button
                  key={key}
                  onClick={() => selectLevel(key)}
                  className={`flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
                    isActive ? active : `bg-white ${idle}`
                  }`}
                >
                  <Icon className="text-base" />
                  {label}
                </button>
              );
            })}
          </div>

          {/* ---------- Task list ---------- */}
          <div className="mt-6 max-w-3xl">
            <div className="flex items-center gap-3">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{level.label} Tasks</h2>
                <p className="text-xs sm:text-sm text-gray-500">{level.desc}</p>
              </div>
            </div>

            {/* Progress */}
            <div className="mt-4 bg-gray-50 border border-gray-100 rounded-xl p-3 flex items-center gap-3">
              <div className="flex-1">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>Completed</span>
                  <span>{completed.size}/{tasks.length} tasks</span>
                </div>
                <div className="w-full h-1.5 bg-white rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${level.barFrom} ${level.barTo} rounded-full transition-all`}
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>
              <span className="text-sm font-bold text-gray-700 shrink-0">{progressPct}%</span>
            </div>

            {/* Task cards */}
            <div className="mt-4 flex flex-col gap-2.5">
              {tasks.map((task, i) => {
                const done = completed.has(task.id);
                const isOpen = expandedId === task.id;
                return (
                  <div
                    key={task.id}
                    className={`border rounded-xl overflow-hidden transition-colors ${done ? "border-emerald-200 bg-emerald-50/40" : "border-gray-200 bg-white"}`}
                  >
                    <button
                      onClick={() => setExpandedId(isOpen ? null : task.id)}
                      className="w-full flex items-center gap-3 p-3.5 text-left"
                    >
                      <span className="text-xs font-semibold text-gray-400 w-6 shrink-0">{i + 1}</span>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm sm:text-base font-semibold truncate ${done ? "text-gray-400 line-through" : "text-gray-900"}`}>
                          {task.title}
                        </p>
                        {!isOpen && (
                          <p className="text-xs text-gray-500 truncate mt-0.5">{task.brief}</p>
                        )}
                      </div>
                      <IoChevronDown className={`text-gray-400 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>

                    {isOpen && (
                      <div className="px-3.5 pb-3.5">
                        <p className="text-sm text-gray-600 leading-relaxed">{task.description}</p>

                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {task.tags.map((t) => (
                            <span key={t} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                              {t}
                            </span>
                          ))}
                        </div>

                        {task.steps && task.steps.length > 0 && (
                          <div className="mt-4 bg-gray-50 border border-gray-100 rounded-lg p-3">
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700">
                              <IoListOutline className={level.accent} />
                              Step-by-step guide
                            </div>
                            <ol className="mt-2 flex flex-col gap-2">
                              {task.steps.map((step, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                                  <span className={`shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold text-white ${level.bg || "bg-gray-400"} bg-opacity-90`}>
                                    {idx + 1}
                                  </span>
                                  <span className="leading-relaxed">{step}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        )}

                        <button
                          onClick={() => toggleDone(task.id)}
                          className={`mt-3 flex items-center gap-1.5 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full transition-colors ${
                            done
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-purple-600 text-white hover:bg-purple-700"
                          }`}
                        >
                          <IoCheckmarkCircle />
                          {done ? "Marked as Done" : "Mark as Done"}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {progressPct === 100 && (
              <div className="mt-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-4 flex items-center gap-3">
                <IoCheckmarkCircle className="text-2xl text-white shrink-0" />
                <p className="text-sm text-white font-medium">
                  All {tasks.length} {level.label} tasks done — ready for the next level?
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    <BottomNav className="block sm:hidden" />
    </div>
  );
}

export default Tasks;