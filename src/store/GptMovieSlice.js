import { createSlice } from "@reduxjs/toolkit";

const gptMovieSlice = createSlice({
  name: "gptMovie",
  initialState: [],
  reducers: {
    addGptMovie: (state, action) => {
      return action.payload;
    },
    removeGptMovie: () => {
      return [];
    },
  },
});

export const { addGptMovie, removeGptMovie } = gptMovieSlice.actions;
export default gptMovieSlice.reducer;
