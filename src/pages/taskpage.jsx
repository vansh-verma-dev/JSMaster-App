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
  IoSparklesOutline,
  IoHardwareChipOutline,
  IoTerminalOutline,
  IoCheckmarkCircle
} from "react-icons/io5";

/* ---------------- Level config (Purple Theme) ---------------- */

const LEVELS = [
  {
    key: "easy",
    label: "Easy",
    icon: IoLeafOutline,
    bgActive: "bg-purple-600 text-white shadow-purple-200 shadow-lg",
    bgInactive: "bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100",
    accent: "text-purple-600",
    soft: "bg-purple-100",
    softText: "text-purple-800",
  },
  {
    key: "medium",
    label: "Medium",
    icon: IoFlashOutline,
    bgActive: "bg-violet-600 text-white shadow-violet-200 shadow-lg",
    bgInactive: "bg-violet-50 text-violet-700 border border-violet-200 hover:bg-violet-100",
    accent: "text-violet-600",
    soft: "bg-violet-100",
    softText: "text-violet-800",
  },
  {
    key: "hard",
    label: "Hard",
    icon: IoFlameOutline,
    bgActive: "bg-indigo-600 text-white shadow-indigo-200 shadow-lg",
    bgInactive: "bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100",
    accent: "text-indigo-600",
    soft: "bg-indigo-100",
    softText: "text-indigo-800",
  },
  {
    key: "pro",
    label: "Pro",
    icon: IoTrophyOutline,
    bgActive: "bg-fuchsia-600 text-white shadow-fuchsia-200 shadow-lg",
    bgInactive: "bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-200 hover:bg-fuchsia-100",
    accent: "text-fuchsia-600",
    soft: "bg-fuchsia-100",
    softText: "text-fuchsia-800",
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
    <div className="bg-slate-50 min-h-screen pb-20 sm:pb-0">
      <Navbar />
      
      <div className="flex mx-auto max-w-7xl">
        <Sidebar className="hidden md:block" />

        <div className="flex-1 p-4 sm:p-6 lg:px-8 w-full">
          
          {/* ---------- Sleek Hero Section (Purple Gradient) ---------- */}
          <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 rounded-3xl p-5 sm:p-6 relative overflow-hidden flex items-center justify-between shadow-lg shadow-purple-950/10">
            {/* Abstract Background Elements */}
            <div className="absolute top-[-50%] left-[-10%] w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-20%] right-[10%] w-32 h-32 bg-fuchsia-500/20 rounded-full blur-2xl"></div>

            <div className="relative z-10 max-w-[60%]">
              <div className="flex items-center gap-1.5 text-purple-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                <IoHardwareChipOutline size={14} /> Practical Projects
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-white mb-1 leading-tight">
                Ready to build, {username}?
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm mb-4 line-clamp-2">
                Level up your JS skills by shipping real-world features. Code, test, and master.
              </p>
              
              <div className="flex gap-3">
                <span className="flex items-center gap-1 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1.5 rounded-lg">
                   {tasks.length} Tasks
                </span>
                <span className="flex items-center gap-1 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1.5 rounded-lg">
                  <IoSparklesOutline className="text-yellow-400" /> {totalXp} XP
                </span>
              </div>
            </div>

            {/* 2D Developer Illustration */}
            <div className="relative z-10 w-28 sm:w-40 mr-2 sm:mr-8 drop-shadow-2xl">
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-4506461-3738664.png"
                alt="Coder"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* ---------- App-like Level Buttons (Pills) ---------- */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold text-slate-800">Select Difficulty</h2>
            </div>
            
            <div className="flex overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 gap-3 hide-scrollbar">
              {LEVELS.map((lvl) => {
                const Icon = lvl.icon;
                const isActive = lvl.key === activeLevel;
                return (
                  <button
                    key={lvl.key}
                    onClick={() => setActiveLevel(lvl.key)}
                    className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-2xl font-semibold text-sm transition-all active:scale-95 ${
                      isActive ? lvl.bgActive : lvl.bgInactive
                    }`}
                  >
                    <Icon className="text-lg" />
                    {lvl.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ---------- Task List ---------- */}
          <div className="mt-6">
            <div className="flex flex-col gap-3 max-w-3xl">
              {tasks.map((task, i) => (
                <button
                  key={i}
                  onClick={() => setOpenTask(task)}
                  className="group text-left bg-white border border-slate-200/80 rounded-2xl p-4 transition-all hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/5 active:bg-slate-50 flex items-center gap-4"
                >
                  <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${level.soft} ${level.accent}`}>
                    {task.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-[15px] text-slate-800 truncate group-hover:text-purple-600 transition-colors">
                      {task.title}
                    </h3>
                    <p className="text-[13px] text-slate-500 mt-0.5 truncate">
                      {task.blurb}
                    </p>
                    <div className="flex items-center gap-3 mt-2.5">
                      <span className="flex items-center gap-1 text-[11px] font-bold text-slate-400">
                        <IoTimerOutline size={14} /> {task.time}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-bold text-amber-500">
                        <IoTrophyOutline size={14} /> {task.xp} XP
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-purple-50 transition-colors">
                    <IoChevronForward className="text-slate-400 group-hover:text-purple-600" size={16} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Task Detail Bottom Sheet (Fixed 90vh height & inner scroll) ---------- */}
      {openTask && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
            onClick={() => setOpenTask(null)}
          />
          <div className="relative w-full sm:max-w-lg bg-white rounded-t-[32px] sm:rounded-[32px] p-6 sm:p-8 shadow-2xl animate-slide-up sm:animate-fade-in max-h-[90vh] flex flex-col">
            
            {/* Mobile drag handle */}
            <div className="w-12 h-1.5 rounded-full bg-slate-200 mx-auto mb-6 shrink-0 sm:hidden" />

            {/* Scrollable Content Container (Slider/Wrapper doesn't scroll, only this part does) */}
            <div className="overflow-y-auto pr-1 hide-scrollbar flex-1">
              <div className="flex justify-between items-start mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-inner ${level.soft} ${level.accent}`}>
                  {openTask.icon}
                </div>
                <button
                  onClick={() => setOpenTask(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 active:scale-95 transition-all"
                >
                  <IoClose size={20} />
                </button>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${level.soft} ${level.softText}`}>
                  {level.label} Level
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-amber-100 text-amber-800 flex items-center gap-1">
                  <IoTrophyOutline /> {openTask.xp} XP
                </span>
              </div>

              <h2 className="font-extrabold text-2xl text-slate-900 mb-2">{openTask.title}</h2>
              <p className="text-[15px] text-slate-600 leading-relaxed mb-6">
                {openTask.blurb}
              </p>

              {/* Core Concepts Used */}
              <div className="mb-6">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Concepts You'll Master</h3>
                <div className="flex flex-wrap gap-2">
                  {openTask.topics.map((t) => (
                    <span key={t} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-purple-50 text-purple-700 flex items-center gap-1.5 border border-purple-100">
                      <IoTerminalOutline className="text-purple-400" /> {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Step-by-Step Guidance */}
              <div className="mb-8">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Action Plan</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <IoCheckmarkCircle className="text-purple-500 text-xl shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-600 font-medium">Setup the basic HTML & CSS structure</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <IoCheckmarkCircle className="text-purple-500 text-xl shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-600 font-medium">Implement core logic using <span className="text-slate-900 font-bold">{openTask.topics[0]}</span></p>
                  </div>
                  <div className="flex items-start gap-3">
                    <IoCheckmarkCircle className="text-purple-500 text-xl shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-600 font-medium">Handle edge cases and connect to the DOM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Action Button at bottom */}
            <div className="pt-4 mt-auto border-t border-slate-100 shrink-0">
              <button className="w-full py-4 rounded-2xl font-bold text-[16px] text-white bg-purple-600 hover:bg-purple-700 shadow-xl shadow-purple-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                <IoTerminalOutline size={20} />
                Start Coding Session
              </button>
            </div>

          </div>
        </div>
      )}

      <BottomNav className="block sm:hidden" />
    </div>
  );
}

export default TasksPage;