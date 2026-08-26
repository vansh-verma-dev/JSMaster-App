import ActiveUser from "../data/user";
import { FaChevronDown, FaUser, FaCog, FaFileAlt, FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function MobileTopBar() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const profileOptions = [
        {
            name: "Profile",
            icon: <FaUser />,
            path: "/profile",
        },
        {
            name: "Settings",
            icon: <FaCog />,
            path: "/settings",
        },
        {
            name: "Terms & Condition",
            icon: <FaFileAlt />,
            path: "/terms",
        },
        {
            name: "Logout",
            icon: <FaSignOutAlt />,
            path: "#",
        },
    ];

    return (
        <div className="sm:hidden sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">

            <div className="flex items-center justify-between px-4 py-3">

                {/* ================= LEFT ================= */}
                <div className="flex flex-col leading-tight">

                    <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-slate-400">
                        Welcome back
                    </span>

                    <h1 className="mt-1 text-[17px] font-bold text-slate-900">
                        {ActiveUser.first_Name}{" "}
                        {ActiveUser.last_Name}
                    </h1>

                </div>


                {/* ================= RIGHT ================= */}
                <div className="relative">

                    {/* Profile Button */}
                    <button
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-1.5 transition-all duration-200 hover:border-violet-200 hover:bg-violet-50 active:scale-95"
                        aria-label="Profile"
                    >

                        <img
                            src={ActiveUser.img}
                            alt={`${ActiveUser.first_Name}'s profile`}
                            className="h-9 w-9 rounded-lg object-cover"
                        />

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

                                <img
                                    src={ActiveUser.img}
                                    alt="Profile"
                                    className="h-9 w-9 rounded-lg object-cover"
                                />

                                <div className="min-w-0">
                                    <p className="truncate text-sm font-bold text-slate-800">
                                        {ActiveUser.first_Name}{" "}
                                        {ActiveUser.last_Name}
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

            </div>

        </div>
    );
}

export default MobileTopBar;