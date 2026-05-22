import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          light: "#12305A",
          dark: "#071526",
        },
        gold: {
          DEFAULT: "#C8973A",
          light: "#E2B460",
          pale: "#F5E8D0",
        },
      },
      boxShadow: {
        card: "0 4px 24px rgba(11,31,58,0.08)",
        "card-hover": "0 8px 40px rgba(11,31,58,0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
