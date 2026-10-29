
import { useState } from "react";
import { motion } from "framer-motion";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([
    0, 1, 2, 3, 4,
  ]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((index) => (index + 1) % 5)
    );
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((index) => (index + 4) % 5)
    );
  };

  const items = [
    {
      id: 1,
      title: "FITLOG",
      img: "/Fitlog.PNG",
      link: "https://fitlog-pink-two.vercel.app/",
    },
    {
      id: 2,
      title: "BazarDor",
      img: "/BazarDor.PNG",
      link: "https://bazar-dor-ql1w.vercel.app/",
    },
    {
      id: 3,
      title: "QuickShow",
      img: "/QuickShow.PNG",
      link: "https://book-show-rouge.vercel.app/",
    },
    {
      id: 4,
      title: "DoctorsAppointment",
      img: "/DoctorAppointment.PNG",
      link: "https://doctors-appointment-tscy.vercel.app/",
    },
    {
      id: 5,
      title: "MojarKhana",
      img: "/MorjarKhana.PNG",
      link: "https://mojar-khana.vercel.app/",
    },
  ];

  const positions = [
    "center",
    "left1",
    "left",
    "right",
    "right1",
  ];

  const imageVariants = {
    center: {
      x: "0%",
      scale: 1,
      zIndex: 5,
    },
    left1: {
      x: "-50%",
      scale: 0.7,
      zIndex: 3,
    },
    left: {
      x: "-90%",
      scale: 0.5,
      zIndex: 2,
    },
    right: {
      x: "90%",
      scale: 0.5,
      zIndex: 2,
    },
    right1: {
      x: "50%",
      scale: 0.7,
      zIndex: 3,
    },
  };

  return (
    <section
      className="mx-auto flex w-full max-w-5xl
        flex-col items-center justify-center
        overflow-hidden px-3 py-12
        sm:px-6 sm:py-14
        md:min-h-screen md:py-16"
    >
      {/* Heading */}
      <h2
        className="section-title max-w-full text-center
          text-2xl font-bold leading-tight
          sm:text-3xl md:text-4xl"
      >
        1+ YEARS EXPERIENCED IN PROJECTS
      </h2>

      {/* Responsive Image Carousel */}
      <div
        className="relative mt-8 flex h-[250px] w-full
          items-center justify-center overflow-hidden
          sm:mt-10 sm:h-[320px]
          md:h-[360px] lg:h-[420px]"
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="group absolute inset-0 m-auto
              aspect-[4/3] w-[82%] max-w-[560px]
              overflow-hidden rounded-xl
              shadow-xl sm:w-[72%]
              md:w-[54%] lg:w-[44%]"
            initial={false}
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            {/* Project Image */}
            <img
              className="h-full w-full rounded-xl
                border border-edge
                bg-surface object-contain
                dark:border-white/10 dark:bg-[#11151c]"
              src={item.img}
              alt={`${item.title} project preview`}
              loading="lazy"
            />

            {/* Project Link */}
            <div
              className="absolute inset-0 flex
                items-start justify-center
                rounded-xl bg-transparent
                pt-3 transition-colors duration-300
                group-hover:bg-black/10
                sm:pt-4"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${item.title} live website`}
                className="inline-flex max-w-[95%]
                  items-center justify-center gap-1.5
                  rounded-md border border-white/20
                  bg-black px-2.5 py-1.5
                  text-xs font-bold text-white
                  shadow-md transition-all duration-300
                  hover:scale-105
                  dark:bg-gradient-to-r
                  dark:from-[#42b4cd] dark:to-white
                  dark:text-black
                  sm:gap-2 sm:px-3 sm:py-2
                  sm:text-sm md:text-base"
              >
                <span className="break-words">
                  {item.title}
                </span>

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
                  className="shrink-0 sm:h-5 sm:w-5"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Back and Next Buttons */}
      <div className="mt-6 flex items-center justify-center gap-4 sm:mt-8">
        <button
          type="button"
          onClick={handleBack}
          className="btn-primary min-w-24 sm:min-w-28"
        >
          Back
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="btn-primary min-w-24 sm:min-w-28"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default ImageSlider;
