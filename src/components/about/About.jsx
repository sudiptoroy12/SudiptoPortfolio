

import man from "../../assets/man.png";


const About = () => {
  return (
    <section
      id="About"
      className="flex md:h-[100vh] justify-between   max-w-6xl mx-auto px-4 flex-col md:flex-row gap-10  "
    >  <div className=" flex   flex-1  items-center justify-center mt-16 md:mt-0  hover:-rotate-6">
        <img className="h-80 md:h-96  dropshadow " src={man} alt="image" />
      </div>
      <div className="left flex flex-1  justify-center items-center gap-4">
        <div className="flex flex-col items-center">
          <div className="circle w-8 h-8 rounded-full bg-black dark:bg-white boxshadow "></div>
          <div className="line w-[1px] h-36 bg-black dark:bg-white"></div>
          <div className="circle w-8 h-8 rounded-full bg-black dark:bg-white boxshadow"></div>
          <div className="line w-[1px] h-36 bg-black dark:bg-white"></div>
          <div className="circle w-8 h-8 rounded-full bg-black dark:bg-white boxshadow"></div>
        </div>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold  text-black dark:bg-gradient-to-r from-[#42b4cd] to-white bg-clip-text dark:text-transparent ">
              PersonalInfo
            </h1>
            <ul className="text-sm">
              <li>
                <span className="text-blue-800 dark:text-[#6bd3d3] font-semibold">Name</span> :{" "}
                <span className="font-light">Sudipto Roy</span>
              </li>
              <li>
                <span className="text-blue-800 dark:text-[#6bd3d3] font-semibold">Age</span> :{" "}
                <span className="font-light">28</span>
              </li>
              <li>
                <span className="text-blue-800 dark:text-[#6bd3d3] font-semibold">Gender</span> :{" "}
                <span className="font-light">Male</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold  text-black dark:bg-gradient-to-r from-[#42b4cd] to-white bg-clip-text dark:text-transparent">
              PersonalInfo
            </h1>
            <ul className="text-sm">
              <li>
                <span className="text-blue-800 dark:text-[#6bd3d3] font-semibold">Name</span> :{" "}
                <span className="font-light">Sudipto Roy</span>
              </li>
              <li>
                <span className="text-blue-800 dark:text-[#6bd3d3] font-semibold">Age</span> :{" "}
                <span className="font-light">28</span>
              </li>
              <li>
                <span className="text-blue-800 dark:text-[#6bd3d3] font-semibold">Gender</span> :{" "}
                <span className="font-light">Male</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold  text-black dark:bg-gradient-to-r from-[#42b4cd] to-white bg-clip-text dark:text-transparent">
              PersonalInfo
            </h1>
            <ul className="text-sm">
              <li>
                <span className="text-blue-800 dark:text-[#6bd3d3] font-semibold">Name</span> :{" "}
                <span className="font-light">Sudipto Roy</span>
              </li>
              <li>
                <span className="text-blue-800 dark:text-[#6bd3d3] font-semibold">Age</span> :{" "}
                <span className="font-light">28</span>
              </li>
              <li>
                <span className="text-blue-800 dark:text-[#6bd3d3] font-semibold">Gender</span> :{" "}
                <span className="font-light">Male</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default About;
