import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronDown,
  Play,
  RotateCcw,
  Lightbulb,
  Code2,
  Check,
  CheckCircle2,
  XCircle,
  Lock,
  Zap,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import codingTasks from "../data.js/task";
import MobileBottomNav from "../components/mobilenav";
import Navbar from "../components/navbar";


const COMPLETED_KEY = "jsmaster_completed_coding_tasks";
const PREMIUM_KEY = "jsmaster_premium";

const difficultyColor = {
  Easy: { bg: "#e1f5ee", text: "#085041" },
  Medium: { bg: "#faeeda", text: "#633806" },
  Hard: { bg: "#fcebeb", text: "#791f1f" },
};

const levels = ["All", "Beginner", "Intermediate", "Advanced"];

function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

/**
 * Runs the user's code against a task's test cases.
 * Uses new Function() to evaluate the code the user wrote and pull out
 * the target function by name, then calls it with each test's args.
 * This is a learning-app sandbox, not a secure sandbox — fine for a
 * client-only practice tool, but don't reuse this pattern to execute
 * untrusted code from other users.
 */
function runTests(userCode, functionName, testCases) {
  try {
    const factory = new Function(`${userCode}\nreturn ${functionName};`);
    const fn = factory();

    if (typeof fn !== "function") {
      return { error: `Could not find a function named "${functionName}". Don't rename it.`, results: [] };
    }

    const results = testCases.map((test, i) => {
      try {
        const actual = fn(...test.args);
        const passed = deepEqual(actual, test.expected);
        return { index: i, passed, actual, expected: test.expected };
      } catch (err) {
        return { index: i, passed: false, error: err.message, expected: test.expected };
      }
    });

    return { error: null, results };
  } catch (err) {
    return { error: err.message, results: [] };
  }
}

