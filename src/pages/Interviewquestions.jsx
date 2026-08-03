import { useState } from "react";
import Navbar from "../componentes/navbar";
import Sidebar from "../componentes/sidebar";
import QUESTIONS from "../data/mcq";
 
import {
  IoLeafOutline,
  IoFlashOutline,
  IoFlameOutline,
  IoTrophyOutline,
  IoCheckmarkCircle,
  IoCloseCircle,
  IoArrowBack,
  IoRefreshOutline,
  IoSparklesOutline,
  IoLayersOutline,
  IoTimerOutline,
  IoRibbonOutline,
} from "react-icons/io5";

const LEVELS = [
  { key: "easy", label: "Easy", desc: "Basics & fundamentals", icon: IoLeafOutline, bg: "bg-emerald-700", border: "border-emerald-600", accent: "text-emerald-300", barFrom: "from-emerald-400", barTo: "to-emerald-300" },
  { key: "medium", label: "Medium", desc: "Intermediate concepts", icon: IoFlashOutline, bg: "bg-blue-700", border: "border-blue-600", accent: "text-blue-300", barFrom: "from-blue-400", barTo: "to-blue-300" },
  { key: "hard", label: "Hard", desc: "Deep JS internals", icon: IoFlameOutline, bg: "bg-amber-700", border: "border-amber-600", accent: "text-amber-300", barFrom: "from-amber-400", barTo: "to-amber-300" },
  { key: "pro", label: "Pro", desc: "Expert-level & tricky", icon: IoTrophyOutline, bg: "bg-rose-700", border: "border-rose-600", accent: "text-rose-300", barFrom: "from-rose-400", barTo: "to-rose-300" },
];

const HERO_STATS = [
  { icon: IoLayersOutline, label: "100 Questions" },
  { icon: IoRibbonOutline, label: "4 Difficulty Levels" },
  { icon: IoTimerOutline, label: "Instant Scoring" },
];

/* ---------------- Component ---------------- */

