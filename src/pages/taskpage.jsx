import { useState } from "react";
import Navbar from "../componentes/navbar";
import Sidebar from "../componentes/sidebar";
import BottomNav from "../componentes/Bottomnav";
import TASKS from "../data/taskData";
import {
  IoLeafOutline,
  IoFlashOutline,
  IoFlameOutline,
  IoTrophyOutline,
  IoChevronForward,
  IoClose,
  IoTimerOutline,
  IoRibbonOutline,
  IoSparklesOutline,
  IoRocketOutline,
} from "react-icons/io5";

/* ---------------- Level config (mirrors the MCQ page's palette) ---------------- */

const LEVELS = [
  {
    key: "easy",
    label: "Easy",
    desc: "Basics & fundamentals",
    icon: IoLeafOutline,
    bg: "bg-emerald-700",
    border: "border-emerald-600",
    accent: "text-emerald-300",
    soft: "bg-emerald-50",
    softText: "text-emerald-700",
    softIcon: "text-emerald-600",
  },
  {
    key: "medium",
    label: "Medium",
    desc: "Intermediate concepts",
    icon: IoFlashOutline,
    bg: "bg-blue-700",
    border: "border-blue-600",
    accent: "text-blue-300",
    soft: "bg-blue-50",
    softText: "text-blue-700",
    softIcon: "text-blue-600",
  },
  {
    key: "hard",
    label: "Hard",
    desc: "Deep JS internals",
    icon: IoFlameOutline,
    bg: "bg-amber-700",
    border: "border-amber-600",
    accent: "text-amber-300",
    soft: "bg-amber-50",
    softText: "text-amber-700",
    softIcon: "text-amber-600",
  },
  {
    key: "pro",
    label: "Pro",
    desc: "Expert-level & tricky",
    icon: IoTrophyOutline,
    bg: "bg-rose-700",
    border: "border-rose-600",
    accent: "text-rose-300",
    soft: "bg-rose-50",
    softText: "text-rose-700",
    softIcon: "text-rose-600",
  },
];

/* ---------------- Component ---------------- */

