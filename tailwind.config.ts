import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        surface: "#111111",
        surfaceHover: "#181818",
        primaryText: "#F4F0E9",
        secondaryText: "#A7A7A7",
        accentOrange: "#FF510B",
        accentOrangeLight: "#FF7337",
        gridLine: "rgba(255, 255, 255, 0.07)",
        borderSubtle: "rgba(255, 255, 255, 0.12)",
        borderHighlight: "rgba(255, 81, 11, 0.35)",
      },
      fontFamily: {
        serif: ["var(--font-editorial)", "Bodoni Moda", "Playfair Display", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "orange-glow": "radial-gradient(ellipse at 50% 50%, rgba(255, 81, 11, 0.18) 0%, rgba(8, 8, 8, 0) 70%)",
        "portrait-rim": "radial-gradient(circle at 65% 35%, rgba(255, 81, 11, 0.22) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;

