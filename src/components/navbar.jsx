import { useState } from "react";
import { Link } from "react-router-dom";
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

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const Navlinks = [
    { name: "Home", path: "/home" },
    { name: "Topics", path: "/topics" },
    { name: "Task", path: "/task" },
    { name: "Interview Questions", path: "/interviewQs" },
    { name: "project", path: "/project" },
  ];

  const profileOptions = [
    { name: "Profile", icon: <FaUser />, path: "/profile" },
    { name: "Settings", icon: <FaCog />, path: "/settings" },
    { name: "Terms & Condition", icon: <FaFileAlt />, path: "/terms" },
    { name: "Logout", icon: <FaSignOutAlt />, path: "#" },
  ];

  return (
  <nav className="hidden lg:block sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-[68px] items-center justify-between">

          {/* ================= LOGO ================= */}
          <Link
            to="/home"
            className="group flex items-center gap-3"
          >
            {/* Logo Icon */}
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white shadow-md shadow-violet-200 transition-all duration-300 group-hover:bg-violet-700 group-hover:shadow-lg group-hover:shadow-violet-200">

              <FaCode className="text-lg" />

              {/* Small JS badge */}
              <span className="absolute -bottom-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded bg-slate-900 px-1 text-[8px] font-bold text-white">
                JS
              </span>
            </div>

            {/* Brand Name */}
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

                {/* Bottom line */}
                <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] origin-left scale-x-0 rounded-full bg-violet-600 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}

          </div>


          {/* ================= RIGHT SECTION ================= */}
          <div className="flex items-center gap-3">

            {/* Profile */}
            <div className="relative">

              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-1.5 transition-all duration-200 hover:border-violet-200 hover:bg-violet-50 active:scale-95"
              >

                <img
                  src="https://i.pinimg.com/736x/5b/e1/60/5be1600a425c908ce13373efd2874a42.jpg"
                  alt="Profile"
                  className="h-7 w-7 rounded-lg object-cover"
                />

                <FaChevronDown
                  className={`text-[10px] text-slate-500 transition-transform duration-300 ${
                    isProfileOpen ? "rotate-180" : ""
                  }`}
                />

              </button>


              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 top-full mt-3 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-900/10">

                  {/* Profile Header */}
                  <div className="mb-1 flex items-center gap-3 rounded-lg bg-slate-50 px-3 py-3">

                    <img
                      src="https://i.pinimg.com/736x/5b/e1/60/5be1600a425c908ce13373efd2874a42.jpg"
                      alt="Profile"
                      className="h-9 w-9 rounded-lg object-cover"
                    />

                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        JSMaster User
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
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 ${
                        option.name === "Logout"
                          ? "text-slate-500 hover:bg-slate-100"
                          : "text-slate-600 hover:bg-violet-50 hover:text-violet-600"
                      }`}
                    >
                      <span className="text-xs">
                        {option.icon}
                      </span>

                      {option.name}
                    </Link>
                  ))}

                </div>
              )}

            </div>


            {/* Mobile Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all duration-200 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600 lg:hidden"
            >
              {isMenuOpen ? (
                <FaTimes />
              ) : (
                <FaBars />
              )}
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

export default Navbar;