function TasksPage({ username = "Coder" }) {
  const [activeLevel, setActiveLevel] = useState("easy");
  const [openTask, setOpenTask] = useState(null);

  const level = LEVELS.find((l) => l.key === activeLevel);
  const tasks = TASKS[activeLevel] || [];
  const totalXp = tasks.reduce((sum, t) => sum + t.xp, 0);

  return (
    <div>
      <Navbar />
      <div className="flex bg-white">
        <Sidebar />

        <div className="flex-1 p-4 sm:p-6 pt-5 min-h-[90vh]">
          {/* ---------- Hero ---------- */}
          <div className="bg-gradient-to-br from-purple-700 via-purple-600 to-violet-600 rounded-2xl p-5 sm:p-8 relative overflow-hidden">
            <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-white/10" />
            <div className="absolute right-16 bottom-[-30px] w-24 h-24 rounded-full bg-white/10" />

            <div className="relative flex items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 text-purple-200 text-xs sm:text-sm font-medium">
                  <IoSparklesOutline /> Task Bank
                </div>
                <h1 className="text-2xl sm:text-3xl font-semibold text-white mt-2">
                  Welcome back, {username}
                </h1>
                <p className="text-purple-100 text-sm mt-1.5 max-w-sm">
                  Real, buildable JavaScript projects — pick a level and start shipping.
                </p>

                <div className="flex flex-wrap gap-2.5 mt-5">
                  <span className="flex items-center gap-1.5 bg-white/10 text-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full">
                    <IoRibbonOutline /> {tasks.length} {level.label} tasks
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/10 text-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full">
                    <IoRocketOutline /> {totalXp} XP up for grabs
                  </span>
                </div>
              </div>

              <div className="relative shrink-0 hidden xs:block">
                <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-90" />
                <img
                  src="https://i.pinimg.com/1200x/4a/ca/fe/4acafecd9b6e8bf88b2b80b971e338eb.jpg"
                  alt="Coding illustration"
                  className="relative w-[130px] sm:w-[190px] drop-shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* ---------- Level picker ---------- */}
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mt-8">
            Choose your level
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            Tasks get progressively closer to real production work
          </p>

          <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {LEVELS.map((lvl) => {
              const Icon = lvl.icon;
              const isActive = lvl.key === activeLevel;
              return (
                <button
                  key={lvl.key}
                  onClick={() => setActiveLevel(lvl.key)}
                  className={`text-left ${lvl.bg} border ${lvl.border} rounded-2xl p-4 sm:p-5 shadow-sm transition-all flex flex-col ${
                    isActive
                      ? "ring-2 ring-offset-2 ring-purple-500 -translate-y-0.5 shadow-md"
                      : "opacity-80 hover:opacity-100 hover:-translate-y-0.5 hover:shadow-md"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon className={`text-xl ${lvl.accent}`} />
                  </div>
                  <h3 className="text-white font-semibold text-base sm:text-lg mt-3">
                    {lvl.label}
                  </h3>
                  <p className="text-gray-200 text-[11px] sm:text-xs mt-1">{lvl.desc}</p>
                  <span className={`mt-3 text-[11px] sm:text-xs font-medium ${lvl.accent}`}>
                    {TASKS[lvl.key]?.length || 0} tasks
                  </span>
                </button>
              );
            })}
          </div>

          {/* ---------- Task list ---------- */}
          <div className="flex items-center justify-between mt-8 mb-3">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              {level.label} tasks
            </h2>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${level.soft} ${level.softText}`}>
              {tasks.length} projects
            </span>
          </div>

          <div className="flex flex-col gap-3 max-w-2xl">
            {tasks.map((task) => (
              <button
                key={task.title}
                onClick={() => setOpenTask(task)}
                className="text-left bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-purple-200 hover:-translate-y-0.5 transition-all flex items-center gap-4"
              >
                <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl ${level.soft}`}>
                  {task.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-[15px] text-gray-900 truncate">
                    {task.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-snug line-clamp-2 mt-0.5">
                    {task.blurb}
                  </p>
                  <div className="flex items-center gap-2 mt-2.5">
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${level.soft} ${level.softText}`}>
                      {level.label}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-gray-400">
                      <IoTrophyOutline size={12} /> {task.xp} XP
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-gray-400">
                      <IoTimerOutline size={12} /> {task.time}
                    </span>
                  </div>
                </div>

                <IoChevronForward className="shrink-0 text-gray-300" size={18} />
              </button>
            ))}

            {tasks.length === 0 && (
              <p className="text-sm text-gray-400 py-10 text-center">
                No tasks in this level yet.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ---------- Task detail bottom sheet ---------- */}
      {openTask && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpenTask(null)}
          />
          <div className="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-6 pb-8 shadow-xl">
            <div className="w-10 h-1 rounded-full bg-gray-200 mx-auto mb-5 sm:hidden" />

            <div className="flex items-start justify-between gap-4 mb-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${level.soft}`}>
                {openTask.icon}
              </div>
              <button
                onClick={() => setOpenTask(null)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
              >
                <IoClose size={16} />
              </button>
            </div>

            <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full inline-block mb-2 ${level.soft} ${level.softText}`}>
              {level.label} · {openTask.xp} XP
            </span>

            <h2 className="font-bold text-xl text-gray-900 mb-2">{openTask.title}</h2>
            <p className="text-[14px] text-gray-500 leading-relaxed mb-5">{openTask.blurb}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {openTask.topics.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-200 text-gray-600"
                >
                  {t}
                </span>
              ))}
            </div>

            <button className="w-full py-3.5 rounded-xl font-semibold text-[15px] text-white bg-purple-600 hover:bg-purple-700 transition-colors active:scale-[0.98]">
              Start Task
            </button>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}

export default TasksPage;