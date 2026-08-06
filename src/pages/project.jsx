import { useState, useMemo } from "react";
import Navbar from "../componentes/navbar";
import Sidebar from "../componentes/sidebar";
import PROJECTS from "../data/projectData";
import {
  IoRocketOutline,
  IoArrowBack,
  IoArrowForward,
  IoCheckmarkCircle,
  IoLayersOutline,
  IoSearchOutline,
  IoAppsOutline,
  IoLeafOutline,
  IoFlashOutline,
  IoFlameOutline,
  IoCodeSlashOutline,
  IoRefreshOutline,
  IoSparklesOutline,
  IoTrophyOutline,
} from "react-icons/io5";
import BottomNav from "../componentes/Bottomnav";

const DIFFICULTY_STYLE = {
  Beginner: {
    badge: "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
    iconWrap: "bg-gradient-to-br from-emerald-400 to-teal-600 shadow-emerald-500/20",
    topBar: "bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600",
    banner: "from-emerald-700 via-emerald-600 to-teal-700",
    dot: "bg-emerald-500 animate-pulse",
  },
  Intermediate: {
    badge: "bg-amber-500/10 text-amber-600 border border-amber-500/20",
    iconWrap: "bg-gradient-to-br from-amber-400 to-orange-600 shadow-amber-500/20",
    topBar: "bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500",
    banner: "from-amber-700 via-orange-600 to-rose-700",
    dot: "bg-amber-500 animate-pulse",
  },
  Advanced: {
    badge: "bg-rose-500/10 text-rose-600 border border-rose-500/20",
    iconWrap: "bg-gradient-to-br from-rose-500 to-fuchsia-600 shadow-rose-500/20",
    topBar: "bg-gradient-to-r from-rose-500 via-purple-600 to-fuchsia-600",
    banner: "from-rose-700 via-fuchsia-700 to-purple-800",
    dot: "bg-rose-500 animate-pulse",
  },
};

const FILTERS = [
  { key: "All", icon: IoAppsOutline },
  { key: "Beginner", icon: IoLeafOutline },
  { key: "Intermediate", icon: IoFlashOutline },
  { key: "Advanced", icon: IoFlameOutline },
];

