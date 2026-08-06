import Navbar from "../componentes/navbar";
import Sidebar from "../componentes/sidebar";
import BottomNav from "../componentes/Bottomnav";
import { 
  IoArrowForward, 
  IoFlame, 
  IoSparkles, 
  IoCodeSlash, 
  IoLayers, 
  IoCheckmarkDoneCircle, 
  IoHelpCircle, 
  IoTerminal,
  IoRocket,
  IoJournalOutline,
  IoBriefcaseOutline,
  IoConstructOutline
} from "react-icons/io5";
 

function HomePage() {
  const username = "Vansh Verma";
  const userStreak = 7;

  // Main feature navigation shortcuts / pages preview
  const platformSections = [
    {
      title: "JS Core Topics",
      desc: "Master closures, async/await, DOM, and array methods with deep code examples.",
      icon: IoCodeSlash,
      badge: "Core Learning",
      count: "80+ Topics",
      bg: "bg-gradient-to-br from-teal-500 to-emerald-600",
      lightBg: "bg-teal-50",
      textAccent: "text-teal-700",
      border: "border-teal-200",
      shadow: "shadow-teal-500/15",
    },
    {
      title: "Interview MCQs",
      desc: "Test your skills with easy to pro level multiple-choice questions & instant scoring.",
      icon: IoHelpCircle,
      badge: "Prep & Quiz",
      count: "100 Questions",
      bg: "bg-gradient-to-br from-purple-600 to-indigo-600",
      lightBg: "bg-purple-50",
      textAccent: "text-purple-700",
      border: "border-purple-200",
      shadow: "shadow-purple-500/15",
    },
    {
      title: "Projects & Builds",
      desc: "Explore high-end web applications like Nova Trip, Memora Books, and e-commerce stores.",
      icon: IoRocket,
      badge: "Real World",
      count: "5+ Showcase",
      bg: "bg-gradient-to-br from-blue-600 to-cyan-600",
      lightBg: "bg-blue-50",
      textAccent: "text-blue-700",
      border: "border-blue-200",
      shadow: "shadow-blue-500/15",
    },
    {
      title: "Daily Tasks & Practice",
      desc: "Stay productive by keeping track of your daily coding tasks, goals, and revision logs.",
      icon: IoCheckmarkDoneCircle,
      badge: "Productivity",
      count: "Active Tracker",
      bg: "bg-gradient-to-br from-amber-500 to-orange-600",
      lightBg: "bg-amber-50",
      textAccent: "text-amber-700",
      border: "border-amber-200",
      shadow: "shadow-amber-500/15",
    },
  ];

  // Quick Stats cards with distinct color themes
  const stats = [
    {
      label: "Overall Progress",
      value: "20%",
      sub: "Keep pushing forward",
      icon: IoLayers,
      bg: "bg-fuchsia-50",
      border: "border-fuchsia-200",
      text: "text-fuchsia-700",
      bar: 20,
    },
    {
      label: "Topics Mastered",
      value: "33 / 80",
      sub: "Solid foundation built",
      icon: IoJournalOutline,
      bg: "bg-indigo-50",
      border: "border-indigo-200",
      text: "text-indigo-700",
    },
    {
      label: "MCQs Solved",
      value: "55 / 100",
      sub: "Interview readiness rising",
      icon: IoTerminal,
      bg: "bg-cyan-50",
      border: "border-cyan-200",
      text: "text-cyan-700",
    },
    {
      label: "Day Streak",
      value: `${userStreak} Days`,
      sub: "Consistency is key",
      icon: IoFlame,
      bg: "bg-rose-50",
      border: "border-rose-200",
      text: "text-rose-700",
    },
  ];

  // Featured Projects list for the new section
  const featuredProjects = [
    {
      name: "Nova Trip",
      tag: "Travel Platform",
      desc: "High-end luxury travel web interface featuring destination guides and bookings.",
      accent: "border-blue-200 bg-blue-50/50 text-blue-700"
    },
    {
      name: "Memora Books",
      tag: "E-Commerce Startup",
      desc: "Customized photo album ordering platform for weddings, birthdays and family memories.",
      accent: "border-purple-200 bg-purple-50/50 text-purple-700"
    },
    {
      name: "Apex Coder Hub",
      tag: "Content Creator Platform",
      desc: "Coding tutorials and resources repository built for YouTube and Instagram audience.",
      accent: "border-emerald-200 bg-emerald-50/50 text-emerald-700"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20 sm:pb-0">
      <Navbar />
      
      {/* Container holding sidebar on left edge */}
      <div className="flex w-full">
        <Sidebar className="hidden md:block shrink-0" />

        {/* Main Home Dashboard Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 w-full h-[90vh] overflow-hidden  overflow-y-scroll">
        
          {/* IMPROVED HERO SECTION (Text Left, Image Right strictly on all screens, Simple image with no rounded/no shadow) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200 border border-slate-200 flex flex-row items-center justify-between gap-4 sm:gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 bg-purple-50 border border-purple-200 text-purple-700 text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
                <IoSparkles className="text-purple-600" /> Full Stack Developer Dashboard
              </div>
              <h1 className="text-xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Welcome back, {username}
              </h1>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed font-medium">
                Your ultimate developer hub for mastering JavaScript, tackling interview MCQs, managing tasks, and building real-world projects.
              </p>

              <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl shadow-lg shadow-purple-600/25 transition-all flex items-center gap-2 active:scale-95">
                  Explore Hub <IoArrowForward />
                </button>
                <div className="flex items-center gap-1.5 sm:gap-2 bg-amber-50 border border-amber-200 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-amber-800 text-xs font-bold shadow-sm">
                  <IoFlame className="text-amber-600 text-base animate-pulse" />
                  <span>{userStreak} Days Streak</span>
                </div>
              </div>
            </div>

            {/* Simple image: No rounded corners, no shadow, placed cleanly on the right */}
            <div className="w-28 sm:w-48 shrink-0">
              <img
                src="https://i.pinimg.com/1200x/4a/ca/fe/4acafecd9b6e8bf88b2b80b971e338eb.jpg"
                alt="Dashboard illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* QUICK STATS SECTION (Colorful modern cards) */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Your Performance Overview
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {stats.map(({ label, value, sub, icon: Icon, bg, border, text, bar }) => (
                <div
                  key={label}
                  className={`${bg} border ${border} rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <p className={`text-xs sm:text-sm font-bold ${text} leading-tight`}>
                        {label}
                      </p>
                      <div className={`w-10 h-10 shrink-0 rounded-2xl bg-white shadow-sm flex items-center justify-center ${text}`}>
                        <Icon className="text-xl" />
                      </div>
                    </div>

                    <div className="mt-3">
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {value}
                      </h2>
                      <p className="text-[11px] sm:text-xs font-medium text-slate-600 mt-0.5">{sub}</p>
                    </div>
                  </div>

                  {bar !== undefined && (
                    <div className="w-full h-2 bg-white/80 rounded-full mt-4 overflow-hidden border border-fuchsia-200">
                      <div
                        className="h-full bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-full transition-all duration-500"
                        style={{ width: `${bar}%` }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* MAIN PLATFORM SECTIONS (Showcasing all app pages: Topics, MCQ, Projects, Tasks) */}
          <div className="mt-10">
            <div className="mb-5">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Explore Platform Modules
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Jump straight into any section of your portfolio and learning suite
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {platformSections.map(({ title, desc, icon: Icon, badge, count, bg, lightBg, textAccent, border, shadow }) => (
                <div
                  key={title}
                  className={`bg-white border ${border} rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden`}
                >
                  {/* Decorative background accent blob */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>

                  <div>
                    <div className="flex items-center justify-between">
                      <div className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center text-white shadow-lg ${shadow}`}>
                        <Icon className="text-2xl" />
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${lightBg} ${textAccent} border ${border}`}>
                        {badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 mt-5 group-hover:text-purple-600 transition-colors">
                      {title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-lg">
                      {count}
                    </span>
                    <span className={`text-xs font-bold ${textAccent} flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform`}>
                      Open Module <IoArrowForward />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NEW SECTION: FEATURED PORTFOLIO PROJECTS */}
          <div className="mt-10">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Featured Key Projects
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Production-ready web applications built with React, Tailwind & JavaScript
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {featuredProjects.map(({ name, tag, desc, accent }) => (
                <div key={name} className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 font-bold">
                        <IoBriefcaseOutline className="text-lg" />
                      </span>
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${accent}`}>
                        {tag}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900">{name}</h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">{desc}</p>
                  </div>
                  <button className="mt-5 text-xs font-bold text-purple-600 flex items-center gap-1 hover:gap-1.5 transition-all">
                    View Project <IoArrowForward />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ADDITIONAL FEATURE BANNER (Developer Productivity Pro-tip) */}
          <div className="mt-10 bg-gradient-to-r from-slate-900 via-purple-950 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-purple-900/50">
            <div className="relative z-10 max-w-2xl">
              <span className="bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-bold px-3.5 py-1.5 rounded-full inline-block mb-3">
                💡 Developer Routine
              </span>
              <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Consistency Builds Exceptional Developers
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                "Small daily progress adds up to massive engineering milestones. Complete your daily code challenges and keep building production-grade UI applications!"
              </p>
            </div>
          </div>

        </div>
      </div>
      <BottomNav className="block sm:hidden" />
    </div>
  );
}

export default HomePage;