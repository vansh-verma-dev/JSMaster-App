import React, { useState, useEffect, useRef } from "react";
import { UserCircle2, Camera, User, LogOut, ShieldCheck } from "lucide-react";

export default function ProfilePage({ t, user, setUser, go, onLogout }) {
  const [about, setAbout] = useState(user?.about || "");
  const [name, setName] = useState(user?.name || "");
  const bannerRef = useRef(null);
  const avatarRef = useRef(null);

  useEffect(() => {
    if (user) { setAbout(user.about || ""); setName(user.name || ""); }
  }, [user?.email]);

  const pickFile = (ref, key) => {
    ref.current.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const url = URL.createObjectURL(file);
      setUser((u) => ({ ...u, [key]: url }));
    };
    ref.current.click();
  };

  if (!user) {
    return (
      <div className="max-w-md mx-auto text-center py-16">
        <UserCircle2 size={40} className="mx-auto mb-3" style={{ color: t.textMuted }} />
        <p className="font-display text-lg font-semibold" style={{ color: t.text }}>You're not signed in</p>
        <p className="text-sm mt-1" style={{ color: t.textMuted }}>Sign in to track progress and set up your profile.</p>
        <button onClick={() => go("auth")} className="mt-5 px-5 py-2.5 rounded-xl text-sm font-semibold" style={{ backgroundColor: t.accent, color: "#141414" }}>Sign in / Sign up</button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative rounded-2xl overflow-hidden h-40 sm:h-48" style={{ background: `linear-gradient(120deg, ${t.accentSoft}, ${t.surface2})` }}>
        {user.banner && <img src={user.banner} alt="" className="w-full h-full object-cover" />}
        <button onClick={() => pickFile(bannerRef, "banner")} className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium" style={{ backgroundColor: t.bg + "CC", color: t.text }}>
          <Camera size={13} /> Change banner
        </button>
        <input type="file" accept="image/*" ref={bannerRef} className="hidden" />
      </div>

      <div className="px-4 sm:px-6 -mt-10 flex items-end gap-4">
        <div className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 flex items-center justify-center" style={{ borderColor: t.bg, backgroundColor: t.surface2 }}>
            {user.avatar ? <img src={user.avatar} alt="" className="w-full h-full object-cover" /> : <User size={26} style={{ color: t.textMuted }} />}
          </div>
          <button onClick={() => pickFile(avatarRef, "avatar")} className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: t.accent, color: "#141414" }}>
            <Camera size={12} />
          </button>
          <input type="file" accept="image/*" ref={avatarRef} className="hidden" />
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-5 mt-2">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: t.textMuted }}>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="w-full mt-1.5 px-3.5 py-2.5 rounded-lg text-sm outline-none" style={{ backgroundColor: t.surface, border: `1px solid ${t.border}`, color: t.text }} />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: t.textMuted }}>Email</label>
          <input value={user.email} disabled className="w-full mt-1.5 px-3.5 py-2.5 rounded-lg text-sm outline-none opacity-60" style={{ backgroundColor: t.surface, border: `1px solid ${t.border}`, color: t.text }} />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: t.textMuted }}>About</label>
          <textarea value={about} onChange={(e) => setAbout(e.target.value)} rows={3} placeholder="Learning JavaScript, one topic at a time..." className="w-full mt-1.5 px-3.5 py-2.5 rounded-lg text-sm outline-none resize-none" style={{ backgroundColor: t.surface, border: `1px solid ${t.border}`, color: t.text }} />
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button onClick={() => setUser((u) => ({ ...u, name, about }))} className="px-5 py-2.5 rounded-xl text-sm font-semibold" style={{ backgroundColor: t.accent, color: "#141414" }}>Save changes</button>
          <button onClick={onLogout} className="px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2" style={{ border: `1px solid ${t.border}`, color: "#F87171" }}>
            <LogOut size={15} /> Log out
          </button>
        </div>

        <button onClick={() => go("terms")} className="text-xs flex items-center gap-1 pt-2" style={{ color: t.textMuted }}>
          <ShieldCheck size={13} /> Terms & Privacy Policy
        </button>
      </div>
    </div>
  );
}
