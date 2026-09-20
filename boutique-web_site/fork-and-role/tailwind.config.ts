import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#12141C",
        surface: "#1B1E29",
        surfaceRaised: "#20232F",
        border: "#2A2E3B",
        ink: "#EDEEF2",
        muted: "#8A8F9C",
        amber: "#E8A33D",
        periwinkle: "#7C9CBF",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "760px",
      },
    },
  },
  plugins: [],
};

export default config;
