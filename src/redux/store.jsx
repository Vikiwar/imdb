import { configureStore } from "@reduxjs/toolkit";
import PaginationSlice from "./paginationSlice";
import MovieSlice from "./user/userslice";

const Store = configureStore({
  reducer: {
    page: PaginationSlice.reducer,
    movies: MovieSlice.reducer,
  },
});

export default Store;
