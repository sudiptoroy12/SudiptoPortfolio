

const Card = ({title,img}) => {
  return (
    <div id="card" className="w-48 h-24  relative group rounded-md border border-edge bg-surface shadow-sm  dropshadow1 cursor-pointer flex-shrink-0 overflow-hidden dark:border-white/10 dark:bg-[#11151ccc]">
      <div className="flex items-center justify-center h-full  p-4  ">
        <h1 className="section-title text-xl font-bold text-center">{title}

        </h1>
      </div>
      <div className="absolute top-32 rounded-md  group-hover:top-0 overflow-hidden  group-hover:block ease-jump duration-300   bg-gradient-to-t from-[#79cddc]/60 to-[#0c1114]/40 backdrop-blur-sm dark:from-[#79cddc7c] dark:to-[#0c11147e]">
        <img className="h-24 w-48 p-4 " src={img} alt={title} />
      </div>
    </div>
  );
};

export default Card;
