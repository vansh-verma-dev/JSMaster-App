import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaCode,
  FaChevronRight,
  FaFilter,
  FaTimes,
  FaSlidersH,
  FaArrowRight,
  FaBook,
  FaLightbulb,
  FaCheckCircle,
  FaStar,
  FaFire,
} from "react-icons/fa";

import tasks from "../data/tasks";
import Navbar from "../components/navbar";
import MobileTopBar from "../components/mobileTopBar";
import AdSpace from "../components/AdSpace";
import BottomNavbar from "../components/bottomNavbar";
import HeroSection from "../components/heroSection";

const LEVELS = ["All", "Beginner", "Intermediate", "Hard", "Advanced"];

const LEVEL_STYLES = {
  Beginner: "bg-emerald-50 text-emerald-600 border-emerald-200",
  Intermediate: "bg-amber-50 text-amber-600 border-amber-200",
  Hard: "bg-orange-50 text-orange-600 border-orange-200",
  Advanced: "bg-red-50 text-red-600 border-red-200",
};

const LEVEL_DOT = {
  Beginner: "bg-emerald-500",
  Intermediate: "bg-amber-500",
  Hard: "bg-orange-500",
  Advanced: "bg-red-500",
};

const levelBadgeClass = (level) => LEVEL_STYLES[level] ?? "bg-slate-50 text-slate-600 border-slate-200";
const levelDotClass = (level) => LEVEL_DOT[level] ?? "bg-slate-400";

const SORT_OPTIONS = [
  { value: "default", label: "Default" },
  { value: "az", label: "A → Z" },
  { value: "difficulty", label: "Difficulty" },
];

const DIFFICULTY_ORDER = { Beginner: 0, Intermediate: 1, Hard: 2, Advanced: 3 };

// Category Icons
const CATEGORY_ICONS = {
  Variables: FaBook,
  "Data Types": FaCode,
  Operators: FaLightbulb,
  "Control Flow": FaArrowRight,
  Strings: FaCode,
  Arrays: FaCheckCircle,
  Objects: FaBook,
  Functions: FaCode,
  "ES6+": FaStar,
  DOM: FaCode,
  Events: FaLightbulb,
  "Browser APIs": FaBook,
  "Async JavaScript": FaArrowRight,
  Promises: FaCheckCircle,
  "Fetch API": FaCode,
  LocalStorage: FaBook,
  OOP: FaCode,
  "Closures & Advanced Concepts": FaStar,
  "Advanced Real-World Tasks": FaFire,
};

function useDebouncedValue(value, delay = 200) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

