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
} from "react-icons/io5";
import BottomNav from "../componentes/Bottomnav";

const DIFFICULTY_STYLE = {
  Beginner: {
    badge: "bg-emerald-100 text-emerald-700",
    iconWrap: "bg-gradient-to-br from-emerald-400 to-emerald-600",
    topBar: "bg-gradient-to-r from-emerald-400 to-emerald-600",
    banner: "from-emerald-600 via-emerald-500 to-teal-500",
    dot: "bg-emerald-500",
  },
  Intermediate: {
    badge: "bg-amber-100 text-amber-700",
    iconWrap: "bg-gradient-to-br from-amber-400 to-orange-500",
    topBar: "bg-gradient-to-r from-amber-400 to-orange-500",
    banner: "from-amber-600 via-orange-500 to-rose-500",
    dot: "bg-amber-500",
  },
  Advanced: {
    badge: "bg-rose-100 text-rose-700",
    iconWrap: "bg-gradient-to-br from-rose-500 to-fuchsia-600",
    topBar: "bg-gradient-to-r from-rose-500 to-fuchsia-600",
    banner: "from-rose-600 via-fuchsia-600 to-purple-700",
    dot: "bg-rose-500",
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

  const progressPct = project ? Math.round((completed.size / project.steps.length) * 100) : 0;

  return (
    <div>
      <Navbar />
      <div className="flex bg-white">
        <Sidebar />

        {/* Fixed-height content column, this is the ONLY thing that scrolls */}
        <div className="flex-1 h-[90vh] overflow-y-auto p-4 sm:p-6 pt-5">
          {/* ---------- Project list ---------- */}
          {!project && (
            <>
              {/* Modern hero */}
              <div className="bg-gradient-to-br from-violet-700 via-purple-600 to-fuchsia-600 rounded-3xl p-5 sm:p-10 relative overflow-hidden">
                <div className="absolute -right-10 -top-16 w-56 h-56 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute left-1/3 -bottom-20 w-40 h-40 rounded-full bg-fuchsia-400/20 blur-2xl" />
                <IoCodeSlashOutline className="absolute right-4 sm:right-10 top-4 sm:top-8 text-white/10 text-[90px] sm:text-[140px] rotate-12 pointer-events-none" />

                <span className="relative inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-[11px] sm:text-xs font-medium px-3 py-1 rounded-full">
                  🚀 Build to learn
                </span>
                <h1 className="relative text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
                  Projects
                </h1>
                <p className="relative text-purple-100 text-xs sm:text-sm mt-2 max-w-sm">
                  Real apps with step-by-step guides — build them yourself, one step at a time.
                </p>

                <div className="relative flex flex-wrap gap-2 mt-5">
                  {[
                    { label: `${PROJECTS.length} Projects` },
                    { label: "3 Levels" },
                    { label: `${totalSteps} Total Steps` },
                  ].map(({ label }) => (
                    <span
                      key={label}
                      className="bg-white/10 backdrop-blur-sm border border-white/10 text-white text-[11px] sm:text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Search + filters */}
              <div className="mt-5 flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <IoSearchOutline className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search projects or tech (e.g. localStorage)"
                    className="w-full bg-gray-50 border border-gray-200 rounded-full pl-10 pr-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                {FILTERS.map(({ key, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setFilter(key)}
                    className={`shrink-0 flex items-center gap-1.5 text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full border transition-all ${
                      filter === key
                        ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 border-transparent text-white shadow-md shadow-purple-200"
                        : "bg-white border-gray-200 text-gray-600 hover:border-purple-300"
                    }`}
                  >
                    <Icon className="text-sm" /> {key}
                  </button>
                ))}
              </div>

              {/* Project grid */}
              {filteredProjects.length > 0 ? (
                <div className="mt-5 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {filteredProjects.map(({ id, name, tagline, difficulty, icon: Icon, tags, steps }) => {
                    const s = DIFFICULTY_STYLE[difficulty];
                    return (
                      <button
                        key={id}
                        onClick={() => openProject(id)}
                        className="group text-left bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                      >
                        <div className={`h-1.5 ${s.topBar}`} />
                        <div className="p-4 flex flex-col flex-1">
                          <div className="flex items-start justify-between">
                            <div className={`w-11 h-11 rounded-xl ${s.iconWrap} flex items-center justify-center shadow-sm`}>
                              <Icon className="text-xl text-white" />
                            </div>
                            <span className={`flex items-center gap-1 text-[10px] font-medium px-2 py-1 rounded-full ${s.badge}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                              {difficulty}
                            </span>
                          </div>

                          <h3 className="text-sm sm:text-base font-semibold text-gray-900 mt-3">
                            {name}
                          </h3>
                          <p className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-snug">
                            {tagline}
                          </p>

                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {tags.slice(0, 2).map((t) => (
                              <span key={t} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                                {t}
                              </span>
                            ))}
                          </div>

                          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                            <span className="text-[10px] sm:text-[11px] text-gray-400 flex items-center gap-1">
                              <IoLayersOutline /> {steps.length} steps
                            </span>
                            <span className="text-[11px] sm:text-xs font-semibold text-purple-600 flex items-center gap-1">
                              Guide
                              <IoArrowForward className="transition-transform group-hover:translate-x-1" />
                            </span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="mt-10 text-center text-sm text-gray-400">
                  No projects match "{search}" — try a different search or filter.
                </div>
              )}
            </>
          )}

          {/* ---------- Step-by-step guide ---------- */}
          {project && (
            <div className="max-w-2xl">
              <button
                onClick={() => setSelectedId(null)}
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 transition-colors"
              >
                <IoArrowBack /> All projects
              </button>

              {/* Gradient guide banner */}
              <div className={`mt-4 bg-gradient-to-br ${DIFFICULTY_STYLE[project.difficulty].banner} rounded-3xl p-5 sm:p-7 relative overflow-hidden`}>
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10 blur-xl" />
                <div className="relative flex items-start gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <project.icon className="text-2xl text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h1 className="text-xl sm:text-2xl font-bold text-white">{project.name}</h1>
                      <span className="text-[10px] font-medium px-2 py-1 rounded-full bg-white/20 text-white">
                        {project.difficulty}
                      </span>
                    </div>
                    <p className="text-sm text-white/80 mt-0.5">{project.tagline}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {project.tags.map((t) => (
                        <span key={t} className="text-[11px] bg-white/15 backdrop-blur-sm text-white px-2 py-0.5 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Guide card: progress + steps together */}
              <div className="mt-4 bg-white border border-gray-100 rounded-2xl shadow-sm p-5">
                {/* Progress */}
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
                      <span>Your progress</span>
                      <span>{completed.size}/{project.steps.length} steps</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-600 to-fuchsia-500 rounded-full transition-all duration-500"
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-bold text-purple-700 shrink-0">{progressPct}%</span>
                </div>

                {/* Steps */}
                <div className="mt-6 flex flex-col">
                  {project.steps.map((step, i) => {
                    const done = completed.has(i);
                    const isLast = i === project.steps.length - 1;
                    return (
                      <div key={i} className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <button
                            onClick={() => toggleStep(i)}
                            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                              done
                                ? "bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white shadow-md shadow-purple-200"
                                : "bg-gray-100 text-gray-400 hover:bg-purple-100"
                            }`}
                          >
                            {done ? <IoCheckmarkCircle className="text-lg" /> : <span className="text-xs font-semibold">{i + 1}</span>}
                          </button>
                          {!isLast && <div className={`w-0.5 flex-1 my-1 ${done ? "bg-purple-300" : "bg-gray-200"}`} />}
                        </div>

                        <div className="pb-6">
                          <h3
                            onClick={() => toggleStep(i)}
                            className={`text-sm sm:text-base font-semibold cursor-pointer ${done ? "text-gray-400 line-through" : "text-gray-900"}`}
                          >
                            {step.title}
                          </h3>
                          <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${done ? "text-gray-300" : "text-gray-500"}`}>
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {progressPct === 100 && (
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-4 flex items-center gap-3">
                    <IoCheckmarkCircle className="text-2xl text-white shrink-0" />
                    <p className="text-sm text-white font-medium">
                      Nice work — you've completed every step for {project.name}!
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
       <BottomNav/>
    </div>
  );
}

export default Projects;