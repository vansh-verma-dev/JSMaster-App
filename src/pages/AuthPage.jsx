import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import AuthIllustration from "../components/illustrations/AuthIllustration";

export default function AuthPage({ t, authMode, setAuthMode, onAuth }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim() || (authMode === "signup" && !name.trim())) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    onAuth({ name: authMode === "signup" ? name.trim() : email.split("@")[0], email: email.trim(), about: "", avatar: null, banner: null });
  };

  const inputStyle = { backgroundColor: t.surface, border: `1px solid ${t.border}`, color: t.text };

  return (
    <div className="max-w-3xl mx-auto py-6 grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-xl" style={{ border: `1px solid ${t.border}` }}>
      {/* colourful illustration panel */}
      <div
        className="hidden md:flex flex-col items-center justify-center p-8 relative"
        style={{ background: "linear-gradient(155deg, #7C3AED 0%, #C026D3 55%, #F472B6 100%)" }}
      >
        <AuthIllustration />
        <p className="font-display text-white text-lg font-semibold text-center mt-2">
          {authMode === "signin" ? "Pick up right where you left off." : "One roadmap. Every JS concept."}
        </p>
        <p className="text-violet-100 text-xs text-center mt-1.5 max-w-[220px]">
          Topics, tasks, MCQs and projects — all tracked in one place.
        </p>
      </div>

      {/* form panel */}
      <div className="p-6 sm:p-8" style={{ backgroundColor: t.surface }}>
        <div className="text-center md:text-left mb-6">
          <span
            className="w-10 h-10 rounded-xl inline-flex items-center justify-center font-display font-bold"
            style={{ background: "linear-gradient(135deg, #A855F7, #F472B6)", color: "#fff" }}
          >
            JS
          </span>
          <h1 className="font-display text-xl font-bold mt-3" style={{ color: t.text }}>
            {authMode === "signin" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="text-xs mt-1" style={{ color: t.textMuted }}>Demo auth — kept in memory for this preview only.</p>
        </div>

        <form onSubmit={submit} autoComplete="on" className="space-y-3">
          {authMode === "signup" && (
            <div className="relative">
              <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: t.textMuted }} />
              <input
                id="jsm-name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                autoComplete="name"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm outline-none"
                style={inputStyle}
              />
            </div>
          )}
          <div className="relative">
            <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: t.textMuted }} />
            <input
              id="jsm-email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email address"
              autoComplete="email"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm outline-none"
              style={inputStyle}
            />
          </div>
          <div className="relative">
            <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: t.textMuted }} />
            <input
              id="jsm-password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPw ? "text" : "password"}
              placeholder="Password"
              autoComplete={authMode === "signup" ? "new-password" : "current-password"}
              className="w-full pl-10 pr-10 py-2.5 rounded-lg text-sm outline-none"
              style={inputStyle}
            />
            <button
              type="button"
              tabIndex={-1}
              onClick={() => setShowPw((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center"
            >
              {showPw ? <EyeOff size={15} style={{ color: t.textMuted }} /> : <Eye size={15} style={{ color: t.textMuted }} />}
            </button>
          </div>

          {error && <p className="text-xs" style={{ color: "#F87171" }}>{error}</p>}

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #A855F7, #EC4899)" }}
          >
            {authMode === "signin" ? "Sign in" : "Create account"}
          </button>
        </form>

        <p className="text-center text-xs mt-5" style={{ color: t.textMuted }}>
          {authMode === "signin" ? "New to JSMaster?" : "Already have an account?"}{" "}
          <button onClick={() => { setAuthMode(authMode === "signin" ? "signup" : "signin"); setError(""); }} className="font-semibold" style={{ color: t.accent }}>
            {authMode === "signin" ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
}
