import {
  IoHome,
  IoHomeOutline,
  IoBook,
  IoBookOutline,
  IoRocket,
  IoRocketOutline,
} from "react-icons/io5";

import {
  FaTasks,
  FaRegQuestionCircle,
  FaQuestionCircle,
} from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";

const NavItems = [
  {
    id: "home",
    label: "Home",
    path: "/",
    icon: IoHomeOutline,
    activeIcon: IoHome,
  },
  {
    id: "topics",
    label: "Topics",
    path: "/topics",
    icon: IoBookOutline,
    activeIcon: IoBook,
  },
  {
    id: "tasks",
    label: "Tasks",
    path: "/tasks",
    icon: FaTasks,
    activeIcon: FaTasks,
  },
  {
    id: "mcq",
    label: "MCQ",
    path: "/mcq",
    icon: FaRegQuestionCircle,
    activeIcon: FaQuestionCircle,
  },
  {
    id: "project",
    label: "Projects",
    path: "/project",
    icon: IoRocketOutline,
    activeIcon: IoRocket,
  },
];

function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav
      className="
        md:hidden fixed bottom-0 left-0 w-full z-50
        bg-white border-t border-gray-100
        shadow-[0_-4px_16px_rgba(20,23,43,0.06)]
        pb-[env(safe-area-inset-bottom)]
      "
    >
      <div className="flex items-stretch justify-around px-1 py-1.5">

        {NavItems.map((item) => {

          // Current URL check
          const isActive = location.pathname === item.path;

          const Icon = isActive
            ? item.activeIcon
            : item.icon;

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className="
                flex flex-col items-center justify-center
                gap-1 flex-1 py-1.5 rounded-xl
                transition-all duration-200
                active:scale-95
              "
            >

              {/* Icon */}
              <Icon
                className={`text-[21px] transition-colors ${
                  isActive
                    ? "text-[#1B1F3B]"
                    : "text-gray-400"
                }`}
              />

              {/* Label */}
              <span
                className={`text-[10.5px] leading-none transition-colors ${
                  isActive
                    ? "text-[#1B1F3B] font-semibold"
                    : "text-gray-400 font-medium"
                }`}
              >
                {item.label}
              </span>

              {/* Active Dot */}
              <span
                className={`h-1 w-1 rounded-full mt-0.5 transition-opacity ${
                  isActive
                    ? "bg-[#F7DF1E] opacity-100"
                    : "opacity-0"
                }`}
              />

            </button>
          );
        })}

      </div>
    </nav>
  );
}

export default BottomNavigation;