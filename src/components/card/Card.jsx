

const Card = ({title,img}) => {
  return (
    <div id="card" className="w-48 h-24  relative group rounded-md bg-[#0d0d0dbc]  dropshadow1 cursor-pointer flex-shrink-0 overflow-hidden ">
      <div className="flex items-center justify-center h-full  p-4  ">
        <h1 className="text-xl font-bold text-center bg-gradient-to-r from-[#42b4cd] to-white bg-clip-text text-transparent  ">{title}
          
        </h1>
      </div>
      <div className="absolute top-32 rounded-md  group-hover:top-0 overflow-hidden  group-hover:block ease-jump duration-300   bg-gradient-to-t from-[#79cddc7c] to-[#0c11147e] backdrop-blur-sm">
        <img className="h-24 w-48 p-4 " src={img} alt="image" />
      </div>
    </div>
  );
};

export default Card;
