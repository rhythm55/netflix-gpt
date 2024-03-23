import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import MoviesSlice from "./MoviesSlice";
import GptMovieSlice from "./GptMovieSlice";

const appStore = configureStore({
  reducer: {
    user: UserSlice,
    movieList: MoviesSlice,
    gptMovieList: GptMovieSlice,
  },
});

export default appStore;
