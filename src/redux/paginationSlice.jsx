import { createSlice } from "@reduxjs/toolkit";

const PaginationSlice = createSlice({
  name: " PaginationSlice",
  initialState: {
    page: 1,
  },
  reducers: {
    handleNext: (state) => {
      state.page += 1;
    },
    handlePrev: (state) => {
      if (state.page == 1) {
        return;
      } else {
        state.page -= 1;
      }
    },
  },
});

export default PaginationSlice;
