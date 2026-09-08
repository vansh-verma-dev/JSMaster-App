import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiArrowUp } from "react-icons/fi";

import Navbar from "../components/navbar";
import MobileTopBar from "../components/mobileTopBar";
import BottomNavbar from "../components/bottomNavbar";

/* ------------------------------------------------------------------ */
/*  Content — edit freely. This is a general-purpose template for an  */
/*  educational coding platform, not legal advice. Have a lawyer      */
/*  review before relying on it for a live product.                   */
/* ------------------------------------------------------------------ */
const LAST_UPDATED = "September 8, 2026";

const SECTIONS = [
  {
    id: "acceptance",
    title: "1. Acceptance of terms",
    body: [
      `By accessing or using JSMaster ("the platform", "we", "us"), you agree to be bound by these Terms & Conditions. If you don't agree with any part of these terms, please don't use the platform.`,
      `We may update these terms from time to time. If we make material changes, we'll update the "Last updated" date at the top of this page. Continuing to use JSMaster after changes are posted means you accept the updated terms.`,
    ],
  },
  {
    id: "the-service",
    title: "2. What JSMaster is",
    body: [
      `JSMaster is an educational platform for learning JavaScript — including topic guides, practice tasks, guided projects, and interview-preparation questions.`,
      `The platform is provided for personal, educational use. Content is created for learning purposes and, while we try to keep it accurate and up to date, we can't guarantee it's free of errors or that it reflects the latest changes to the JavaScript language or its ecosystem.`,
    ],
  },
  {
    id: "accounts",
    title: "3. Accounts",
    body: [
      `Some features may require creating an account. You're responsible for keeping your login details secure and for all activity that happens under your account.`,
      `You agree to provide accurate information when creating an account, and to let us know if you believe your account has been accessed without your permission.`,
      `We may suspend or remove an account that violates these terms, without prior notice, if we reasonably believe it's necessary to protect the platform or its users.`,
    ],
  },
  {
    id: "acceptable-use",
    title: "4. Acceptable use",
    body: [
      `When using JSMaster, you agree not to:`,
    ],
    list: [
      "Copy, scrape, or redistribute platform content for commercial purposes without permission.",
      "Attempt to disrupt, overload, or gain unauthorized access to the platform or its infrastructure.",
      "Use the platform to distribute malware, spam, or harmful code.",
      "Impersonate another person or misrepresent your affiliation with anyone.",
      "Use automated tools to bulk-download content or bypass rate limits.",
    ],
  },
  {
    id: "content-ip",
    title: "5. Content & intellectual property",
    body: [
      `Unless otherwise noted, the text, graphics, code examples, and other material on JSMaster are owned by JSMaster or its licensors and are protected by copyright and other intellectual property laws.`,
      `You may use what you learn here — including code you write while completing tasks or projects — for your own personal or professional work. You may not republish JSMaster's written explanations, task descriptions, or interview questions as your own content elsewhere without permission.`,
    ],
  },
  {
    id: "user-submissions",
    title: "6. Code you submit or write on the platform",
    body: [
      `If the platform lets you write, run, or submit code (for example, in a task editor), that code remains yours. By submitting it, you give us a limited license to store and process it solely to provide the feature you're using — such as showing your output or saving your progress.`,
      `Please don't submit code that is malicious, that infringes on someone else's rights, or that contains sensitive personal information.`,
    ],
  },
  {
    id: "third-party",
    title: "7. Third-party links",
    body: [
      `JSMaster may link to external resources, tools, or documentation (for example, MDN or npm packages) for your convenience. We don't control these third-party sites and aren't responsible for their content, accuracy, or availability.`,
    ],
  },
  {
    id: "disclaimer",
    title: "8. Disclaimer of warranties",
    body: [
      `JSMaster is provided "as is" and "as available", without warranties of any kind, whether express or implied. We don't guarantee that the platform will be uninterrupted, error-free, or that completing our content will result in any particular outcome, including passing a job interview.`,
    ],
  },
  {
    id: "liability",
    title: "9. Limitation of liability",
    body: [
      `To the fullest extent permitted by law, JSMaster and its team won't be liable for any indirect, incidental, or consequential damages arising from your use of the platform, including loss of data, opportunities, or income.`,
    ],
  },
  {
    id: "termination",
    title: "10. Termination",
    body: [
      `You may stop using JSMaster at any time. We may suspend or terminate access to the platform, in whole or in part, if we believe these terms have been violated, or to protect the platform and its users.`,
    ],
  },
  {
    id: "governing-law",
    title: "11. Governing law",
    body: [
      `These terms are governed by the laws of the jurisdiction in which JSMaster operates, without regard to conflict-of-law principles. Any disputes will be handled in the courts of that jurisdiction, unless local law requires otherwise.`,
    ],
  },
  {
    id: "contact",
    title: "12. Contact",
    body: [
      `If you have questions about these terms, reach out to us at the contact details listed on our Contact page. We'll do our best to respond promptly.`,
    ],
  },
];

