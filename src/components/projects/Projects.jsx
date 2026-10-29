
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import ImageSlider from "./ImageSlider";

const items = [
  {
    id: 1,
    title: "FITLOG",
    img: "/Fitlog.PNG",
    desc: "A modern workout planner that helps users explore exercises, create daily workout plans, and save routines for later. Built with a clean, responsive interface to make workout planning simple and organized.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://fitlog-pink-two.vercel.app/",
    repo: "https://github.com/sudiptoroy12/fitlog",
  },
  {
    id: 2,
    title: "BazarDor",
    img: "/BazarDor.PNG",
    desc: "A Bangla market-price tracking application that helps users explore everyday essential products, browse categories, and check market prices through a simple, user-friendly interface.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB"],
    link: "https://bazar-dor-ql1w.vercel.app/",
    repo: "https://github.com/sudiptoroy12/Bazar-Dor",
  },
  {
    id: 3,
    title: "QuickShow",
    img: "/QuickShow.PNG",
    desc: "A responsive movie-ticket booking application where users can browse movies, explore showtimes, select seats, and calculate ticket prices through an interactive booking experience.",
    tech: ["React.js", "JavaScript", "Tailwind CSS"],
    link: "https://book-show-rouge.vercel.app/",
    repo: "https://github.com/sudiptoroy12/bookShow",
  },
  {
    id: 4,
    title: "DoctorsAppointment",
    img: "/DoctorAppointment.PNG",
    desc: "A doctor appointment website designed to present healthcare information through a clean, responsive interface. The project focuses on clear navigation and a user-friendly appointment experience.",
    tech: ["React.js", "JavaScript", "Tailwind CSS"],
    link: "https://doctors-appointment-tscy.vercel.app/",
    repo: "https://github.com/sudiptoroy12/DoctorsAppointment",
  },
  {
    id: 5,
    title: "MojarKhana",
    img: "/MorjarKhana.PNG",
    desc: "A food e-commerce application where users can explore food items, view product details, manage their shopping cart, and interact with an easy-to-use shopping interface.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB"],
    link: "https://mojar-khana.vercel.app/",
    repo: "https://github.com/sudiptoroy12/mojarKhana",
  },
];

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

const Single = ({ item }) => {
  const ref = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Enable the scroll animation on screens 1024px and wider.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleScreenChange = () => {
      setIsLargeScreen(mediaQuery.matches);
    };

    handleScreenChange();
    mediaQuery.addEventListener("change", handleScreenChange);

    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section
      className="relative flex items-center py-10
        sm:py-14 lg:min-h-screen lg:py-16"
    >
      <div
        className="mx-auto flex w-full max-w-6xl flex-col
          items-center gap-7 px-4
          sm:gap-9 sm:px-6
          lg:flex-row lg:gap-12 lg:px-8"
      >
        {/* Project Image */}
        <div
          ref={ref}
          className="group relative aspect-[4/3] w-full
            max-w-2xl flex-1 rounded-xl
            border border-edge bg-surface-soft shadow-lg
            transition-transform duration-500 ease-in-out
            hover:scale-105
            dark:border-white/10 dark:bg-[#11151c]
            sm:aspect-video
            lg:aspect-[4/3] lg:max-w-none"
        >
          {/* Project Title Badge: Hover on Desktop */}
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${item.title} live demo`}
            className="absolute left-1/2 top-4 z-10
              -translate-x-1/2
              translate-y-0 opacity-100
              transition-all duration-300 ease-in-out
              md:translate-y-2 md:opacity-0
              md:group-hover:translate-y-0
              md:group-hover:opacity-100
              md:group-focus-within:translate-y-0
              md:group-focus-within:opacity-100"
          >
            <span
              className="relative flex w-max items-center gap-2
                rounded-lg bg-[#6bd3d3] px-4 py-2
                text-sm font-semibold text-black shadow-md
                transition-transform duration-300
                after:absolute after:-bottom-2
                after:left-1/2 after:h-4 after:w-4
                after:-translate-x-1/2 after:rotate-45
                after:bg-[#6bd3d3] sm:text-base"
            >
              {item.title}
              <ExternalLinkIcon />
            </span>
          </a>

          {/* Project Screenshot */}
          <img
            className="h-full w-full rounded-xl object-contain"
            src={item.img}
            alt={`${item.title} project preview`}
            loading="lazy"
          />
        </div>

        {/* Project Details */}
        <motion.div
          className="flex w-full min-w-0 flex-1
            flex-col justify-center gap-4
            text-center sm:gap-5 lg:text-left"
          style={{ y: isLargeScreen ? y : 0 }}
        >
          <p
            className="text-xs font-semibold uppercase
              tracking-[0.25em] text-accent
              dark:text-[#6bd3d3]"
          >
            Featured Project
          </p>

          <h2
            className="section-title break-words text-2xl
              sm:text-3xl md:text-4xl"
          >
            {item.title}
          </h2>

          <p
            className="text-sm leading-7 text-ink-soft
              sm:text-base"
          >
            {item.desc}
          </p>

          {/* Technology Badges */}
          <div
            className="flex flex-wrap justify-center gap-2
              lg:justify-start"
          >
            {item.tech.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-edge
                  bg-surface-soft px-3 py-1.5 text-xs font-medium
                  text-ink-soft dark:border-white/10
                  dark:bg-white/5 dark:text-gray-300"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Project Links */}
          <div
            className="mt-2 flex w-full flex-col gap-3
              min-[400px]:flex-row min-[400px]:flex-wrap
              min-[400px]:justify-center lg:justify-start"
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${item.title} live website`}
              className="inline-flex w-full items-center
                justify-center gap-2 rounded-lg
                bg-[#6bd3d3] px-4 py-3 text-sm
                font-semibold text-black
                transition-all duration-300
                hover:-translate-y-1 hover:bg-[#42b4cd]
                min-[400px]:w-auto sm:px-5"
            >
              Live Demo
              <ExternalLinkIcon />
            </a>

            <a
              href={item.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${item.title} GitHub repository`}
              className="inline-flex w-full items-center
                justify-center gap-2 rounded-lg
                border border-edge px-4 py-3
                text-sm font-semibold text-ink
                transition-all duration-300
                hover:-translate-y-1 hover:border-[#42b4cd]
                hover:text-[#0e7490]
                dark:border-white/20 dark:text-white
                dark:hover:text-[#6bd3d3]
                min-[400px]:w-auto sm:px-5"
            >
              GitHub Repository
              <ExternalLinkIcon />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <div id="Projects" ref={ref}>
      <ImageSlider />

      {/* Section Heading */}
      <div
        className="sticky top-0 z-20 bg-[#f5f8fc]/80
          px-4 pb-3 pt-8 text-center backdrop-blur-md
          dark:bg-[#090b10]/80 sm:pt-10 lg:pt-16"
      >
        <h1
          className="section-title text-3xl
            sm:text-4xl md:text-5xl"
        >
          Featured Works
        </h1>

        <div
          className="mx-auto mt-4 h-1.5 w-full max-w-6xl
            overflow-hidden rounded-full bg-edge
            dark:bg-white/10"
        >
          <motion.div
            style={{ scaleX }}
            className="h-full origin-left bg-[#42b4cd]"
          />
        </div>
      </div>

      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
