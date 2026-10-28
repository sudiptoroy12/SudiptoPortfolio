import React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: -30,
    opacity: 1,
  },

  closed: {
    y: 60,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "About","Skill", "Projects", "Contact"];
  return (
    <motion.div className="absolute w-full h-full flex items-center justify-center flex-col gap-6  dark:text-white text-black" variants={variants}>
      {items.map((item,index) => (
        <motion.a
          className="text-3xl z-20"
          href={`#${item}`}
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.5 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
