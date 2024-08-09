import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Create a context for the theme
// This is a way to share data between components without having to pass props down manually.
// It's useful when you have data that multiple components need to access and modify.
const ThemeContext = createContext();

// The ThemeProvider component is a special component that wraps the app and provides the theme data to all its child components.
// It uses the useState hook to create a state variable called theme and a function called setTheme to update it.
// The initial value of the theme state is retrieved from local storage. If there is no value stored in local storage, it defaults to "light".
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "dark";
  });

  // This useEffect hook runs whenever the theme state changes.
  // It adds or removes the "dark" class from the root element of the document, based on the current theme.
  // It also updates the value stored in local storage, so that the theme will persist across page reloads.
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // The toggleTheme function toggles between "light" and "dark" themes.
  // It uses the setTheme function to update the theme state.
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // The ThemeProvider component returns a ThemeContext.Provider component, which wraps its children with the theme data.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Export the ThemeProvider and ThemeContext components
export { ThemeProvider, ThemeContext };

// Define the prop types for the ThemeProvider component
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
