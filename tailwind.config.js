/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      transitionTimingFunction:{
        jump: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      colors: {
        // Semantic theme colors, backed by the CSS variables in
        // src/index.css. Light values live on :root, dark on html.dark,
        // so e.g. bg-surface switches automatically with the theme.
        page: "var(--bg)",
        surface: {
          DEFAULT: "var(--surface)",
          soft: "var(--surface-2)",
        },
        ink: {
          DEFAULT: "var(--ink)",
          soft: "var(--ink-soft)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          bright: "var(--accent-2)",
        },
        edge: "var(--edge)",
      },
    },
  },
  plugins: [],
}
