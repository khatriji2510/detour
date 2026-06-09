import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        brand: {
          bg: "#0a0a0a",
          surface: "#111111",
          border: "#1e1e1e",
          muted: "#2a2a2a",
          accent: "#e8e0d4",
          cream: "#f5f0e8",
          warm: "#c8b89a",
          glow: "#ffffff",
        },
      },
      letterSpacing: {
        widest2: "0.3em",
        widest3: "0.5em",
      },
      screens: {
        xs: "480px",
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "expo-in": "cubic-bezier(0.7, 0, 0.84, 0)",
      },
    },
  },
  plugins: [],
};

export default config;
