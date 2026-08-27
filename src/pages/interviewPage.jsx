import { useMemo, useState } from "react";
import {
  FaSearch,
  FaCode,
  FaCheck,
  FaTimes,
  FaChevronDown,
  FaCopy,
  FaLightbulb,
  FaBrain,
} from "react-icons/fa";

import interviewQuestions from "../data/interviewQA";
import Navbar from "../components/navbar";
import MobileTopBar from "../components/mobileTopBar";
import AdSpace from "../components/AdSpace";


const CATEGORIES = ["All", ...new Set(interviewQuestions.map((q) => q.category))];
const TYPES = [
  { value: "All", label: "All" },
  { value: "theory", label: "Theory" },
  { value: "practical", label: "Practical" },
];

const levelBadgeClass = (level) =>
  level === "Advanced"
    ? "bg-red-50 text-red-600"
    : level === "Intermediate"
    ? "bg-amber-50 text-amber-600"
    : "bg-emerald-50 text-emerald-600";

const typeBadgeClass = (type) =>
  type === "theory" ? "bg-violet-50 text-violet-700" : "bg-sky-50 text-sky-700";

function CodeBlock({ code, id, copiedId, onCopy }) {
  const isCopied = copiedId === id;
  return (
    <div className="relative overflow-hidden rounded-xl bg-slate-900">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
          JavaScript
        </span>
        <button
          onClick={() => onCopy(id, code)}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-semibold text-slate-300 transition hover:bg-white/10"
        >
          {isCopied ? (
            <>
              <FaCheck className="text-emerald-400" /> Copied
            </>
          ) : (
            <>
              <FaCopy /> Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-4 text-[13px] leading-6 text-slate-100">
        <code className="font-mono">{code}</code>
      </pre>
    </div>
  );
}

function TheoryCard({ q, selected, onSelect }) {
  const answered = selected !== undefined;
  const isCorrect = selected === q.correctIndex;

  return (
    <div className="space-y-2">
      {q.options.map((opt, idx) => {
        const isSelected = selected === idx;
        const isRightOption = idx === q.correctIndex;

        let optionClass =
          "border-slate-200 text-slate-600 hover:border-violet-200 hover:bg-violet-50/50";

        if (answered) {
          if (isRightOption) {
            optionClass = "border-emerald-300 bg-emerald-50 text-emerald-700";
          } else if (isSelected && !isCorrect) {
            optionClass = "border-red-300 bg-red-50 text-red-700";
          } else {
            optionClass = "border-slate-200 text-slate-400";
          }
        }

        return (
          <button
            key={idx}
            disabled={answered}
            onClick={() => onSelect(q.id, idx)}
            className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${optionClass} ${
              answered ? "cursor-default" : "cursor-pointer"
            }`}
          >
            <span>{opt}</span>
            {answered && isRightOption && <FaCheck className="shrink-0 text-emerald-500" />}
            {answered && isSelected && !isCorrect && (
              <FaTimes className="shrink-0 text-red-500" />
            )}
          </button>
        );
      })}

      {answered && (
        <div
          className={`flex gap-2.5 rounded-xl px-4 py-3 text-sm leading-6 ${
            isCorrect ? "bg-emerald-50 text-emerald-700" : "bg-slate-50 text-slate-600"
          }`}
        >
          <FaLightbulb className="mt-0.5 shrink-0 text-amber-400" />
          <p>
            <span className="font-bold">{isCorrect ? "Correct! " : "Not quite. "}</span>
            {q.explanation}
          </p>
        </div>
      )}
    </div>
  );
}

function PracticalCard({ q, revealed, onReveal, copiedId, onCopy }) {
  return (
    <div className="space-y-3">
      {!revealed ? (
        <button
          onClick={() => onReveal(q.id)}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-violet-300 bg-violet-50/50 px-4 py-3 text-sm font-bold text-violet-700 transition hover:bg-violet-50"
        >
          <FaBrain />
          Reveal Answer
        </button>
      ) : q.answerType === "code" ? (
        <CodeBlock code={q.code} id={q.id} copiedId={copiedId} onCopy={onCopy} />
      ) : (
        <div className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold leading-6 text-slate-700">
          {q.answer}
        </div>
      )}

      {revealed && q.note && (
        <div className="flex gap-2.5 rounded-xl bg-amber-50/60 px-4 py-3 text-sm leading-6 text-amber-800">
          <FaLightbulb className="mt-0.5 shrink-0 text-amber-500" />
          <p>{q.note}</p>
        </div>
      )}
    </div>
  );
}

function InterviewQuestionsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [expandedId, setExpandedId] = useState(null);
  const [answers, setAnswers] = useState({});
  const [revealed, setRevealed] = useState({});
  const [copiedId, setCopiedId] = useState(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return interviewQuestions.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesType = selectedType === "All" || item.type === selectedType;
      const matchesSearch = !q || item.question.toLowerCase().includes(q);
      return matchesCategory && matchesType && matchesSearch;
    });
  }, [search, selectedCategory, selectedType]);

  const theoryTotal = interviewQuestions.filter((q) => q.type === "theory").length;
  const theoryAnswered = Object.keys(answers).length;
  const theoryCorrect = Object.entries(answers).filter(([id, idx]) => {
    const q = interviewQuestions.find((item) => item.id === Number(id));
    return q && q.correctIndex === idx;
  }).length;

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleSelectOption = (id, idx) => {
    setAnswers((prev) => (prev[id] !== undefined ? prev : { ...prev, [id]: idx }));
  };

  const handleReveal = (id) => {
    setRevealed((prev) => ({ ...prev, [id]: true }));
  };

  const handleCopy = async (id, code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch {
      // clipboard not available - fail silently
    }
  };

  return (
   <>
   <Navbar/>
   <MobileTopBar/>

 <div className="min-h-[calc(100vh-68px)] bg-slate-50 pb-10">
      <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
        <div className="mb-5">
          <AdSpace />
        </div>

        {/* HEADER */}
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-violet-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-violet-700">
              Interview Prep
            </span>
            <span className="text-xs text-slate-400">{interviewQuestions.length} Questions</span>
          </div>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            JS Interview Questions
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Theory MCQs and hands-on coding questions on arrays, loops, promises, async/await and
            fetch.
          </p>
        </div>

        {/* SCORE CARD */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>
              Theory score: {theoryCorrect}/{theoryAnswered} correct
            </span>
            <span className="text-violet-600">
              {theoryAnswered}/{theoryTotal} attempted
            </span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-violet-600 transition-all duration-300"
              style={{ width: `${theoryTotal ? (theoryAnswered / theoryTotal) * 100 : 0}%` }}
            />
          </div>
        </div>

        {/* SEARCH */}
        <div className="relative mb-4">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions..."
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

        {/* TYPE SEGMENTED CONTROL */}
        <div className="mb-3 flex gap-1 rounded-xl bg-slate-100 p-1">
          {TYPES.map((t) => (
            <button
              key={t.value}
              onClick={() => setSelectedType(t.value)}
              className={`flex-1 rounded-lg py-2 text-xs font-bold transition ${
                selectedType === t.value
                  ? "bg-white text-violet-700 shadow-sm"
                  : "text-slate-500"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* CATEGORY CHIPS */}
        <div className="mb-6 flex gap-2 overflow-x-auto pb-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
                selectedCategory === cat
                  ? "border-violet-600 bg-violet-600 text-white"
                  : "border-slate-200 bg-white text-slate-500 hover:border-violet-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* COUNT */}
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-700">
            {filtered.length} {filtered.length === 1 ? "Question" : "Questions"}
          </p>
        </div>

        {/* LIST */}
        <div className="space-y-3">
          {filtered.map((q) => {
            const isOpen = expandedId === q.id;
            return (
              <div
                key={q.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => toggleExpand(q.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-3 px-5 py-4 text-left"
                >
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-1.5">
                      <span
                        className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${typeBadgeClass(
                          q.type
                        )}`}
                      >
                        {q.type === "theory" ? "Theory" : "Practical"}
                      </span>
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                        {q.category}
                      </span>
                      <span
                        className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${levelBadgeClass(
                          q.level
                        )}`}
                      >
                        {q.level}
                      </span>
                    </div>
                    <p className="whitespace-pre-line text-sm font-bold leading-6 text-slate-900 sm:text-base">
                      {q.question}
                    </p>
                  </div>

                  <FaChevronDown
                    className={`mt-1 shrink-0 text-xs text-slate-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="border-t border-slate-100 px-5 py-4">
                      {q.type === "theory" ? (
                        <TheoryCard
                          q={q}
                          selected={answers[q.id]}
                          onSelect={handleSelectOption}
                        />
                      ) : (
                        <PracticalCard
                          q={q}
                          revealed={!!revealed[q.id]}
                          onReveal={handleReveal}
                          copiedId={copiedId}
                          onCopy={handleCopy}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {filtered.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
                <FaSearch />
              </div>
              <h3 className="mt-4 font-bold text-slate-800">No questions found</h3>
              <p className="mt-1 text-sm text-slate-400">Try another search or category.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("All");
                  setSelectedType("All");
                }}
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

 
   </>
  );
}

export default InterviewQuestionsPage;