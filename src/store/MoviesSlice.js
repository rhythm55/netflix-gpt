import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    popular: null,
    topRated: null,
    upcoming: null,
    trailer: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    addTrailerVideo: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const { addMovies, addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
