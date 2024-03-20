import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import MoviesSlice from "./MoviesSlice";

const appStore = configureStore({
  reducer: {
    user: UserSlice,
    nowPlayingMovies: MoviesSlice,
  },
});

export default appStore;
