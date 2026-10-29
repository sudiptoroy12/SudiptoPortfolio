import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import { BiBook } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";


const Navbar = () => {
    const[activeNav,setActiveNav]=useState('#Homepage')
    // Single theme source of truth: context syncs <html> class + localStorage.
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

  return ( 
  
  <header
        className="flex text-ink items-center justify-between px-16 mx-auto  w-full z-20 bg-white/70 backdrop-blur-md border-b border-edge fixed dark:text-white dark:bg-[rgba(0,0,0,0.4)] dark:backdrop-blur-none dark:border-transparent"
      >  <div><Sidebar/>
      <a href="#Home">
      <svg className="cursor-pointer w-8  mx-10 md:mx-0"
          width="50"
          height="80"
          viewBox="0 0 146 249"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_2)">
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
            <clipPath id="clip0_1_2">
              <rect width="146" height="249" fill="white" />
            </clipPath>
          </defs>
        </svg></a>
        </div>
        
     
       
            <div className='md:flex hidden  text-2xl lg:text-3xl  gap-10  '>
      <a  href='#Home' onClick={()=>setActiveNav('#Home')} className={`transition-colors duration-200 hover:text-[#0e7490] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#42b4cd] dark:hover:text-[#6bd3d3] ${activeNav==='#Home' ?'font-bold text-[#0e7490] scale-150 dark:text-[#6bd3d3]' : ''}`}><IoHomeOutline  /></a>
      <a href='#About' onClick={()=>setActiveNav('#About')} className={`transition-colors duration-200 hover:text-[#0e7490] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#42b4cd] dark:hover:text-[#6bd3d3] ${activeNav==='#About' ?'font-bold text-[#0e7490] scale-150 dark:text-[#6bd3d3]' : ''}`}><FaRegUser/></a>
      <a href='#Skill' onClick={()=>setActiveNav('#Skill')} className={`transition-colors duration-200 hover:text-[#0e7490] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#42b4cd] dark:hover:text-[#6bd3d3] ${activeNav==='#Skill' ?'font-bold text-[#0e7490] scale-150 dark:text-[#6bd3d3]' : ''}`}><RiServiceLine /></a>
      <a href='#Projects' onClick={()=>setActiveNav('#Projects')} className={`transition-colors duration-200 hover:text-[#0e7490] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#42b4cd] dark:hover:text-[#6bd3d3] ${activeNav==='#Projects' ?'font-bold text-[#0e7490] scale-150 dark:text-[#6bd3d3]' : ''}`}><BiBook /></a>
      <a href='#Contact' onClick={()=>setActiveNav('#Contact')} className={`transition-colors duration-200 hover:text-[#0e7490] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#42b4cd] dark:hover:text-[#6bd3d3] ${activeNav==='#Contact' ?'font-bold text-[#0e7490] scale-150 dark:text-[#6bd3d3]': ''}`}><FiPhoneCall /></a>
    </div>
        
        
        
        <div className="flex gap-6 ">
          <button
            type="button"
            onClick={toggleTheme}
            aria-pressed={isDark}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex border border-edge cursor-pointer rounded-full px-3 py-1 bg-surface text-ink dropshadow dark:bg-white dark:text-black dark:border-transparent"
          >
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
              className="feather feather-sun"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              /
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
              className="feather feather-moon"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            
          </button>

        
        </div>
      </header>

      
    
  )
}

export default Navbar