export default function TermsPage() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const sectionRefs = useRef({});

  // Scroll-spy: highlight whichever section is currently in the reading zone
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setMobileMenuOpen(false);
    const el = sectionRefs.current[id];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const progress = useMemo(() => {
    const idx = SECTIONS.findIndex((s) => s.id === activeId);
    return Math.round(((idx + 1) / SECTIONS.length) * 100);
  }, [activeId]);

  return (
    <>
      <Navbar />
      <MobileTopBar />

      <div className="w-full min-h-screen bg-white">
        {/* Mobile top bar for this page */}
        <div className="flex md:hidden items-center justify-between px-4 py-3 sticky top-0 z-30 bg-white border-b border-[#f0f0f0]">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex items-center gap-2 text-sm font-medium text-[#5B2A9E]"
          >
            <FiMenu size={17} />
            Sections
          </button>
          <span className="text-xs font-medium text-[#9A94AD]">{progress}% read</span>
        </div>

        <div className="flex max-w-6xl mx-auto">
          {/* ---------- Sidebar TOC ---------- */}
          <aside
            className={`fixed md:sticky top-0 left-0 h-screen w-72 shrink-0 z-40 md:z-0 bg-white border-r border-[#f0f0f0] transition-transform duration-250 ease-in-out ${
              mobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
            }`}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-5 py-5 border-b border-[#f0f0f0]">
                <div>
                  <span className="font-bold text-sm text-[#16121F]">Terms &amp; Conditions</span>
                  <p className="mt-0.5 text-[11px] text-[#9A94AD]">Updated {LAST_UPDATED}</p>
                </div>
                <button className="md:hidden" onClick={() => setMobileMenuOpen(false)}>
                  <FiX size={18} color="#666" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-3 py-4">
                <div className="flex flex-col gap-0.5">
                  {SECTIONS.map((s) => {
                    const isActive = s.id === activeId;
                    return (
                      <button
                        key={s.id}
                        onClick={() => goTo(s.id)}
                        className="text-left px-3 py-2 rounded-lg text-[13px] transition-colors duration-150"
                        style={{
                          background: isActive ? "#F0EDF7" : "transparent",
                          color: isActive ? "#5B2A9E" : "#5A5570",
                          fontWeight: isActive ? 600 : 400,
                        }}
                      >
                        {s.title}
                      </button>
                    );
                  })}
                </div>
              </nav>

              <div className="px-5 py-4 border-t border-[#f0f0f0]">
                <Link
                  to="/privacy"
                  className="text-xs font-semibold text-[#5B2A9E] hover:underline"
                >
                  View Privacy Policy →
                </Link>
              </div>
            </div>
          </aside>

          {mobileMenuOpen && (
            <div
              className="fixed inset-0 z-30 md:hidden bg-black/30"
              onClick={() => setMobileMenuOpen(false)}
            />
          )}

          {/* ---------- Content ---------- */}
          <main className="flex-1 min-w-0 px-5 md:px-12 py-8 md:py-12">
            <div className="max-w-2xl">
              <span className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full mb-3 bg-[#F0EDF7] text-[#5B2A9E]">
                Legal
              </span>

              <h1 className="font-bold text-2xl md:text-[2rem] text-[#16121F] tracking-tight">
                Terms &amp; Conditions
              </h1>
              <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-[#5A5570]">
                Last updated {LAST_UPDATED}. These terms explain what you can expect
                from JSMaster, and what we expect from you as you use the platform.
              </p>

              <div className="mt-8 flex flex-col gap-10">
                {SECTIONS.map((s) => (
                  <section
                    key={s.id}
                    id={s.id}
                    ref={(el) => (sectionRefs.current[s.id] = el)}
                    className="scroll-mt-24"
                  >
                    <h2 className="font-semibold text-lg md:text-xl text-[#16121F] mb-3">
                      {s.title}
                    </h2>
                    <div className="flex flex-col gap-3">
                      {s.body.map((para, i) => (
                        <p key={i} className="text-sm leading-relaxed text-[#5A5570]">
                          {para}
                        </p>
                      ))}
                    </div>
                    {s.list && (
                      <ul className="mt-3 flex flex-col gap-2">
                        {s.list.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-2.5 text-sm leading-relaxed text-[#5A5570]"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#B0A6D6]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              {/* Footer note */}
              <div className="mt-12 pt-6 border-t border-[#f0f0f0]">
                <p className="text-xs leading-relaxed text-[#9A94AD]">
                  This page is a general template for an educational platform and
                  isn't legal advice. If JSMaster is a live product, have these
                  terms reviewed by a lawyer for your specific situation and
                  jurisdiction.
                </p>
                <Link
                  to="/"
                  className="mt-4 inline-block text-xs font-semibold text-[#5B2A9E] hover:underline"
                >
                  Back to home
                </Link>
              </div>
            </div>
          </main>
        </div>

        {/* back-to-top */}
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-24 right-5 md:bottom-8 md:right-8 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#16121F] text-white shadow-lg transition hover:bg-[#5B2A9E]"
          >
            <FiArrowUp size={16} />
          </button>
        )}
      </div>

      <BottomNavbar />
    </>
  );
}