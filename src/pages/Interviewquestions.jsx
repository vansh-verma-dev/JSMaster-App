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
  IoSadOutline,
  IoThumbsUpOutline,
  IoRocketOutline,
} from "react-icons/io5";
import BottomNav from "../componentes/Bottomnav";

const RESULT_TIERS = [
  {
    max: 40,
    label: "Keep Practicing",
    sub: "Revise the basics and give it another shot",
    icon: IoSadOutline,
    bg: "bg-slate-900",
    border: "border-slate-800",
    accent: "text-purple-300",
    anim: "shake",
  },
  {
    max: 75,
    label: "Good Job!",
    sub: "Solid understanding — a little more practice and you're set",
    icon: IoThumbsUpOutline,
    bg: "bg-purple-900",
    border: "border-purple-700",
    accent: "text-purple-200",
    anim: "pop",
  },
  {
    max: 101,
    label: "Awesome!",
    sub: "You nailed it — you're interview ready",
    icon: IoRocketOutline,
    bg: "bg-gradient-to-br from-purple-700 via-indigo-700 to-fuchsia-700",
    border: "border-purple-500",
    accent: "text-fuchsia-100",
    anim: "confetti",
  },
];

const LEVELS = [
  { key: "easy", label: "Easy", desc: "Basics & fundamentals", icon: IoLeafOutline, bg: "bg-purple-600", border: "border-purple-500", accent: "text-purple-100", barFrom: "from-purple-400", barTo: "to-purple-300" },
  { key: "medium", label: "Medium", desc: "Intermediate concepts", icon: IoFlashOutline, bg: "bg-violet-600", border: "border-violet-500", accent: "text-violet-100", barFrom: "from-violet-400", barTo: "to-violet-300" },
  { key: "hard", label: "Hard", desc: "Deep JS internals", icon: IoFlameOutline, bg: "bg-indigo-600", border: "border-indigo-500", accent: "text-indigo-100", barFrom: "from-indigo-400", barTo: "to-indigo-300" },
  { key: "pro", label: "Pro", desc: "Expert-level & tricky", icon: IoTrophyOutline, bg: "bg-fuchsia-600", border: "border-fuchsia-500", accent: "text-fuchsia-100", barFrom: "from-fuchsia-400", barTo: "to-fuchsia-300" },
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
    <div className="bg-slate-50 min-h-screen pb-20 sm:pb-0">
      <Navbar />
      
      {/* Outer wrapper without extra margin/padding so sidebar sticks to the left edge */}
      <div className="flex w-full">
        <Sidebar className="hidden md:block shrink-0" />

        {/* Main content area takes the remaining space */}
        <div className="flex-1 p-4 sm:p-6 lg:px-8 w-full min-h-[90vh]">
          {/* ---------- Level selection screen ---------- */}
          {!levelKey && (
            <>
              {/* Hero banner with 2D Illustration */}
              <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 rounded-3xl p-5 sm:p-8 relative overflow-hidden flex items-center justify-between shadow-lg shadow-purple-950/10">
                <div className="absolute top-[-50%] left-[-10%] w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-20%] right-[10%] w-32 h-32 bg-fuchsia-500/20 rounded-full blur-2xl"></div>

                <div className="relative z-10 max-w-[60%]">
                  <div className="flex items-center gap-1.5 text-purple-300 text-xs sm:text-sm font-semibold tracking-wider mb-2">
                    <IoSparklesOutline /> Interview Prep
                  </div>
                  <h1 className="text-xl sm:text-3xl font-bold text-white mb-1 leading-tight">
                    Ace Your JavaScript Interview
                  </h1>
                  <p className="text-slate-300 text-xs sm:text-sm mb-4 line-clamp-2">
                    Pick a difficulty, test your knowledge with MCQs, and see exactly where you stand — instantly.
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {HERO_STATS.map(({ icon: Icon, label }) => (
                      <span
                        key={label}
                        className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1.5 rounded-lg"
                      >
                        <Icon className="text-purple-300 text-sm" /> {label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2D Developer / Quiz Illustration */}
                <div className="relative z-10 w-28 sm:w-40 mr-2 sm:mr-8 drop-shadow-2xl">
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/online-exam-5334139-4445585.png"
                    alt="Quiz Prep"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              <div className="mt-8 mb-4">
                <h2 className="text-lg sm:text-xl font-bold text-slate-800">
                  Choose your level
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Each level has multiple MCQs to sharpen your core concepts
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {LEVELS.map(({ key, label, desc, icon: Icon, bg, border, accent }) => (
                  <button
                    key={key}
                    onClick={() => startLevel(key)}
                    className={`text-left ${bg} border ${border} rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col group text-white`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <Icon className={`text-2xl text-white`} />
                    </div>
                    <h3 className="font-bold text-lg mt-4 group-hover:scale-[1.02] transition-transform">
                      {label}
                    </h3>
                    <p className="text-slate-100 text-xs mt-1 opacity-90">{desc}</p>
                    <span className="mt-4 text-xs font-bold text-white/90 bg-black/20 w-max px-2.5 py-1 rounded-lg">
                      25 Questions
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* ---------- Quiz screen ---------- */}
          {levelKey && !finished && current && (
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={backToLevels}
                  className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-purple-600 transition-colors bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm"
                >
                  <IoArrowBack /> Back to Levels
                </button>
                <span className={`text-xs sm:text-sm font-bold text-white ${level.bg} px-3.5 py-1.5 rounded-xl shadow-sm`}>
                  {level.label} Level
                </span>
              </div>

              {/* Progress Bar */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-4">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                  <span>Question {index + 1} of {questions.length}</span>
                  <span className="text-purple-600 font-bold">Score: {score}</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${level.barFrom} ${level.barTo} rounded-full transition-all duration-300`}
                    style={{ width: `${((index + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question card */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {current.q}
                </h2>

                <div className="mt-5 flex flex-col gap-3">
                  {current.o.map((opt, i) => {
                    const isSelected = selected === i;
                    const isCorrect = i === current.a;
                    let style = "border-slate-200 text-slate-700 bg-slate-50/50 hover:border-purple-300 hover:bg-purple-50/50";
                    if (selected !== null) {
                      if (isCorrect) style = "border-emerald-500 bg-emerald-50 text-emerald-800 font-semibold shadow-sm";
                      else if (isSelected) style = "border-rose-500 bg-rose-50 text-rose-800 font-semibold shadow-sm";
                      else style = "border-slate-200 text-slate-400 opacity-60";
                    }
                    return (
                      <button
                        key={i}
                        onClick={() => pickOption(i)}
                        disabled={selected !== null}
                        className={`text-left border-2 rounded-2xl px-4 py-3.5 text-sm flex items-center justify-between transition-all ${style}`}
                      >
                        <span>{opt}</span>
                        {selected !== null && isCorrect && <IoCheckmarkCircle className="text-xl text-emerald-600 shrink-0" />}
                        {selected !== null && isSelected && !isCorrect && <IoCloseCircle className="text-xl text-rose-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {selected !== null && (
                  <button
                    onClick={nextQuestion}
                    className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-base py-3.5 rounded-2xl shadow-lg shadow-purple-600/20 transition-all active:scale-[0.98]"
                  >
                    {index + 1 < questions.length ? "Next Question" : "Finish Quiz"}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ---------- Result screen ---------- */}
          {levelKey && finished && (() => {
            const percent = Math.round((score / questions.length) * 100);
            const tier = RESULT_TIERS.find((t) => percent < t.max);
            const TierIcon = tier.icon;

            return (
              <div className="max-w-md mx-auto">
                <style>{`
                  @keyframes popIn { 0% { transform: scale(0.4); opacity: 0; } 60% { transform: scale(1.08); opacity: 1; } 100% { transform: scale(1); } }
                  @keyframes shakeIcon { 0%, 100% { transform: rotate(0deg); } 20% { transform: rotate(-10deg); } 40% { transform: rotate(8deg); } 60% { transform: rotate(-6deg); } 80% { transform: rotate(4deg); } }
                  @keyframes confettiFall { 0% { transform: translateY(-10px) rotate(0deg); opacity: 1; } 100% { transform: translateY(140px) rotate(360deg); opacity: 0; } }
                  @keyframes scorePop { 0% { transform: scale(0); opacity: 0; } 70% { transform: scale(1.15); } 100% { transform: scale(1); opacity: 1; } }
                `}</style>

                <div className={`${tier.bg} border ${tier.border} rounded-3xl p-8 text-center relative overflow-hidden shadow-2xl`}>
                  {tier.anim === "confetti" &&
                    Array.from({ length: 14 }).map((_, i) => (
                      <span
                        key={i}
                        className="absolute top-0 w-2 h-2 rounded-sm"
                        style={{
                          left: `${(i * 97) % 100}%`,
                          background: ["#e879f9", "#c084fc", "#818cf8", "#fff", "#f472b6"][i % 5],
                          animation: `confettiFall ${1.2 + (i % 5) * 0.2}s ease-in ${(i % 6) * 0.15}s infinite`,
                        }}
                      />
                    ))}

                  <div
                    className="w-16 h-16 mx-auto rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center relative shadow-inner"
                    style={{
                      animation:
                        tier.anim === "shake"
                          ? "popIn 0.5s ease-out, shakeIcon 0.6s ease-in-out 0.5s"
                          : "popIn 0.5s ease-out",
                    }}
                  >
                    <TierIcon className={`text-3xl text-white`} />
                  </div>

                  <h2
                    className="text-white text-2xl font-bold mt-4"
                    style={{ animation: "popIn 0.5s ease-out 0.1s both" }}
                  >
                    {tier.label}
                  </h2>
                  <p className={`text-xs sm:text-sm mt-1 opacity-90 ${tier.accent}`}>{tier.sub}</p>

                  <p
                    className="text-5xl font-extrabold text-white mt-5 relative"
                    style={{ animation: "scorePop 0.5s ease-out 0.2s both" }}
                  >
                    {score}<span className="text-xl text-white/60">/{questions.length}</span>
                  </p>
                  <p className={`text-sm font-semibold mt-1 opacity-90 ${tier.accent}`}>{percent}% correct</p>

                  <div className="flex gap-3 mt-8 relative">
                    <button
                      onClick={() => startLevel(levelKey)}
                      className="flex-1 bg-white/15 hover:bg-white/25 text-white text-sm font-bold py-3 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 border border-white/10"
                    >
                      <IoRefreshOutline /> Retry Quiz
                    </button>
                    <button
                      onClick={backToLevels}
                      className="flex-1 bg-white text-slate-900 text-sm font-bold py-3 rounded-2xl hover:bg-slate-100 transition-all active:scale-95 shadow-lg"
                    >
                      Change Level
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <BottomNav className="block sm:hidden" />
    </div>
  );
}

export default InterviewQuestions;