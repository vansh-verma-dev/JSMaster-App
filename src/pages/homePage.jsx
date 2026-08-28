import React from "react";
import {
  FiBell,
  FiMenu,
  FiSearch,
  FiChevronRight,
  FiCode,
  FiPlay,
  FiAward,
  FiBookOpen,
  FiZap,
  FiUser,
  FiHome,
  FiTarget,
  FiMessageCircle,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";
import Navbar from "../components/navbar";
import BottomNavbar from "../components/bottomNavbar";
import MobileTopBar from "../components/mobileTopBar";

const HomePage = () => {
  const topics = [
    {
      name: "Variables",
      icon: "JS",
      color: "bg-yellow-400",
      text: "text-yellow-950",
    },
    {
      name: "Functions",
      icon: "ƒ",
      color: "bg-purple-400",
      text: "text-white",
    },
    {
      name: "Arrays",
      icon: "[]",
      color: "bg-blue-400",
      text: "text-white",
    },
    {
      name: "Objects",
      icon: "{}",
      color: "bg-pink-400",
      text: "text-white",
    },
    {
      name: "Async JS",
      icon: "⚡",
      color: "bg-orange-400",
      text: "text-white",
    },
  ];

  const practiceLevels = [
    {
      title: "Easy",
      subtitle: "Build Basics",
      tasks: "15 Tasks",
      color: "bg-emerald-400",
      icon: "01",
    },
    {
      title: "Medium",
      subtitle: "Build Logic",
      tasks: "15 Tasks",
      color: "bg-orange-400",
      icon: "02",
    },
    {
      title: "Hard",
      subtitle: "Think Deep",
      tasks: "15 Tasks",
      color: "bg-red-400",
      icon: "03",
    },
  ];

  return (
  <>
  <Navbar/>
  <MobileTopBar/>
  <BottomNavbar/>
  </>
  );
};

export default HomePage;