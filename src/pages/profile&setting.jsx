import { useState, useEffect, useRef } from "react";
import Navbar from "../componentes/navbar";
import Sidebar from "../componentes/sidebar";
import BottomNav from "../componentes/Bottomnav";
import {
  IoMailOutline,
  IoLocationOutline,
  IoCalendarOutline,
  IoShieldCheckmarkOutline,
  IoCodeSlashOutline,
  IoRocketOutline,
  IoFlameOutline,
  IoTrashOutline,
  IoCheckmarkCircleOutline,
  IoSparklesOutline,
  IoLaptopOutline,
  IoPencilOutline,
  IoTimeOutline,
  IoCloseOutline,
  IoShareSocialOutline,
  IoCameraOutline,
  IoImageOutline,
  IoLinkOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoAddCircleOutline,
} from "react-icons/io5";

function Profile() {
  // Load profile state & custom features from localStorage if available
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("jsmaster_profile_v2");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback
      }
    }
    return {
      name: "Vansh Verma",
      role: "Full Stack & Frontend Developer",
      bio: "Passionate full-stack web developer building high-performance modern web apps. Learning advanced JavaScript & React patterns on JSMaster.",
      location: "India",
      email: "vansh@example.com",
      joined: "August 2026",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      avatar: "",
      banner: "",
      customSections: [
        { title: "Current Focus", content: "Mastering React state management, Tailwind CSS animations, and building custom web applications." }
      ]
    };
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempProfile, setTempProfile] = useState(profile);
  const [newSectionTitle, setNewSectionTitle] = useState("");
  const [newSectionContent, setNewSectionContent] = useState("");
  const [notification, setNotification] = useState("");

  const avatarInputRef = useRef(null);
  const bannerInputRef = useRef(null);

  // Auto-save changes to localStorage
  useEffect(() => {
    localStorage.setItem("jsmaster_profile_v2", JSON.stringify(profile));
  }, [profile]);

  // JSMaster Activity Feed
  const [activities] = useState([
    { id: 1, title: "Completed Shoe Store Web App - Step 5", time: "2 hours ago", icon: IoRocketOutline, color: "text-purple-600 bg-purple-100" },
    { id: 2, title: "Scored 100% in Advanced JavaScript Closures Quiz", time: "Yesterday", icon: IoFlameOutline, color: "text-amber-600 bg-amber-100" },
    { id: 3, title: "Finished LocalStorage State Management Task", time: "3 days ago", icon: IoCheckmarkCircleOutline, color: "text-emerald-600 bg-emerald-100" },
    { id: 4, title: "Saved custom code snippet for React Custom Hooks", time: "5 days ago", icon: IoCodeSlashOutline, color: "text-blue-600 bg-blue-100" },
  ]);

  // Convert uploaded image file to Base64 for localStorage persistence
  const handleImageUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempProfile((prev) => ({ ...prev, [field]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddCustomSection = () => {
    if (!newSectionTitle.trim() || !newSectionContent.trim()) return;
    const updatedSections = [...tempProfile.customSections, { title: newSectionTitle, content: newSectionContent }];
    setTempProfile({ ...tempProfile, customSections: updatedSections });
    setNewSectionTitle("");
    setNewSectionContent("");
  };

  const handleRemoveCustomSection = (index) => {
    const updatedSections = tempProfile.customSections.filter((_, i) => i !== index);
    setTempProfile({ ...tempProfile, customSections: updatedSections });
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setProfile(tempProfile);
    setIsEditing(false);
    setNotification("Profile saved successfully to Local Storage!");
    setTimeout(() => setNotification(""), 4000);
  };

  const handleClearData = () => {
    if (window.confirm("Are you sure? This will clear all local storage profile data.")) {
      localStorage.clear();
      setProfile({
        name: "Vansh Verma",
        role: "Full Stack & Frontend Developer",
        bio: "Passionate full-stack web developer building high-performance modern web apps. Learning advanced JavaScript & React patterns on JSMaster.",
        location: "India",
        email: "vansh@example.com",
        joined: "August 2026",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        avatar: "",
        banner: "",
        customSections: []
      });
      setNotification("Local profile data cleared!");
      setTimeout(() => setNotification(""), 4000);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1 bg-slate-50">
        <Sidebar />

        {/* Main Content Area - True Full Width with Zero Margin/Padding on Edges */}
        <div className="flex-1 w-full min-h-[90vh] overflow-y-auto flex flex-col">
          
          {/* Notification Alert Toast */}
          {notification && (
            <div className="fixed top-20 right-4 z-50 bg-emerald-500 text-white text-xs font-semibold px-5 py-3 rounded-2xl flex items-center gap-2 shadow-2xl animate-fadeIn">
              <IoCheckmarkCircleOutline className="text-lg shrink-0" />
              {notification}
            </div>
          )}

          {/* ========================================================= */}
          {/* 1. EDGE-TO-EDGE FULL WIDTH BANNER */}
          {/* ========================================================= */}
          <div className="w-full h-52 sm:h-80 bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 relative overflow-hidden shrink-0">
            {profile.banner ? (
              <img src={profile.banner} alt="Cover Banner" className="w-full h-full object-cover" />
            ) : (
              <>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.25),transparent_50%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </>
            )}

            {/* Top Right Quick Actions */}
            <div className="absolute top-4 right-4 sm:right-8 flex gap-2.5 z-10">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  setNotification("Profile link copied to clipboard!");
                  setTimeout(() => setNotification(""), 3000);
                }}
                className="bg-black/40 hover:bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 shadow-lg border border-white/10"
              >
                <IoShareSocialOutline /> Share
              </button>
              <button
                onClick={() => {
                  setTempProfile(profile);
                  setIsEditing(true);
                }}
                className="bg-white text-slate-900 hover:bg-slate-100 text-xs font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 shadow-xl"
              >
                <IoPencilOutline /> Edit Profile
              </button>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. PROFILE DETAILS CONTAINER */}
          {/* ========================================================= */}
          <div className="w-full px-4 sm:px-10 pb-8 bg-white border-b border-slate-200/80 shadow-sm shrink-0">
            <div className="max-w-6xl mx-auto">
              
              {/* Circular Avatar & Stats Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end -mt-16 sm:-mt-24 mb-6 gap-4">
                <div className="relative">
                  {/* Perfect Circular Avatar with no border radius box */}
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white p-1.5 shadow-2xl border-4 border-white overflow-hidden bg-slate-900">
                    {profile.avatar ? (
                      <img src={profile.avatar} alt="Avatar" className="w-full h-full object-cover rounded-full" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-full flex items-center justify-center text-white text-4xl font-black shadow-inner">
                        {profile.name.split(" ").map(n => n[0]).join("")}
                      </div>
                    )}
                  </div>
                  <span className="absolute bottom-2 right-2 bg-emerald-500 border-2 border-white w-6 h-6 rounded-full flex items-center justify-center shadow-md" title="Active">
                    <span className="w-2.5 h-2.5 bg-white rounded-full animate-ping" />
                  </span>
                </div>

                <div className="flex gap-3 w-full sm:w-auto">
                  <div className="flex-1 sm:flex-none text-center px-6 py-3 bg-slate-50 border border-slate-200/80 rounded-2xl shadow-sm">
                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Learning Streak</p>
                    <p className="text-base sm:text-lg font-black text-slate-900 mt-0.5">🔥 12 Days</p>
                  </div>
                  <div className="flex-1 sm:flex-none text-center px-6 py-3 bg-slate-50 border border-slate-200/80 rounded-2xl shadow-sm">
                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Projects Built</p>
                    <p className="text-base sm:text-lg font-black text-purple-600 mt-0.5">8 Completed</p>
                  </div>
                </div>
              </div>

              {/* Name, Role & Bio */}
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">{profile.name}</h1>
                  <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3.5 py-1 rounded-full border border-purple-200">
                    Pro Learner
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-purple-600 mt-1">{profile.role}</p>
                
                <p className="text-xs sm:text-base text-slate-600 mt-3 max-w-4xl leading-relaxed">
                  {profile.bio}
                </p>

                {/* Social & Meta Details */}
                <div className="flex flex-wrap gap-3 mt-5 text-xs sm:text-sm text-slate-600 font-medium items-center">
                  <span className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl">
                    <IoLocationOutline className="text-purple-600 text-base" /> {profile.location}
                  </span>
                  <span className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl">
                    <IoMailOutline className="text-purple-600 text-base" /> {profile.email}
                  </span>
                  <span className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl">
                    <IoCalendarOutline className="text-purple-600 text-base" /> Joined {profile.joined}
                  </span>
                  {profile.github && (
                    <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 bg-slate-900 text-white px-4 py-2 rounded-xl hover:bg-slate-800 transition-all font-semibold">
                      <IoLogoGithub className="text-base" /> GitHub
                    </a>
                  )}
                  {profile.linkedin && (
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-all font-semibold">
                      <IoLogoLinkedin className="text-base" /> LinkedIn
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================= */}
          {/* 3. STACKED PREMIUM FUNCTIONS (ONE BELOW ANOTHER) */}
          {/* ========================================================= */}
          <div className="w-full px-4 sm:px-10 py-10 flex flex-col gap-8 max-w-6xl mx-auto">
            
            {/* Function Block 1: Core Tech Stack & Skills */}
            <div className="w-full bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">
                  <IoCodeSlashOutline className="text-xl" />
                </div>
                Core Tech Stack & Skills
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 pl-12">Technologies practiced and applied across JSMaster learning modules.</p>

              <div className="mt-6 flex flex-wrap gap-2.5 pl-0 sm:pl-12">
                {["JavaScript (ES6+)", "React.js", "Tailwind CSS", "HTML5 & CSS3", "Git & GitHub", "Local Storage API", "UI/UX Design", "REST APIs"].map((tech) => (
                  <span key={tech} className="bg-slate-50 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200 border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-2xl transition-all cursor-default shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 pl-0 sm:pl-12">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Learning Progress Metrics</h3>
                <div className="space-y-4 max-w-3xl">
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                      <span>Projects Completion Rate</span>
                      <span className="text-purple-600">80%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                      <div className="h-full bg-gradient-to-r from-purple-600 to-fuchsia-500 rounded-full w-[80%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                      <span>JavaScript MCQs & Quiz Accuracy</span>
                      <span className="text-emerald-600">95%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full w-[95%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Function Block 2: Dynamic Custom Sections Added by User */}
            {profile.customSections && profile.customSections.length > 0 && (
              <div className="w-full bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600">
                    <IoSparklesOutline className="text-xl" />
                  </div>
                  Custom Developer Highlights
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 pl-12">Additional personalized cards created and stored locally.</p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 pl-0 sm:pl-12">
                  {profile.customSections.map((sec, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 relative group">
                      <h3 className="font-bold text-sm text-slate-900">{sec.title}</h3>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">{sec.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Function Block 3: Recent JSMaster Activity Feed */}
            <div className="w-full bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                  <IoTimeOutline className="text-xl" />
                </div>
                Recent JSMaster Activity Feed
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 pl-12">Your recent actions and milestones across JSMaster learning modules.</p>

              <div className="mt-6 space-y-4 pl-0 sm:pl-12 max-w-4xl">
                {activities.map(({ id, title, time, icon: Icon, color }) => (
                  <div key={id} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-purple-300 transition-all shadow-sm">
                    <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center shrink-0 shadow-sm`}>
                      <Icon className="text-xl" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">{title}</h4>
                      <p className="text-xs text-slate-400 mt-1">{time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Function Block 4: Local Storage & Data Privacy Management */}
            <div className="w-full bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <IoShieldCheckmarkOutline className="text-xl" />
                </div>
                Storage & Data Management
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 pl-12">Manage local browser cache, uploaded profile pictures, banners, and saved states.</p>

              <div className="mt-6 pl-0 sm:pl-12 max-w-3xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-slate-50 border border-slate-200/80 rounded-2xl gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Clear All Local Profile Data & Images</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Wipe all saved profile details, custom sections, and uploaded image cache.</p>
                  </div>
                  <button
                    onClick={handleClearData}
                    className="bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200 text-xs font-bold px-5 py-3 rounded-xl transition-all flex items-center justify-center gap-2 shrink-0 shadow-sm"
                  >
                    <IoTrashOutline className="text-base" /> Clear Storage Data
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* EDIT PROFILE MODAL */}
          {/* ========================================================= */}
          {isEditing && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-fadeIn max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">Edit Profile, Images & Add Sections</h3>
                  <button onClick={() => setIsEditing(false)} className="text-slate-400 hover:text-slate-700 p-1">
                    <IoCloseOutline className="text-2xl" />
                  </button>
                </div>

                <form onSubmit={handleSaveProfile} className="space-y-6">
                  
                  {/* Image Upload Pickers */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Circular Avatar Image</label>
                      <input
                        type="file"
                        accept="image/*"
                        ref={avatarInputRef}
                        onChange={(e) => handleImageUpload(e, "avatar")}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => avatarInputRef.current.click()}
                        className="w-full py-3 px-4 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 flex items-center justify-center gap-2 transition-all shadow-sm"
                      >
                        <IoCameraOutline className="text-lg text-purple-600" /> Choose Avatar
                      </button>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Full Width Banner Image</label>
                      <input
                        type="file"
                        accept="image/*"
                        ref={bannerInputRef}
                        onChange={(e) => handleImageUpload(e, "banner")}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => bannerInputRef.current.click()}
                        className="w-full py-3 px-4 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 flex items-center justify-center gap-2 transition-all shadow-sm"
                      >
                        <IoImageOutline className="text-lg text-purple-600" /> Choose Banner
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name</label>
                      <input
                        type="text"
                        value={tempProfile.name}
                        onChange={(e) => setTempProfile({ ...tempProfile, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Professional Title</label>
                      <input
                        type="text"
                        value={tempProfile.role}
                        onChange={(e) => setTempProfile({ ...tempProfile, role: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">About Bio</label>
                    <textarea
                      rows="3"
                      value={tempProfile.bio}
                      onChange={(e) => setTempProfile({ ...tempProfile, bio: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Location</label>
                      <input
                        type="text"
                        value={tempProfile.location}
                        onChange={(e) => setTempProfile({ ...tempProfile, location: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">GitHub URL</label>
                      <input
                        type="url"
                        value={tempProfile.github || ""}
                        onChange={(e) => setTempProfile({ ...tempProfile, github: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">LinkedIn URL</label>
                      <input
                        type="url"
                        value={tempProfile.linkedin || ""}
                        onChange={(e) => setTempProfile({ ...tempProfile, linkedin: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  {/* Add Custom Feature Section Builder */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
                    <label className="block text-xs font-bold text-slate-700 uppercase">Add Custom Highlight Card</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Section Title (e.g. Certifications)"
                        value={newSectionTitle}
                        onChange={(e) => setNewSectionTitle(e.target.value)}
                        className="bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <input
                        type="text"
                        placeholder="Section Content description"
                        value={newSectionContent}
                        onChange={(e) => setNewSectionContent(e.target.value)}
                        className="bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={handleAddCustomSection}
                      className="w-full py-2.5 bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
                    >
                      <IoAddCircleOutline className="text-base" /> Add Highlight Card to Profile
                    </button>

                    {/* List of current custom sections with remove option */}
                    {tempProfile.customSections && tempProfile.customSections.length > 0 && (
                      <div className="space-y-2 pt-2">
                        {tempProfile.customSections.map((sec, idx) => (
                          <div key={idx} className="flex justify-between items-center bg-white p-2.5 rounded-xl border border-slate-200 text-xs">
                            <span className="font-bold text-slate-800">{sec.title}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveCustomSection(idx)}
                              className="text-rose-600 hover:text-rose-800 font-bold px-2 py-1"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-6 py-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-xs font-bold text-white shadow-lg shadow-purple-600/25 transition-all"
                    >
                      Save to Local Storage
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default Profile;