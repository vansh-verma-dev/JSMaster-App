import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaCalendarAlt,
  FaEnvelope,
  FaExclamationTriangle,
  FaPencilAlt,
  FaSignOutAlt,
  FaTimes,
  FaUser,
  FaBookOpen,
  FaCode,
  FaTrophy,
  FaCheckCircle,
  FaGraduationCap,
  FaTrashAlt,
} from "react-icons/fa";

import Navbar from "../components/navbar";
import MobileTopBar from "../components/mobileTopBar";
import BottomNavbar from "../components/bottomNavbar";

import {
  deleteCurrentUser,
  getInitials,
  logout,
  updateCurrentUser,
  useAuth,
} from "../utils/Auth";

function ProfilePage() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  const [editing, setEditing] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    img: "",
  });

  const [error, setError] = useState("");
  const [confirmingDelete, setConfirmingDelete] = useState(false);

  /* ================= AUTH ================= */

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/account", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  /* ================= LOAD USER ================= */

  useEffect(() => {
    if (user) {
      setForm({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        img: user.img || "",
      });
    }
  }, [user]);

  if (!user) return null;

  /* ================= MEMBER DATE ================= */

  const memberSince = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString(undefined, {
        month: "long",
        year: "numeric",
      })
    : "Recently";

  /* ================= SAVE PROFILE ================= */

  const handleSave = (e) => {
    e.preventDefault();
    setError("");

    if (!form.firstName.trim() || !form.lastName.trim()) {
      setError("First and last name can't be empty.");
      return;
    }

    try {
      updateCurrentUser({
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        img: form.img.trim(),
      });

      setEditing(false);
    } catch (err) {
      setError(err.message || "Couldn't save your changes.");
    }
  };

  /* ================= CANCEL EDIT ================= */

  const handleCancel = () => {
    setEditing(false);
    setError("");

    setForm({
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      img: user.img || "",
    });
  };

  /* ================= LOGOUT ================= */

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  /* ================= DELETE ACCOUNT ================= */

  const handleDelete = () => {
    deleteCurrentUser();
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <MobileTopBar />

      <main className="relative min-h-screen overflow-hidden bg-[#f6f8ff] pb-24 lg:pb-12">

        {/* ================= BACKGROUND DECORATION ================= */}

        <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />

        <div className="pointer-events-none absolute -left-40 top-[550px] h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-pink-200/20 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1500px] px-4 py-7 sm:px-6 lg:px-10 xl:px-12">

          {/* =====================================================
              PAGE HEADER
          ===================================================== */}

          <div className="mb-7">
            <p className="text-xs font-bold uppercase tracking-[2px] text-violet-600">
              Account
            </p>

            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-[#10245b] sm:text-4xl">
              My Profile
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage your profile and learning account.
            </p>
          </div>

          {/* =====================================================
              MAIN GRID
          ===================================================== */}

          <div className="grid gap-6 xl:grid-cols-[minmax(0,2.05fr)_minmax(320px,0.95fr)]">

            {/* =====================================================
                LEFT SIDE
            ===================================================== */}

            <div className="space-y-6">

              {/* =====================================================
                  PROFILE HERO
              ===================================================== */}

              <section className="relative overflow-hidden rounded-[26px] border border-white/80 bg-white shadow-[0_15px_45px_rgba(40,55,110,0.08)]">

                {/* COVER */}

                <div className="relative h-[245px] overflow-hidden sm:h-[270px]">

                  {/* Main background */}

                  <div className="absolute inset-0 bg-gradient-to-br from-[#d8d4ff] via-[#eee8ff] to-[#fff0e8]" />

                  {/* Decorative circles */}

                  <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-violet-300/35" />

                  <div className="absolute right-[-70px] bottom-[-100px] h-80 w-80 rounded-full bg-pink-300/30" />

                  <div className="absolute left-[45%] bottom-[-120px] h-64 w-64 rounded-full bg-purple-400/20 blur-sm" />

                  <div className="absolute left-[-100px] top-[-120px] h-60 w-60 rounded-full bg-white/50 blur-2xl" />

                  <div className="absolute bottom-[-130px] left-[40%] h-64 w-[500px] rotate-[-18deg] rounded-[50%] bg-white/25" />

                  {/* Member Badge */}

                  <div className="absolute left-6 top-6 sm:left-8">
                    <span className="rounded-full border border-white/60 bg-white/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[1.5px] text-violet-700 backdrop-blur-md">
                      JS Master Member
                    </span>
                  </div>

                </div>

                {/* PROFILE CONTENT */}

                <div className="relative px-5 pb-7 sm:px-8 lg:px-10">

                  {/* Avatar + Edit */}

                  <div className="-mt-16 flex items-end justify-between sm:-mt-20">

                    <Avatar user={form} size={132} />

                    {!editing && (
                      <button
                        onClick={() => setEditing(true)}
                        className="mb-2 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-[#17275e] shadow-[0_8px_25px_rgba(20,30,80,0.10)] transition hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
                      >
                        <FaPencilAlt size={13} />
                        Edit Profile
                      </button>
                    )}

                  </div>

                  {!editing ? (

                    /* =================================================
                       VIEW MODE
                    ================================================= */

                    <>
                      {/* NAME */}

                      <div className="mt-5">

                        <h2 className="text-3xl font-extrabold tracking-tight text-[#10245b] sm:text-[36px]">
                          {user.firstName} {user.lastName}
                        </h2>

                        <div className="mt-2 flex items-center gap-2">

                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                            <FaGraduationCap size={14} />
                          </span>

                          <span className="text-base font-bold text-violet-600">
                            JavaScript Learner
                          </span>

                        </div>

                      </div>

                      {/* BIO */}

                      <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-500">
                        Keep learning, keep building and turn your JavaScript
                        knowledge into real-world projects. 🚀
                      </p>

                      {/* META */}

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">

                        <InfoItem
                          icon={<FaEnvelope />}
                          label="Email"
                          value={user.email}
                        />

                        <InfoItem
                          icon={<FaCalendarAlt />}
                          label="Member since"
                          value={memberSince}
                        />

                      </div>

                    </>

                  ) : (

                    /* =================================================
                       EDIT MODE
                    ================================================= */

                    <form onSubmit={handleSave} className="mt-7">

                      <div className="mb-5">

                        <h2 className="text-xl font-extrabold text-[#10245b]">
                          Edit your profile
                        </h2>

                        <p className="mt-1 text-sm text-slate-400">
                          Update your personal information.
                        </p>

                      </div>

                      {/* ERROR */}

                      {error && (
                        <div className="mb-5 flex items-center gap-2 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                          <FaExclamationTriangle />
                          {error}
                        </div>
                      )}

                      {/* NAME FIELDS */}

                      <div className="grid gap-4 sm:grid-cols-2">

                        <LabeledField
                          label="First name"
                          value={form.firstName}
                          onChange={(value) =>
                            setForm((prev) => ({
                              ...prev,
                              firstName: value,
                            }))
                          }
                        />

                        <LabeledField
                          label="Last name"
                          value={form.lastName}
                          onChange={(value) =>
                            setForm((prev) => ({
                              ...prev,
                              lastName: value,
                            }))
                          }
                        />

                      </div>

                      {/* IMAGE URL */}

                      <div className="mt-4">

                        <LabeledField
                          label="Profile image URL"
                          placeholder="https://example.com/profile.jpg"
                          value={form.img}
                          onChange={(value) =>
                            setForm((prev) => ({
                              ...prev,
                              img: value,
                            }))
                          }
                        />

                      </div>

                      {/* IMAGE PREVIEW */}

                      <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">

                        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                          Profile preview
                        </p>

                        <div className="flex items-center gap-4">

                          <Avatar user={form} size={62} />

                          <div>

                            <p className="font-bold text-slate-800">
                              {form.firstName || "First"}{" "}
                              {form.lastName || "Last"}
                            </p>

                            <p className="mt-1 text-xs text-violet-500">
                              JavaScript Learner
                            </p>

                          </div>

                        </div>

                      </div>

                      {/* BUTTONS */}

                      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

                        <button
                          type="button"
                          onClick={handleCancel}
                          className="rounded-xl border border-slate-200 px-6 py-3 text-sm font-bold text-slate-500 transition hover:bg-slate-50"
                        >
                          Cancel
                        </button>

                        <button
                          type="submit"
                          className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:shadow-xl"
                        >
                          Save Changes
                        </button>

                      </div>

                    </form>

                  )}

                </div>

              </section>

              {/* =====================================================
                  LEARNING OVERVIEW / STATISTICS
              ===================================================== */}

              <section className="rounded-[26px] border border-white bg-white p-5 shadow-[0_15px_45px_rgba(40,55,110,0.07)] sm:p-7">

                <div className="mb-5">

                  <h2 className="text-xl font-extrabold text-[#10245b]">
                    Learning Overview
                  </h2>

                  <p className="mt-1 text-sm text-slate-400">
                    Track your progress across JS Master.
                  </p>

                </div>

                {/* STATS */}

                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

                  <StatCard
                    icon={<FaBookOpen />}
                    number="0"
                    label="Topics"
                    iconBg="bg-violet-100"
                    iconText="text-violet-600"
                  />

                  <StatCard
                    icon={<FaCode />}
                    number="0"
                    label="Projects"
                    iconBg="bg-emerald-100"
                    iconText="text-emerald-600"
                  />

                  <StatCard
                    icon={<FaTrophy />}
                    number="0"
                    label="Tasks"
                    iconBg="bg-orange-100"
                    iconText="text-orange-500"
                  />

                  <StatCard
                    icon={<FaCheckCircle />}
                    number="0"
                    label="Completed"
                    iconBg="bg-sky-100"
                    iconText="text-sky-600"
                  />

                </div>

              </section>

            </div>

            {/* =====================================================
                RIGHT SIDE
            ===================================================== */}

            <aside className="space-y-6">

              {/* =====================================================
                  ABOUT ME
              ===================================================== */}

              <section className="rounded-[26px] border border-white bg-white p-6 shadow-[0_15px_45px_rgba(40,55,110,0.07)] sm:p-7">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                    <FaUser />
                  </div>

                  <h2 className="text-xl font-extrabold text-[#10245b]">
                    About Me
                  </h2>

                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-500">
                  I'm a passionate JavaScript learner, always exploring new
                  technologies and building cool projects. I love turning
                  ideas into real-world solutions.
                </p>

                {/* TAGS */}

                <div className="mt-6 flex flex-wrap gap-2">

                  <Tag
                    text="JavaScript"
                    className="bg-amber-50 text-amber-600"
                  />

                  <Tag
                    text="Web Development"
                    className="bg-violet-50 text-violet-600"
                  />

                  <Tag
                    text="Problem Solving"
                    className="bg-emerald-50 text-emerald-600"
                  />

                  <Tag
                    text="Building Projects"
                    className="bg-sky-50 text-sky-600"
                  />

                </div>

              </section>

              {/* =====================================================
                  ACCOUNT ACTIONS
              ===================================================== */}

              <section className="rounded-[26px] border border-white bg-white p-6 shadow-[0_15px_45px_rgba(40,55,110,0.07)] sm:p-7">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                    <FaSignOutAlt />
                  </div>

                  <h2 className="text-xl font-extrabold text-[#10245b]">
                    Account Actions
                  </h2>

                </div>

                {/* LOGOUT */}

                <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">

                  <div className="flex items-center justify-between gap-4">

                    <div className="flex min-w-0 items-center gap-3">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                        <FaSignOutAlt size={15} />
                      </div>

                      <div>

                        <p className="font-bold text-slate-800">
                          Log out
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          Sign out from this device.
                        </p>

                      </div>

                    </div>

                    <button
                      onClick={handleLogout}
                      className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
                    >
                      Logout
                    </button>

                  </div>

                </div>

                {/* DANGER ZONE */}

                <div className="mt-5 rounded-2xl border border-red-100 bg-red-50/70 p-5">

                  <div className="flex items-start gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-red-500 shadow-sm">
                      <FaExclamationTriangle />
                    </div>

                    <div className="min-w-0">

                      <h3 className="font-extrabold text-red-600">
                        Danger Zone
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        Deleting your account removes your profile and
                        progress stored on this device. This action can't be
                        undone.
                      </p>

                    </div>

                  </div>

                  {!confirmingDelete ? (

                    <button
                      onClick={() => setConfirmingDelete(true)}
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-red-300 bg-white py-3 text-sm font-bold text-red-600 transition hover:bg-red-50"
                    >
                      <FaTrashAlt size={13} />
                      Delete Account
                    </button>

                  ) : (

                    <div className="mt-5 grid grid-cols-2 gap-2">

                      <button
                        onClick={handleDelete}
                        className="rounded-xl bg-red-500 py-3 text-xs font-bold text-white transition hover:bg-red-600"
                      >
                        Yes, Delete
                      </button>

                      <button
                        onClick={() => setConfirmingDelete(false)}
                        className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white py-3 text-xs font-bold text-slate-500 transition hover:bg-slate-50"
                      >
                        <FaTimes size={10} />
                        Cancel
                      </button>

                    </div>

                  )}

                </div>

              </section>

            </aside>

          </div>

        </div>
      </main>

      <BottomNavbar />
    </>
  );
}

