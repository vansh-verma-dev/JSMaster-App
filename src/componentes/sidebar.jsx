import { NavLink } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import {
  IoHomeOutline,
  IoBookOutline,
  IoCheckboxOutline,
  IoHelpCircleOutline,
  IoFolderOutline,
  IoPersonOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";

const navItems = [
  { label: "Home", icon: IoHomeOutline, path: "/" },
  { label: "Topics", icon: IoBookOutline, path: "/topics" },
  { label: "Task", icon: IoCheckboxOutline, path: "/task" },
  { label: "MCQ Question", icon: IoHelpCircleOutline, path: "/mcq" },
  { label: "Projects", icon: IoFolderOutline, path: "/projects" },
  { label: "Profile", icon: IoPersonOutline, path: "/profile" },
  { label: "Terms & Privacy", icon: IoDocumentTextOutline, path: "/privacypolicy" },
];

function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col justify-between h-[90vh] w-[240px] bg-white border-r border-gray-200 p-3 pt-5">
      <div className="flex flex-col gap-1">
        {navItems.map(({ label, icon: Icon, path }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `w-full text-left text-[15px] font-medium px-3 py-2.5 rounded-xl flex items-center gap-3 transition-colors ${
                isActive
                  ? "bg-purple-600 text-white shadow-sm shadow-purple-200"
                  : "text-gray-600 hover:bg-purple-50 hover:text-purple-600"
              }`
            }
          >
            <Icon className="text-lg shrink-0" />
            {label}
          </NavLink>
        ))}
      </div>

      <div className="border-t border-gray-100 pt-2">
        <button className="w-full text-left text-[15px] font-medium px-3 py-2.5 rounded-xl flex items-center gap-3 text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors">
          <IoLogOutOutline className="text-lg shrink-0" />
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Sidebar;