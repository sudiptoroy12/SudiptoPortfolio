import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import { BiBook } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";


const Navbar = () => {
    const[activeNav,setActiveNav]=useState('#Homepage')
    const[darkMode,setDarkMode] = useState('dark');

    const togglebutton=()=>{
      if(darkMode === "dark"){
        setDarkMode("light")
      }else{
        setDarkMode('dark')
      }
    }

    useEffect(()=>{
    document.body.className = darkMode;
      console.log(darkMode);
      
    },[darkMode])

  return ( 
  
  <header
        className="flex text-white  items-center justify-between px-16 mx-auto  w-full z-20 bg-[rgba(0,0,0,0.4)] fixed "
      >  <div><Sidebar/>
      <a href="#Homepage">
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
      <a  href='#Homepage' onClick={()=>setActiveNav('#Homepage')} className={activeNav==='#Homepage' ?'font-bold text-[#6bd3d3] scale-150' : ''}><IoHomeOutline  /></a>
      <a href='#About' onClick={()=>setActiveNav('#About')} className={activeNav==='#About' ?'font-bold text-[#6bd3d3] scale-150' : ''}><FaRegUser/></a>
      <a href='#Skill' onClick={()=>setActiveNav('#Skill')} className={activeNav==='#Skill' ?'font-bold text-[#6bd3d3] scale-150' : ''}><RiServiceLine /></a>
      <a href='#Projects' onClick={()=>setActiveNav('#Projects')} className={activeNav==='#Projects' ?'font-bold text-[#6bd3d3] scale-150' : ''}><BiBook /></a>
      <a href='#Contact' onClick={()=>setActiveNav('#Contact')} className={activeNav==='#Contact' ?'font-bold text-[#6bd3d3] scale-150': ''}><FiPhoneCall /></a>
    </div>
        
        
        
        <div className="flex gap-6 ">
          <button onClick={togglebutton} className="flex border cursor-pointer rounded-full px-3 py-1 dark:bg-white dark:text-black bg-black dropshadow">
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
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            
          </button>

        
        </div>
      </header>

      
    
  )
}

export default Navbar
