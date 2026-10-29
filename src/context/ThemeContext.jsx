import { createContext, useContext, useEffect, useState } from "react";

/**
 * Single source of truth for the site theme.
 *
 * - Defaults to "dark".
 * - Syncs the `dark`/`light` class onto <html> so Tailwind's
 *   `darkMode: "class"` variants respond site-wide.
 * - Persists the choice to localStorage (an inline script in index.html
 *   applies it before first paint, so there is no flash on reload).
 *
 * Never keep a local theme state in a component - always use useTheme().
 */
const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

const STORAGE_KEY = "portfolio-theme";

const getInitialTheme = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored;
  } catch {
    // localStorage unavailable (private mode, etc.) - fall back to dark.
  }
  return "dark";
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);

    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Persistence is best-effort; toggling still works without it.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
