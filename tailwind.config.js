/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", //
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#3B82F6",
          dark: "#60A5FA",
        },
        background: {
          light: "#F9FAFB",
          dark: "#0F172A",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#1E293B",
        },
        text: {
          light: "#1F2937",
          dark: "#F8FAFC",
        },
        accent: {
          light: "#22D3EE",
          dark: "#0E7490",
        },
      },
    },
  },
  plugins: [],
};
