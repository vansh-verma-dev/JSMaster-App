import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaCode,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaUser,
} from "react-icons/fa";

import { signIn, signUp, useAuth } from "../utils/Auth";

function AccountPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const [mode, setMode] = useState("signin"); // "signin" | "signup"
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Already signed in? No need to see this page.
  useEffect(() => {
    if (isAuthenticated) navigate("/", { replace: true });
  }, [isAuthenticated, navigate]);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const switchMode = (next) => {
    setMode(next);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    try {
      if (mode === "signup") {
        if (form.password !== form.confirmPassword) {
          throw new Error("Passwords don't match.");
        }
        setLoading(true);
        signUp({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          password: form.password,
        });
      } else {
        setLoading(true);
        signIn({ email: form.email, password: form.password });
      }
      navigate("/");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* ---------- Left: brand panel (desktop only) ---------- */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-[#150a30] p-12 text-white lg:flex">
        <div
          className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-violet-500 opacity-20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-amber-300 opacity-10 blur-3xl"
          aria-hidden="true"
        />

        <Link to="/" className="relative flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 shadow-md shadow-violet-900/40">
            <FaCode className="text-lg" />
          </div>
          <h1 className="text-xl font-extrabold tracking-tight">
            JS<span className="text-violet-400">Master</span>
          </h1>
        </Link>

        <div className="relative">
          <h2 className="text-3xl font-bold leading-tight">
            Track your progress. Pick up right where you left off.
          </h2>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              Save your task progress across sessions
            </li>
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              Keep a personal profile as you learn
            </li>
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              Free — no credit card, ever
            </li>
          </ul>
        </div>

        <p className="relative text-xs text-white/40">
          © {new Date().getFullYear()} JSMaster
        </p>
      </div>

      {/* ---------- Right: form ---------- */}
      <div className="flex items-center justify-center bg-slate-50 px-5 py-12 sm:px-8">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <Link to="/" className="mb-8 flex items-center gap-3 lg:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white shadow-md shadow-violet-200">
              <FaCode className="text-base" />
            </div>
            <h1 className="text-lg font-extrabold tracking-tight text-slate-900">
              JS<span className="text-violet-600">Master</span>
            </h1>
          </Link>

          {/* Tabs */}
          <div className="mb-7 flex rounded-xl border border-slate-200 bg-white p-1">
            <button
              type="button"
              onClick={() => switchMode("signin")}
              className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition ${
                mode === "signin"
                  ? "bg-violet-600 text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => switchMode("signup")}
              className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition ${
                mode === "signup"
                  ? "bg-violet-600 text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Sign Up
            </button>
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
            {mode === "signin" ? "Welcome back" : "Create your account"}
          </h2>
          <p className="mt-1.5 text-sm text-slate-500">
            {mode === "signin"
              ? "Sign in to pick up where you left off."
              : "Takes less than a minute — no credit card needed."}
          </p>

          {error && (
            <div className="mt-5 rounded-lg border border-red-100 bg-red-50 px-3.5 py-2.5 text-xs font-medium text-red-600">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {mode === "signup" && (
              <div className="grid grid-cols-2 gap-3">
                <Field
                  icon={<FaUser />}
                  placeholder="First name"
                  value={form.firstName}
                  onChange={update("firstName")}
                  autoComplete="given-name"
                />
                <Field
                  icon={<FaUser />}
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={update("lastName")}
                  autoComplete="family-name"
                />
              </div>
            )}

            <Field
              icon={<FaEnvelope />}
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={update("email")}
              autoComplete="email"
              required
            />

            <div className="relative">
              <Field
                icon={<FaLock />}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={form.password}
                onChange={update("password")}
                autoComplete={mode === "signin" ? "current-password" : "new-password"}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEyeSlash size={13} /> : <FaEye size={13} />}
              </button>
            </div>

            {mode === "signup" && (
              <Field
                icon={<FaLock />}
                type={showPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={form.confirmPassword}
                onChange={update("confirmPassword")}
                autoComplete="new-password"
                required
              />
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-violet-600 py-3 text-sm font-bold text-white transition hover:bg-violet-700 disabled:opacity-60"
            >
              {loading
                ? "Please wait…"
                : mode === "signin"
                ? "Sign In"
                : "Create Account"}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-slate-400">
            By continuing, you agree to JSMaster's{" "}
            <Link to="/terms" className="font-semibold text-violet-600 hover:underline">
              Terms &amp; Conditions
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({ icon, ...props }) {
  return (
    <div className="relative">
      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400">
        {icon}
      </span>
      <input
        {...props}
        className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-50"
      />
    </div>
  );
}

export default AccountPage;