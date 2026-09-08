import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiPlay,
  FiTerminal,
  FiCheckCircle,
  FiFolder,
  FiMessageSquare,
  FiBookOpen,
} from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";

import Navbar from "../components/navbar";
import MobileTopBar from "../components/mobileTopBar";
import BottomNavbar from "../components/bottomNavbar";

/* ------------------------------------------------------------------ */
/*  Code snippet tokens for the hero editor mock — plain data, no     */
/*  raw JSX braces, so it's safe to render as spans.                  */
/* ------------------------------------------------------------------ */
const CODE_LINES = [
  [
    { t: "function ", c: "kw" },
    { t: "reverseString", c: "fn" },
    { t: "(str) ", c: "def" },
    { t: "{", c: "def" },
  ],
  [{ t: "  return ", c: "kw" }, { t: "str.split('').reverse().join('');", c: "def" }],
  [{ t: "}", c: "def" }],
  [{ t: "", c: "def" }],
  [
    { t: "console", c: "obj" },
    { t: ".log", c: "fn" },
    { t: "(", c: "def" },
    { t: "reverseString", c: "fn" },
    { t: "(", c: "def" },
    { t: "'JSMaster'", c: "str" },
    { t: "));", c: "def" },
  ],
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <MobileTopBar />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap');
        .jsm-display { font-family: 'Space Grotesk', 'Inter', system-ui, sans-serif; }
        .jsm-mono { font-family: 'JetBrains Mono', ui-monospace, 'SFMono-Regular', Menlo, monospace; }

        @keyframes jsm-blink { 0%, 45% { opacity: 1; } 50%, 95% { opacity: 0; } 100% { opacity: 1; } }
        .jsm-cursor { animation: jsm-blink 1.1s steps(1) infinite; }

        @keyframes jsm-rise {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .jsm-hero-in > * { animation: jsm-rise 0.6s cubic-bezier(.2,.7,.2,1) both; }
        .jsm-hero-in > *:nth-child(1) { animation-delay: 0.02s; }
        .jsm-hero-in > *:nth-child(2) { animation-delay: 0.09s; }
        .jsm-hero-in > *:nth-child(3) { animation-delay: 0.16s; }
        .jsm-hero-in > *:nth-child(4) { animation-delay: 0.23s; }

        .jsm-snap { scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; }
        .jsm-snap > * { scroll-snap-align: center; }
        .jsm-snap::-webkit-scrollbar { display: none; }

        @media (prefers-reduced-motion: reduce) {
          .jsm-cursor, .jsm-hero-in > * { animation: none !important; }
        }
      `}</style>

      <div className="min-h-screen bg-white pb-8 md:pb-0">
        <Hero />
        <Pillars />
        <LearningPath />
        <WhyJsMaster />
        <FinalCta />
        <Footer />
      </div>

      <BottomNavbar />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */
function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setVisibleLines(CODE_LINES.length);
      return;
    }
    const timers = CODE_LINES.map((_, i) =>
      setTimeout(() => setVisibleLines((v) => Math.max(v, i + 1)), 500 + i * 260)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* soft colorful glows — subtle, kept behind content */}
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-[0.35] blur-3xl md:h-96 md:w-96"
        style={{ background: "#C9B6F0" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 top-10 h-64 w-64 rounded-full opacity-[0.3] blur-3xl md:h-80 md:w-80"
        style={{ background: "#FDE68A" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-52 w-52 rounded-full opacity-[0.22] blur-3xl"
        style={{ background: "#A7E8DE" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 pt-10 pb-14 sm:px-8 md:pt-16 md:pb-20 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          {/* Left: copy */}
          <div className="jsm-hero-in">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F0EDF7] px-3 py-1 text-[11px] font-semibold text-[#5B2A9E]">
              Free to start, always
            </span>

            <h1 className="jsm-display mt-4 text-[2.15rem] leading-[1.12] font-semibold tracking-tight text-[#16121F] sm:text-5xl md:text-[3.2rem]">
              Learn JavaScript the way you'll actually use it.
            </h1>

            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#5A5570] md:text-base">
              Clear topics to build your foundation, real tasks to practice on,
              projects to put on your resume, and the interview questions that
              actually get asked. One platform, one path.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/topics"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#5B2A9E] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#4a2183] active:scale-[0.98]"
              >
                Start with the basics
                <FiArrowRight size={15} />
              </Link>
              <Link
                to="/tasks"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E7E3F0] bg-white px-6 py-3.5 text-sm font-semibold text-[#16121F] transition hover:bg-[#FAF9FC] active:scale-[0.98]"
              >
                Browse practice tasks
              </Link>
            </div>

            <p className="mt-5 text-xs text-[#9A94AD]">
              No signup wall to browse — jump straight into any topic.
            </p>
          </div>

          {/* Right: code editor mock */}
          <div className="jsm-hero-in">
            <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-[#EDEAF5] bg-[#150a30] shadow-[0_20px_50px_-15px_rgba(91,42,158,0.35)] md:rounded-3xl">
              {/* window chrome */}
              <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                <span className="jsm-mono ml-2 text-[11px] text-white/35">
                  reverseString.js
                </span>
              </div>

              {/* code */}
              <div className="jsm-mono px-5 py-5 text-[13px] leading-[1.85] md:text-[13.5px]">
                {CODE_LINES.slice(0, visibleLines).map((line, i) => (
                  <div key={i}>
                    {line.map((tok, j) => (
                      <span
                        key={j}
                        style={{
                          color:
                            tok.c === "kw"
                              ? "#C4B5FD"
                              : tok.c === "str"
                              ? "#F7DF1E"
                              : tok.c === "fn"
                              ? "#8FD6FF"
                              : tok.c === "obj"
                              ? "#E9E4F5"
                              : "#E9E4F5",
                        }}
                      >
                        {tok.t}
                      </span>
                    ))}
                    {i === visibleLines - 1 && (
                      <span className="jsm-cursor ml-0.5 inline-block h-[13px] w-[7px] translate-y-[2px] bg-white/70" />
                    )}
                  </div>
                ))}
              </div>

              {/* output */}
              <div className="flex items-center gap-2 border-t border-white/5 bg-black/20 px-5 py-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#28C840]" />
                <span className="jsm-mono text-[11.5px] text-white/45">
                  {visibleLines >= CODE_LINES.length ? '"retsaMSJ"' : "running…"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PILLARS — Topics / Tasks / Projects / Interview Qs                 */
/*  each mimics the real UI pattern of that section of the app         */
/* ------------------------------------------------------------------ */
function Pillars() {
  const cards = [
    {
      icon: FiBookOpen,
      label: "Topics",
      title: "Every concept, explained plainly",
      desc: "From variables to closures to async — structured docs you can actually follow, with runnable examples.",
      to: "/topics",
      accent: "#5B2A9E",
      accentSoft: "#F0EDF7",
      mock: <TopicsMock accent="#5B2A9E" accentSoft="#F0EDF7" />,
    },
    {
      icon: FiCheckCircle,
      label: "Tasks",
      title: "Practice on real problems",
      desc: "Hands-on tasks sorted by difficulty and category, so you always know what to try next.",
      to: "/tasks",
      accent: "#D97706",
      accentSoft: "#FEF3C7",
      mock: <TasksMock accent="#D97706" accentSoft="#FEF3C7" />,
    },
    {
      icon: FiFolder,
      label: "Projects",
      title: "Build things worth showing",
      desc: "Guided projects that turn scattered knowledge into something real for your portfolio.",
      to: "/projects",
      accent: "#0D9488",
      accentSoft: "#CCFBF1",
      mock: <ProjectsMock accent="#0D9488" accentSoft="#CCFBF1" />,
    },
    {
      icon: FiMessageSquare,
      label: "Interview Qs",
      title: "Prep for the real questions",
      desc: "The questions that actually come up in JavaScript interviews, with answers that explain the 'why'.",
      to: "/interview-questions",
      accent: "#DB2777",
      accentSoft: "#FCE7F3",
      mock: <InterviewMock accent="#DB2777" accentSoft="#FCE7F3" />,
    },
  ];

  return (
    <section className="bg-[#FAF9FC] py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-lg">
          <h2 className="jsm-display text-2xl font-semibold tracking-tight text-[#16121F] md:text-3xl">
            Everything you need, nothing you don't.
          </h2>
          <p className="mt-2.5 text-[15px] leading-relaxed text-[#5A5570]">
            Four parts that work together — learn a concept, practice it, use
            it in a project, then defend it in an interview.
          </p>
        </div>

        {/* mobile: snap-scroll cards, desktop: 2x2 grid */}
        <div className="jsm-snap mt-8 flex gap-4 overflow-x-auto px-0.5 pb-2 md:mt-10 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible">
          {cards.map((card) => (
            <Link
              to={card.to}
              key={card.label}
              className="group flex w-[82%] shrink-0 flex-col rounded-2xl border border-[#EDEAF5] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-18px_rgba(20,15,35,0.25)] md:w-auto md:p-6"
              style={{ borderColor: "#EDEAF5" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = card.accent + "55")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#EDEAF5")}
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-xl"
                style={{ background: card.accentSoft, color: card.accent }}
              >
                <card.icon size={16} />
              </span>

              <span
                className="mt-3 text-xs font-bold uppercase tracking-wide"
                style={{ color: card.accent }}
              >
                {card.label}
              </span>

              <h3 className="mt-1.5 text-base font-bold text-[#16121F] md:text-lg">
                {card.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#7A7590]">
                {card.desc}
              </p>

              <div className="mt-4">{card.mock}</div>

              <span
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold"
                style={{ color: card.accent }}
              >
                Explore {card.label.toLowerCase()}
                <FaChevronRight
                  size={9}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function TopicsMock({ accent, accentSoft }) {
  const rows = [
    { t: "Closures", active: false },
    { t: "Array Methods", active: true },
    { t: "Promises", active: false },
  ];
  return (
    <div className="rounded-xl border border-[#F0EDF7] bg-[#FCFBFE] p-2">
      {rows.map((r) => (
        <div
          key={r.t}
          className="flex items-center justify-between rounded-lg px-2.5 py-2 text-[12.5px]"
          style={{
            background: r.active ? accentSoft : "transparent",
            color: r.active ? accent : "#6B667F",
            fontWeight: r.active ? 600 : 400,
          }}
        >
          {r.t}
          {r.active && <FaChevronRight size={9} />}
        </div>
      ))}
    </div>
  );
}

function TasksMock({ accent, accentSoft }) {
  return (
    <div className="rounded-xl border border-[#F0EDF7] bg-[#FCFBFE] p-3">
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="rounded-md bg-[#F0EDF7] px-2 py-0.5 text-[10px] font-bold text-[#5B2A9E]">
          Array
        </span>
        <span
          className="rounded-md px-2 py-0.5 text-[10px] font-bold"
          style={{ background: accentSoft, color: accent }}
        >
          Intermediate
        </span>
      </div>
      <p className="mt-2 text-[12.5px] font-semibold text-[#16121F]">
        Flatten a nested array
      </p>
      <span className="mt-2 inline-block rounded-md bg-[#16121F] px-2.5 py-1 text-[10px] font-bold text-white">
        Start Task
      </span>
    </div>
  );
}

function ProjectsMock({ accent, accentSoft }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#F0EDF7] bg-[#FCFBFE]">
      <div className="flex items-center gap-1.5 border-b border-[#F0EDF7] px-2.5 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#E4E0EE]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#E4E0EE]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#E4E0EE]" />
      </div>
      <div
        className="h-12"
        style={{ background: `linear-gradient(135deg, ${accentSoft}, #FCFBFE)` }}
      />
      <div className="px-2.5 py-2">
        <p className="text-[12.5px] font-semibold text-[#16121F]">
          Weather Dashboard
        </p>
        <div className="mt-1 flex gap-1">
          <span
            className="rounded px-1.5 py-0.5 text-[9.5px] font-semibold"
            style={{ background: accentSoft, color: accent }}
          >
            Fetch API
          </span>
          <span
            className="rounded px-1.5 py-0.5 text-[9.5px] font-semibold"
            style={{ background: accentSoft, color: accent }}
          >
            DOM
          </span>
        </div>
      </div>
    </div>
  );
}

function InterviewMock({ accent, accentSoft }) {
  return (
    <div className="rounded-xl border border-[#F0EDF7] bg-[#FCFBFE] p-3">
      <p className="text-[12.5px] font-semibold text-[#16121F]">
        What's the difference between let and const?
      </p>
      <div className="mt-2 flex items-center gap-1.5 text-[11px]" style={{ color: accent }}>
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
        Tap to reveal the answer
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  LEARNING PATH — genuinely sequential, so numbers earn their place  */
/* ------------------------------------------------------------------ */
function LearningPath() {
  const steps = [
    {
      n: "01",
      title: "Learn the fundamentals",
      desc: "Work through topics at your own pace, from variables to async JS.",
      accent: "#5B2A9E",
      accentSoft: "#F0EDF7",
    },
    {
      n: "02",
      title: "Practice with real tasks",
      desc: "Apply each concept immediately with tasks sorted by difficulty.",
      accent: "#D97706",
      accentSoft: "#FEF3C7",
    },
    {
      n: "03",
      title: "Build real projects",
      desc: "Combine what you've learned into projects you can actually show off.",
      accent: "#0D9488",
      accentSoft: "#CCFBF1",
    },
    {
      n: "04",
      title: "Prepare for interviews",
      desc: "Review the questions companies actually ask, and why the answers work.",
      accent: "#DB2777",
      accentSoft: "#FCE7F3",
    },
  ];

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <h2 className="jsm-display text-2xl font-semibold tracking-tight text-[#16121F] md:text-3xl">
          One path, start to finish.
        </h2>

        {/* mobile: vertical timeline / desktop: horizontal */}
        <div className="mt-9 md:grid md:grid-cols-4 md:gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative flex gap-4 pb-8 md:block md:pb-0">
              {/* connector */}
              {i !== steps.length - 1 && (
                <span
                  className="absolute left-[15px] top-8 bottom-0 w-px bg-[#EDEAF5] md:hidden"
                  aria-hidden="true"
                />
              )}
              <span
                className="jsm-display flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold md:h-9 md:w-9"
                style={{ background: s.accentSoft, color: s.accent }}
              >
                {s.n}
              </span>
              <div className="md:mt-4">
                <h3 className="text-[15px] font-bold text-[#16121F] md:text-base">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#7A7590]">
                  {s.desc}
                </p>
              </div>
              {i !== steps.length - 1 && (
                <span
                  className="absolute right-[-12px] top-[10px] hidden h-px w-6 bg-[#EDEAF5] md:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  WHY JSMASTER — plain, specific, no fabricated stats                */
/* ------------------------------------------------------------------ */
function WhyJsMaster() {
  const points = [
    {
      icon: FiBookOpen,
      title: "Structured, not scattered",
      desc: "A curriculum you can follow top to bottom — not a wiki you have to piece together yourself.",
      accent: "#5B2A9E",
      accentSoft: "#F0EDF7",
    },
    {
      icon: FiTerminal,
      title: "Built around real code",
      desc: "Every topic and task uses runnable JavaScript, not just theory to read past.",
      accent: "#0D9488",
      accentSoft: "#CCFBF1",
    },
    {
      icon: FiMessageSquare,
      title: "Interview-ready, on purpose",
      desc: "Questions pulled from what companies actually ask — not generic trivia.",
      accent: "#DB2777",
      accentSoft: "#FCE7F3",
    },
  ];

  return (
    <section className="bg-[#FAF9FC] py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-3">
          {points.map((p) => (
            <div key={p.title}>
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: p.accentSoft, color: p.accent }}
              >
                <p.icon size={18} />
              </span>
              <h3 className="mt-3.5 text-[15px] font-bold text-[#16121F]">
                {p.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#7A7590]">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FINAL CTA                                                          */
/* ------------------------------------------------------------------ */
function FinalCta() {
  return (
    <section className="px-5 py-4 sm:px-8 lg:px-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#150a30] px-6 py-12 text-center sm:px-10 md:py-16">
        <div
          className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full opacity-20 blur-3xl"
          style={{ background: "#8B5CF6" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full opacity-20 blur-3xl"
          style={{ background: "#F7DF1E" }}
          aria-hidden="true"
        />
        <h2 className="jsm-display relative text-2xl font-semibold text-white md:text-3xl">
          Ready to actually learn JavaScript?
        </h2>
        <p className="relative mx-auto mt-2.5 max-w-sm text-sm leading-relaxed text-white/55 md:text-[15px]">
          Pick a topic, run some code, and start building the kind of
          understanding that holds up in an interview.
        </p>
        <Link
          to="/topics"
          className="relative mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#16121F] transition hover:bg-white/90 active:scale-[0.98]"
        >
          <FiPlay size={14} />
          Start learning free
        </Link>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                             */
/* ------------------------------------------------------------------ */
function Footer() {
  return (
    <footer className="border-t border-[#F0EDF7] px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="jsm-display flex items-center gap-1.5 text-sm font-bold text-[#16121F]">
          <span className="h-2 w-2 rounded-full bg-[#F7DF1E]" />
          JS<span className="text-[#5B2A9E]">Master</span>
        </span>
        <div className="flex gap-5 text-xs font-medium text-[#7A7590]">
          <Link to="/topics" className="hover:text-[#5B2A9E]">
            Topics
          </Link>
          <Link to="/tasks" className="hover:text-[#5B2A9E]">
            Tasks
          </Link>
          <Link to="/projects" className="hover:text-[#5B2A9E]">
            Projects
          </Link>
          <Link to="/interview-questions" className="hover:text-[#5B2A9E]">
            Interview Qs
          </Link>
        </div>
        <span className="text-[11px] text-[#B0AAC2]">
          © {new Date().getFullYear()} JSMaster
        </span>
      </div>
    </footer>
  );
}