function TasksPage() {
  const [searchInput, setSearchInput] = useState("");
  const search = useDebouncedValue(searchInput, 200);
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const categories = useMemo(
    () => ["All", ...new Set(tasks.map((task) => task.category))].sort(),
    []
  );

  const searchMatchedTasks = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return tasks;
    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(q) ||
        task.description.toLowerCase().includes(q) ||
        task.category.toLowerCase().includes(q)
    );
  }, [search]);

  const levelCounts = useMemo(() => {
    const base =
      selectedCategory === "All"
        ? searchMatchedTasks
        : searchMatchedTasks.filter((t) => t.category === selectedCategory);
    return LEVELS.reduce((acc, level) => {
      acc[level] =
        level === "All" ? base.length : base.filter((t) => t.level === level).length;
      return acc;
    }, {});
  }, [searchMatchedTasks, selectedCategory]);

  const categoryCounts = useMemo(() => {
    const base =
      selectedLevel === "All"
        ? searchMatchedTasks
        : searchMatchedTasks.filter((t) => t.level === selectedLevel);
    return categories.reduce((acc, category) => {
      acc[category] =
        category === "All" ? base.length : base.filter((t) => t.category === category).length;
      return acc;
    }, {});
  }, [searchMatchedTasks, selectedLevel, categories]);

  const filteredTasks = useMemo(() => {
    const result = searchMatchedTasks.filter((task) => {
      const matchesLevel = selectedLevel === "All" || task.level === selectedLevel;
      const matchesCategory = selectedCategory === "All" || task.category === selectedCategory;
      return matchesLevel && matchesCategory;
    });

    if (sortBy === "az") {
      return [...result].sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortBy === "difficulty") {
      return [...result].sort(
        (a, b) => (DIFFICULTY_ORDER[a.level] ?? 0) - (DIFFICULTY_ORDER[b.level] ?? 0)
      );
    }
    return result;
  }, [searchMatchedTasks, selectedLevel, selectedCategory, sortBy]);

  // Stats
  const stats = useMemo(() => {
    return {
      total: tasks.length,
      beginner: tasks.filter((t) => t.level === "Beginner").length,
      intermediate: tasks.filter((t) => t.level === "Intermediate").length,
      hard: tasks.filter((t) => t.level === "Hard").length,
      advanced: tasks.filter((t) => t.level === "Advanced").length,
    };
  }, []);

  const hasActiveFilters =
    selectedLevel !== "All" || selectedCategory !== "All" || searchInput.trim() !== "";

  const activeFilterCount =
    (selectedLevel !== "All" ? 1 : 0) + (selectedCategory !== "All" ? 1 : 0);

  const clearAll = () => {
    setSearchInput("");
    setSelectedLevel("All");
    setSelectedCategory("All");
  };

  return (
    <>
      <Navbar />
      <MobileTopBar />
      <div className="min-h-[calc(100vh-68px)] bg-gradient-to-b from-slate-50 via-slate-50 to-white">
        <div className="mx-auto flex w-full max-w-[1500px]">
          {/* DESKTOP SIDEBAR */}
          <aside className="sticky top-[68px] hidden h-[calc(100vh-68px)] w-[280px] shrink-0 border-r border-slate-200 bg-white lg:block overflow-y-auto">
            <FilterPanel
              levels={LEVELS}
              categories={categories}
              levelCounts={levelCounts}
              categoryCounts={categoryCounts}
              selectedLevel={selectedLevel}
              selectedCategory={selectedCategory}
              setSelectedLevel={setSelectedLevel}
              setSelectedCategory={setSelectedCategory}
              hasActiveFilters={hasActiveFilters}
              clearAll={clearAll}
            />
          </aside>

          {/* MOBILE FILTER DRAWER */}
          {filtersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
              <div
                className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                onClick={() => setFiltersOpen(false)}
              />
              <div className="absolute left-0 top-0 h-full w-[85%] max-w-xs overflow-y-auto bg-white shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-100 px-4 py-4">
                  <span className="text-sm font-bold text-slate-900">Filters</span>
                  <button
                    onClick={() => setFiltersOpen(false)}
                    aria-label="Close filters"
                    className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100 transition"
                  >
                    <FaTimes />
                  </button>
                </div>
                <FilterPanel
                  levels={LEVELS}
                  categories={categories}
                  levelCounts={levelCounts}
                  categoryCounts={categoryCounts}
                  selectedLevel={selectedLevel}
                  selectedCategory={selectedCategory}
                  setSelectedLevel={(l) => {
                    setSelectedLevel(l);
                  }}
                  setSelectedCategory={(c) => {
                    setSelectedCategory(c);
                  }}
                  hasActiveFilters={hasActiveFilters}
                  clearAll={clearAll}
                />
                <div className="px-4 pb-6">
                  <button
                    onClick={() => setFiltersOpen(false)}
                    className="mt-4 w-full rounded-xl bg-gradient-to-r from-violet-600 to-violet-700 py-3 text-sm font-bold text-white hover:shadow-lg transition-all"
                  >
                    Show {filteredTasks.length} Tasks
                  </button>
                </div>
              </div>
            </div>
          )}

          <main className="min-w-0 flex-1">
            <div className="px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
              <div className="mx-auto max-w-6xl">
                {/* HEADER SECTION */}
                <div className="mb-10">
                  <HeroSection />
                  
                  <div className="mt-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="rounded-full bg-gradient-to-r from-violet-100 to-violet-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-violet-700 border border-violet-200">
                        Practice Tasks
                      </span>
                      <span className="text-xs text-slate-400 font-medium">{tasks.length} Total</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-2">
                      Master JavaScript
                    </h1>

                    <p className="max-w-3xl text-base leading-8 text-slate-600">
                      Learn JavaScript through practical problems. From beginner basics to advanced patterns, 
                      build real skills with {stats.intermediate + stats.hard + stats.advanced} intermediate to advanced challenges.
                    </p>
                  </div>
                </div>

               

                {/* SEARCH + SORT + FILTER */}
                <div className="mb-7 flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-slate-400" />
                    <input
                      type="text"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      placeholder="Search tasks, categories..."
                      aria-label="Search tasks"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-10 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100 hover:border-slate-300"
                    />
                    {searchInput && (
                      <button
                        onClick={() => setSearchInput("")}
                        aria-label="Clear search"
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                      >
                        <FaTimes className="text-xs" />
                      </button>
                    )}
                  </div>

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    aria-label="Sort tasks"
                    className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-600 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 hover:border-slate-300 transition"
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={() => setFiltersOpen(true)}
                    className="relative flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition lg:hidden"
                  >
                    <FaSlidersH className="text-xs" />
                    Filters
                    {activeFilterCount > 0 && (
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-violet-500 text-[11px] font-bold text-white shadow-lg">
                        {activeFilterCount}
                      </span>
                    )}
                  </button>
                </div>

                {/* ACTIVE FILTERS */}
                {hasActiveFilters && (
                  <div className="mb-6 flex flex-wrap items-center gap-2 p-4 bg-violet-50 border border-violet-200 rounded-xl">
                    <FaFilter className="text-xs text-violet-600" />

                    {searchInput.trim() !== "" && (
                      <button
                        onClick={() => setSearchInput("")}
                        className="rounded-lg bg-white border border-violet-300 px-3 py-1.5 text-xs font-semibold text-violet-700 hover:bg-violet-100 transition"
                      >
                        "{searchInput.trim()}" ×
                      </button>
                    )}

                    {selectedLevel !== "All" && (
                      <button
                        onClick={() => setSelectedLevel("All")}
                        className="rounded-lg bg-white border border-violet-300 px-3 py-1.5 text-xs font-semibold text-violet-700 hover:bg-violet-100 transition"
                      >
                        {selectedLevel} ×
                      </button>
                    )}

                    {selectedCategory !== "All" && (
                      <button
                        onClick={() => setSelectedCategory("All")}
                        className="rounded-lg bg-white border border-violet-300 px-3 py-1.5 text-xs font-semibold text-violet-700 hover:bg-violet-100 transition"
                      >
                        {selectedCategory} ×
                      </button>
                    )}

                    <button
                      onClick={clearAll}
                      className="text-xs font-semibold text-violet-600 underline-offset-2 hover:text-violet-700 hover:underline ml-auto"
                    >
                      Clear all
                    </button>
                  </div>
                )}

                {/* TASK COUNT */}
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-sm font-bold text-slate-800">
                    {filteredTasks.length} {filteredTasks.length === 1 ? "Task" : "Tasks"} Found
                  </p>
                  {filteredTasks.length > 0 && (
                    <p className="text-xs text-slate-500">Click any task to begin →</p>
                  )}
                </div>

                {/* TASK LIST */}
                <div className="grid gap-4 sm:gap-5">
                  {filteredTasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}

                  {/* EMPTY STATE */}
                  {filteredTasks.length === 0 && (
                    <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100 px-6 py-20 text-center">
                      <div className="mx-auto mb-4 text-5xl">🔍</div>
                      <h3 className="text-xl font-bold text-slate-800">No tasks found</h3>
                      <p className="mt-2 text-sm text-slate-500 max-w-sm mx-auto">
                        Try searching with different keywords or adjust your filters.
                      </p>
                      <button
                        onClick={clearAll}
                        className="mt-6 rounded-lg bg-gradient-to-r from-violet-600 to-violet-700 px-6 py-2.5 text-sm font-bold text-white hover:shadow-lg transition-all"
                      >
                        Reset Filters
                      </button>
                    </div>
                  )}
                </div>

                <div className="mt-12">
                  <AdSpace />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <BottomNavbar />
    </>
  );
}

