import React from "react";
import { Sparkles, ArrowRight, Trophy, BookOpen, ListChecks, HelpCircle, Rocket, CheckCircle2, ChevronRight } from "lucide-react";
import { TOPICS } from "../data/topics";
import { cardColor } from "../data/theme";
import MiniStat from "../components/MiniStat";
import HeroIllustration from "../components/illustrations/HeroIllustration";
import HeroSection from "../components/HeroSection";

export default function HomePage({ t, go, overallPct, doneUnits, totalUnits, completedTopics }) {
  return (
    <div className="space-y-14">
      {/* HERO */}
     <HeroSection/>

      {/* DASHBOARD / PROGRESS */}
      <section>
        <div className="rounded-2xl p-5 sm:p-6" style={{ backgroundColor: t.surface, border: `1px solid ${t.border}` }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-display font-semibold" style={{ color: t.text }}>Your progress</p>
              <p className="text-xs" style={{ color: t.textMuted }}>{doneUnits} of {totalUnits} units completed</p>
            </div>
            <div className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: t.accent }}>
              <Trophy size={16} /> {overallPct}%
            </div>
          </div>
          <div className="w-full h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: t.surface2 }}>
            <div className="h-full rounded-full transition-all duration-500" style={{ width: `${overallPct}%`, backgroundColor: t.accent }} />
          </div>
          <div className="grid grid-cols-3 gap-3 mt-5">
            <MiniStat t={t} label="Topics" value={`${completedTopics.size}/${TOPICS.length}`} icon={BookOpen} />
            <MiniStat t={t} label="Tasks" value="in progress" icon={ListChecks} />
            <MiniStat t={t} label="MCQs" value="in progress" icon={HelpCircle} />
          </div>
        </div>
      </section>

      {/* ROADMAP PREVIEW */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="font-display text-xl font-semibold" style={{ color: t.text }}>The roadmap</p>
            <p className="text-sm" style={{ color: t.textMuted }}>A handful of topics to get you started.</p>
          </div>
          <button onClick={() => go("topics")} className="text-sm font-medium flex items-center gap-1" style={{ color: t.accent }}>
            View all <ChevronRight size={15} />
          </button>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {TOPICS.slice(0, 4).map((topic, i) => {
            const c = cardColor(i, t.mode);
            return (
              <div key={topic.id} className="rounded-xl p-4 flex items-start gap-3 border-l-4" style={{ backgroundColor: t.surface, border: `1px solid ${t.border}`, borderLeftColor: c.fg, borderLeftWidth: 4 }}>
                <span className="font-mono text-xs mt-0.5 font-semibold" style={{ color: c.fg }}>{topic.num}</span>
                <div className="min-w-0">
                  <p className="font-medium text-sm" style={{ color: t.text }}>{topic.title}</p>
                  <p className="text-xs mt-0.5 line-clamp-2" style={{ color: t.textMuted }}>{topic.summary}</p>
                </div>
                {completedTopics.has(topic.id) && <CheckCircle2 size={16} style={{ color: t.success, flexShrink: 0 }} className="ml-auto" />}
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURES */}
      <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: BookOpen, title: "Structured topics", desc: "Definition, example and interview Qs for every concept." },
          { icon: ListChecks, title: "Hands-on tasks", desc: "Easy, medium and hard problems to actually write code." },
          { icon: HelpCircle, title: "Interview MCQs", desc: "Level-wise questions that mirror real screening rounds." },
          { icon: Rocket, title: "Real projects", desc: "Step-by-step guides for calculator, todo, weather app & more." },
        ].map((f, i) => {
          const c = cardColor(i, t.mode);
          return (
            <div key={f.title} className="rounded-xl p-4" style={{ backgroundColor: t.surface, border: `1px solid ${t.border}` }}>
              <span className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: c.bg }}>
                <f.icon size={16} style={{ color: c.fg }} />
              </span>
              <p className="font-medium text-sm mt-2.5" style={{ color: t.text }}>{f.title}</p>
              <p className="text-xs mt-1 leading-relaxed" style={{ color: t.textMuted }}>{f.desc}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
