import Navbar from "../componentes/navbar";
import {
  IoShieldCheckmarkOutline,
  IoServerOutline,
  IoMegaphoneOutline,
  IoLockClosedOutline,
  IoPeopleOutline,
  IoRefreshOutline,
  IoMailOutline,
} from "react-icons/io5";
import Sidebar from "../componentes/sidebar";

const sections = [
  {
    icon: IoServerOutline,
    title: "What We Store",
    color: "text-purple-600",
    bg: "bg-purple-100",
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
    bg: "bg-amber-100",
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
    bg: "bg-blue-100",
    body: [
      "Since your learning data stays in your browser rather than on our servers, we don't hold a central database of user information that could be exposed in a breach.",
      "That said, no method of storage is 100% risk-free, and browser storage can be cleared or accessed by anyone using your device.",
    ],
  },
  {
    icon: IoPeopleOutline,
    title: "Children's Privacy",
    color: "text-rose-600",
    bg: "bg-rose-100",
    body: [
      "JSMaster is built for anyone learning JavaScript, including students. Since we don't collect personal information through signup, we don't knowingly gather personal data from children.",
      "If you're a parent and have concerns about your child's use of this site, feel free to reach out using the contact details below.",
    ],
  },
  {
    icon: IoRefreshOutline,
    title: "Changes to This Policy",
    color: "text-teal-600",
    bg: "bg-teal-100",
    body: [
      "We may update this policy as JSMaster grows — for example, if we add accounts, payments, or new features down the line.",
      "Any changes will be posted on this page with an updated revision date, so check back occasionally.",
    ],
  },
];

function PrivacyPolicy() {
  return (
    <div className="bg-white">
      <Navbar />

      <div className="flex bg-white">
        <Sidebar />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 h-[80vh] overflow-hidden overflow-y-scroll bg-white">
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center">
              <IoShieldCheckmarkOutline className="text-2xl text-purple-600" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                Privacy Policy
              </h1>
              <p className="text-xs sm:text-sm text-gray-400">Last updated: August 2026</p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-gray-600 mt-6 leading-relaxed">
            JSMaster is a free JavaScript learning platform with topic notes, MCQs,
            interview questions, tasks, and projects. This page explains what data
            we touch, what stays on your device, and how ads keep the platform free.
          </p>

          {/* Sections */}
          <div className="mt-8 flex flex-col gap-5">
            {sections.map(({ icon: Icon, title, color, bg, body }) => (
              <div
                key={title}
                className="bg-white border border-gray-200 rounded-2xl p-5"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full ${bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`text-lg ${color}`} />
                  </div>
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                    {title}
                  </h2>
                </div>
                <div className="mt-3 flex flex-col gap-2">
                  {body.map((line, i) => (
                    <p key={i} className="text-sm text-gray-600 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-8 border border-purple-100 bg-purple-50 rounded-2xl p-5 flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
              <IoMailOutline className="text-lg text-purple-600" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                Questions?
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Reach out at{" "}
                <a href="mailto:support@jsmaster.com" className="text-purple-600 font-medium hover:underline">
                  support@jsmaster.com
                </a>{" "}
                — replace this with your real contact email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;