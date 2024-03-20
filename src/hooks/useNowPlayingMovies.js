import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_MOVIES_API } from "../utils/constant";
import { addMovies } from "../store/MoviesSlice";

const useNowPlayingMovies = () => {
  useEffect(() => {
    featchNowPlayingMovies();
  }, []);

  const dispatch = useDispatch();

  const featchNowPlayingMovies = async () => {
    const response = await fetch(NOW_PLAYING_MOVIES_API, API_OPTIONS);
    const json = await response.json();
    dispatch(addMovies(json.results));
  };
};

export default useNowPlayingMovies;
