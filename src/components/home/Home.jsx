
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import cv from "../../assets/Sudipto_Resume.pdf";

const roles = [
  "FULL STACK MERN DEVELOPER",
  "FRONTEND DEVELOPER",
  "REACT & NEXT.JS DEVELOPER",
  "SOFTWARE ENGINEER",
];

// Moving text animation for desktop
const sliderTextVariants = {
  initial: { x: 0 },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
      ease: "linear",
    },
  },
};

// Smaller moving text animation for mobile
const mobileSliderTextVariants = {
  initial: { x: 100 },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
      ease: "linear",
    },
  },
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sudipto-roy-82602415b/",
    Icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    Icon: FaInstagram,
  },
  {
    name: "GitHub",
    href: "https://github.com/sudiptoroy12",
    Icon: FaGithub,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    Icon: FaFacebookF,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/8801794197740",
    Icon: FaWhatsapp,
  },
];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
    }, 2200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <>
      <Navbar />

      <section
        id="Home"
        className="relative isolate flex min-h-screen
          flex-col overflow-hidden bg-transparent"
      >
        {/* Moving Background Text - Mobile */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-0
            top-[58%] z-0 -translate-y-1/2
            select-none whitespace-nowrap
            text-[clamp(4rem,25vw,6rem)] font-bold leading-none
            text-[#0e749040] dark:text-[#ffffff12]
            sm:hidden"
          variants={mobileSliderTextVariants}
          initial="initial"
          animate="animate"
        >
          MYSELF SUDIPTO ROY
        </motion.div>

        {/* Moving Background Text - Tablet and Desktop */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-8 left-0
            z-0 hidden select-none whitespace-nowrap
            text-[20vh] font-bold leading-none
            text-[#0e749029] dark:text-[#ffffff09]
            sm:block md:text-[25vh] lg:text-[35vh]"
          variants={sliderTextVariants}
          initial="initial"
          animate="animate"
        >
          MYSELF SUDIPTO ROY
        </motion.div>

        {/* Main Hero Content */}
        <div
          className="relative z-10 mx-auto flex w-full
            max-w-7xl flex-1 flex-col items-center
            justify-center gap-8 px-5 pb-8 pt-28
            sm:gap-10 sm:px-8
            md:flex-row md:justify-between md:gap-6
            md:px-8 md:py-24 lg:gap-10 lg:px-12"
        >
          {/* Introduction */}
          <div
            className="relative flex w-full min-w-0
              flex-1 items-center justify-center
              md:max-w-2xl md:justify-start"
          >
            {/* Decorative SVG */}
            <svg
              className="pointer-events-none absolute
                left-1/2 top-0 h-auto w-24
                -translate-x-1/2 opacity-60
                sm:w-28 md:left-1/4 
                md:translate-x-1/2 md:opacity-100
                lg:w-[150px]"
              viewBox="0 0 146 249"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <g clipPath="url(#hero-clip)">
                <path
                  d="M94 159L27.8096 124.941C11.4158 116.505 10.2608 93.5026 25.7271 83.4672L122 21"
                  stroke="#6732CA"
                  strokeWidth="30"
                  strokeLinecap="round"
                />
                <path
                  d="M94 159L27.8096 124.941C11.4158 116.505 10.2608 93.5026 25.7271 83.4672L122 21"
                  stroke="#0B6B91"
                  strokeOpacity="0.96"
                  strokeWidth="30"
                  strokeLinecap="round"
                />
                <path
                  d="M50 97L115.206 129.823C131.854 138.204 133.013 161.535 117.277 171.523L22 232"
                  stroke="#2413E0"
                  strokeWidth="30"
                  strokeLinecap="round"
                />
                <path
                  d="M50 97L115.206 129.823C131.854 138.204 133.013 161.535 117.277 171.523L22 232"
                  stroke="#40CBEA"
                  strokeOpacity="0.83"
                  strokeWidth="30"
                  strokeLinecap="round"
                />
              </g>

              <defs>
                <clipPath id="hero-clip">
                  <rect width="146" height="249" fill="white" />
                </clipPath>
              </defs>
            </svg>

            {/* Introduction Text */}
            <div
              className="relative z-10 flex w-full max-w-xl
                flex-col items-center gap-5
                text-center md:items-start md:text-left"
            >
              <h2
                className="section-title text-xl font-bold"
              >
                I'm
              </h2>

              <h1
                className="break-words text-3xl font-bold
                  text-ink
                  sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Sudipto Roy
              </h1>

              {/* Animated Developer Roles */}
              <div
                className="flex h-7 max-w-full items-center
                  overflow-hidden sm:h-8 md:h-9"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="block whitespace-nowrap
                      text-xs italic text-[#0e7490]
                      dark:text-[#6bd3d3]
                      sm:text-sm md:text-base"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Action Buttons */}
              <div
                className="flex w-full flex-wrap
                  items-center justify-center gap-3
                  md:justify-start"
              >
                <a
                  href={cv}
                  download
                  className="btn-primary relative z-10"
                >
                  Download CV
                </a>

                <a
                  href="#About"
                  className="group btn-primary relative z-10"
                >
                  About me

                  <svg
                    className="h-4 w-4 transition-transform
                      duration-300 group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8
                        0-45.3l-160-160c-12.5-12.5-32.8-12.5
                        -45.3 0s-12.5 32.8 0 45.3L338.8
                        224 32 224c-17.7 0-32 14.3-32
                        32s14.3 32 32 32l306.7 0L233.4
                        393.4c-12.5 12.5-12.5 32.8 0
                        45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image with Cyan and Purple Glow */}
          <div
            className="group relative order-2 mx-auto
              h-36 w-36 shrink-0
              sm:h-44 sm:w-44
              md:order-none md:h-64 md:w-64
              lg:h-80 lg:w-80 xl:h-96 xl:w-96"
          >
            {/* Blurred Gradient Background */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-full
                bg-gradient-to-tr from-[#42b4cd]/50
                via-[#8c75ff]/30 to-[#42b4cd]/10
                opacity-60 blur-xl
                transition-transform duration-700
                group-hover:scale-110
                sm:-inset-5
                dark:opacity-80"
            />

            {/* Decorative Ring */}
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-full
                border border-[#42b4cd]/50
                shadow-[0_0_25px_rgba(66,180,205,0.2)]
                transition-transform duration-700
                group-hover:rotate-6"
            />

            {/* Profile Picture */}
            <img
              src="/MyPic.jpg"
              alt="Sudipto Roy"
              className="relative z-10 h-full w-full
                rounded-full border-2 border-[#42b4cd]/50
                object-cover
                shadow-[0_0_30px_rgba(66,180,205,0.2)]
                transition-transform duration-500
                group-hover:scale-[1.02]"
            />
          </div>

          {/* Social Links */}
          <ul
            className="order-3 flex items-center
              justify-center gap-5 pb-2
              text-ink-soft
              md:order-none md:mr-2
              md:flex-col md:gap-6 md:pb-4"
            aria-label="Social media links"
          >
            {socialLinks.map(({ name, href, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="inline-flex rounded-md p-1
                    transition-all duration-300
                    hover:-translate-y-1 hover:text-[#0e7490]
                    dark:hover:text-[#6bd3d3]
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-[#42b4cd]"
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* My Works Button */}
        <a
          href="#Projects"
          className="btn-primary relative z-10 mx-auto mb-8
            sm:mb-10"
        >
          My works

          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M169.4 470.6c12.5 12.5 32.8 12.5
                45.3 0l160-160c12.5-12.5 12.5-32.8
                0-45.3s-32.8-12.5-45.3 0L224
                370.8 224 64c0-17.7-14.3-32-32-32s-32
                14.3-32 32l0 306.7L54.6
                265.4c-12.5-12.5-32.8-12.5-45.3
                0s-12.5 32.8 0 45.3l160 160z"
            />
          </svg>
        </a>
      </section>
    </>
  );
};

export default Home;
