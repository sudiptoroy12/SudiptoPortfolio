# AGENTS.md

Single-page personal portfolio: React 19 + Vite 6, Tailwind CSS 3, plain JS/JSX. No TypeScript, no router (sections are anchor-scrolled), no tests, no CI, no env vars (`VITE_*` unused).

## Commands
- `npm run dev` - Vite dev server with HMR
- `npm run build` - production build to `dist/`
- `npm run preview` - serve the built app
- `npm run lint` - ESLint 9 flat config (`eslint.config.js`), ignores `dist/`
- No typecheck/test scripts exist; `npm run lint` is the only verification step.

## Architecture
- Entry: `src/main.jsx` -> `src/App.jsx`, which renders Home, About, Skill, Projects, Contact, Footer in that order. Everything is one flat page.
- `src/components/` subfolders: `home/` (Home, Navbar, Sidebar, Links, Togglebutton), `about/`, `skill/` (imports `../card/Card`), `card/`, `projects/` (Projects, ImageSlider), `contact/`, `footer/`.
- Orphaned code: `src/components/services/Services.jsx` is never imported. Don't "fix" or wire it up unless asked.
- Unused declared deps: `@emailjs/browser`, `react-typing-effect`, `react-slick`, `slick-carousel` are in `package.json` but never imported in `src/`. The contact form is a plain HTML POST to Formspree (the `action` URL in `Contact.jsx`) - don't wire up emailjs unless asked.
- Images: UI assets are imported from `src/assets/` via Vite; project screenshots live in `public/` and are referenced by absolute URL path (e.g. `/Fitlog.PNG`).

## Conventions & quirks
- Theming is class-based on `<html>`: `src/context/ThemeContext.jsx` is the single source of truth (`useTheme()`), defaulting to `dark`, synced to `document.documentElement.classList`, and persisted in `localStorage` under `portfolio-theme` (an inline script in `index.html` applies it pre-paint). Never add local theme state in components or touch `document.body.className`. Tailwind `darkMode: "class"` therefore keys off `<html>`.
- Palettes are CSS variables (`--bg`, `--surface`, `--ink`, `--accent`, `--edge`, ...) in `src/index.css` (`:root` = light, `.dark` = dark), exposed as semantic Tailwind colors (`bg-surface`, `text-ink-soft`, `border-edge`, ...) in `tailwind.config.js`. Prefer these over hardcoded hex. Note: these colors are plain `var()` strings, so opacity modifiers like `bg-surface/50` do NOT work - use literal hex with `/` for translucency.
- Shared component classes in `index.css`: `.section-title` (cyan->white gradient text in dark, solid ink in light) and `.btn-primary` (cyan->white gradient button in dark, solid `#0e7490` in light). Reuse them instead of repeating gradient chains.
- ESLint `no-unused-vars` is configured with `varsIgnorePattern: "^[A-Z_]"`, so unused imported components/images do NOT fail lint. Lint passing does not prove dead code is wired up. Pre-existing lint errors: 8 `no-unused-vars` errors on framer-motion `motion` imports (JSX-only usage not recognized without `eslint-plugin-react`) - they fail on a clean checkout too; don't try to "fix" them by removing imports.
- Anchor targets are IDs `#Home`, `#About`, `#Skill`, `#Projects`, `#Contact`, used by Navbar/Sidebar/Footer links - preserve IDs when renaming sections. Quirk: both `Contact.jsx` and `Footer.jsx` render `id="Contact"`.
- Animations use framer-motion; `ImageSlider` is a custom framer-motion carousel (react-slick is installed but unused - don't add slick CSS/imports). `App.jsx` wraps everything in `MotionConfig reducedMotion="user"`.
- `README.md` is the stock Vite template; it documents nothing project-specific.
