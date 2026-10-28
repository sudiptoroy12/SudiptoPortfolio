# AGENTS.md

Single-page personal portfolio: React 19 + Vite 6, Tailwind CSS 3, plain JS/JSX. No TypeScript, no router (sections are anchor-scrolled), no tests, no CI, no env vars (`VITE_*` unused).

## Commands
- `npm run dev` - Vite dev server with HMR
- `npm run build` - production build to `dist/`
- `npm run preview` - serve the built app
- `npm run lint` - ESLint 9 flat config (`eslint.config.js`), ignores `dist/`
- No typecheck/test scripts exist; `npm run lint` is the only verification step.

## Architecture
- Entry: `src/main.jsx` -> `src/App.jsx`, which renders Home, About, Skill, Projects, Contact in that order. Everything is one flat page.
- `src/components/` subfolders: `home/` (Home, Navbar, Sidebar), `about/`, `skill/` (renders `card/Card`), `projects/` (ProjectCard, ImageSlider), `contact/`.
- Orphaned code: `src/components/services/Services.jsx` and `src/components/demo/Demo.jsx` are never imported. Don't "fix" or wire them up unless asked.
- Unused declared deps: `@emailjs/browser` and `react-typing-effect` are in `package.json` but never imported anywhere in `src/`.

## Conventions & quirks
- Dark mode is class-based on `<body>`, not `<html>`: `Navbar.jsx` sets `document.body.className` from React state (initial `'dark'`, not persisted). Tailwind `darkMode: "class"` therefore keys off `body`. Custom `.dark`/`.light` colors live in `src/index.css`, alongside other global CSS (`.dropshadow*`, `#btn`, `#card` hover styles) - most styling is global CSS here, not Tailwind.
- ESLint `no-unused-vars` is configured with `varsIgnorePattern: "^[A-Z_]"`, so unused imported components/images do NOT fail lint. Lint passing does not prove dead code is wired up.
- slick-carousel CSS is imported inside `src/components/projects/ProjectCard.jsx` (not globally). Don't duplicate it.
- Assets (images, `cv.pdf`) are imported directly from `src/assets/` via Vite asset handling.
- Tailwind content globs (`tailwind.config.js`) scan `./index.html` and `./src/**/*.{js,ts,jsx,tsx}`; repo is JS-only but the glob includes TS for future-proofing.
- Section IDs (e.g. `#Homepage`, `#Services`) are anchor targets used by Navbar/Sidebar links - preserve IDs when renaming sections.
- `README.md` is the stock Vite template; it documents nothing project-specific.
