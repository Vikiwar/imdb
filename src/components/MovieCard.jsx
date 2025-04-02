import React from "react";

const MovieCard = ({ movieobj }) => {
  return (
    <div
      className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl  hover:scale-110 duration-300 hover:cursor-pointer flex flex-col"
      style={{ backgroundImage: `url(${movieobj.url})` }}
    >
      <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg">
        {movieobj.title}{" "}
      </div>
    </div>
  );
};

export default MovieCard;
