import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaCode,
  FaUser,
  FaCog,
  FaFileAlt,
  FaSignOutAlt,
} from "react-icons/fa";

import { getInitials, logout, useAuth } from "../utils/Auth";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  const Navlinks = [
    { name: "Home", path: "/" },
    { name: "Topics", path: "/topics" },
    { name: "Task", path: "/tasks" },
    { name: "Interview Questions", path: "/interviewQs" },
    { name: "project", path: "/project" },
  ];

  const profileOptions = [
    { name: "Profile", icon: <FaUser />, path: "/profile" },
    { name: "Terms & Condition", icon: <FaFileAlt />, path: "/termsPage" },
  ];

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
    navigate("/");
  };

  return (
    <nav className="hidden lg:block sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[68px] items-center justify-between">
          {/* ================= LOGO ================= */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white shadow-md shadow-violet-200 transition-all duration-300 group-hover:bg-violet-700 group-hover:shadow-lg group-hover:shadow-violet-200">
              <FaCode className="text-lg" />
              <span className="absolute -bottom-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded bg-slate-900 px-1 text-[8px] font-bold text-white">
                JS
              </span>
            </div>

            <div className="leading-none">
              <h1 className="text-[22px] font-extrabold tracking-tight text-slate-900">
                JS<span className="text-violet-600">Master</span>
              </h1>
              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[2px] text-slate-400">
                Learn • Practice • Build
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden items-center gap-1 lg:flex">
            {Navlinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="group relative rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-600 transition-all duration-200 hover:bg-violet-50 hover:text-violet-600"
              >
                {link.name}
                <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] origin-left scale-x-0 rounded-full bg-violet-600 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          {/* ================= RIGHT SECTION ================= */}
          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-1.5 transition-all duration-200 hover:border-violet-200 hover:bg-violet-50 active:scale-95"
                >
                  <Avatar user={user} size={28} />
                  <FaChevronDown
                    className={`text-[10px] text-slate-500 transition-transform duration-300 ${
                      isProfileOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 top-full mt-3 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-900/10">
                    <div className="mb-1 flex items-center gap-3 rounded-lg bg-slate-50 px-3 py-3">
                      <Avatar user={user} size={36} />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-slate-800">
                          {user.firstName} {user.lastName}
                        </p>
                        <p className="text-xs text-slate-400">
                          JavaScript Learner
                        </p>
                      </div>
                    </div>

                    {profileOptions.map((option) => (
                      <Link
                        key={option.name}
                        to={option.path}
                        onClick={() => setIsProfileOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-violet-50 hover:text-violet-600"
                      >
                        <span className="text-xs">{option.icon}</span>
                        {option.name}
                      </Link>
                    ))}

                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-500 transition-colors duration-200 hover:bg-slate-100"
                    >
                      <span className="text-xs">
                        <FaSignOutAlt />
                      </span>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/account"
                className="rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700"
              >
                Sign In
              </Link>
            )}

            {/* Mobile Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all duration-200 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600 lg:hidden"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isMenuOpen && (
          <div className="border-t border-slate-100 py-4 lg:hidden">
            <div className="space-y-1">
              {Navlinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-semibold text-slate-600 transition-all duration-200 hover:bg-violet-50 hover:text-violet-600"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function Avatar({ user, size = 28 }) {
  if (user?.img) {
    return (
      <img
        src={user.img}
        alt="Profile"
        className="rounded-lg object-cover"
        style={{ height: size, width: size }}
      />
    );
  }
  return (
    <div
      className="flex items-center justify-center rounded-lg bg-violet-100 font-bold text-violet-600"
      style={{ height: size, width: size, fontSize: size * 0.36 }}
    >
      {getInitials(user?.firstName, user?.lastName)}
    </div>
  );
}

export default Navbar;