/* ================================================================
   AVATAR
================================================================ */

function Avatar({ user, size = 64 }) {
  if (user?.img) {
    return (
      <img
        src={user.img}
        alt="Profile"
        className="rounded-[30px] border-[6px] border-white object-cover shadow-[0_12px_35px_rgba(30,40,90,0.18)]"
        style={{
          width: size,
          height: size,
        }}
      />
    );
  }

  return (
    <div
      className="flex items-center justify-center rounded-[30px] border-[6px] border-white bg-gradient-to-br from-violet-500 to-indigo-600 font-extrabold text-white shadow-[0_12px_35px_rgba(30,40,90,0.18)]"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.28,
      }}
    >
      {getInitials(user?.firstName, user?.lastName)}
    </div>
  );
}

/* ================================================================
   INFO ITEM
================================================================ */

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
        {icon}
      </div>

      <div className="min-w-0">

        <p className="text-[10px] font-bold uppercase tracking-[1px] text-slate-400">
          {label}
        </p>

        <p className="mt-0.5 max-w-[250px] truncate text-sm font-semibold text-slate-700">
          {value}
        </p>

      </div>

    </div>
  );
}

/* ================================================================
   STAT CARD
================================================================ */

function StatCard({
  icon,
  number,
  label,
  iconBg,
  iconText,
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">

      <div className="flex items-center justify-between">

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-full ${iconBg} ${iconText}`}
        >
          {icon}
        </div>

        <span className="text-2xl font-extrabold text-[#10245b]">
          {number}
        </span>

      </div>

      <p className="mt-4 text-sm font-semibold text-slate-500">
        {label}
      </p>

    </div>
  );
}

/* ================================================================
   TAG
================================================================ */

function Tag({ text, className }) {
  return (
    <span
      className={`rounded-full px-4 py-2 text-xs font-semibold ${className}`}
    >
      {text}
    </span>
  );
}

/* ================================================================
   INPUT
================================================================ */

function LabeledField({
  label,
  value,
  onChange,
  placeholder,
}) {
  return (
    <label className="block">

      <span className="mb-2 block text-xs font-bold text-slate-500">
        {label}
      </span>

      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 outline-none transition placeholder:text-slate-300 focus:border-violet-400 focus:ring-4 focus:ring-violet-50"
      />

    </label>
  );
}

export default ProfilePage;