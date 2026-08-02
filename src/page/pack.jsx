import React, { useState } from "react";
import { Check, Lock, ArrowLeft, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PREMIUM_KEY = "jsmaster_premium";

 
export default function UnlockAdvancedPage() {
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);

  const perks = [
    "Weather app with live API integration",
    "Expense tracker with charts",
    "Kanban board with drag and drop",
    "Real-time chat UI",
    "New advanced projects added monthly",
  ];

  const handlePayment = () => {
    setProcessing(true);
   
    setTimeout(() => {
      localStorage.setItem(PREMIUM_KEY, "true");
      setProcessing(false);
      navigate("/projects");
    }, 1200);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-5 py-10" style={{ background: "#faf9fc" }}>
      <div className="w-full max-w-sm">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-sm mb-6"
          style={{ color: "#888" }}
        >
          <ArrowLeft size={15} />
          Back
        </button>

        <div className="text-center mb-6">
          <div
            className="mx-auto rounded-2xl flex items-center justify-center mb-4"
            style={{ width: 56, height: 56, background: "#5b2a9e" }}
          >
            <Lock size={24} color="#F7DF1E" />
          </div>
          <h1 className="text-xl font-semibold" style={{ color: "#1a1a1a" }}>
            Unlock advanced projects
          </h1>
          <p className="text-sm mt-1" style={{ color: "#888" }}>
            One-time payment, lifetime access to every advanced build.
          </p>
        </div>

        {/* Price card */}
        <div className="rounded-2xl p-6 mb-5" style={{ background: "#5b2a9e" }}>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-white">₹19.00</span>
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              one-time
            </span>
          </div>

          <div className="flex flex-col gap-2.5 mt-5">
            {perks.map((perk) => (
              <div key={perk} className="flex items-start gap-2">
                <div
                  className="shrink-0 flex items-center justify-center rounded-full mt-0.5"
                  style={{ width: 16, height: 16, background: "#F7DF1E" }}
                >
                  <Check size={10} color="#5b2a9e" />
                </div>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.9)" }}>
                  {perk}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handlePayment}
          disabled={processing}
          className="w-full py-3.5 rounded-xl text-sm font-semibold transition-transform duration-150 hover:scale-[1.01]"
          style={{ background: "#F7DF1E", color: "#5b2a9e" }}
        >
          {processing ? "Processing..." : "Pay now"}
        </button>

        <div className="flex items-center justify-center gap-1.5 mt-4">
          <ShieldCheck size={13} color="#999" />
          <span className="text-xs" style={{ color: "#999" }}>
            Secure payment, cancel anytime
          </span>
        </div>
      </div>
    </div>
  );
}