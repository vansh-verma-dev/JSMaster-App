import Navbar from "../componentes/navbar";
import Sidebar from "../componentes/sidebar";
import { IoArrowForward } from "react-icons/io5";
import {
  FcStatistics,
  FcReadingEbook,
  FcFaq,
  FcAlarmClock,
  FcWorkflow,
  FcProcess,
  FcSynchronize,
  FcTreeStructure,
} from "react-icons/fc";
import BottomNav from "../componentes/Bottomnav";

function HomePage() {
  const username = "Vansh Verma";
  const progress = 20;
  const userTopics = 33;
  const userQuestions = 55;
  const userStreak = 7;

  const stats = [
    {
      label: "Progress",
      value: `${progress}%`,
      sub: "Keep going",
      icon: FcStatistics,
      cardBg: "bg-purple-900",
      cardBorder: "border-purple-800",
      accent: "text-purple-300",
      link: null,
      bar: progress,
    },
    {
      label: "Topics Completed",
      value: userTopics,
      total: "/80",
      sub: "Keep going",
      icon: FcReadingEbook,
      cardBg: "bg-blue-900",
      cardBorder: "border-blue-800",
      accent: "text-blue-300",
      link: "See all topics",
    },
    {
      label: "Interview Questions",
      value: userQuestions,
      total: "/100",
      sub: "Keep going",
      icon: FcFaq,
      cardBg: "bg-amber-900",
      cardBorder: "border-amber-800",
      accent: "text-amber-300",
      link: "See all MCQs",
    },
    {
      label: "Day Streak",
      value: userStreak,
      total: " days",
      sub: "Don't break it!",
      icon: FcAlarmClock,
      cardBg: "bg-rose-900",
      cardBorder: "border-rose-800",
      accent: "text-rose-300",
      link: null,
    },
  ];

  const topics = [
    {
      label: "Arrays & Loops",
      desc: "Used to render lists, tables & feeds in every app",
      icon: FcWorkflow,
      cardBg: "bg-teal-900",
      cardBorder: "border-teal-800",
      accent: "text-teal-300",
    },
    {
      label: "Functions & Closures",
      desc: "Powers reusable logic & private state in your code",
      icon: FcProcess,
      cardBg: "bg-indigo-900",
      cardBorder: "border-indigo-800",
      accent: "text-indigo-300",
    },
    {
      label: "Promises & Async/Await",
      desc: "Fetching APIs, loading data without freezing the UI",
      icon: FcSynchronize,
      cardBg: "bg-cyan-900",
      cardBorder: "border-cyan-800",
      accent: "text-cyan-300",
    },
    {
      label: "DOM Manipulation",
      desc: "Updating the page live — clicks, forms, animations",
      icon: FcTreeStructure,
      cardBg: "bg-emerald-900",
      cardBorder: "border-emerald-800",
      accent: "text-emerald-300",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex bg-white">
        <Sidebar />

        <div className="flex-1 p-4 sm:p-6 pt-5 min-h-[90vh]">
          {/* Greeting */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Welcome back, {username}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Let's continue your JavaScript learning journey
            </p>
          </div>

          {/* Stat cards: always 2/row on mobile, 4/row from lg up */}
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {stats.map(({ label, value, total, sub, icon: Icon, cardBg, cardBorder, accent, link, bar }) => (
              <div
                key={label}
                className={`${cardBg} border ${cardBorder} rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col`}
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-xs sm:text-sm font-medium text-gray-300 leading-tight">
                    {label}
                  </p>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon className="text-lg sm:text-xl" />
                  </div>
                </div>

                <div className="mt-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    {value}
                    {total && <span className="text-sm text-gray-400">{total}</span>}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-gray-400">{sub}</p>
                </div>

                {bar !== undefined && (
                  <div className="w-full h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-400 to-violet-300 rounded-full"
                      style={{ width: `${bar}%` }}
                    />
                  </div>
                )}

                {link && (
                  <button
                    className={`mt-2 text-[11px] sm:text-xs font-medium ${accent} flex items-center gap-1 hover:gap-1.5 transition-all self-start`}
                  >
                    {link} <IoArrowForward />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Topics section - real-world application focus */}
          <div className="mt-8">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              Topics you'll actually use
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Where each concept shows up in real applications
            </p>

            <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {topics.map(({ label, desc, icon: Icon, cardBg, cardBorder, accent }) => (
                <div
                  key={label}
                  className={`${cardBg} border ${cardBorder} rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col cursor-pointer`}
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon className="text-lg sm:text-xl" />
                  </div>

                  <h4 className="text-sm sm:text-base font-semibold text-white mt-3">
                    {label}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-300 mt-1 leading-snug">
                    {desc}
                  </p>

                  <button
                    className={`mt-3 text-[11px] sm:text-xs font-medium ${accent} flex items-center gap-1 hover:gap-1.5 transition-all self-start`}
                  >
                    Start learning <IoArrowForward />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BottomNav/>
    </div>

  );
}

export default HomePage;