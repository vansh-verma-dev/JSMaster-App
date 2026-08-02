import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Camera,
  Pencil,
  Check,
  X,
  LogOut,
  Trash2,
  Bell,
  Moon,
  BookOpen,
  CheckSquare,
  HelpCircle,
  Flame,
  User as UserIcon,
  Link2,
  ShieldAlert,
  Calendar,
  Award,
  ChevronRight,
} from "lucide-react";
import MobileBottomNav from "../components/mobilenav";
import Navbar from "../components/navbar";

const STORAGE_KEY = "jsmaster_user";
const SESSION_KEY = "jsmaster_logged_in";

export default function AccountPage() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem(STORAGE_KEY);
    const savedSession = localStorage.getItem(SESSION_KEY);
    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedSession === "true" && savedUser) setIsLoggedIn(true);
    setLoaded(true);
  }, []);

  const persistUser = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUser));
  };

  const handleAuthSuccess = (userData) => {
    persistUser(userData);
    localStorage.setItem(SESSION_KEY, "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.setItem(SESSION_KEY, "false");
    setIsLoggedIn(false);
  };

  const handleDeleteAccount = () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
    setIsLoggedIn(false);
  };

  if (!loaded) return null;

  if (!isLoggedIn || !user) {
    return <AuthGate existingUser={user} onSuccess={handleAuthSuccess} />;
  }

  return (
    <ProfilePage
      user={user}
      onUpdateUser={persistUser}
      onLogout={handleLogout}
      onDeleteAccount={handleDeleteAccount}
    />
  );
}

