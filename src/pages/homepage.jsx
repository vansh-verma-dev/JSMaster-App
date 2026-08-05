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
       {/* ================= HERO SECTION ================= */}

<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-800 p-8 lg:p-12">

  {/* Background Blur */}
  <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-violet-400/30 blur-3xl"></div>
  <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-pink-400/20 blur-3xl"></div>

  <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">

    {/* LEFT */}

    <div>

      <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur-md">
        Welcome Back 👋
      </span>

      <h1 className="mt-6 text-4xl lg:text-6xl font-extrabold leading-tight text-white">
        Hi, {username}
      </h1>

      <p className="mt-4 max-w-xl text-lg text-violet-100">
        Continue your JavaScript journey by solving real-world coding
        challenges, building projects and preparing for interviews.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">

        <button className="rounded-2xl bg-white px-7 py-4 font-semibold text-violet-700 transition hover:scale-105">
          Continue Learning
        </button>

        <button className="rounded-2xl border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-lg transition hover:bg-white/20">
          Explore Roadmap
        </button>

      </div>

    </div>

    {/* RIGHT */}

    <div className="flex justify-center">

      <div className="relative">

        <img
          src="https://ouch-cdn2.icons8.com/Q8Qzw6C4OQv4L9wF7l2F4M1P0eGqG5JQnIYt6F7rVkg/rs:fit:512:512/czM6Ly9pY29uczgvbWQvMDAwMDAwL2NvZGluZy5wbmc.png"
          alt=""
          className="w-80 drop-shadow-2xl"
        />

        <div className="absolute -top-5 left-0 rounded-2xl bg-white p-4 shadow-xl">
          <p className="text-xs text-gray-500">Current Level</p>
          <h3 className="text-xl font-bold text-violet-700">
            Beginner
          </h3>
        </div>

        <div className="absolute bottom-0 -right-5 rounded-2xl bg-white p-4 shadow-xl">
          <p className="text-xs text-gray-500">XP Earned</p>
          <h3 className="text-xl font-bold text-violet-700">
            245 XP
          </h3>
        </div>

      </div>

    </div>

  </div>

</div>

          {/* Stat cards: always 2/row on mobile, 4/row from lg up */}
    {/* ================= CONTINUE LEARNING ================= */}

<div className="mt-8 grid lg:grid-cols-3 gap-6">

  <div className="lg:col-span-2 rounded-3xl bg-white p-6 shadow-lg border">

    <div className="flex justify-between items-center">

      <div>

        <p className="text-gray-500">
          Continue Learning
        </p>

        <h2 className="text-2xl font-bold mt-2">
          JavaScript Arrays
        </h2>

      </div>

      <button className="rounded-xl bg-violet-600 px-5 py-3 text-white">
        Continue
      </button>

    </div>

    <div className="mt-6 h-3 rounded-full bg-gray-200">

      <div
        className="h-3 rounded-full bg-gradient-to-r from-violet-500 to-purple-600"
        style={{ width: "72%" }}
      />

    </div>

    <div className="mt-3 flex justify-between text-sm text-gray-500">

      <span>72% Completed</span>

      <span>15 min left</span>

    </div>

  </div>

  <div className="rounded-3xl bg-gradient-to-br from-orange-400 to-pink-500 p-6 text-white shadow-xl">

    <p className="opacity-80">
      Today's Challenge
    </p>

    <h2 className="mt-2 text-2xl font-bold">
      Login Validation
    </h2>

    <p className="mt-3">
      Solve today's coding challenge and earn
      <span className="font-bold"> 20 XP</span>
    </p>

    <button className="mt-6 rounded-xl bg-white px-5 py-3 font-semibold text-orange-500">
      Start Challenge
    </button>

  </div>

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
      <BottomNav />
    </div>

  );
}

export default HomePage;