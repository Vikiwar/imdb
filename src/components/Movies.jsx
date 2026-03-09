import { useEffect, useState } from "react";
import React from "react";
import Pagination from "./Pagination.jsx";
import MovieCard from "./MovieCard.jsx";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import PaginationSlice from "../redux/paginationSlice.jsx";
import fetchingMiddleWare from "../redux/user/middleWare.jsx";
import Banner from "./Banner.jsx";

const Movies = () => {
  const [watchlist, setWatchlist] = useState([]);
  const { page } = useSelector((state) => state.page);
  const { movies, loading, error } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const actions = PaginationSlice.actions;

  const handleNext = () => {
    dispatch(actions.handleNext());
  };
  const handlePrev = () => {
    dispatch(actions.handlePrev());
  };

  const addTowatchlist = (movieobj) => {
    const updatedWatchlist = [...watchlist, movieobj];
    setWatchlist(updatedWatchlist);
    localStorage.setItem("movies", JSON.stringify(updatedWatchlist));
  };

  const removeFromWatchlist = (movieobj) => {
    const filteredList = watchlist.filter((movie) => movie.id != movieobj.id);
    setWatchlist(filteredList);
    localStorage.setItem("movies", JSON.stringify(filteredList));
  };

  useEffect(() => {
    // axios
    //   .get(
    //     `https://api.themoviedb.org/3/trending/movie/week?api_key=7c1c2e5060817268146ba228bac06cc0&language=en-US&page=${page}`,
    //   )
    //   .then((res) => {
    //     setMovies(res.data.results);
    //   });

    dispatch(fetchingMiddleWare(page));
  }, [page]);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("movies"));
    if (movies) {
      setWatchlist(movies);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <p className="text-xl animate-pulse">Loading movie...</p>
      </div>
    );
  }

  // Error UI
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <p className="text-red-500 text-xl font-semibold">
          Error: oops something went wrong {error}
        </p>
      </div>
    );
  }

  return (
    <>
      <Banner></Banner>
      <div>
        <div className="text-2xl font-bold text-center m-5">
          <h1> Tremding movies</h1>
        </div>

        <div className="flex flex-wrap justify-evenly gap-8">
          {movies.map((movieobj) => {
            return (
              <MovieCard
                key={movieobj.id}
                movieobj={movieobj}
                addTowatchlist={addTowatchlist}
                watchlist={watchlist}
                removeFromWatchlist={removeFromWatchlist}
              />
            );
          })}
        </div>
        <Pagination
          nextPageFn={handleNext}
          prevPageFn={handlePrev}
          page={page}
        />
      </div>
    </>
  );
};

export default Movies;
