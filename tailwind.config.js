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
      backgroundImage: {
        "hero-light":
          "linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url('./assets/common-bg.svg')",
        "hero-dark":
          "linear-gradient(to right, rgba(18, 18, 18, 0.9), rgba(18, 18, 18, 0.9)),url('./assets/common-bg.svg')",
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
