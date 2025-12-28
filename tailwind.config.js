/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  darkMode: ["class", "class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cairo", "system-ui", "sans-serif"],
      },

      colors: {
        // ===== Brand (Client) =====
        primary: {
          DEFAULT: "#038262", // Trusted Teal
          soft: "#E6F2F1", // Clear Aqua (soft backgrounds)
          dark: "#026B54", // hover/focus stronger (manual dark shade)
        },

        // Keep secondary for headings if you already rely on it
        secondary: "#1B1E28",

        accent: {
          DEFAULT: "#42C96F", // Care Green
          soft: "#9ACF8B", // Guidance Lime
        },

        // Backgrounds
        bg: {
          page: "#E6F2F1",
          surface: "#FFFFFF",
          alt: "#F6FBFA",
        },

        // Text
        text: {
          main: "#1B1E28",
          muted: "#6C8C89", // Clinical Slate (calmer + medical)
        },

        // Borders
        border: {
          subtle: "rgba(108, 140, 137, 0.25)", // derived from Clinical Slate
        },
      },

      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)",
      },

      borderRadius: {
        card: "1rem",
        pill: "999px",
      },

      spacing: {
        "section-y": "3.5rem",
        "section-y-sm": "2.5rem",
        "card-gap": "1rem",
      },
      bg: {
        page: "#E6F2F1", // Clear Aqua
        surface: "#FFFFFF",
        alter: "#F6FBFA", // Alt surface tint (أفتح من page)
      },
    },
  },
  plugins: [typography, require("tailwindcss-animate")],
};
