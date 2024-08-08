// src/components/DarkModeSwitch.jsx

import { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext"; // Import ThemeContext

const DarkModeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Use the context

  return (
    <button
      onClick={toggleTheme}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 p-2 shadow-md hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? (
        <FaSun className="h-5 w-5 text-yellow-500" />
      ) : (
        <FaMoon className="h-5 w-5 text-gray-600" />
      )}
    </button>
  );
};

export default DarkModeSwitch;
