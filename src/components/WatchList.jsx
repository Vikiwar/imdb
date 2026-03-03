import React, { useEffect, useState } from "react";
import genreids from "../constants";

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [search, setSearch] = useState("");
  const [genreList, setGenrelist] = useState([]);
  const [currgenre, setCurrgenre] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const genres = (genre_id) => {
    return genreids[genre_id];
  };

  const handleAscendingRating = () => {
    const sortedWatchlist = watchlist.sort((movieobja, movieobjb) => {
      return movieobja.vote_average - movieobjb.vote_average;
    });
    setWatchlist([...sortedWatchlist]);
  };
  const handleDescendingRating = () => {
    const sortedWatchlist = watchlist.sort((movieobja, movieobjb) => {
      return movieobjb.vote_average - movieobja.vote_average;
    });
    setWatchlist([...sortedWatchlist]);
  };
  const handleFilter = (genre) => {
    setCurrgenre(genre);
  };

  useEffect(() => {
    const storedWatchlist = localStorage.getItem("movies");
    if (storedWatchlist) {
      setWatchlist(JSON.parse(storedWatchlist));
    }
  }, []);

  useEffect(() => {
    let temp = watchlist.map((movie) => {
      return genreids[movie.genre_ids[0]];
    });
    console.log(temp);
    temp = new Set(temp);
    console.log(temp);
    setGenrelist(["All Genres", ...temp]);
  }, [watchlist]);

  return (
    <>
      <div className=" flex justify-center m-4">
        {genreList.map((genre) => {
          const isActive = currgenre === genre;
          const baseStyles =
            "flex justify-center items-center h-[3rem] w-[9rem] rounded-xl  text-bold font-white mx-4 hover:cursor-pointer";
          const bgColor = isActive ? "bg-blue-400" : "bg-gray-400/50";
          return (
            <div
              className={`${baseStyles} ${bgColor}`}
              onClick={() => handleFilter(genre)}
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-10 ">
        <input
          placeholder="search movie"
          className="h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none border-gray-300"
          type="text"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table
          className="w-full border-collapse bg-white text-left text-sm
text-gray-500"
        >
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th>
                <div className="flex">
                  <div>
                    <i
                      class="fa-solid fa-arrow-up mx-1 hover:cursor-pointer"
                      onClick={handleAscendingRating}
                    ></i>
                    Ratings
                    <i
                      class="fa-solid fa-arrow-down mx-1 hover:cursor-pointer"
                      onClick={handleDescendingRating}
                    ></i>
                  </div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Popularity</div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Genre</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {watchlist
              .filter((movie) => {
                if (currgenre === "All Genres" || currgenre === "") {
                  return true;
                } else {
                  return genreids[movie.genre_ids[0]] == currgenre;
                }
              })
              .filter((movie) => {
                return movie.title.toLowerCase().includes(search.toLowerCase());
              })
              .map((movie) => (
                <tr className="hover:bg-gray-50" key={movie.id}>
                  <td className="flex items-center px-6 py-4 font-normal text-gray-900 gap-4">
                    <img
                      className="h-[6rem] w-[10rem] object-fit object-cover"
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt=""
                    />
                    <div className="font-medium text-gray-700 text-sm">
                      {movie.title}
                    </div>
                  </td>
                  <td className="pl-6 py-4">{movie.vote_average}</td>
                  <td className="pl-6 py-4">{movie.popularity}</td>
                  <td className="pl-2 py-4">{genres(movie.genre_ids[0])}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WatchList;