function InterviewQuestions() {
  const [levelKey, setLevelKey] = useState(null); // null = selection screen
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null); // option index picked for current question
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const level = LEVELS.find((l) => l.key === levelKey);
  const questions = levelKey ? QUESTIONS[levelKey] : [];
  const current = questions[index];

  const startLevel = (key) => {
    setLevelKey(key);
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  const pickOption = (optIndex) => {
    if (selected !== null) return; // already answered this question
    setSelected(optIndex);
    if (optIndex === current.a) setScore((s) => s + 1);
  };

  const nextQuestion = () => {
    if (index + 1 < questions.length) {
      setIndex((i) => i + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const backToLevels = () => setLevelKey(null);

  return (
    <div>
      <Navbar />
      <div className="flex bg-white">
        <Sidebar />

        <div className="flex-1 p-4 sm:p-6 pt-5 min-h-[90vh]">
          {/* ---------- Level selection screen ---------- */}
          {!levelKey && (
            <>
              {/* Hero banner */}
              <div className="bg-gradient-to-br from-purple-700 via-purple-600 to-violet-600 rounded-2xl p-5 sm:p-8 relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-white/10" />
                <div className="absolute right-10 bottom-[-30px] w-24 h-24 rounded-full bg-white/10" />

                <div className="relative flex items-center gap-2 text-purple-200 text-xs sm:text-sm font-medium">
                  <IoSparklesOutline /> Interview Prep
                </div>
                <h1 className="relative text-2xl sm:text-3xl font-bold text-white mt-2">
                  Ace Your JavaScript Interview
                </h1>
                <p className="relative text-purple-100 text-sm mt-1.5 max-w-md">
                  Pick a difficulty, answer 25 MCQs, and see exactly where you stand — instantly.
                </p>

                <div className="relative flex flex-wrap gap-2.5 mt-5">
                  {HERO_STATS.map(({ icon: Icon, label }) => (
                    <span
                      key={label}
                      className="flex items-center gap-1.5 bg-white/10 text-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full"
                    >
                      <Icon className="text-sm" /> {label}
                    </span>
                  ))}
                </div>
              </div>

              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mt-8">
                Choose your level
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Each level has 25 MCQs and gives you a live score
              </p>

              <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {LEVELS.map(({ key, label, desc, icon: Icon, bg, border, accent }) => (
                  <button
                    key={key}
                    onClick={() => startLevel(key)}
                    className={`text-left ${bg} border ${border} rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col`}
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Icon className={`text-xl ${accent}`} />
                    </div>
                    <h3 className="text-white font-semibold text-base sm:text-lg mt-3">
                      {label}
                    </h3>
                    <p className="text-gray-200 text-[11px] sm:text-xs mt-1">{desc}</p>
                    <span className={`mt-3 text-[11px] sm:text-xs font-medium ${accent}`}>
                      25 Questions
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* ---------- Quiz screen ---------- */}
          {levelKey && !finished && current && (
            <div className="max-w-2xl">
              <div className="flex items-center justify-between">
                <button
                  onClick={backToLevels}
                  className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <IoArrowBack /> Levels
                </button>
                <span className={`text-xs sm:text-sm font-semibold ${level.accent} ${level.bg} px-3 py-1 rounded-full`}>
                  {level.label}
                </span>
              </div>

              {/* Progress */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
                  <span>Question {index + 1} of {questions.length}</span>
                  <span>Score: {score}</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${level.barFrom} ${level.barTo} rounded-full transition-all`}
                    style={{ width: `${((index + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question card */}
              <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                <h2 className="text-base sm:text-lg font-medium text-gray-900">
                  {current.q}
                </h2>

                <div className="mt-4 flex flex-col gap-2.5">
                  {current.o.map((opt, i) => {
                    const isSelected = selected === i;
                    const isCorrect = i === current.a;
                    let style = "border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-purple-50";
                    if (selected !== null) {
                      if (isCorrect) style = "border-emerald-500 bg-emerald-50 text-emerald-700";
                      else if (isSelected) style = "border-red-500 bg-red-50 text-red-700";
                      else style = "border-gray-200 text-gray-400";
                    }
                    return (
                      <button
                        key={i}
                        onClick={() => pickOption(i)}
                        disabled={selected !== null}
                        className={`text-left border rounded-xl px-4 py-3 text-sm flex items-center justify-between transition-colors ${style}`}
                      >
                        {opt}
                        {selected !== null && isCorrect && <IoCheckmarkCircle className="text-lg text-emerald-600 shrink-0" />}
                        {selected !== null && isSelected && !isCorrect && <IoCloseCircle className="text-lg text-red-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {selected !== null && (
                  <button
                    onClick={nextQuestion}
                    className="mt-5 w-full bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm py-2.5 rounded-xl transition-colors"
                  >
                    {index + 1 < questions.length ? "Next Question" : "Finish Quiz"}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ---------- Result screen ---------- */}
          {levelKey && finished && (
            <div className="max-w-md">
              <div className={`${level.bg} border ${level.border} rounded-2xl p-6 text-center`}>
                <div className="w-14 h-14 mx-auto rounded-full bg-white/10 flex items-center justify-center">
                  <level.icon className={`text-2xl ${level.accent}`} />
                </div>
                <h2 className="text-white text-xl font-semibold mt-4">
                  {level.label} level complete!
                </h2>
                <p className="text-4xl font-bold text-white mt-3">
                  {score}<span className="text-lg text-gray-200">/{questions.length}</span>
                </p>
                <p className={`text-sm mt-1 ${level.accent}`}>
                  {Math.round((score / questions.length) * 100)}% correct
                </p>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => startLevel(levelKey)}
                    className="flex-1 bg-white/10 hover:bg-white/20 text-white text-sm font-medium py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <IoRefreshOutline /> Retry
                  </button>
                  <button
                    onClick={backToLevels}
                    className="flex-1 bg-white text-gray-900 text-sm font-medium py-2.5 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    Change Level
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default InterviewQuestions;