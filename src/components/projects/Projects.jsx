import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ImageSlider from "./ImageSlider";

const items = [
  {
    id: 1,
    title: "React app",
    img: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, molestias! Culpa in iusto aliquam? Molestias dolor saepe fuga vitae! Amet!",
    link: "https://project1",
  },
  {
    id: 2,
    title: "Next.js app",
    img: "https://images.pexels.com/photos/4050464/pexels-photo-4050464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, molestias! Culpa in iusto aliquam? Molestias dolor saepe fuga vitae! Amet!",
    link: "https://project2",
  },
  {
    id: 3,
    title: "Music app",
    img: "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, molestias! Culpa in iusto aliquam? Molestias dolor saepe fuga vitae! Amet!",
    link: "https://project3",
  },
  {
    id: 4,
    title: "Vanilla app",
    img: "https://images.pexels.com/photos/1087735/pexels-photo-1087735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, molestias! Culpa in iusto aliquam? Molestias dolor saepe fuga vitae! Amet!",
    link: "https://project4",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section className="h-[75vh] md:h-[100vh]  ">
      <div className=" flex  w-full h-full justify-center items-center">
        <div className="max-w-4xl flex flex-col md:flex-row md:gap-10 ">
          <div
            className=" flex flex-1 flex-col h-96  p-12 relative group hover:scale-105 ease-in-out duration-500 "
            ref={ref}
          >
            <a href={item.link}>
              <span className="flex bg-[#6bd3d3] text-black px-4 py-2 rounded-lg w-max gap-2 absolute top-12 left-1/2 -translate-x-1/2 after:w-4 after:h-4 after:bg-[#6bd3d3] after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 group-hover:-top-1 ease-jump duration-300 cursor-pointer">
                {item.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </a>
            <img
              className="w-full h-80 object-cover relative rounded-md dropshadow  "
              src={item.img}
              alt="img"
            />
          </div>
          <motion.div
            className="textContainer  flex flex-col   flex-1 text-center md:text-left  gap-4 justify-center"
            style={{ y }}
          >
            <h2 className="text-xl  font-bold text-black dark:bg-gradient-to-r from-[#42b4cd] to-white bg-clip-text dark:text-transparent   ">
              {item.title}
            </h2>
            <p className="font-light">{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  return (
    <div id="Projects" className="" ref={ref}  >
      <ImageSlider />
      <div className="md:sticky top-0  text-center pt-20 z-10">
        <h1 className=" text-5xl font-bold text-black dark:bg-gradient-to-r from-[#42b4cd] to-white bg-clip-text dark:text-transparent ">
          Featured Works
        </h1>
        <motion.div
          style={{ scaleX }}
          className="h-3 bg-black dark:bg-white mt-3"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
