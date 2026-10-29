
import Card from "../card/Card";
import mern from "../../assets/mern.png";
import js from "../../assets/javascript-icon-7.jpg";
import react from "../../assets/react.png";
import nextjs from "../../assets/nextjs.png";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
    ],
  },
  {
    number: "02",
    title: "Backend Development",
    description: "Creating server-side applications and REST APIs",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
    ],
  },
  {
    number: "03",
    title: "Database & Data Management",
    description: "Working with data, schemas, and database operations",
    skills: ["MongoDB", "Mongoose"],
  },
  {
    number: "04",
    title: "Tools & Workflow",
    description: "Managing code and testing application endpoints",
    skills: ["Git", "GitHub", "Postman", "npm"],
  },
];

const Skill = () => {
  return (
    <section
      id="Skill"
      className="mx-auto flex min-h-screen max-w-6xl
        flex-col items-center gap-14 px-4 py-16
        md:flex-row md:gap-16"
    >
      {/* Existing Card Section - Unchanged */}
      <div className="flex flex-col items-center justify-center gap-10">
        <Card title="JAVASCRIPT" img={js} />
        <Card title="REACT" img={react} />
        <Card title="NEXT JS" img={nextjs} />
        <Card title="MERN STACK WEB DEVELOPER" img={mern} />
      </div>

      {/* Professional Technical Skills Section */}
      <div className="w-full flex-1">
        <div className="mb-8">
          <p
            className="mb-3 text-sm font-semibold uppercase
              tracking-[0.25em] text-accent
              dark:text-[#42b4cd]"
          >
            My Expertise
          </p>

          <h2
            className="section-title mb-4 text-3xl font-bold
              md:text-4xl"
          >
            Technical Skills
          </h2>

          <p className="max-w-xl text-sm leading-7 text-ink-soft">
            My full-stack development toolkit includes modern
            frontend technologies, backend development,
            database management, and essential development tools.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {skillGroups.map((group) => (
            <div
              key={group.number}
              className="group rounded-2xl border border-edge
                bg-surface p-5 shadow-sm transition-all duration-300
                hover:-translate-y-1 hover:border-cyan-400
                hover:shadow-lg hover:shadow-cyan-500/5
                dark:border-white/10 dark:bg-[#11151c]
                dark:hover:border-[#42b4cd]/60"
            >
              <div className="mb-4 flex items-start gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center
                    justify-center rounded-xl bg-cyan-50
                    text-sm font-bold text-cyan-700
                    dark:bg-[#42b4cd]/10 dark:text-[#42b4cd]"
                >
                  {group.number}
                </span>

                <div>
                  <h3 className="text-base font-semibold text-ink dark:text-white">
                    {group.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-ink-soft">
                    {group.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-edge
                      bg-surface-soft px-3 py-1.5 text-xs font-medium
                      text-ink-soft transition-colors duration-200
                      hover:border-cyan-400 hover:bg-cyan-50
                      hover:text-cyan-800
                      dark:border-gray-700 dark:bg-[#1a1d24]
                      dark:text-gray-300 dark:hover:border-[#42b4cd]
                      dark:hover:bg-[#42b4cd]/10
                      dark:hover:text-[#42b4cd]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* MERN Stack Highlight */}
        <div
          className="mt-5 flex flex-wrap items-center justify-between
            gap-3 rounded-2xl border border-cyan-200
            bg-gradient-to-r from-cyan-50 to-white p-5
            dark:border-[#42b4cd]/20 dark:from-[#42b4cd]/10
            dark:to-[#11151c]"
        >
          <div>
            <p className="font-semibold text-ink dark:text-white">
              Full Stack MERN Developer
            </p>
            <p className="mt-1 text-xs text-ink-soft">
              MongoDB · Express.js · React.js · Node.js
            </p>
          </div>

          <span
            className="rounded-full border border-cyan-300
              px-3 py-1 text-xs font-semibold
              text-cyan-800 dark:border-[#42b4cd]/40
              dark:text-[#42b4cd]"
          >
            Full Stack
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skill;
