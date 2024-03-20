import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: null,
    trailer: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const { addMovies, addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
