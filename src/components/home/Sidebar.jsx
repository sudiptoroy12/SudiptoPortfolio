
import { useState } from "react";
import Togglebutton from "./Togglebutton";
import { motion } from "framer-motion";
import Links from "./Links";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(20px at 40px 40px)",
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  // Close the sidebar when a navigation link is clicked
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <motion.div
      className="relative flex flex-col items-center
        justify-center md:hidden"
      animate={open ? "open" : "closed"}
      initial={false}
    >
      {/* Mobile Sidebar */}
      <motion.div
        className="fixed bottom-0 left-0 top-0 z-50
          w-screen max-w-[400px]
          bg-gradient-to-t from-[#79cddc7c]
          to-[#0c11147e] backdrop-blur-sm"
        variants={variants}
      >
        <Links onLinkClick={handleLinkClick} />
      </motion.div>

      {/* Menu Toggle Button */}
      <Togglebutton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
