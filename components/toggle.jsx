"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#0f172a";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#ffffff";
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const setLightTheme = () => {
    setTheme("light");
  };

  const setDarkTheme = () => {
    setTheme("dark");
  };

  const value = {
    theme,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// 3. Custom hook to use theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// 4. Updated ThemeToggle component using context
export function ThemeToggle() {
  const { theme, setLightTheme, setDarkTheme } = useTheme();

  return (
    <div
      className="p-4 border-t transition-colors duration-200"
      style={{
        borderColor: theme === "dark" ? "#334155" : "#e2e8f0",
      }}
    >
      <div
        className="flex items-center justify-center space-x-1 rounded-lg p-1 transition-colors duration-200"
        style={{
          backgroundColor: theme === "dark" ? "#334155" : "#f1f5f9",
        }}
      >
        {/* Light Button */}
        <button
          onClick={setLightTheme}
          className="flex items-center space-x-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            backgroundColor: theme === "light" ? "#ffffff" : "transparent",
            color: theme === "light" ? "#0f172a" : "#94a3b8",
            boxShadow:
              theme === "light"
                ? "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.06)"
                : "none",
          }}
        >
          <Sun className="h-4 w-4" />
          <span>Light</span>
        </button>

        {/* Dark Button */}
        <button
          onClick={setDarkTheme}
          className="flex items-center space-x-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            backgroundColor: theme === "dark" ? "#1e293b" : "transparent",
            color: theme === "dark" ? "#f1f5f9" : "#64748b",
            boxShadow:
              theme === "dark"
                ? "0 1px 3px 0 rgb(0 0 0 / 0.2), 0 1px 2px 0 rgb(0 0 0 / 0.12)"
                : "none",
          }}
        >
          <Moon className="h-4 w-4" />
          <span>Dark</span>
        </button>
      </div>
    </div>
  );
}
