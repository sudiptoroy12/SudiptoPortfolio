import React from 'react'
import Card from '../card/Card'
import mern from "../../assets/mern.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const items = [
  {
    id: 1,
    title: "React app",
    img: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

  },
  {
    id: 2,
    title: "Next.js app",
    img: "https://images.pexels.com/photos/4050464/pexels-photo-4050464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

  },
  {
    id: 3,
    title: "Music app",
    img: "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  
  },
  {
    id: 4,
    title: "Vanilla app",
    img: "https://images.pexels.com/photos/1087735/pexels-photo-1087735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
 
  },
];

const ProjectCard = () => {
     let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center gap-10 '>
      <h2  className='text-4xl'>1+ YEARS EXPERIENCED IN PROJECTS</h2>
      <div className='flex gap-10  w-[99%] h-72 justify-center items-center '>
         <Slider {...settings}>
      {items.map((item,index)=>{
        return(
            <div key={index}>
                <div>
                    <img src={item.img} alt="image" className='w-40 h-40 object-contain ' />
                </div>
                <div className='p-6 bg-blue-700'>
                    <p className='font-semibold text-white'>{item.title}</p>
                </div>

            </div>
        )
      })}</Slider>  
    
      </div>
    </div>
  )
}

export default ProjectCard
