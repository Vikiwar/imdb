import { useDispatch } from "react-redux";
import MovieSlice from "./userslice";

const actions = MovieSlice.actions;

const fetchingMiddleWare = (params) => {
  return async function (dispatch) {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=7c1c2e5060817268146ba228bac06cc0&language=en-US&page=${params}`,
      );
      const movies = await res.json();
      dispatch(actions.moviesData(movies.results));
    } catch (err) {
      dispatch(actions.movieError());
    } finally {
      dispatch(actions.movieLoading(false));
    }
  };
};

export default fetchingMiddleWare;
