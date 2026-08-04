import { useNavigate, useLocation } from "react-router-dom";
import {
  IoHome,
  IoHomeOutline,
  IoBook,
  IoBookOutline,
  IoRocket,
  IoRocketOutline,
  IoHelpCircle,
  IoHelpCircleOutline,
  IoPersonCircle,
  IoPersonCircleOutline,
} from "react-icons/io5";

const TABS = [
  { path: "/", label: "Home", icon: IoHomeOutline, activeIcon: IoHome },
  { path: "/topics", label: "Topics", icon: IoBookOutline, activeIcon: IoBook },
  { path: "/projects", label: "Projects", icon: IoRocketOutline, activeIcon: IoRocket },
  { path: "/mcq", label: "MCQ", icon: IoHelpCircleOutline, activeIcon: IoHelpCircle },
  { path: "/profile", label: "Profile", icon: IoPersonCircleOutline, activeIcon: IoPersonCircle },
];

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-t border-gray-200"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center justify-around h-16 px-1">
        {TABS.map(({ path, label, icon: Icon, activeIcon: ActiveIcon }) => {
          // exact match for Home ("/"), startsWith for the rest so nested routes still highlight
          const isActive = path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);
          const ShownIcon = isActive ? ActiveIcon : Icon;

          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="relative flex flex-col items-center justify-center flex-1 h-full gap-0.5"
            >
              <div
                className={`flex items-center justify-center w-10 h-8 rounded-xl transition-all duration-300 ${
                  isActive ? "bg-purple-100" : "bg-transparent"
                }`}
              >
                <ShownIcon
                  className={`text-xl transition-colors ${isActive ? "text-purple-600" : "text-gray-400"}`}
                />
              </div>
              <span
                className={`text-[10px] font-medium transition-colors ${
                  isActive ? "text-purple-600" : "text-gray-400"
                }`}
              >
                {label}
              </span>
              {isActive && (
                <span className="absolute -top-[1px] w-8 h-[3px] rounded-full bg-purple-600" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default BottomNav;