import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, Code2, User } from "lucide-react";

export default function MobileBottomNav() {
  const location = useLocation();

  const navItems = [
    { id: "home", label: "Home", icon: Home, path: "/home" },
    { id: "courses", label: "CoursesPage", icon: BookOpen, path: "/CoursesPage" },
    { id: "practice", label: "Practice", icon: Code2, path: "/TasksPage" },
    { id: "Profile", label: "Profile", icon: User, path: "/Profile" },
  ];

  return (
    <div
      className="flex md:hidden items-center justify-around fixed bottom-0 left-0 right-0 py-3 z-40 border-t"
      style={{ background: "#ffffff", borderColor: "#eee" }}
    >
      {navItems.map((item) => {
        const isActive = location.pathname.toLowerCase() === item.path.toLowerCase();
        return (
          <Link key={item.id} to={item.path} className="flex flex-col items-center gap-1">
            <item.icon size={22} color={isActive ? "#5b2a9e" : "#aaa"} />
            <span className="text-[10px]" style={{ color: isActive ? "#5b2a9e" : "#aaa" }}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}