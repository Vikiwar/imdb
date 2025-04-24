import { useEffect, useState } from "react";
import React from "react";
import Pagination from "./Pagination.jsx";
import MovieCard from "./MovieCard.jsx";
import axios from "axios";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const [page, setPage] = useState(1);

  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrev = () => {
    if (page == 1) {
      setPage(page);
    } else {
      setPage(page - 1);
    }
  };

  const addTowatchlist = (movieobj) => {
    const updatedWatchlist = [...watchlist, movieobj];
    setWatchlist(updatedWatchlist);
  };

  const removeFromWatchlist = (movieobj) => {
    const filteredList = watchlist.filter((movie) => movie.id != movieobj.id);
    setWatchlist(filteredList);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=7c1c2e5060817268146ba228bac06cc0&language=en-US&page=${page}`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, [page]);
  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1> Tremding movies</h1>
      </div>

      <div className="flex flex-wrap justify-evenly gap-8">
        {movies.map((movieobj) => {
          return (
            <MovieCard
              movieobj={movieobj}
              addTowatchlist={addTowatchlist}
              watchlist={watchlist}
              removeFromWatchlist={removeFromWatchlist}
            />
          );
        })}
      </div>
      <Pagination nextPageFn={handleNext} prevPageFn={handlePrev} page={page} />
    </div>
  );
};

export default Movies;
