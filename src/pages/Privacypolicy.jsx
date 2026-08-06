import Navbar from "../componentes/navbar";
import {
  IoShieldCheckmarkOutline,
  IoServerOutline,
  IoMegaphoneOutline,
  IoLockClosedOutline,
  IoPeopleOutline,
  IoRefreshOutline,
  IoMailOutline,
  IoSparklesOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";
import Sidebar from "../componentes/sidebar";
import BottomNav from "../componentes/Bottomnav";

const sections = [
  {
    icon: IoServerOutline,
    title: "What We Store",
    color: "text-purple-600",
    bg: "bg-purple-100/80 border-purple-200",
    body: [
      "JSMaster doesn't run user accounts on a server — there's no signup, no password, and we don't collect personal details like your name or email.",
      "Your progress, notes, completed topics, task status, and MCQ scores are saved directly in your browser's local storage. This data lives only on your device and is never sent to us.",
      "Because it's stored locally, clearing your browser data, using a different browser, or switching devices will reset your progress. We'd recommend not relying on it for anything you can't afford to lose.",
    ],
  },
  {
    icon: IoMegaphoneOutline,
    title: "Ads on This Site",
    color: "text-amber-600",
    bg: "bg-amber-100/80 border-amber-200",
    body: [
      "We show ads through Google AdSense to keep JSMaster free for everyone.",
      "AdSense may use cookies and similar technologies to show ads based on your visits to this and other sites. Google may collect data such as your IP address and browsing activity for this purpose.",
      "You can control ad personalization through Google's Ads Settings, and manage cookies through your browser settings at any time.",
    ],
  },
  {
    icon: IoLockClosedOutline,
    title: "Data Security",
    color: "text-blue-600",
    bg: "bg-blue-100/80 border-blue-200",
    body: [
      "Since your learning data stays in your browser rather than on our servers, we don't hold a central database of user information that could be exposed in a breach.",
      "That said, no method of storage is 100% risk-free, and browser storage can be cleared or accessed by anyone using your device.",
    ],
  },
  {
    icon: IoPeopleOutline,
    title: "Children's Privacy",
    color: "text-rose-600",
    bg: "bg-rose-100/80 border-rose-200",
    body: [
      "JSMaster is built for anyone learning JavaScript, including students. Since we don't collect personal information through signup, we don't knowingly gather personal data from children.",
      "If you're a parent and have concerns about your child's use of this site, feel free to reach out using the contact details below.",
    ],
  },
  {
    icon: IoRefreshOutline,
    title: "Changes to This Policy",
    color: "text-teal-600",
    bg: "bg-teal-100/80 border-teal-200",
    body: [
      "We may update this policy as JSMaster grows — for example, if we add accounts, payments, or new features down the line.",
      "Any changes will be posted on this page with an updated revision date, so check back occasionally.",
    ],
  },
];

function PrivacyPolicy() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />

      <div className="flex bg-slate-50">
        <Sidebar />
        
        {/* Main Content Viewport */}
        <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-8 py-8 h-[90vh] overflow-y-auto">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl shadow-purple-900/10 border border-purple-500/20 text-white">
            <div className="absolute -right-10 -top-10 w-60 h-60 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 shadow-lg">
                  <IoShieldCheckmarkOutline className="text-3xl text-purple-300" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1 bg-white/10 text-purple-200 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    <IoSparklesOutline className="text-amber-400" /> Transparent & Secure
                  </span>
                  <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
                    Privacy Policy
                  </h1>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-2xl text-xs text-purple-200 font-medium self-start sm:self-auto">
                Last updated: August 2026
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm mt-4 leading-relaxed max-w-2xl relative z-10">
              JSMaster is a free JavaScript learning platform with topic notes, MCQs, interview questions, tasks, and projects. This page explains what data we touch, what stays on your device, and how ads keep the platform free.
            </p>
          </div>

          {/* Sections List */}
          <div className="mt-8 flex flex-col gap-6">
            {sections.map(({ icon: Icon, title, color, bg, body }) => (
              <div
                key={title}
                className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-11 h-11 rounded-2xl border ${bg} flex items-center justify-center shrink-0 shadow-sm`}>
                    <Icon className={`text-xl ${color}`} />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    {title}
                  </h2>
                </div>
                <div className="mt-4 flex flex-col gap-2.5 pl-2 sm:pl-14">
                  {body.map((line, i) => (
                    <p key={i} className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Box */}
          <div className="mt-8 mb-12 border border-purple-200/80 bg-gradient-to-r from-purple-50 via-fuchsia-50/50 to-indigo-50/50 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center shrink-0 shadow-sm">
                <IoMailOutline className="text-2xl text-purple-600" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Have Privacy Questions?
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Reach out directly at{" "}
                  <a href="mailto:support@jsmaster.com" className="text-purple-600 font-bold hover:underline">
                    support@jsmaster.com
                  </a>
                </p>
              </div>
            </div>
            <a
              href="mailto:support@jsmaster.com"
              className="inline-flex items-center gap-2 text-xs font-bold bg-purple-600 text-white px-5 py-3 rounded-2xl shadow-md shadow-purple-600/20 hover:bg-purple-700 transition-all shrink-0"
            >
              Contact Support <IoChevronForwardOutline />
            </a>
          </div>

        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default PrivacyPolicy;