import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── PROPASHOP BRAND COLOURS ───────────────────────────────────
      colors: {
        maroon: {
          DEFAULT: "#6B1A2E",
          50:  "#FDF0F3",
          100: "#F6C9D3",
          200: "#EF9BAD",
          300: "#D9627A",
          400: "#C33050",
          500: "#8B2438",
          600: "#6B1A2E",  // primary
          700: "#4A0F1E",
          800: "#2E0812",
          900: "#160408",
        },
        navy: {
          DEFAULT: "#1B2A4A",
          50:  "#EEF1F8",
          100: "#C8D1E9",
          200: "#9AAECF",
          300: "#6D8CB6",
          400: "#43699E",
          500: "#2D4B7A",
          600: "#243560",
          700: "#1B2A4A",  // primary
          800: "#0F1A30",
          900: "#060D1A",
        },
        cream: {
          DEFAULT: "#F5ECD7",
          50:  "#FDFAF5",
          100: "#F5ECD7",  // primary background
          200: "#E8D8B8",
          300: "#D4C4A8",
          400: "#C9A97A",  // gold accent
          500: "#B8924A",
          600: "#8B6A3E",
          700: "#634A2A",
          800: "#3D2C15",
          900: "#1A1208",
        },
        gold: {
          DEFAULT: "#C9A97A",
          light: "#E8D8B8",
          dark:  "#8B6A3E",
        },
      },

      // ─── TYPOGRAPHY ────────────────────────────────────────────────
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans:  ["DM Sans", "system-ui", "sans-serif"],
        display: ["Georgia", "serif"],
      },

      fontSize: {
        "2xs": ["10px", { lineHeight: "14px", letterSpacing: "0.08em" }],
        xs:   ["12px", { lineHeight: "16px" }],
        sm:   ["13px", { lineHeight: "20px" }],
        base: ["15px", { lineHeight: "24px" }],
        lg:   ["17px", { lineHeight: "26px" }],
        xl:   ["20px", { lineHeight: "30px" }],
        "2xl":["24px", { lineHeight: "34px" }],
        "3xl":["30px", { lineHeight: "40px" }],
        "4xl":["36px", { lineHeight: "46px" }],
        "5xl":["48px", { lineHeight: "58px" }],
      },

      letterSpacing: {
        widest: "0.25em",
        wider:  "0.12em",
        wide:   "0.06em",
      },

      // ─── SPACING ───────────────────────────────────────────────────
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "68": "17rem",
        "84": "21rem",
        "100": "25rem",
        "120": "30rem",
      },

      // ─── BORDER RADIUS ─────────────────────────────────────────────
      borderRadius: {
        sm:   "2px",
        DEFAULT: "4px",
        md:   "6px",
        lg:   "8px",
        xl:   "12px",
        "2xl":"16px",
      },

      // ─── SHADOWS ───────────────────────────────────────────────────
      boxShadow: {
        luxury: "0 4px 24px rgba(107, 26, 46, 0.12), 0 1px 4px rgba(107, 26, 46, 0.08)",
        card:   "0 2px 12px rgba(27, 42, 74, 0.08)",
        nav:    "0 1px 0 rgba(27, 42, 74, 0.12)",
        gold:   "0 0 0 2px #C9A97A",
      },

      // ─── ANIMATIONS ────────────────────────────────────────────────
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-400px 0" },
          "100%": { backgroundPosition: "400px 0" },
        },
        slideDown: {
          "0%":   { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up":    "fadeUp 0.5s ease forwards",
        "fade-in":    "fadeIn 0.4s ease forwards",
        shimmer:      "shimmer 1.5s infinite linear",
        "slide-down": "slideDown 0.3s ease forwards",
      },

      // ─── BACKGROUND IMAGES ─────────────────────────────────────────
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #6B1A2E 0%, #8B2438 40%, #1B2A4A 100%)",
        "card-gradient":
          "linear-gradient(160deg, rgba(107,26,46,0.95) 0%, rgba(27,42,74,0.95) 100%)",
        "gold-shimmer":
          "linear-gradient(90deg, #C9A97A 0%, #E8D8B8 50%, #C9A97A 100%)",
        "cream-fade":
          "linear-gradient(180deg, #F5ECD7 0%, #FDFAF5 100%)",
      },

      // ─── SCREENS (mobile-first) ─────────────────────────────────────
      screens: {
        xs:  "375px",
        sm:  "640px",
        md:  "768px",
        lg:  "1024px",
        xl:  "1280px",
        "2xl":"1536px",
      },
    },
  },
  plugins: [],
};

export default config;