export default function CodingTasksPage() {
  const navigate = useNavigate();
  const [completedIds, setCompletedIds] = useState([]);
  const [isPremium, setIsPremium] = useState(false);
  const [activeLevel, setActiveLevel] = useState("All");
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const savedCompleted = localStorage.getItem(COMPLETED_KEY);
    const savedPremium = localStorage.getItem(PREMIUM_KEY);
    if (savedCompleted) setCompletedIds(JSON.parse(savedCompleted));
    setIsPremium(savedPremium === "true");
  }, []);

  const markComplete = (id) => {
    if (completedIds.includes(id)) return;
    const updated = [...completedIds, id];
    setCompletedIds(updated);
    localStorage.setItem(COMPLETED_KEY, JSON.stringify(updated));
  };

  const filteredTasks = useMemo(() => {
    return codingTasks.filter((t) => {
      const matchesLevel = activeLevel === "All" || t.level === activeLevel;
      const matchesSearch =
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.topic.toLowerCase().includes(search.toLowerCase());
      return matchesLevel && matchesSearch;
    });
  }, [activeLevel, search]);

  const totalXp = codingTasks.reduce((sum, t) => sum + t.xp, 0);
  const earnedXp = codingTasks.filter((t) => completedIds.includes(t.id)).reduce((sum, t) => sum + t.xp, 0);
  const progressPct = Math.round((completedIds.length / codingTasks.length) * 100);

  return (
  <>
  <Navbar/>
  <div className="w-full min-h-screen pb-20" style={{ background: "#faf9fc" }}>
      <div className="max-w-3xl mx-auto px-5 pt-8">
        {/* ---------- Header ---------- */}
        <h1 className="text-2xl font-semibold" style={{ color: "#1a1a1a" }}>
          Coding challenges
        </h1>
        <p className="text-sm mt-1" style={{ color: "#888" }}>
          Real interview-style problems. Write the solution yourself — your code runs against real test cases.
        </p>

        {/* ---------- Progress card ---------- */}
        <div className="rounded-2xl p-5 mt-5" style={{ background: "#5b2a9e" }}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-white">
              {completedIds.length} of {codingTasks.length} solved
            </span>
            <span className="flex items-center gap-1 text-sm font-medium" style={{ color: "#F7DF1E" }}>
              <Zap size={14} fill="#F7DF1E" />
              {earnedXp} / {totalXp} xp
            </span>
          </div>
          <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.2)" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: "#F7DF1E" }}
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* ---------- Premium banner ---------- */}
        {!isPremium && (
          <button
            onClick={() => navigate("/unlock")}
            className="w-full flex items-center justify-between rounded-2xl px-5 py-4 mt-4 transition-transform duration-150 hover:scale-[1.01]"
            style={{ background: "#fff8e1", border: "1px solid #f7df1e" }}
          >
            <div className="flex items-center gap-3 text-left">
              <Lock size={18} color="#8a6d00" />
              <div>
                <p className="text-sm font-semibold" style={{ color: "#5b4a00" }}>
                  Unlock 10 advanced challenges
                </p>
                <p className="text-xs" style={{ color: "#8a7a30" }}>
                  Sliding window, deep clone, curry, Promise.all and more
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: "#5b2a9e", color: "#fff" }}>
              Unlock
            </span>
          </button>
        )}

        {/* ---------- Search ---------- */}
        <div className="relative mt-5">
          <Search size={16} color="#999" className="absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by topic or title..."
            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none"
            style={{ background: "#ffffff", border: "1px solid #eee", color: "#1a1a1a" }}
          />
        </div>

        {/* ---------- Level filter chips ---------- */}
        <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1">
          {levels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setActiveLevel(lvl)}
              className="px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors duration-150"
              style={{
                background: activeLevel === lvl ? "#5b2a9e" : "#ffffff",
                color: activeLevel === lvl ? "#ffffff" : "#666",
                border: activeLevel === lvl ? "1px solid #5b2a9e" : "1px solid #eee",
              }}
            >
              {lvl}
            </button>
          ))}
        </div>

        {/* ---------- Task list ---------- */}
        <div className="flex flex-col gap-3 mt-5">
          {filteredTasks.length === 0 && (
            <p className="text-sm text-center py-10" style={{ color: "#999" }}>
              No challenges match your search.
            </p>
          )}

          {filteredTasks.map((task) => {
            const locked = task.premium && !isPremium;
            const isDone = completedIds.includes(task.id);
            const isOpen = expandedId === task.id;
            const diffColor = difficultyColor[task.difficulty] || difficultyColor.Easy;

            return (
              <div key={task.id} className="rounded-2xl overflow-hidden" style={{ background: "#ffffff", border: "1px solid #eee" }}>
                <button
                  onClick={() => (locked ? navigate("/unlock") : setExpandedId(isOpen ? null : task.id))}
                  className="w-full flex items-center gap-3 px-4 py-4 text-left"
                >
                  <div
                    className="shrink-0 flex items-center justify-center rounded-full"
                    style={{
                      width: 24,
                      height: 24,
                      background: locked ? "#f0edf7" : isDone ? "#5b2a9e" : "transparent",
                      border: locked || isDone ? "none" : "2px solid #ddd",
                    }}
                  >
                    {locked ? <Lock size={12} color="#5b2a9e" /> : isDone ? <Check size={14} color="#fff" /> : null}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ background: "#f0edf7", color: "#5b2a9e" }}>
                        {task.topic}
                      </span>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ background: diffColor.bg, color: diffColor.text }}>
                        {task.difficulty}
                      </span>
                    </div>
                    <p
                      className="text-sm font-medium truncate"
                      style={{
                        color: locked ? "#bbb" : isDone ? "#999" : "#1a1a1a",
                      }}
                    >
                      {task.title}
                    </p>
                  </div>

                  <span className="flex items-center gap-1 text-xs font-medium shrink-0" style={{ color: locked ? "#ccc" : "#d97706" }}>
                    <Zap size={12} fill={locked ? "#ccc" : "#d97706"} />
                    {task.xp}
                  </span>

                  {!locked && (
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={16} color="#999" />
                    </motion.div>
                  )}
                </button>

                <AnimatePresence>
                  {isOpen && !locked && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <TaskDetail task={task} isDone={isDone} onSolved={() => markComplete(task.id)} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <MobileBottomNav/>
  </>
    
  );
}

