
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Skills", href: "#Skill" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact", href: "#Contact" },
  ];

  return (
    <footer
      id="Contact"
      className="relative overflow-hidden border-t
        border-edge bg-transparent text-ink-soft
        dark:border-white/10 dark:bg-[#090b10]
        dark:text-gray-300"
    >
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32
          top-10 h-64 w-64 rounded-full
          bg-[#42b4cd]/15 blur-[100px]
          dark:bg-[#42b4cd]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32
          bottom-10 h-72 w-72 rounded-full
          bg-[#7c5ce7]/15 blur-[100px]
          dark:bg-purple-400/10"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Call To Action */}
        <div
          className="relative -mt-1 overflow-hidden
            rounded-b-2xl border border-edge
            bg-surface p-6 shadow-sm
            dark:border-white/10 dark:bg-[#11151c]
            sm:p-10 md:p-12"
        >
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-16
              h-48 w-48 rounded-full
              border-[30px] border-[#42b4cd]/10
              sm:h-64 sm:w-64"
          />

          <div
            className="relative flex flex-col items-start
              justify-between gap-6 md:flex-row
              md:items-center"
          >
            <div className="max-w-xl">
              <p
                className="mb-3 text-xs font-bold uppercase
                  tracking-[0.25em] text-accent
                  dark:text-[#6bd3d3]"
              >
                Let's Connect
              </p>

              <h2
                className="text-2xl font-bold leading-tight
                  text-ink
                  sm:text-3xl md:text-4xl"
              >
                Have a project in mind?
                <span
                  className="mt-1 block bg-gradient-to-r
                    from-[#42b4cd] to-[#8c75ff]
                    bg-clip-text text-transparent"
                >
                  Let's build something great.
                </span>
              </h2>

              <p
                className="mt-4 max-w-lg text-sm
                  leading-7 text-ink-soft
                  sm:text-base"
              >
                I'm a Full Stack MERN Developer who enjoys
                building responsive web applications and
                creating useful digital experiences.
                Let's connect and explore new opportunities.
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/sudipto-roy-82602415b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center
                justify-center gap-2 rounded-xl
                bg-[#42b4cd] px-5 py-3
                text-sm font-bold text-gray-950
                shadow-lg shadow-cyan-500/10
                transition-all duration-300
                hover:-translate-y-1 hover:bg-[#6bd3d3]
                focus:outline-none focus:ring-2
                focus:ring-[#42b4cd] focus:ring-offset-2
                dark:focus:ring-offset-[#11151c]"
            >
              Let's Connect
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>

        {/* Main Footer Content */}
        <div
          className="grid grid-cols-1 gap-10 py-12
            sm:grid-cols-2 sm:gap-8
            lg:grid-cols-3 lg:py-16"
        >
          {/* Brand */}
          <div>
            <a
              href="#Home"
              className="inline-flex items-center gap-3"
              aria-label="Sudipto Roy - Back to home"
            >
              <span
                className="flex h-11 w-11 items-center
                  justify-center rounded-xl
                  bg-gradient-to-br from-[#42b4cd]
                  to-[#8c75ff] text-lg font-black
                  text-gray-950 shadow-lg
                  shadow-cyan-500/10"
              >
                SR
              </span>

              <span className="text-xl font-bold text-ink">
                Sudipto Roy
              </span>
            </a>

            <p
              className="mt-5 max-w-sm text-sm
                leading-7 text-ink-soft"
            >
              Full Stack MERN Developer focused on
              building responsive interfaces, practical
              web applications, and maintainable
              software solutions.
            </p>

            <p
              className="mt-4 text-sm font-medium
                text-accent dark:text-[#6bd3d3]"
            >
              Code. Create. Improve.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-ink">
              Quick Links
            </h3>

            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center
                        gap-2 text-sm text-ink-soft transition-colors
                        duration-200 hover:text-[#0e7490]
                        dark:hover:text-[#6bd3d3]"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full
                          bg-gray-400 transition-colors
                          group-hover:bg-[#42b4cd]"
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-ink">
              Find Me Online
            </h3>

            <p className="mb-5 text-sm leading-6 text-ink-soft">
              Explore my work, follow my development journey,
              or connect with me professionally.
            </p>

            <div className="flex flex-wrap gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/sudiptoroy12"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                title="GitHub"
                className="flex h-11 w-11 items-center
                  justify-center rounded-xl border
                  border-edge bg-surface
                  transition-all duration-300
                  hover:-translate-y-1 hover:border-[#42b4cd]
                  hover:text-[#0e7490]
                  dark:border-white/10 dark:bg-white/5
                  dark:text-gray-300
                  dark:hover:text-[#6bd3d3]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1 1.75-.42 2.17-.79.1-.74.39-1.24.7-1.53-2.51-.29-5.15-1.26-5.15-5.57 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.45.11-3.01 0 0 .95-.3 3.1 1.16a10.8 10.8 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.56.23 2.72.11 3.01.72.79 1.16 1.8 1.16 3.03 0 4.32-2.65 5.28-5.17 5.56.4.35.75 1.04.75 2.1v3.12c0 .3.2.65.77.54A11.25 11.25 0 0 0 12 .75Z"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sudipto-roy-82602415b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with me on LinkedIn"
                title="LinkedIn"
                className="flex h-11 w-11 items-center
                  justify-center rounded-xl border
                  border-edge bg-surface
                  transition-all duration-300
                  hover:-translate-y-1 hover:border-[#42b4cd]
                  hover:text-[#0e7490]
                  dark:border-white/10 dark:bg-white/5
                  dark:text-gray-300
                  dark:hover:text-[#6bd3d3]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8 19H4.5V9H8ZM6.25 7.65a2.03 2.03 0 1 1 0-4.06 2.03 2.03 0 0 1 0 4.06ZM19 19h-3.5v-4.87c0-1.16-.02-2.65-1.61-2.65-1.62 0-1.87 1.26-1.87 2.57V19H8.5V9h3.36v1.37h.05a3.68 3.68 0 0 1 3.31-1.82c3.54 0 4.19 2.33 4.19 5.36Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col items-center
            justify-between gap-4 border-t
            border-edge py-6 text-center
            sm:flex-row sm:text-left"
        >
          <p className="text-xs leading-6 text-ink-soft sm:text-sm">
            © {currentYear} Sudipto Roy. All rights reserved.
          </p>

          <a
            href="#Home"
            className="inline-flex items-center gap-2
              text-xs font-medium text-ink-soft
              transition-colors hover:text-[#0e7490]
              dark:text-gray-400
              dark:hover:text-[#6bd3d3] sm:text-sm"
          >
            Back to top
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
