import React, { useState } from "react";
import { useGoogleFonts } from "./hooks/useGoogleFonts";
import { THEME } from "./data/theme";
import { TOPICS } from "./data/topics";
import { MCQ } from "./data/mcq";
import { TASKS } from "./data/tasks";

import TopBar from "./components/TopBar";
import BottomNav from "./components/BottomNav";
import HomePage from "./pages/HomePage";
import TopicsList from "./pages/TopicsList";
import TopicDetail from "./pages/TopicDetail";
import TasksPage from "./pages/TasksPage";
import McqPage from "./pages/McqPage";
import ProjectsList from "./pages/ProjectsList";
import ProjectDetail from "./pages/ProjectDetail";
import ProfilePage from "./pages/ProfilePage";
import AuthPage from "./pages/AuthPage";
import TermsPage from "./pages/TermsPage";

export default function JSMasterApp() {
  useGoogleFonts();
  const [mode, setMode] = useState("light");
  const t = { ...THEME[mode], mode };

  const [page, setPage] = useState("home");
  const [authMode, setAuthMode] = useState("signin");
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [completedTopics, setCompletedTopics] = useState(new Set());
  const [completedTasks, setCompletedTasks] = useState(new Set());
  const [mcqDone, setMcqDone] = useState(new Set());

  const go = (p) => {
    setPage(p);
    setMenuOpen(false);
    setAccountOpen(false);
    window.scrollTo?.({ top: 0, behavior: "instant" });
  };

  const totalUnits = TOPICS.length + Object.values(TASKS).flat().length + Object.values(MCQ).flat().length;
  const doneUnits = completedTopics.size + completedTasks.size + mcqDone.size;
  const overallPct = Math.round((doneUnits / totalUnits) * 100);

  const styleVars = {
    "--bg": t.bg, "--surface": t.surface, "--surface2": t.surface2, "--border": t.border,
    "--text": t.text, "--muted": t.textMuted, "--accent": t.accent, "--accentSoft": t.accentSoft, "--accent2": t.accent2,
    fontFamily: "Inter, system-ui, sans-serif",
    backgroundColor: t.bg, color: t.text, minHeight: "100vh",
  };

  return (
    <div style={styleVars} className="w-full min-h-screen transition-colors duration-300">
      <style>{`
        .font-display { font-family: 'Space Grotesk', Inter, sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .scrollbar-none::-webkit-scrollbar { display:none; }
      `}</style>

      <TopBar
        t={t} mode={mode} setMode={setMode} page={page} go={go}
        user={user} accountOpen={accountOpen} setAccountOpen={setAccountOpen}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-28 md:pb-16 pt-6">
        {page === "home" && (
          <HomePage t={t} go={go} overallPct={overallPct} doneUnits={doneUnits} totalUnits={totalUnits}
            completedTopics={completedTopics} setSelectedTopic={setSelectedTopic} />
        )}

        {page === "topics" && (
          <TopicsList t={t} go={go} completedTopics={completedTopics}
            onOpen={(topic) => { setSelectedTopic(topic); go("topicDetail"); }} />
        )}

        {page === "topicDetail" && selectedTopic && (
          <TopicDetail t={t} topic={selectedTopic} go={go}
            done={completedTopics.has(selectedTopic.id)}
            toggleDone={() => {
              setCompletedTopics((prev) => {
                const next = new Set(prev);
                next.has(selectedTopic.id) ? next.delete(selectedTopic.id) : next.add(selectedTopic.id);
                return next;
              });
            }}
          />
        )}

        {page === "tasks" && (
          <TasksPage t={t} completedTasks={completedTasks} setCompletedTasks={setCompletedTasks} />
        )}

        {page === "mcq" && (
          <McqPage t={t} mcqDone={mcqDone} setMcqDone={setMcqDone} />
        )}

        {page === "projects" && (
          <ProjectsList t={t} onOpen={(p) => { setSelectedProject(p); go("projectDetail"); }} />
        )}

        {page === "projectDetail" && selectedProject && (
          <ProjectDetail t={t} project={selectedProject} go={go} />
        )}

        {page === "profile" && (
          <ProfilePage t={t} user={user} setUser={setUser} go={go}
            onLogout={() => { setUser(null); go("home"); }} />
        )}

        {page === "auth" && (
          <AuthPage t={t} authMode={authMode} setAuthMode={setAuthMode}
            onAuth={(u) => { setUser(u); go("profile"); }} />
        )}

        {page === "terms" && <TermsPage t={t} />}
      </div>

      <BottomNav t={t} page={page} go={go} />
    </div>
  );
}