// TASK CARD COMPONENT - Better visual hierarchy
function TaskCard({ task }) {
  const IconComponent = CATEGORY_ICONS[task.category] || FaCode;

  return (
    <Link
      
      className="group relative block rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
    >
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/0 to-violet-600/0 group-hover:from-violet-600/5 group-hover:to-violet-600/10 transition-all duration-300 pointer-events-none" />

      <div className="relative p-5 sm:p-6">
        <div className="flex gap-4">
          {/* Left: ID + Category Icon */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 text-lg font-bold text-slate-400 border border-slate-200 group-hover:border-violet-200 group-hover:bg-violet-50 transition-all">
              {String(task.id).padStart(2, "0")}
            </div>
            <IconComponent className="text-xs text-slate-400 group-hover:text-violet-600 transition-colors" />
          </div>

          {/* Center: Content */}
          <div className="min-w-0 flex-1">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-600 border border-slate-200">
                <span className={`w-1.5 h-1.5 rounded-full ${levelDotClass(task.level)}`} />
                {task.level}
              </span>
              <span className="rounded-lg bg-violet-50 px-2.5 py-1 text-[10px] font-semibold text-violet-700 border border-violet-200">
                {task.category}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-violet-700 transition-colors leading-snug mb-1.5">
              {task.title}
            </h2>

            {/* Description */}
            <p className="line-clamp-2 text-sm leading-6 text-slate-600 mb-3">
              {task.description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <FaCode className="text-[10px]" />
                <span className="font-medium">JavaScript</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaCheckCircle className="text-[10px]" />
                <span className="font-medium">{task.requirements.length} Steps</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaLightbulb className="text-[10px]" />
                <span className="font-medium">With Hint</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// STAT CARD
function StatCard({ icon, label, value, color }) {
  const colorClasses = {
    slate: "bg-slate-50 border-slate-200 text-slate-700",
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-700",
    amber: "bg-amber-50 border-amber-200 text-amber-700",
    orange: "bg-orange-50 border-orange-200 text-orange-700",
    red: "bg-red-50 border-red-200 text-red-700",
  };

  return (
    <div className={`rounded-lg border-2 p-3 sm:p-4 text-center transition-all hover:shadow-md ${colorClasses[color]}`}>
      <div className="text-xl sm:text-2xl mb-1">{icon}</div>
      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wide opacity-75">{label}</p>
      <p className="text-lg sm:text-2xl font-extrabold mt-1">{value}</p>
    </div>
  );
}

// FILTER PANEL
function FilterPanel({
  levels,
  categories,
  levelCounts,
  categoryCounts,
  selectedLevel,
  selectedCategory,
  setSelectedLevel,
  setSelectedCategory,
  hasActiveFilters,
  clearAll,
}) {
  return (
    <div className="p-4">
      {/* Difficulty Section */}
      <div className="mb-6">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
          Difficulty
        </p>
        <div className="space-y-1">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              aria-pressed={selectedLevel === level}
              disabled={levelCounts[level] === 0 && level !== "All"}
              className={`w-full flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
                selectedLevel === level
                  ? "bg-gradient-to-r from-violet-50 to-violet-100 text-violet-700 border border-violet-300"
                  : levelCounts[level] === 0
                  ? "cursor-not-allowed text-slate-300"
                  : "text-slate-600 hover:bg-slate-50 border border-transparent hover:border-slate-200"
              }`}
            >
              <span>{level}</span>
              <span className={`text-[10px] font-bold ${selectedLevel === level ? "text-violet-600" : "text-slate-400"}`}>
                {levelCounts[level] ?? 0}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="mb-6">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
         Categories
        </p>
        <div className="max-h-[50vh] space-y-1 overflow-y-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
              disabled={categoryCounts[category] === 0}
              className={`w-full flex items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium transition ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-violet-50 to-violet-100 text-violet-700 border border-violet-300"
                  : categoryCounts[category] === 0
                  ? "cursor-not-allowed text-slate-300"
                  : "text-slate-600 hover:bg-slate-50 border border-transparent hover:border-slate-200"
              }`}
            >
              <span className="truncate">{category}</span>
              <span className="text-[10px] text-slate-400 ml-2 shrink-0">{categoryCounts[category] ?? 0}</span>
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearAll}
          className="w-full rounded-lg border-2 border-violet-200 px-3 py-2.5 text-xs font-bold text-violet-700 transition hover:bg-violet-50 hover:border-violet-300 bg-white"
        >
          ✕ Reset Filters
        </button>
      )}
    </div>
  );
}

export default TasksPage;