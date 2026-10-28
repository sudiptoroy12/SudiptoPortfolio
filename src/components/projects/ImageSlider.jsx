import { useState } from "react";
import { motion } from "framer-motion";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const items = [
    {
      id: 1,
      title: "React app",
      img: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://project1",
    },
    {
      id: 2,
      title: "Next.js app",
      img: "https://images.pexels.com/photos/4050464/pexels-photo-4050464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://project2",
    },
    {
      id: 3,
      title: "Music app",
      img: "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://project3",
    },
    {
      id: 4,
      title: "Vanilla app",
      img: "https://images.pexels.com/photos/1087735/pexels-photo-1087735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://project4",
    },
    {
      id: 5,
      title: "Next.js app",
      img: "https://images.pexels.com/photos/4050464/pexels-photo-4050464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://project5",
    },
  ];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  return (
    <div className="flex items-center flex-col justify-center   md:h-screen max-w-5xl mx-auto">
      <h2 className="text-4xl text-black dark:bg-gradient-to-r from-[#42b4cd] to-white bg-clip-text dark:text-transparent  font-bold text-center pt-16 md:pt-0">
        1+ YEARS EXPERIENCED IN PROJECTS
      </h2>
      <div className="flex gap-10  w-[99%] h-52 md:h-96 justify-center items-center  mt-12 ">
        {items.map((item,index) => {
          return ( 
          <motion.div
                key={item.id}
             
                className=" h-48 md:h-56 lg:h-96 absolute w-[40%]  "
                initial="center"
                animate={positions[positionIndexes[index]]}
                variants={imageVariants}
                transition={{ duration: 0.5 }}
                
              >
               <img className="rounded-[12px] h-48 md:h-56 lg:h-96 absolute w-[100%] " src={item.img} alt="" /> 
               <div className="rounded-[12px] h-48 md:h-56 lg:h-96 flex  justify-center w-[100%] absolute hover:backdrop-blur-sm md:text-2xl font-semibold text-black  ">
                     <a        href={item.link}>
                  <p className="flex items-center justify-center hover:scale-110 duration-500">
                    {item.title}{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
                  </p>
                </a>
                </div>

                </motion.div>
          )
                
              {/* <motion.div
                className="rounded-[12px] h-48 md:h-56 lg:h-96 flex  justify-center w-[40%] absolute hover:backdrop-blur-sm md:text-2xl font-semibold text-black  "
                initial="center"
                
                animate={positions[positionIndexes[index]]}
                variants={imageVariants}
                transition={{ duration: 0.5 }}
              >
                <a href={item.link}>
                  <p className="flex items-center justify-center hover:scale-110 duration-500">
                    {item.title}{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
                  </p>
                </a>
              </motion.div> */}
            
              
        })}
      </div>

      <div className="flex flex-row gap-3">
        <button
          className="rounded-lg mt-10 px-3  font-bold  bg-black  text-white dark:bg-gradient-to-r from-[#42b4cd] to-white  dark:text-black hover:scale-110 duration-500  "
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="rounded-lg mt-10 px-3  font-bold   bg-black  text-white dark:bg-gradient-to-r from-[#42b4cd] to-white  dark:text-black hover:scale-110 duration-500 "
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
