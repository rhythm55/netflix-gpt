import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, GENERE_MOVIES_API } from "../utils/constant";
import { addMovies } from "../store/MoviesSlice";

const useMoviesList = () => {
  const listToFetch = ["now_playing", "popular", "top_rated", "upcoming"];

  useEffect(() => {
    listToFetch.forEach((item) => {
      featchNowPlayingMovies(item);
    });
  }, []);

  const dispatch = useDispatch();

  const featchNowPlayingMovies = async (genere) => {
    const response = await fetch(GENERE_MOVIES_API + genere, API_OPTIONS);
    const json = await response.json();
    let key = "";
    if (genere === "now_playing") key = "nowPlaying";
    else if (genere === "top_rated") key = "topRated";
    else key = genere;
    dispatch(addMovies({ key, value: json.results }));
  };
};

export default useMoviesList;
