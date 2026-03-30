/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          50: "#f9f4ec",
          100: "#efe1c9",
          200: "#e1c59d",
          300: "#d1aa77",
          400: "#bf915c",
          500: "#a87845",
          600: "#8d6138",
          700: "#704b2b",
          800: "#53371f",
          900: "#362214",
        },
        sand: {
          50: "#f7f8fa",
          100: "#edf0f4",
          200: "#d7dbe3",
          300: "#bdc2cd",
          400: "#9da4b4",
          500: "#7a8292",
          600: "#636a79",
          700: "#4f5662",
          800: "#383f48",
          900: "#262b31",
        },
        navy: {
          50: "#f1f4f9",
          100: "#d7deec",
          200: "#b3c0da",
          300: "#8ca0c3",
          400: "#657ea9",
          500: "#416190",
          600: "#2c4a74",
          700: "#1f3655",
          800: "#16273f",
          900: "#0e1a2d",
        },
        umber: {
          50: "#f4eee7",
          100: "#e8dccd",
          200: "#d3b99c",
          300: "#c09a74",
          400: "#a77c52",
          500: "#8b633c",
          600: "#724f30",
          700: "#583d25",
          800: "#3f2b1a",
          900: "#291c11",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
      boxShadow: {
        glow: "0 22px 48px -18px rgba(14, 26, 45, 0.4)",
      },
      backgroundImage: {
        "grid-overlay":
          "radial-gradient(circle at 1px 1px, rgba(14,26,45,0.08) 1px, transparent 0)",
        "hero-gradient": "linear-gradient(135deg, #0e1a2d 0%, #1a2f4a 55%, #a87845 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        fadeUp: "fadeUp 600ms ease forwards",
      },
    },
  },
  plugins: [],
};