function TaskDetail({ task, isDone, onSolved }) {
  const [code, setCode] = useState(task.starterCode);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [testResults, setTestResults] = useState(null); // { error, results } | null
  const [running, setRunning] = useState(false);

  const isTestable = Array.isArray(task.testCases);

  const handleRun = () => {
    setRunning(true);
    setTestResults(null);
    // tiny delay so the "Running..." state is visible even for instant runs
    setTimeout(() => {
      const outcome = runTests(code, task.functionName, task.testCases);
      setTestResults(outcome);
      setRunning(false);
      if (!outcome.error && outcome.results.every((r) => r.passed)) {
        onSolved();
      }
    }, 250);
  };

  const resetCode = () => {
    setCode(task.starterCode);
    setTestResults(null);
  };

  const allPassed = testResults && !testResults.error && testResults.results.every((r) => r.passed);

  return (
    <div className="px-4 pb-4 pt-1 border-t" style={{ borderColor: "#f0f0f0" }}>
      {/* Problem statement */}
      <p className="text-sm mt-3" style={{ color: "#444" }}>
        {task.description}
      </p>

      {/* Examples */}
      <div className="mt-3 flex flex-col gap-1.5">
        {task.examples.map((ex, i) => (
          <div key={i} className="text-xs rounded-lg px-3 py-2" style={{ background: "#f7f6fa" }}>
            <span style={{ color: "#5b2a9e", fontWeight: 600 }}>Input:</span>{" "}
            <span className="font-mono" style={{ color: "#333" }}>{ex.input}</span>
            <br />
            <span style={{ color: "#5b2a9e", fontWeight: 600 }}>Output:</span>{" "}
            <span className="font-mono" style={{ color: "#333" }}>{ex.output}</span>
          </div>
        ))}
      </div>

      {/* Constraints */}
      {task.constraints?.length > 0 && (
        <ul className="mt-2 flex flex-col gap-0.5">
          {task.constraints.map((c, i) => (
            <li key={i} className="text-[11px]" style={{ color: "#999" }}>
              • {c}
            </li>
          ))}
        </ul>
      )}

      {/* Code editor */}
      <p className="text-xs font-semibold mt-4 mb-1.5" style={{ color: "#5b2a9e" }}>
        Your solution
      </p>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck={false}
        rows={Math.max(code.split("\n").length + 1, 5)}
        className="w-full font-mono text-xs px-3 py-3 rounded-lg outline-none resize-none"
        style={{ background: "#150a30", color: "#F7DF1E", lineHeight: 1.6 }}
      />

      <div className="flex items-center gap-2 mt-3 flex-wrap">
        {isTestable ? (
          <button
            onClick={handleRun}
            disabled={running}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-transform duration-150 hover:scale-[1.02]"
            style={{ background: "#5b2a9e", color: "#fff" }}
          >
            <Play size={12} fill="#fff" />
            {running ? "Running..." : "Run tests"}
          </button>
        ) : (
          <button
            onClick={onSolved}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-transform duration-150 hover:scale-[1.02]"
            style={{ background: "#5b2a9e", color: "#fff" }}
          >
            <Check size={12} />
            Mark as solved
          </button>
        )}
        <button
          onClick={resetCode}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium"
          style={{ background: "#f2f2f2", color: "#666" }}
        >
          <RotateCcw size={12} />
          Reset
        </button>
        <button
          onClick={() => setShowHint(!showHint)}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium"
          style={{ background: "#faeeda", color: "#633806" }}
        >
          <Lightbulb size={13} />
          {showHint ? "Hide hint" : "Show hint"}
        </button>
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium"
          style={{ background: "#f0edf7", color: "#5b2a9e" }}
        >
          <Code2 size={13} />
          {showSolution ? "Hide solution" : "Show solution"}
        </button>
      </div>

      {!isTestable && (
        <p className="flex items-center gap-1.5 text-[11px] mt-2" style={{ color: "#999" }}>
          <Clock size={11} />
          This one is timing/state-based — compare your code with the solution and mark yourself once it works.
        </p>
      )}

      {/* Test results */}
      <AnimatePresence>
        {testResults && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-3 rounded-lg overflow-hidden"
            style={{ border: `1px solid ${allPassed ? "#b8e4d3" : "#f3c9c9"}` }}
          >
            <div
              className="px-3 py-2 text-xs font-semibold flex items-center gap-1.5"
              style={allPassed ? { background: "#e1f5ee", color: "#085041" } : { background: "#fcebeb", color: "#791f1f" }}
            >
              {allPassed ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
              {testResults.error
                ? "Error running your code"
                : allPassed
                ? "All test cases passed!"
                : `${testResults.results.filter((r) => r.passed).length}/${testResults.results.length} test cases passed`}
            </div>

            {testResults.error && (
              <p className="text-xs px-3 py-2 font-mono" style={{ color: "#791f1f" }}>
                {testResults.error}
              </p>
            )}

            {!testResults.error &&
              testResults.results.map((r, i) => (
                <div
                  key={i}
                  className="px-3 py-2 text-[11px] font-mono border-t"
                  style={{ borderColor: "#f0f0f0", color: r.passed ? "#085041" : "#791f1f" }}
                >
                  {r.passed ? "✓" : "✗"} Test {i + 1} — expected {JSON.stringify(r.expected)}
                  {!r.passed && (r.error ? `, threw: ${r.error}` : `, got ${JSON.stringify(r.actual)}`)}
                </div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showHint && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs mt-3 px-3 py-2 rounded-lg"
            style={{ background: "#faeeda", color: "#633806" }}
          >
            {task.constraints ? "" : ""}
            {task.hint || task.explanation}
          </motion.p>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSolution && (
          <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-3">
            <pre
              className="text-xs px-3 py-3 rounded-lg font-mono overflow-x-auto whitespace-pre-wrap"
              style={{ background: "#150a30", color: "#F7DF1E" }}
            >
              {task.solution}
            </pre>
            <p className="text-xs mt-2 px-1" style={{ color: "#666" }}>
              {task.explanation}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}