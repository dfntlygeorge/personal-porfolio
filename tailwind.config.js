/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
      },
      boxShadow: {
        "teal-subtle": "0 2px 4px rgba(56, 178, 172, 0.2)",
      },
    },
  },
  variant: {
    extend: {
      boxShadow: ["hover"],
    },
  },
  plugins: [],
};
