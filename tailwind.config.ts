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
        display: ["Lora", "Georgia", "serif"],
        sans:    ["DM Sans", "system-ui", "sans-serif"],
      },
      colors: {
        navy:  { DEFAULT: "#0B1F3A", light: "#122D54", dark: "#060F1C" },
        gold:  { DEFAULT: "#C8973A", light: "#DFB060", pale: "#F9F0E1" },
      },
      boxShadow: {
        card:  "0 4px 12px rgba(0,0,0,0.10)",
        hover: "0 8px 32px rgba(0,0,0,0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
