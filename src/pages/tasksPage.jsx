import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaCode,
  FaChevronRight,
  FaFilter,
  FaTimes,
} from "react-icons/fa";

import tasks from "../data/tasks";
import AdSpace from "../components/AdSpace";
import BottomNavigation from "../components/BottomNav";
import Navbar from "../components/navbar";
import MobileTopBar from "../components/mobileTopBar";

const LEVELS = ["All", "Intermediate", "Hard", "Advanced"];

const levelBadgeClass = (level) =>
  level === "Advanced"
    ? "bg-red-50 text-red-600"
    : level === "Hard"
    ? "bg-orange-50 text-orange-600"
    : "bg-amber-50 text-amber-600";

function TasksPage() {
  const [search, setSearch] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(tasks.map((task) => task.category))],
    []
  );

  // Tasks matching only the search term - base for computing facet counts
  const searchMatchedTasks = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return tasks;
    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(q) ||
        task.description.toLowerCase().includes(q)
    );
  }, [search]);

  // Level counts respect the current category selection (and search)
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

  // Category counts respect the current level selection (and search)
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
    return searchMatchedTasks.filter((task) => {
      const matchesLevel = selectedLevel === "All" || task.level === selectedLevel;
      const matchesCategory = selectedCategory === "All" || task.category === selectedCategory;
      return matchesLevel && matchesCategory;
    });
  }, [searchMatchedTasks, selectedLevel, selectedCategory]);

  const hasActiveFilters = selectedLevel !== "All" || selectedCategory !== "All" || search.trim() !== "";

  const clearAll = () => {
    setSearch("");
    setSelectedLevel("All");
    setSelectedCategory("All");
  };

  return (
   <>
   <Navbar/>
<MobileTopBar/>
    <div className="min-h-[calc(100vh-68px)] bg-slate-50">
      <div className="mx-auto flex w-full max-w-[1500px]">
      
        <aside className="sticky top-[68px] hidden h-[calc(100vh-68px)] w-[260px] shrink-0 border-r border-slate-200 bg-white lg:block">

          {/* Difficulty */}
          <div className="px-4 pt-5">
            <p className="mb-2 px-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Difficulty
            </p>

            {LEVELS.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                aria-pressed={selectedLevel === level}
                className={`mb-1 flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
                  selectedLevel === level
                    ? "bg-violet-50 text-violet-700"
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                <span>{level}</span>
                <span
                  className={`text-[10px] ${
                    selectedLevel === level ? "text-violet-400" : "text-slate-400"
                  }`}
                >
                  {levelCounts[level] ?? 0}
                </span>
              </button>
            ))}
          </div>

          {/* Categories */}
          <div className="mt-5 px-4">
            <p className="mb-2 px-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Categories
            </p>

            <div className="max-h-[40vh] space-y-1 overflow-y-auto pr-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={selectedCategory === category}
                  disabled={categoryCounts[category] === 0}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium transition ${
                    selectedCategory === category
                      ? "bg-violet-50 text-violet-700"
                      : categoryCounts[category] === 0
                      ? "cursor-not-allowed text-slate-300"
                      : "text-slate-500 hover:bg-slate-50"
                  }`}
                >
                  <span>{category}</span>
                  <span className="text-[10px] text-slate-400">{categoryCounts[category] ?? 0}</span>
                </button>
              ))}
            </div>
          </div>

          {hasActiveFilters && (
            <div className="mt-5 px-4">
              <button
                onClick={clearAll}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-500 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
              >
                Reset filters
              </button>
            </div>
          )}
        </aside>

        {/* ================================================= */}
        {/* MAIN */}
        {/* ================================================= */}

        <main className="min-w-0 flex-1">
          <div className="px-4 py-6 sm:px-6 lg:px-10 lg:py-9">
            <div className="mx-auto max-w-5xl">
              <div className="mb-6">
                <AdSpace />
              </div>

              {/* PAGE HEADER */}
              <div className="mb-7">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-violet-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-violet-700">
                    Practice
                  </span>
                  <span className="text-xs text-slate-400">{tasks.length} Tasks</span>
                </div>

                <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  JavaScript Practice Tasks
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  Challenge yourself with real JavaScript problems covering arrays, objects, DOM,
                  APIs, async JavaScript and more.
                </p>
              </div>

              {/* SEARCH + MOBILE FILTERS */}
              <div className="mb-6 flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-slate-400" />

                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search tasks..."
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-10 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-50"
                  />

                  {search && (
                    <button
                      onClick={() => setSearch("")}
                      aria-label="Clear search"
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                    >
                      <FaTimes className="text-xs" />
                    </button>
                  )}
                </div>

                {/* Mobile-only: difficulty + category selects (sidebar is hidden below lg) */}
                <div className="flex gap-3 lg:hidden">
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="h-12 flex-1 rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-600 outline-none"
                  >
                    {LEVELS.map((level) => (
                      <option key={level} value={level}>
                        {level === "All" ? "All Difficulty" : level}
                      </option>
                    ))}
                  </select>

                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="h-12 flex-1 rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-600 outline-none"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category === "All" ? "All Categories" : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* ACTIVE FILTERS */}
              {hasActiveFilters && (
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <FaFilter className="text-xs text-slate-400" />

                  {search.trim() !== "" && (
                    <button
                      onClick={() => setSearch("")}
                      className="rounded-lg bg-violet-100 px-3 py-1.5 text-xs font-semibold text-violet-700"
                    >
                      "{search.trim()}" ×
                    </button>
                  )}

                  {selectedLevel !== "All" && (
                    <button
                      onClick={() => setSelectedLevel("All")}
                      className="rounded-lg bg-violet-100 px-3 py-1.5 text-xs font-semibold text-violet-700"
                    >
                      {selectedLevel} ×
                    </button>
                  )}

                  {selectedCategory !== "All" && (
                    <button
                      onClick={() => setSelectedCategory("All")}
                      className="rounded-lg bg-violet-100 px-3 py-1.5 text-xs font-semibold text-violet-700"
                    >
                      {selectedCategory} ×
                    </button>
                  )}

                  <button
                    onClick={clearAll}
                    className="text-xs font-semibold text-slate-400 underline-offset-2 hover:text-slate-600 hover:underline"
                  >
                    Clear all
                  </button>
                </div>
              )}

              {/* TASK COUNT */}
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-700">
                  {filteredTasks.length} {filteredTasks.length === 1 ? "Task" : "Tasks"}
                </p>
                <p className="text-xs text-slate-400">Select a task to start</p>
              </div>

              {/* TASK LIST */}
              <div className="space-y-3">
                {filteredTasks.map((task) => (
                  <Link
                    key={task.id}
                    to={`/tasks/${task.id}`}
                    className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-100 sm:p-6"
                  >
                    <div className="flex gap-4">
                      <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-bold text-slate-500 sm:flex">
                        {String(task.id).padStart(2, "0")}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-md bg-violet-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-violet-700">
                            {task.category}
                          </span>

                          <span
                            className={`rounded-md px-2 py-1 text-[10px] font-bold ${levelBadgeClass(
                              task.level
                            )}`}
                          >
                            {task.level}
                          </span>
                        </div>

                        <h2 className="mt-3 text-base font-bold text-slate-900 transition-colors group-hover:text-violet-700 sm:text-lg">
                          {task.title}
                        </h2>

                        <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-slate-500">
                          {task.description}
                        </p>

                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs text-slate-400">
                            <FaCode className="text-[10px]" />
                            JavaScript
                          </div>

                          <span className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-bold text-white transition group-hover:bg-violet-600">
                            Start Task
                            <FaChevronRight className="text-[9px] transition-transform duration-200 group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}

                {/* EMPTY STATE */}
                {filteredTasks.length === 0 && (
                  <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
                      <FaSearch />
                    </div>

                    <h3 className="mt-4 font-bold text-slate-800">No tasks found</h3>

                    <p className="mt-1 text-sm text-slate-400">
                      Try another search or remove the filters.
                    </p>

                    <button
                      onClick={clearAll}
                      className="mt-4 rounded-lg bg-violet-600 px-4 py-2 text-xs font-bold text-white hover:bg-violet-700"
                    >
                      Clear Filters
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-7">
                <AdSpace />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <BottomNavigation/>
   </>
  );
}

export default TasksPage;