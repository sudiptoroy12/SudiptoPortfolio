import React from "react";
import Card from "../card/Card";
import mern from "../../assets/mern.png";
import js from "../../assets/javascript-icon-7.jpg";
import react from "../../assets/react.png";
import nextjs from "../../assets/nextjs.png";

const Skill = () => {
  return (
    <div id="Skill" className="md:h-screen max-w-6xl mx-auto flex flex-col md:flex-row  gap-24 pt-16 md:pt-0  ">
      <div className=" flex  flex-col  gap-10   items-center justify-center">    <Card title="JAVASCRIPT" img={js} />
        <Card title="REACT" img={react} />
        <Card title="NEXT JS" img={nextjs} />
        <Card title="MERN STACK WEB DEVELOPER" img={mern} />
    
      </div>
     
      <div className=" flex flex-1 flex-col  justify-center  gap-8  ">
        <div className=" flex flex-col md:flex-row  items-center  gap-6 hover:scale-105 duration-200">
          <p className="text-lg  w-36 ">HTML(70%)</p>
          <hr className="h-2 w-[70%] rounded-lg bg-gradient-to-l from-[#0b26c47c] to-[#a412ba7e] " />
        </div>
        <div className="flex-col md:flex-row   flex items-center  gap-6 hover:scale-105 duration-300">
          <p className="text-lg w-36">CSS(70%)</p>
          <hr className="h-2 w-[70%] rounded-lg bg-gradient-to-l from-[#0b26c47c] to-[#a412ba7e] " />
        </div>
            <div className="flex-col md:flex-row  flex items-center  gap-6 hover:scale-105 duration-300">
          <p className="text-lg w-36 flex ">JavaScript(60%)</p>
          <hr className="h-2 w-[60%] rounded-lg bg-gradient-to-l from-[#0b26c47c] to-[#a412ba7e] " />
        </div>
        <div className="flex-col md:flex-row   flex items-center  gap-6 hover:scale-105 duration-300">
          <p className="text-lg w-36">React Js(50%)</p>
          <hr className="h-2 w-[50%] rounded-lg bg-gradient-to-l from-[#0b26c47c] to-[#a412ba7e] " />
        </div>
        <div className="flex-col md:flex-row   flex items-center  gap-6 hover:scale-105 duration-300">
          <p className="text-lg w-36">Next.Js(50%)</p>
          <hr className="h-2 w-[50%] rounded-lg bg-gradient-to-l from-[#0b26c47c] to-[#a412ba7e] " />
        </div>
    
        <div className="flex-col md:flex-row  flex items-center  gap-6 hover:scale-105 duration-300">
          <p className="text-lg w-36">Tailwind(80%)</p>
          <hr className="h-2 w-[80%] rounded-lg bg-gradient-to-l from-[#0b26c47c] to-[#a412ba7e] " />
        </div>
      </div>
    </div>
  );
};

export default Skill;
