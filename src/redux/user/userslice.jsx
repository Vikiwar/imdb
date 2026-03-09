import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "MovieSlice",
  initialState: {
    movies: null,
    loading: true,
    error: false,
  },
  reducers: {
    movieLoading: (state, action) => {
      state.loading = action.payload;
      state.error = false;
    },
    movieError: (state) => {
      state.error = true;
    },
    moviesData: (state, action) => {
      state.loading = false;
      state.error = false;
      state.movies = action.payload;
    },
  },
});

export default MovieSlice;
