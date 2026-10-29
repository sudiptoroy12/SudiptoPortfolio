
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
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 60,
    opacity: 0,
  },
};

const Links = ({ onLinkClick }) => {
  const items = ["Home", "About", "Skill", "Projects", "Contact"];

  return (
    <motion.div
      className="absolute flex h-full w-full
        flex-col items-center justify-center
        gap-6 text-black dark:text-white"
      variants={variants}
    >
      {items.map((item) => (
        <motion.a
          className="z-20 text-3xl"
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          onClick={onLinkClick}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