function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  const [completed, setCompleted] = useState(new Set());
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const project = PROJECTS.find((p) => p.id === selectedId);
  const totalSteps = useMemo(() => PROJECTS.reduce((sum, p) => sum + p.steps.length, 0), []);

  const filteredProjects = useMemo(() => {
    let list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.difficulty === filter);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.tags.some((t) => t.toLowerCase().includes(q)));
    }
    return list;
  }, [filter, search]);

  const openProject = (id) => {
    setSelectedId(id);
    setCompleted(new Set());
  };

  const toggleStep = (i) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const resetProgress = () => {
    setCompleted(new Set());
  };

  const markAllComplete = () => {
    if (!project) return;
    const allIndices = new Set(project.steps.map((_, i) => i));
    setCompleted(allIndices);
  };

  const progressPct = project ? Math.round((completed.size / project.steps.length) * 100) : 0;

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <div className="flex bg-slate-50">
        <Sidebar />

        {/* Fixed-height content column, scrolling area */}
        <div className="flex-1 h-[90vh] overflow-y-auto p-4 sm:p-8 pt-6">
          {/* ---------- Project list ---------- */}
          {!project && (
            <div className="max-w-6xl mx-auto">
              {/* Ultra Modern Hero Section */}
              <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xl shadow-purple-900/10 border border-purple-500/20">
                <div className="absolute -right-10 -top-16 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />
                <div className="absolute left-1/3 -bottom-20 w-60 h-60 rounded-full bg-fuchsia-500/20 blur-3xl pointer-events-none" />
                <IoCodeSlashOutline className="absolute right-6 sm:right-12 top-6 sm:top-10 text-white/5 text-[110px] sm:text-[160px] rotate-12 pointer-events-none" />

                <div className="relative z-10">
                  <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/15 text-purple-200 text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-inner">
                    <IoSparklesOutline className="text-amber-400" /> Interactive Learning Hub
                  </span>
                  <h1 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400">Projects</span>
                  </h1>
                  <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-lg leading-relaxed">
                    Build production-ready fullstack & frontend applications with curated step-by-step architectural guidance.
                  </p>

                  <div className="flex flex-wrap gap-2.5 mt-6">
                    {[
                      { label: `${PROJECTS.length} Projects Available`, icon: IoLayersOutline },
                      { label: "3 Difficulty Tiers", icon: IoFlashOutline },
                      { label: `${totalSteps} Execution Steps`, icon: IoRocketOutline },
                    ].map(({ label, icon: Icon }) => (
                      <span
                        key={label}
                        className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-medium px-3.5 py-2 rounded-xl shadow-sm"
                      >
                        <Icon className="text-purple-300 text-sm" /> {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Search + Filters Toolbar */}
              <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-80">
                  <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search projects or tech tags..."
                    className="w-full bg-white border border-slate-200 rounded-2xl pl-11 pr-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                  />
                </div>

                <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-1">
                  {FILTERS.map(({ key, icon: Icon }) => (
                    <button
                      key={key}
                      onClick={() => setFilter(key)}
                      className={`shrink-0 flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-2xl border transition-all shadow-sm ${
                        filter === key
                          ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 border-transparent text-white shadow-purple-500/25 scale-[1.02]"
                          : "bg-white border-slate-200 text-slate-600 hover:border-purple-300 hover:bg-slate-50"
                      }`}
                    >
                      <Icon className="text-base" /> {key}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Grid */}
              {filteredProjects.length > 0 ? (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredProjects.map(({ id, name, tagline, difficulty, icon: Icon, tags, steps }) => {
                    const s = DIFFICULTY_STYLE[difficulty];
                    return (
                      <button
                        key={id}
                        onClick={() => openProject(id)}
                        className="group text-left bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col relative"
                      >
                        <div className={`h-2 w-full ${s.topBar}`} />
                        <div className="p-5 flex flex-col flex-1 justify-between">
                          <div>
                            <div className="flex items-start justify-between">
                              <div className={`w-12 h-12 rounded-2xl ${s.iconWrap} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                <Icon className="text-2xl text-white" />
                              </div>
                              <span className={`flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full ${s.badge}`}>
                                <span className={`w-2 h-2 rounded-full ${s.dot}`} />
                                {difficulty}
                              </span>
                            </div>

                            <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-4 group-hover:text-purple-600 transition-colors">
                              {name}
                            </h3>
                            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-2">
                              {tagline}
                            </p>
                          </div>

                          <div>
                            <div className="flex flex-wrap gap-1.5 mt-4">
                              {tags.slice(0, 3).map((t) => (
                                <span key={t} className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-xl">
                                  {t}
                                </span>
                              ))}
                            </div>

                            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                              <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                                <IoLayersOutline className="text-slate-400" /> {steps.length} guided steps
                              </span>
                              <span className="text-xs font-bold text-purple-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                Explore <IoArrowForward />
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="mt-16 text-center bg-white border border-slate-200 rounded-3xl p-12">
                  <IoSearchOutline className="text-4xl text-slate-300 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-slate-700">No projects match "{search}"</p>
                  <p className="text-xs text-slate-400 mt-1">Try searching with a different tech stack or clearing your filter.</p>
                </div>
              )}
            </div>
          )}

          {/* ---------- Step-by-step guide View ---------- */}
          {project && (
            <div className="max-w-3xl mx-auto animate-fadeIn">
              <button
                onClick={() => setSelectedId(null)}
                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-purple-600 transition-colors bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm mb-6"
              >
                <IoArrowBack className="group-hover:-translate-x-1 transition-transform" /> Back to all projects
              </button>

              {/* Gradient Guide Header Banner */}
              <div className={`bg-gradient-to-br ${DIFFICULTY_STYLE[project.difficulty].banner} rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl shadow-purple-900/10 text-white`}>
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 shadow-lg">
                    <project.icon className="text-3xl text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{project.name}</h1>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white shadow-sm">
                        {project.difficulty}
                      </span>
                    </div>
                    <p className="text-sm text-slate-100/90 mt-1 leading-relaxed">{project.tagline}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((t) => (
                        <span key={t} className="text-xs font-medium bg-white/15 backdrop-blur-md border border-white/10 text-white px-3 py-1 rounded-xl">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Guide card: Interactive Progress & Checklist */}
              <div className="mt-6 bg-white border border-slate-200/80 rounded-3xl shadow-sm p-6 sm:p-8">
                {/* Progress Bar + Quick Actions */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex-1 w-full">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-2">
                      <span className="flex items-center gap-1.5"><IoTrophyOutline className="text-purple-600 text-base" /> Implementation Progress</span>
                      <span className="text-purple-700 font-bold">{completed.size} of {project.steps.length} completed</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/60">
                      <div
                        className="h-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 rounded-full transition-all duration-500 shadow-sm"
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <button
                      onClick={markAllComplete}
                      className="text-xs font-semibold bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200/60 px-3.5 py-2 rounded-xl transition-all"
                    >
                      Complete All
                    </button>
                    <button
                      onClick={resetProgress}
                      title="Reset Progress"
                      className="text-slate-400 hover:text-rose-600 bg-slate-50 hover:bg-rose-50 border border-slate-200 p-2.5 rounded-xl transition-all"
                    >
                      <IoRefreshOutline className="text-base" />
                    </button>
                  </div>
                </div>

                {/* Steps List */}
                <div className="mt-8 space-y-6">
                  {project.steps.map((step, i) => {
                    const done = completed.has(i);
                    const isLast = i === project.steps.length - 1;
                    return (
                      <div key={i} className="flex gap-4 group">
                        <div className="flex flex-col items-center">
                          <button
                            onClick={() => toggleStep(i)}
                            className={`w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 transition-all shadow-sm ${
                              done
                                ? "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-emerald-500/25 scale-105"
                                : "bg-slate-100 text-slate-500 hover:bg-purple-100 hover:text-purple-700 border border-slate-200"
                            }`}
                          >
                            {done ? <IoCheckmarkCircle className="text-xl" /> : <span className="text-xs font-bold">{i + 1}</span>}
                          </button>
                          {!isLast && (
                            <div className={`w-0.5 flex-1 my-2 transition-colors ${done ? "bg-emerald-400" : "bg-slate-200"}`} />
                          )}
                        </div>

                        <div className="pb-4 flex-1">
                          <div
                            onClick={() => toggleStep(i)}
                            className="cursor-pointer bg-slate-50/70 hover:bg-purple-50/40 border border-slate-200/70 p-4 rounded-2xl transition-all"
                          >
                            <h3 className={`text-sm sm:text-base font-bold transition-colors ${done ? "text-slate-400 line-through" : "text-slate-900"}`}>
                              {step.title}
                            </h3>
                            <p className={`text-xs sm:text-sm mt-1.5 leading-relaxed ${done ? "text-slate-400" : "text-slate-600"}`}>
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Completion Celebration Box */}
                {progressPct === 100 && (
                  <div className="mt-8 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 rounded-2xl p-5 flex items-center gap-4 text-white shadow-lg shadow-emerald-500/20 animate-bounceOnce">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                      <IoCheckmarkCircle className="text-2xl text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base">Amazing Milestone Achieved! 🎉</h4>
                      <p className="text-xs text-emerald-50 mt-0.5">You have successfully completed every implementation phase for {project.name}.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default Projects;