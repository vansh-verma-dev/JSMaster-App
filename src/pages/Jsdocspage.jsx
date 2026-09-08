import React, { useState, useMemo } from "react";
import { FiSearch, FiChevronRight, FiMenu, FiX } from "react-icons/fi";
import jsDocs from "../data/topics";
import BottomNavbar from "../components/bottomNavbar";
import Navbar from "../components/navbar";
import MobileTopBar from "../components/mobileTopBar";

export default function JsDocsPage() {
  const [activeId, setActiveId] = useState(jsDocs[0].id);
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeTopic = jsDocs.find((t) => t.id === activeId);

  const filteredDocs = useMemo(() => {
    if (!search) return jsDocs;
    return jsDocs.filter((t) => t.title.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const grouped = useMemo(() => {
    const groups = {};
    filteredDocs.forEach((t) => {
      if (!groups[t.category]) groups[t.category] = [];
      groups[t.category].push(t);
    });
    return groups;
  }, [filteredDocs]);

  const selectTopic = (id) => {
    setActiveId(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <Navbar />
      <MobileTopBar />
      <div className="w-full min-h-screen flex" style={{ background: "#ffffff" }}>
        {/* ---------- Sidebar (desktop always visible, mobile slide-in) ---------- */}
        <aside
          className={`fixed md:sticky top-0 left-0 h-screen w-72 shrink-0 z-40 md:z-0 transition-transform duration-250 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
          style={{ background: "#ffffff", borderRight: "1px solid #f0f0f0" }}
        >
          <div className="flex flex-col h-full">
            {/* Sidebar header */}
            <div className="flex items-center justify-between px-4 py-4" style={{ borderBottom: "1px solid #f0f0f0" }}>
              <span className="font-bold text-base" style={{ color: "#5b2a9e" }}>
                JS Docs
              </span>
              <button className="md:hidden" onClick={() => setMobileMenuOpen(false)}>
                <FiX size={18} color="#666" />
              </button>
            </div>

            {/* Search */}
            <div className="px-4 pt-3">
              <div className="relative">
                <FiSearch size={14} color="#aaa" className="absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search topics..."
                  className="w-full pl-8 pr-3 py-2 rounded-lg text-xs outline-none"
                  style={{ background: "#f7f6fa", border: "1px solid #eee", color: "#1a1a1a" }}
                />
              </div>
            </div>

            {/* Topic list */}
            <nav className="flex-1 overflow-y-auto px-3 py-4">
              {Object.entries(grouped).map(([category, topics]) => (
                <div key={category} className="mb-5">
                  <p className="text-[10px] font-bold uppercase tracking-wide px-2 mb-1.5" style={{ color: "#bbb" }}>
                    {category}
                  </p>
                  <div className="flex flex-col gap-0.5">
                    {topics.map((topic) => {
                      const isActive = topic.id === activeId;
                      return (
                        <button
                          key={topic.id}
                          onClick={() => selectTopic(topic.id)}
                          className="flex items-center justify-between px-2.5 py-2 rounded-lg text-left text-sm transition-colors duration-150"
                          style={{
                            background: isActive ? "#f0edf7" : "transparent",
                            color: isActive ? "#5b2a9e" : "#444",
                            fontWeight: isActive ? 600 : 400,
                          }}
                        >
                          {topic.title}
                          {isActive && <FiChevronRight size={14} />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {filteredDocs.length === 0 && (
                <p className="text-xs text-center py-8" style={{ color: "#bbb" }}>
                  No topics found.
                </p>
              )}
            </nav>
          </div>
        </aside>

        {/* Mobile top bar */}
        <div className="flex-1 min-w-0">
          <div
            className="flex md:hidden items-center justify-between px-4 py-3 sticky top-0 z-30"
            style={{ background: "#ffffff", borderBottom: "1px solid #f0f0f0" }}
          >
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex items-center gap-2 text-sm font-medium"
              style={{ color: "#5b2a9e" }}
            >
              <FiMenu size={18} />
              Topics
            </button>
            <span className="text-sm font-semibold truncate max-w-[60%]" style={{ color: "#1a1a1a" }}>
              {activeTopic.title}
            </span>
          </div>

          {/* Backdrop for mobile sidebar */}
          {mobileMenuOpen && (
            <div
              className="fixed inset-0 z-30 md:hidden"
              style={{ background: "rgba(0,0,0,0.3)" }}
              onClick={() => setMobileMenuOpen(false)}
            />
          )}

          {/* ---------- Content ---------- */}
          <main className="px-5 md:px-10 py-8 md:py-10">
            <div className="max-w-2xl mx-auto md:mx-0">
              {/* Breadcrumb-ish category tag */}
              <span
                className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full mb-3"
                style={{ background: "#f0edf7", color: "#5b2a9e" }}
              >
                {activeTopic.category}
              </span>

              <h1 className="font-bold text-2xl md:text-3xl" style={{ color: "#1a1a1a" }}>
                {activeTopic.title}
              </h1>
              <p className="text-sm md:text-base mt-3 leading-relaxed" style={{ color: "#555" }}>
                {activeTopic.definition}
              </p>

              {/* Sections */}
              <div className="mt-8 flex flex-col gap-8">
                {activeTopic.sections.map((section, i) => (
                  <div key={i}>
                    <h2 className="font-semibold text-base md:text-lg mb-2" style={{ color: "#1a1a1a" }}>
                      {section.heading}
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                      {section.text}
                    </p>
                    {section.code && (
                      <pre
                        className="mt-3 text-xs md:text-[13px] px-4 py-3.5 rounded-xl font-mono overflow-x-auto whitespace-pre"
                        style={{ background: "#150a30", color: "#F7DF1E", lineHeight: 1.7 }}
                      >
                        {section.code}
                      </pre>
                    )}
                  </div>
                ))}
              </div>

              {/* Prev/next navigation */}
              <TopicNav docs={jsDocs} activeId={activeId} onSelect={selectTopic} />
            </div>
          </main>
        </div>
      </div>
      <BottomNavbar />
    </>
  );
}

function TopicNav({ docs, activeId, onSelect }) {
  const index = docs.findIndex((t) => t.id === activeId);
  const prev = docs[index - 1];
  const next = docs[index + 1];

  if (!prev && !next) return null;

  return (
    <div className="flex items-center justify-between gap-3 mt-12 pt-6" style={{ borderTop: "1px solid #f0f0f0" }}>
      {prev ? (
        <button
          onClick={() => onSelect(prev.id)}
          className="flex-1 text-left px-4 py-3 rounded-xl transition-colors duration-150 hover:bg-gray-50"
          style={{ border: "1px solid #eee" }}
        >
          <p className="text-[10px]" style={{ color: "#999" }}>
            ← Previous
          </p>
          <p className="text-sm font-medium truncate" style={{ color: "#1a1a1a" }}>
            {prev.title}
          </p>
        </button>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <button
          onClick={() => onSelect(next.id)}
          className="flex-1 text-right px-4 py-3 rounded-xl transition-colors duration-150 hover:bg-gray-50"
          style={{ border: "1px solid #eee" }}
        >
          <p className="text-[10px]" style={{ color: "#999" }}>
            Next →
          </p>
          <p className="text-sm font-medium truncate" style={{ color: "#1a1a1a" }}>
            {next.title}
          </p>
        </button>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}