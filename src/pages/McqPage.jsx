import React, { useState } from "react";
import { Award } from "lucide-react";
import { MCQ } from "../data/mcq";

export default function McqPage({ t, mcqDone, setMcqDone }) {
  const [level, setLevel] = useState("Easy");
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const levels = ["Easy", "Medium", "Hard"];

  const questions = MCQ[level];
  const score = questions.reduce((s, q, i) => s + (answers[i] === q.answer ? 1 : 0), 0);

  const pick = (qi, oi) => { if (!submitted) setAnswers((a) => ({ ...a, [qi]: oi })); };

  const submit = () => {
    setSubmitted(true);
    setMcqDone((prev) => {
      const next = new Set(prev);
      questions.forEach((_, i) => next.add(`${level}-${i}`));
      return next;
    });
  };

  const reset = () => { setAnswers({}); setSubmitted(false); };
  const switchLevel = (l) => { setLevel(l); setAnswers({}); setSubmitted(false); };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl sm:text-3xl font-bold" style={{ color: t.text }}>Interview MCQs</h1>
        <p className="text-sm mt-1" style={{ color: t.textMuted }}>Level-wise multiple choice questions to sharpen your interview prep.</p>
      </div>

      <div className="flex gap-2">
        {levels.map((l) => (
          <button key={l} onClick={() => switchLevel(l)} className="px-4 py-2 rounded-lg text-sm font-medium" style={level === l ? { backgroundColor: t.accent, color: "#141414" } : { backgroundColor: t.surface, border: `1px solid ${t.border}`, color: t.text }}>
            {l}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {questions.map((q, qi) => (
          <div key={qi} className="rounded-xl p-4" style={{ backgroundColor: t.surface, border: `1px solid ${t.border}` }}>
            <p className="text-sm font-medium mb-3" style={{ color: t.text }}>{qi + 1}. {q.q}</p>
            <div className="space-y-2">
              {q.options.map((opt, oi) => {
                const picked = answers[qi] === oi;
                let style = { border: `1px solid ${t.border}`, color: t.text };
                if (submitted) {
                  if (oi === q.answer) style = { border: `1px solid ${t.success}`, backgroundColor: t.accentSoft, color: t.text };
                  else if (picked) style = { border: "1px solid #F87171", color: t.text };
                } else if (picked) {
                  style = { border: `1px solid ${t.accent}`, backgroundColor: t.accentSoft, color: t.text };
                }
                return (
                  <button key={oi} onClick={() => pick(qi, oi)} className="w-full text-left px-3.5 py-2.5 rounded-lg text-sm" style={style}>
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3">
        {!submitted ? (
          <button onClick={submit} className="px-5 py-2.5 rounded-xl text-sm font-semibold" style={{ backgroundColor: t.accent, color: "#141414" }}>Submit answers</button>
        ) : (
          <>
            <div className="px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2" style={{ backgroundColor: t.surface, border: `1px solid ${t.border}`, color: t.text }}>
              <Award size={15} style={{ color: t.accent }} /> Score: {score}/{questions.length}
            </div>
            <button onClick={reset} className="px-4 py-2.5 rounded-xl text-sm font-medium" style={{ border: `1px solid ${t.border}`, color: t.text }}>Retry</button>
          </>
        )}
      </div>
    </div>
  );
}
