/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        giga: ["Giga Sans", "sans-serif"],
        anybody: ["Anybody", "sans-serif"],
        helvetica: ["Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        purpleDark: "#4E0E48",
        roseWarm: "#773276",
        yellowTint: "#C5865F",
      },
      keyframes: {
        wordSlide: {
          "0%, 100%": { opacity: "0", transform: "translateY(20px)" },
          "10%, 30%": { opacity: "1", transform: "translateY(0)" },
          "40%": { opacity: "0", transform: "translateY(-20px)" },
        },
      },
      animation: {
        wordSlide: "wordSlide 2s ease-in-out infinite",
        purpleDark: "#4E0E48", // Left Side
        roseWarm: "#773276",   // Middle
        yellowTint: "#C5865F", // Right Side
      },
    },
  },
  plugins: [],
};
