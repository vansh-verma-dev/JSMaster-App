import React, { useState, useMemo } from "react";
import {
  Search,
  X,
  Check,
  ChevronDown,
  Copy,
  Lightbulb,
  Brain,
} from "lucide-react";
import interviewQuestions from "../data/interviewQA";
import BottomNavbar from "../components/bottomNavbar";
import Navbar from "../components/navbar";
import MobileTopBar from "../components/mobileTopBar";

const CATEGORIES = ["All", ...new Set(interviewQuestions.map((q) => q.category))];
const TYPES = [
  { value: "All", label: "All" },
  { value: "theory", label: "Theory" },
  { value: "practical", label: "Practical" },
];

const levelColor = {
  Beginner: { bg: "#e1f5ee", text: "#085041" },
  Intermediate: { bg: "#faeeda", text: "#633806" },
  Advanced: { bg: "#fcebeb", text: "#791f1f" },
};

const typeColor = {
  theory: { bg: "#f0edf7", text: "#5b2a9e" },
  practical: { bg: "#e3edfb", text: "#2563eb" },
};

function CodeBlock({ code, id, copiedId, onCopy }) {
  const isCopied = copiedId === id;
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: "#150a30" }}>
      <div className="flex items-center justify-between px-4 py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#7f77dd" }}>
          JavaScript
        </span>
        <button
          onClick={() => onCopy(id, code)}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-semibold transition-colors duration-150"
          style={{ color: "#c9c3e8" }}
        >
          {isCopied ? (
            <>
              <Check size={12} color="#4ade80" /> Copied
            </>
          ) : (
            <>
              <Copy size={12} /> Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-4 text-[13px] leading-6 font-mono" style={{ color: "#F7DF1E" }}>
        {code}
      </pre>
    </div>
  );
}

function TheoryAnswer({ q, selected, onSelect }) {
  const answered = selected !== undefined;
  const isCorrect = selected === q.correctIndex;

  return (
    <div className="flex flex-col gap-2">
      {q.options.map((opt, idx) => {
        const isSelected = selected === idx;
        const isRight = idx === q.correctIndex;

        let style = { border: "1px solid #eee", color: "#444", background: "#fff" };
        if (answered) {
          if (isRight) style = { border: "1px solid #b8e4d3", background: "#e1f5ee", color: "#085041" };
          else if (isSelected) style = { border: "1px solid #f3c9c9", background: "#fcebeb", color: "#791f1f" };
          else style = { border: "1px solid #eee", background: "#fafafa", color: "#bbb" };
        }

        return (
          <button
            key={idx}
            disabled={answered}
            onClick={() => onSelect(q.id, idx)}
            className="flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-medium transition-colors duration-150"
            style={style}
          >
            <span>{opt}</span>
            {answered && isRight && <Check size={15} color="#1d9e75" />}
            {answered && isSelected && !isCorrect && <X size={15} color="#e24b4a" />}
          </button>
        );
      })}

      {answered && (
        <div
          className="flex gap-2.5 rounded-xl px-4 py-3 text-sm leading-6 mt-1"
          style={isCorrect ? { background: "#e1f5ee", color: "#085041" } : { background: "#f7f6fa", color: "#555" }}
        >
          <Lightbulb size={16} color="#d97706" className="shrink-0 mt-0.5" />
          <p>
            <span className="font-bold">{isCorrect ? "Correct! " : "Not quite. "}</span>
            {q.explanation}
          </p>
        </div>
      )}
    </div>
  );
}

