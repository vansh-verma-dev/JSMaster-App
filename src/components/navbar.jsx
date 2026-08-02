import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Bell } from "lucide-react";

export default function Navbar({ userName = "Rahul" }) {
  const location = useLocation();

  const navLinks = [
    { id: "home", label: "Home", path: "/home" },
    { id: "courses", label: "CoursesPage", path: "/CoursesPage" },  
    { id: "practice", label: "Practice", path: "/TasksPage" },
    { id: "profile", label: "Profile", path: "/Profile" },
  ];

  return (
    <nav className="w-full sticky top-0 z-40" style={{ background: "#5b2a9e" }}>
      <div className="flex items-center justify-between px-5 md:px-8 py-4">
        <div>
          <span className="hidden md:block font-bold text-xl text-white">JSMaster</span>
          <div className="block md:hidden">
            <p className="text-white font-semibold text-base leading-tight">{userName}</p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
              let's code today
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => {
            const isActive = location.pathname.toLowerCase() === item.path.toLowerCase();
            return (
              <Link
                key={item.id}
                to={item.path}
                className="relative text-sm font-medium py-1 transition-colors duration-200"
                style={{ color: isActive ? "#F7DF1E" : "rgba(255,255,255,0.7)" }}
              >
                {item.label}
                <span
                  className="absolute left-0 -bottom-0.5 h-[2px] rounded-full transition-all duration-300 ease-out"
                  style={{ width: isActive ? "100%" : "0%", background: "#F7DF1E" }}
                />
              </Link>
            );
          })}
        </div>

        <button
          className="flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-110"
          style={{ width: 38, height: 38, background: "rgba(255,255,255,0.12)" }}
        >
          <Bell size={18} color="#ffffff" />
        </button>
      </div>
    </nav>
  );
}