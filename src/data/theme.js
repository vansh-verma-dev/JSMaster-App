// ---------- Theme tokens (purple) ----------
export const THEME = {
  dark: {
    bg: "#0B0F17",
    surface: "#121826",
    surface2: "#1A2233",
    border: "#232C40",
    text: "#E7EAF1",
    textMuted: "#8B95AA",
    accent: "#A855F7",
    accentSoft: "#2C1E4A",
    accent2: "#E879F9",
    success: "#34D399",
  },
  light: {
    bg: "#F6F7FA",
    surface: "#FFFFFF",
    surface2: "#F0F2F6",
    border: "#E3E6ED",
    text: "#12151C",
    textMuted: "#5B6373",
    accent: "#9333EA",
    accentSoft: "#F2E8FE",
    accent2: "#C026D3",
    success: "#059669",
  },
};

// A small palette used to give cards their own distinct colour instead of
// every card sharing the theme accent.
export const CARD_HUES = ["#A855F7", "#EC4899", "#6366F1", "#14B8A6", "#F59E0B", "#38BDF8"];

export function cardColor(index, mode) {
  const hue = CARD_HUES[index % CARD_HUES.length];
  return {
    bg: hue + (mode === "dark" ? "26" : "1A"),
    fg: hue,
  };
}