function PracticalAnswer({ q, revealed, onReveal, copiedId, onCopy }) {
  return (
    <div className="flex flex-col gap-3">
      {!revealed ? (
        <button
          onClick={() => onReveal(q.id)}
          className="flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-colors duration-150"
          style={{ background: "#f0edf7", color: "#5b2a9e", border: "1px dashed #d6c9ef" }}
        >
          <Brain size={15} />
          Reveal answer
        </button>
      ) : q.answerType === "code" ? (
        <CodeBlock code={q.code} id={q.id} copiedId={copiedId} onCopy={onCopy} />
      ) : (
        <div className="rounded-xl px-4 py-3 text-sm font-medium leading-6" style={{ background: "#f7f6fa", color: "#444" }}>
          {q.answer}
        </div>
      )}

      {revealed && q.note && (
        <div className="flex gap-2.5 rounded-xl px-4 py-3 text-sm leading-6" style={{ background: "#fdeeda", color: "#633806" }}>
          <Lightbulb size={16} color="#d97706" className="shrink-0 mt-0.5" />
          <p>{q.note}</p>
        </div>
      )}
    </div>
  );
}

 
function FilterPanel({ search, setSearch, selectedType, setSelectedType, selectedCategory, setSelectedCategory  }) {
  return (
    <div className="flex flex-col gap-4">
  
      {/* Search */}
      <div className="relative">
        <Search size={16} color="#999" className="absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search questions..."
          className="w-full pl-10 pr-9 py-3 rounded-xl text-sm outline-none"
          style={{ background: "#ffffff", border: "1px solid #eee", color: "#1a1a1a" }}
        />
        {search && (
          <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2">
            <X size={14} color="#999" />
          </button>
        )}
      </div>

      {/* Type segmented control */}
      <div className="flex gap-1 rounded-xl p-1" style={{ background: "#f0edf7" }}>
        {TYPES.map((t) => (
          <button
            key={t.value}
            onClick={() => setSelectedType(t.value)}
            className="flex-1 py-2 rounded-lg text-xs font-semibold transition-colors duration-150"
            style={{
              background: selectedType === t.value ? "#ffffff" : "transparent",
              color: selectedType === t.value ? "#5b2a9e" : "#8a7ab0",
              boxShadow: selectedType === t.value ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Category list (vertical) */}
      <div className="flex flex-col gap-1">
        <p className="text-[10px] font-bold uppercase tracking-wide px-1 mb-1" style={{ color: "#bbb" }}>
          Category
        </p>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-left transition-colors duration-150"
            style={{
              background: selectedCategory === cat ? "#f0edf7" : "transparent",
              color: selectedCategory === cat ? "#5b2a9e" : "#555",
              fontWeight: selectedCategory === cat ? 600 : 500,
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
 
function MobileFilters({ search, setSearch, selectedType, setSelectedType, selectedCategory, setSelectedCategory, theoryCorrect, theoryAnswered, theoryTotal }) {
  return (
    <div className="flex flex-col gap-3 md:hidden">
      <div className="rounded-2xl p-5" style={{ background: "#5b2a9e" }}>
        <div className="flex items-center justify-between mb-3 text-xs font-medium">
          <span className="text-white">
            Theory score: {theoryCorrect}/{theoryAnswered} correct
          </span>
          <span style={{ color: "#F7DF1E" }}>
            {theoryAnswered}/{theoryTotal} attempted
          </span>
        </div>
        <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.2)" }}>
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${theoryTotal ? (theoryAnswered / theoryTotal) * 100 : 0}%`, background: "#F7DF1E" }}
          />
        </div>
      </div>

      <div className="relative">
        <Search size={16} color="#999" className="absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search questions..."
          className="w-full pl-10 pr-9 py-3 rounded-xl text-sm outline-none"
          style={{ background: "#ffffff", border: "1px solid #eee", color: "#1a1a1a" }}
        />
        {search && (
          <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2">
            <X size={14} color="#999" />
          </button>
        )}
      </div>

      <div className="flex gap-1 rounded-xl p-1" style={{ background: "#f0edf7" }}>
        {TYPES.map((t) => (
          <button
            key={t.value}
            onClick={() => setSelectedType(t.value)}
            className="flex-1 py-2 rounded-lg text-xs font-semibold transition-colors duration-150"
            style={{
              background: selectedType === t.value ? "#ffffff" : "transparent",
              color: selectedType === t.value ? "#5b2a9e" : "#8a7ab0",
              boxShadow: selectedType === t.value ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className="shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors duration-150"
            style={{
              background: selectedCategory === cat ? "#5b2a9e" : "#ffffff",
              color: selectedCategory === cat ? "#ffffff" : "#666",
              border: selectedCategory === cat ? "1px solid #5b2a9e" : "1px solid #eee",
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function InterviewQuestionsPage() {
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

  const toggleExpand = (id) => setExpandedId((prev) => (prev === id ? null : id));

  const handleSelectOption = (id, idx) => {
    setAnswers((prev) => (prev[id] !== undefined ? prev : { ...prev, [id]: idx }));
  };

  const handleReveal = (id) => setRevealed((prev) => ({ ...prev, [id]: true }));

  const handleCopy = async (id, code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch {
      // clipboard not available - fail silently
    }
  };

  const filterProps = {
    search, setSearch,
    selectedType, setSelectedType,
    selectedCategory, setSelectedCategory,
    theoryCorrect, theoryAnswered, theoryTotal,
  };

  return (
   <>
   <Navbar/>
   <MobileTopBar/>
   
    <div className="w-full min-h-screen pb-20" style={{ background: "#faf9fc" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 flex gap-8">
        {/* ---------- Desktop sidebar ---------- */}
        <aside className="hidden md:block w-72 shrink-0">
          <div className="sticky top-8">
            <FilterPanel {...filterProps} />
          </div>
        </aside>

        {/* ---------- Main content ---------- */}
        <main className="flex-1 min-w-0">
          {/* Header */}
          <span
            className="inline-block text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full mb-3"
            style={{ background: "#f0edf7", color: "#5b2a9e" }}
          >
            Interview Prep · {interviewQuestions.length} questions
          </span>
          <h1 className="text-2xl md:text-3xl font-semibold" style={{ color: "#1a1a1a" }}>
            JS Interview Questions
          </h1>
          <p className="text-sm mt-1 max-w-xl" style={{ color: "#888" }}>
            Theory MCQs and hands-on coding questions on arrays, loops, promises, async/await and fetch.
          </p>

          {/* Mobile-only filters (sidebar is desktop-only) */}
          <div className="mt-5">
            <MobileFilters {...filterProps} />
          </div>

          {/* Count */}
          <p className="text-sm font-medium mt-6 mb-3" style={{ color: "#444" }}>
            {filtered.length} {filtered.length === 1 ? "question" : "questions"}
          </p>

          {/* List */}
          <div className="flex flex-col gap-3">
            {filtered.map((q) => {
              const isOpen = expandedId === q.id;
              const tColor = typeColor[q.type];
              const lColor = levelColor[q.level] || levelColor.Beginner;

              return (
                <div key={q.id} className="rounded-2xl overflow-hidden" style={{ background: "#ffffff", border: "1px solid #eee" }}>
                  <button
                    onClick={() => toggleExpand(q.id)}
                    className="w-full flex items-start justify-between gap-3 px-5 py-4 text-left"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5 mb-2">
                        <span
                          className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full"
                          style={{ background: tColor.bg, color: tColor.text }}
                        >
                          {q.type === "theory" ? "Theory" : "Practical"}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full" style={{ background: "#f2f2f2", color: "#888" }}>
                          {q.category}
                        </span>
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                          style={{ background: lColor.bg, color: lColor.text }}
                        >
                          {q.level}
                        </span>
                      </div>
                      <p className="text-sm md:text-base font-semibold leading-6 whitespace-pre-line" style={{ color: "#1a1a1a" }}>
                        {q.question}
                      </p>
                    </div>

                    <ChevronDown
                      size={16}
                      color="#999"
                      className="shrink-0 mt-1 transition-transform duration-200"
                      style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t" style={{ borderColor: "#f0f0f0" }}>
                      <div className="mt-4 max-w-2xl">
                        {q.type === "theory" ? (
                          <TheoryAnswer q={q} selected={answers[q.id]} onSelect={handleSelectOption} />
                        ) : (
                          <PracticalAnswer
                            q={q}
                            revealed={!!revealed[q.id]}
                            onReveal={handleReveal}
                            copiedId={copiedId}
                            onCopy={handleCopy}
                          />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {filtered.length === 0 && (
              <div className="rounded-2xl px-6 py-14 text-center" style={{ border: "1px dashed #ddd" }}>
                <div
                  className="mx-auto flex items-center justify-center rounded-xl mb-3"
                  style={{ width: 44, height: 44, background: "#f2f2f2" }}
                >
                  <Search size={18} color="#999" />
                </div>
                <p className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>
                  No questions found
                </p>
                <p className="text-xs mt-1" style={{ color: "#999" }}>
                  Try another search or category.
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("All");
                    setSelectedType("All");
                  }}
                  className="mt-4 px-4 py-2 rounded-lg text-xs font-semibold"
                  style={{ background: "#5b2a9e", color: "#fff" }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
    <BottomNavbar/>
   </>
  );
}