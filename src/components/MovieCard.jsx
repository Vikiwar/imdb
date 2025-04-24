import React from "react";

const MovieCard = ({
  movieobj,
  addTowatchlist,
  watchlist,
  removeFromWatchlist,
}) => {
  const doesContain = (movieobject) => {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieobject.id) {
        return true;
      }

      return false;
    }
  };

  return (
    <div
      className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl  hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieobj.backdrop_path})`,
      }}
    >
      {doesContain(movieobj) ? (
        <div
          onClick={() => removeFromWatchlist(movieobj)}
          className=" m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-red-900/60"
        >
          ❌
        </div>
      ) : (
        <div
          onClick={() => addTowatchlist(movieobj)}
          className=" m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          😍
        </div>
      )}

      <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg">
        {movieobj.title}
      </div>
    </div>
  );
};

export default MovieCard;
