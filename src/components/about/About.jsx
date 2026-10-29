
import man from "../../assets/man.png";

const aboutItems = [
  {
    title: "About Me",
    description:
      "I'm a Full Stack MERN Developer passionate about building responsive, user-friendly web applications. I enjoy turning ideas into practical digital experiences while focusing on clean, maintainable code and usability.",
  },
  {
    title: "Frontend Development",
    description:
      "I build modern, responsive interfaces using React.js, JavaScript, HTML, CSS, and Tailwind CSS. I focus on reusable components, clean layouts, and creating smooth experiences across different screen sizes.",
  },
  {
    title: "Backend & Database",
    description:
      "I develop server-side functionality and REST APIs using Node.js and Express.js, with MongoDB for data storage. I also use Git and GitHub to manage code, track changes, and maintain my projects.",
  },
];

const About = () => {
  return (
    <section
      id="About"
      className="mx-auto flex min-h-screen max-w-6xl flex-col
        justify-between gap-10 px-4 py-12
        md:flex-row md:items-center md:py-16"
    >
      {/* Image */}
      <div
        className="mt-8 flex flex-1 items-center justify-center
          transition-transform duration-300 hover:-rotate-6 md:mt-0"
      >
        <img
          className="h-80 md:h-96 dropshadow"
          src={man}
          alt="Developer illustration"
        />
      </div>

      {/* About Timeline */}
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-xl">
          <div className="flex flex-col gap-10">
            {aboutItems.map((item, index) => (
              <article
                key={item.title}
                className="relative pl-12"
              >
                {/* Timeline Line */}
                {index !== aboutItems.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[15px] top-8
                      -bottom-10 w-px bg-black
                      dark:bg-white"
                  />
                )}

                {/* Timeline Circle */}
                <span
                  aria-hidden="true"
                  className="boxshadow absolute left-0 top-0
                    z-10 h-8 w-8 rounded-full
                    bg-black dark:bg-white"
                />

                {/* Content */}
                <h2
                  className="mb-2 text-2xl font-bold
                    text-black dark:bg-gradient-to-r
                    dark:from-[#42b4cd] dark:to-white
                    dark:bg-clip-text dark:text-transparent"
                >
                  {item.title}
                </h2>

                <p
                  className="text-sm leading-6
                    text-gray-700 dark:text-gray-300"
                >
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
