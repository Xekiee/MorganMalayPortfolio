import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    return JSON.parse(localStorage.getItem("dark-mode")) ?? true;
  });

  const toggleTheme = () => setIsDark((prev) => !prev);

  useEffect(() => {
    document.body.classList.toggle("light", !isDark);
    localStorage.setItem("dark-mode", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
