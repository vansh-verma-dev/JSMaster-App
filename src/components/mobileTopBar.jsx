
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaChevronDown,
  FaUser,
  FaCog,
  FaFileAlt,
  FaSignOutAlt,
} from "react-icons/fa";

import { getInitials, logout, useAuth } from "../utils/Auth";

function MobileTopBar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  const profileOptions = [
    {
      name: "Profile",
      icon: <FaUser />,
      path: "/profile",
    },
    {
      name: "Terms & Condition",
      icon: <FaFileAlt />,
      path: "/termsPage",
    },
  ];

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
    navigate("/");
  };

  return (
    <div className="sm:hidden sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-3">

        {/* ================= LEFT ================= */}
        <div className="flex flex-col leading-tight">
          <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-slate-400">
            Welcome back
          </span>

          <h1 className="mt-1 text-[17px] font-bold text-slate-900">
            {isAuthenticated
              ? `${user?.firstName || ""} ${user?.lastName || ""}`.trim()
              : "JS Master"}
          </h1>
        </div>

        {/* ================= RIGHT ================= */}
        {isAuthenticated ? (
          <div className="relative">

            {/* Profile Button */}
            <button
              onClick={() => setIsProfileOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-1.5 transition-all duration-200 hover:border-violet-200 hover:bg-violet-50 active:scale-95"
              aria-label="Profile"
            >
              <Avatar user={user} size={36} />

              <FaChevronDown
                className={`mr-1 text-[10px] text-slate-500 transition-transform duration-300 ${
                  isProfileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* ================= PROFILE DROPDOWN ================= */}
            {isProfileOpen && (
              <div className="absolute right-0 top-full mt-3 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-900/10">

                {/* User Info */}
                <div className="mb-1 flex items-center gap-3 rounded-lg bg-slate-50 px-3 py-3">
                  <Avatar user={user} size={36} />

                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-slate-800">
                      {user?.firstName} {user?.lastName}
                    </p>

                    <p className="text-xs text-slate-400">
                      JavaScript Learner
                    </p>
                  </div>
                </div>

                {/* Options */}
                {profileOptions.map((option) => (
                  <Link
                    key={option.name}
                    to={option.path}
                    onClick={() => setIsProfileOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-violet-50 hover:text-violet-600"
                  >
                    <span className="text-xs">
                      {option.icon}
                    </span>

                    {option.name}
                  </Link>
                ))}

                {/* Logout */}
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
          /* ================= SIGN IN ================= */
          <Link
            to="/account"
            className="rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700 active:scale-95"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}

/* ================= AVATAR ================= */

function Avatar({ user, size = 28 }) {
  if (user?.img) {
    return (
      <img
        src={user.img}
        alt="Profile"
        className="rounded-lg object-cover"
        style={{
          height: size,
          width: size,
        }}
      />
    );
  }

  return (
    <div
      className="flex items-center justify-center rounded-lg bg-violet-100 font-bold text-violet-600"
      style={{
        height: size,
        width: size,
        fontSize: size * 0.36,
      }}
    >
      {getInitials(user?.firstName, user?.lastName)}
    </div>
  );
}

export default MobileTopBar;
 