/* =========================================================
   AUTH GATE — split screen on desktop, single column on mobile
========================================================= */
function AuthGate({ existingUser, onSuccess }) {
  const [mode, setMode] = useState("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");

    if (mode === "signup") {
      if (!form.name || !form.email || !form.password) {
        setError("Please fill in all fields.");
        return;
      }
      onSuccess({
        name: form.name,
        email: form.email,
        password: form.password,
        avatar: null,
        banner: null,
        bio: "",
        joinedAt: new Date().toISOString(),
      });
    } else {
      if (!form.email || !form.password) {
        setError("Please enter email and password.");
        return;
      }
      if (!existingUser || existingUser.email !== form.email || existingUser.password !== form.password) {
        setError("No matching account found. Try signing up instead.");
        return;
      }
      onSuccess(existingUser);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-zinc-50 flex">
        {/* ---------- Left brand panel, desktop only ---------- */}
        <div className="hidden md:flex md:w-1/2 relative overflow-hidden bg-gradient-to-br from-violet-700 via-violet-600 to-fuchsia-600 flex-col justify-between p-12">
          <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-white/10" />
          <div className="absolute bottom-10 right-0 h-48 w-48 rounded-full bg-white/10" />
          <div className="absolute top-1/2 left-1/2 h-32 w-32 rounded-full bg-white/5" />

          <div
            className="relative rounded-2xl flex items-center justify-center font-bold text-2xl bg-white text-violet-700"
            style={{ width: 60, height: 60 }}
          >
            {"{ }"}
          </div>

          <div className="relative">
            <h2 className="text-4xl font-extrabold text-white leading-tight">
              Seekho JavaScript,
              <br />
              banoo pro.
            </h2>
            <p className="text-violet-100 mt-4 text-base max-w-sm leading-relaxed">
              219 topics, sainkdo practice tasks aur real projects — sab kuch
              ek hi jagah, apni speed se seekho.
            </p>
            <div className="flex items-center gap-6 mt-8">
              <div>
                <div className="text-2xl font-extrabold text-white">219</div>
                <div className="text-xs text-violet-200">Topics</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div>
                <div className="text-2xl font-extrabold text-white">10k+</div>
                <div className="text-xs text-violet-200">Learners</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div>
                <div className="text-2xl font-extrabold text-white">Free</div>
                <div className="text-xs text-violet-200">Forever*</div>
              </div>
            </div>
          </div>

          <p className="relative text-xs text-violet-200">
            *Kuch advanced content baad me paid ho sakta hai.
          </p>
        </div>

        {/* ---------- Right form panel ---------- */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-5 py-10">
          <div className="w-full max-w-sm">
            <div className="text-center mb-8 md:hidden">
              <div
                className="mx-auto rounded-2xl flex items-center justify-center font-bold text-xl mb-4 bg-violet-700"
                style={{ width: 56, height: 56, color: "#F7DF1E" }}
              >
                {"{ }"}
              </div>
            </div>

            <h1 className="text-2xl font-extrabold text-zinc-900">
              {mode === "signin" ? "Welcome back" : "Create your account"}
            </h1>
            <p className="text-sm mt-1 text-zinc-500">
              {mode === "signin" ? "Sign in to continue learning" : "Start mastering JavaScript today"}
            </p>

            <div className="flex rounded-xl p-1 mt-6 mb-6 bg-zinc-100">
              {["signin", "signup"].map((m) => (
                <button
                  key={m}
                  onClick={() => {
                    setMode(m);
                    setError("");
                  }}
                  className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    mode === m ? "bg-white text-violet-700 shadow-sm" : "text-zinc-500"
                  }`}
                >
                  {m === "signin" ? "Sign in" : "Sign up"}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              {mode === "signup" && (
                <Field
                  icon={UserIcon}
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              )}
              <Field
                icon={Mail}
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <div className="relative">
                <Field
                  icon={Lock}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>

              {error && (
                <p className="text-xs bg-rose-50 border border-rose-100 text-rose-600 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              <button
                onClick={handleSubmit}
                className="w-full py-3 rounded-xl text-sm font-bold mt-2 bg-violet-700 text-white transition-transform duration-150 hover:scale-[1.01] active:scale-95 shadow-md shadow-violet-200"
              >
                {mode === "signin" ? "Sign in" : "Create account"}
              </button>
            </div>

            <p className="text-center text-xs mt-6 text-zinc-500">
              {mode === "signin" ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => {
                  setMode(mode === "signin" ? "signup" : "signin");
                  setError("");
                }}
                className="font-semibold text-violet-700"
              >
                {mode === "signin" ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>
      </div>
      <MobileBottomNav />
    </>
  );
}

function Field({ icon: Icon, ...props }) {
  return (
    <div className="relative">
      <Icon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
      <input
        {...props}
        className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none bg-zinc-50 border border-zinc-200 text-zinc-900 focus:border-violet-400 focus:bg-white transition-colors duration-150"
      />
    </div>
  );
}

/* =========================================================
   PROFILE PAGE — two-column premium layout
========================================================= */
function ProfilePage({ user, onUpdateUser, onLogout, onDeleteAccount }) {
  const bannerInputRef = useRef(null);
  const avatarInputRef = useRef(null);

  const [editingBio, setEditingBio] = useState(false);
  const [bioDraft, setBioDraft] = useState(user.bio || "");

  const [editingName, setEditingName] = useState(false);
  const [nameDraft, setNameDraft] = useState(user.name || "");

  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  const dashboardStats = [
    { icon: BookOpen, label: "topics learned", value: 24, color: "violet" },
    { icon: CheckSquare, label: "tasks completed", value: 38, color: "sky" },
    { icon: HelpCircle, label: "mcqs solved", value: 156, color: "amber" },
    { icon: Flame, label: "day streak", value: 12, color: "rose" },
  ];

  const statColorMap = {
    violet: { icon: "text-violet-600", bg: "bg-violet-50" },
    sky: { icon: "text-sky-600", bg: "bg-sky-50" },
    amber: { icon: "text-amber-600", bg: "bg-amber-50" },
    rose: { icon: "text-rose-600", bg: "bg-rose-50" },
  };

  const badges = [
    { label: "7 Day Streak", earned: true },
    { label: "First Project", earned: true },
    { label: "50 Tasks", earned: false },
    { label: "Quiz Master", earned: false },
  ];

  const memberSince = user.joinedAt
    ? new Date(user.joinedAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })
    : "recently";

  const handleImageUpload = (e, field) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      onUpdateUser({ ...user, [field]: reader.result });
      setToast(field === "avatar" ? "Profile photo updated" : "Banner updated");
    };
    reader.readAsDataURL(file);
  };

  const saveBio = () => {
    onUpdateUser({ ...user, bio: bioDraft });
    setEditingBio(false);
    setToast("Bio saved");
  };

  const saveName = () => {
    if (!nameDraft.trim()) return;
    onUpdateUser({ ...user, name: nameDraft.trim() });
    setEditingName(false);
    setToast("Name updated");
  };

  const copyProfileLink = () => {
    const link = `jsmaster.dev/u/${user.name?.toLowerCase().replace(/\s+/g, "-")}`;
    navigator.clipboard?.writeText(link);
    setToast("Profile link copied");
  };

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-zinc-50 pb-24 md:pb-10">
        {/* ---------- Banner ---------- */}
        <div
          className="w-full relative group cursor-pointer bg-gradient-to-br from-violet-700 via-violet-600 to-fuchsia-600 overflow-hidden"
          style={{
            height: 200,
            backgroundImage: user.banner ? `url(${user.banner})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() => bannerInputRef.current.click()}
        >
          {!user.banner && (
            <>
              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10" />
              <div className="absolute bottom-0 right-10 h-32 w-32 rounded-full bg-white/10" />
            </>
          )}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/35">
            <div className="flex items-center gap-2 text-white text-sm font-semibold">
              <Camera size={16} />
              Change banner
            </div>
          </div>
          <input
            ref={bannerInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleImageUpload(e, "banner")}
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            {/* ============ LEFT: profile summary card ============ */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-2xl shadow-md border border-zinc-100 p-5 -mt-12 md:-mt-16 relative z-10">
                <div
                  className="relative inline-block group cursor-pointer"
                  onClick={() => avatarInputRef.current.click()}
                >
                  <div
                    className="rounded-full flex items-center justify-center font-bold text-2xl border-4 border-white overflow-hidden shadow-sm bg-amber-400 text-violet-700"
                    style={{ width: 84, height: 84 }}
                  >
                    {user.avatar ? (
                      <img src={user.avatar} alt="avatar" className="w-full h-full object-cover" />
                    ) : (
                      user.name?.[0]?.toUpperCase() || "U"
                    )}
                  </div>
                  <div className="absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-violet-700 border-2 border-white h-6 w-6">
                    <Camera size={12} className="text-white" />
                  </div>
                  <input
                    ref={avatarInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageUpload(e, "avatar")}
                  />
                </div>

                {/* Name */}
                <div className="mt-4">
                  {editingName ? (
                    <div className="flex items-center gap-2">
                      <input
                        value={nameDraft}
                        onChange={(e) => setNameDraft(e.target.value)}
                        className="flex-1 text-lg font-bold text-zinc-900 border border-zinc-200 rounded-lg px-2 py-1 outline-none focus:border-violet-400"
                        autoFocus
                      />
                      <button onClick={saveName} className="p-1.5 rounded-lg bg-violet-700">
                        <Check size={14} className="text-white" />
                      </button>
                      <button
                        onClick={() => {
                          setNameDraft(user.name);
                          setEditingName(false);
                        }}
                        className="p-1.5 rounded-lg bg-zinc-100"
                      >
                        <X size={14} className="text-zinc-500" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setEditingName(true)}
                      className="flex items-center gap-1.5 group/name"
                    >
                      <h1 className="font-extrabold text-xl text-zinc-900">{user.name}</h1>
                      <Pencil size={13} className="text-zinc-300 group-hover/name:text-zinc-500" />
                    </button>
                  )}
                  <p className="text-sm text-zinc-500 mt-0.5">{user.email}</p>
                </div>

                {/* Bio */}
                <div className="mt-3">
                  {editingBio ? (
                    <div className="flex items-start gap-2">
                      <textarea
                        value={bioDraft}
                        onChange={(e) => setBioDraft(e.target.value)}
                        placeholder="Write a short bio..."
                        rows={2}
                        className="flex-1 text-sm rounded-xl px-3 py-2 outline-none resize-none bg-zinc-50 border border-zinc-200 text-zinc-900 focus:border-violet-400"
                      />
                      <div className="flex flex-col gap-1.5">
                        <button onClick={saveBio} className="p-1.5 rounded-lg bg-violet-700">
                          <Check size={14} className="text-white" />
                        </button>
                        <button
                          onClick={() => {
                            setBioDraft(user.bio || "");
                            setEditingBio(false);
                          }}
                          className="p-1.5 rounded-lg bg-zinc-100"
                        >
                          <X size={14} className="text-zinc-500" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setEditingBio(true)}
                      className={`flex items-start gap-1.5 text-sm text-left ${user.bio ? "text-zinc-700" : "text-zinc-400"}`}
                    >
                      {user.bio || "Add a short bio"}
                      <Pencil size={12} className="text-zinc-300 mt-0.5 shrink-0" />
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-4">
                  <Calendar size={13} />
                  Member since {memberSince}
                </div>

                <button
                  onClick={copyProfileLink}
                  className="w-full mt-4 flex items-center justify-center gap-1.5 text-xs font-semibold text-violet-700 bg-violet-50 hover:bg-violet-100 rounded-xl py-2.5 transition-colors"
                >
                  <Link2 size={13} />
                  Copy profile link
                </button>
              </div>

              {/* Achievements card - desktop shows here, mobile shows below stats */}
              <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-zinc-100 p-5 mt-4">
                <div className="flex items-center gap-2 mb-3">
                  <Award size={16} className="text-amber-500" />
                  <h3 className="text-sm font-bold text-zinc-900">Achievements</h3>
                </div>
                <div className="flex flex-col gap-2">
                  {badges.map((b) => (
                    <div
                      key={b.label}
                      className={`flex items-center justify-between text-xs rounded-lg px-3 py-2 ${
                        b.earned ? "bg-amber-50 text-amber-700" : "bg-zinc-50 text-zinc-400"
                      }`}
                    >
                      {b.label}
                      {b.earned && <Check size={13} />}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ============ RIGHT: stats + settings ============ */}
            <div className="md:col-span-2 mt-6 md:mt-8">
              <p className="text-xs font-bold tracking-wide uppercase mb-3 text-zinc-400">
                Your progress
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {dashboardStats.map((s) => {
                  const c = statColorMap[s.color];
                  return (
                    <div key={s.label} className="rounded-2xl p-4 bg-white border border-zinc-100 shadow-sm flex flex-col gap-2">
                      <div className={`rounded-full flex items-center justify-center h-9 w-9 ${c.bg}`}>
                        <s.icon size={17} className={c.icon} />
                      </div>
                      <span className="font-extrabold text-xl leading-none text-zinc-900">{s.value}</span>
                      <span className="text-xs text-zinc-500">{s.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Achievements - mobile only */}
              <div className="md:hidden mt-6">
                <p className="text-xs font-bold tracking-wide uppercase mb-3 text-zinc-400">
                  Achievements
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {badges.map((b) => (
                    <div
                      key={b.label}
                      className={`flex items-center justify-between text-xs rounded-xl px-3 py-2.5 border ${
                        b.earned
                          ? "bg-amber-50 text-amber-700 border-amber-100"
                          : "bg-white text-zinc-400 border-zinc-100"
                      }`}
                    >
                      {b.label}
                      {b.earned && <Check size={13} />}
                    </div>
                  ))}
                </div>
              </div>

              {/* Settings */}
              <p className="text-xs font-bold tracking-wide uppercase mt-8 mb-3 text-zinc-400">
                Settings
              </p>
              <div className="rounded-2xl overflow-hidden bg-white border border-zinc-100 shadow-sm">
                <ToggleRow icon={Moon} label="Dark mode" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                <div className="h-px bg-zinc-100" />
                <ToggleRow
                  icon={Bell}
                  label="Push notifications"
                  checked={notifications}
                  onChange={() => setNotifications(!notifications)}
                />
              </div>

              {/* Danger zone */}
              <div className="rounded-2xl overflow-hidden mt-4 bg-white border border-zinc-100 shadow-sm">
                <RowButton icon={LogOut} label="Log out" onClick={onLogout} />
                <div className="h-px bg-zinc-100" />
                <RowButton icon={Trash2} label="Delete account" danger onClick={() => setShowDeleteModal(true)} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Delete confirmation modal ---------- */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl">
            <div className="h-11 w-11 rounded-full bg-rose-50 flex items-center justify-center mb-4">
              <ShieldAlert size={20} className="text-rose-600" />
            </div>
            <h3 className="text-base font-extrabold text-zinc-900">Delete your account?</h3>
            <p className="text-sm text-zinc-500 mt-1.5 leading-relaxed">
              Ye action permanent hai. Tumhara progress, bio aur saved data sab
              delete ho jayega — wapas nahi aayega.
            </p>
            <div className="flex gap-3 mt-5">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-zinc-100 text-zinc-600"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  onDeleteAccount();
                }}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-rose-600 text-white"
              >
                Yes, delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------- Toast ---------- */}
      {toast && (
        <div className="fixed bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-50 bg-zinc-900 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-xl">
          {toast}
        </div>
      )}

      <MobileBottomNav />
    </>
  );
}

function ToggleRow({ icon: Icon, label, checked, onChange }) {
  return (
    <div className="w-full flex items-center justify-between px-4 py-3.5">
      <div className="flex items-center gap-3">
        <Icon size={18} className="text-violet-700" />
        <span className="text-sm font-medium text-zinc-900">{label}</span>
      </div>
      <button
        onClick={onChange}
        className={`relative rounded-full transition-colors duration-200 ${checked ? "bg-violet-700" : "bg-zinc-200"}`}
        style={{ width: 42, height: 24 }}
      >
        <span
          className="absolute rounded-full bg-white transition-transform duration-200"
          style={{
            width: 18,
            height: 18,
            top: 3,
            left: 3,
            transform: checked ? "translateX(18px)" : "translateX(0px)",
          }}
        />
      </button>
    </div>
  );
}

function RowButton({ icon: Icon, label, danger, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between px-4 py-3.5 transition-colors duration-150 hover:bg-zinc-50"
    >
      <div className="flex items-center gap-3">
        <Icon size={18} className={danger ? "text-rose-600" : "text-violet-700"} />
        <span className={`text-sm font-medium ${danger ? "text-rose-600" : "text-zinc-900"}`}>{label}</span>
      </div>
      <ChevronRight size={16} className="text-zinc-300" />
    </button>
  );
}