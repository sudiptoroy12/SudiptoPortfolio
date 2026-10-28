import React, { useState } from 'react'
import Togglebutton from './Togglebutton'
import { motion } from "framer-motion";
import Links from './Links';

const Sidebar = () => {
    const[open,setOpen]=useState(false)

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
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className='flex flex-col  justify-center items-center md:hidden  ' animate={open ? "open" : "closed"} >
        <motion.div className='fixed top-0 left-0 bottom-0 bg-gradient-to-t from-[#79cddc7c] to-[#0c11147e] backdrop-blur-sm w-[400px] z-50' variants={variants}>
      <Links/>
        </motion.div>
        <Togglebutton setOpen={setOpen}/>
      
    </motion.div>
  )
}

export default Sidebar
