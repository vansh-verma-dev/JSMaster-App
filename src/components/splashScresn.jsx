import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(false), 2200);
    const t2 = setTimeout(() => navigate("/home"), 2700);
    return () => [t1, t2].forEach(clearTimeout);
  }, [navigate]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center overflow-hidden"
          style={{ background: "#5b2a9e" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          {/* Bubble 1 */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 220,
              height: 220,
              background: "rgba(255,255,255,0.08)",
              top: "12%",
              left: "8%",
            }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Bubble 2 */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 140,
              height: 140,
              background: "rgba(255,255,255,0.08)",
              bottom: "10%",
              right: "10%",
            }}
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Center text */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative font-bold"
            style={{ fontSize: 48, color: "#ffffff" }}
          >
            JSMaster
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}