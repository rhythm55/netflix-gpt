import OpenAI from "openai";
import { useDispatch } from "react-redux";
import { addGptMovie } from "../store/GptMovieSlice";
import { API_OPTIONS, SEARCH_MOVIE_API } from "../utils/constant";

const useNetflixGPTResults = () => {
  const dispatch = useDispatch();
  const loadGPTData = async (searchText) => {
    // const openai = new OpenAI({
    //   apiKey: GPT_KEY,
    //   dangerouslyAllowBrowser: true,
    // });
    // const query =
    //   "act as a movie recommendation system. suggest movies with following : " +
    //   searchText +
    //   " . give 5 movie names. the names should be comma seprated";
    // const response = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: "Say this is a test" }],
    //   model: "gpt-3.5-turbo",
    // });
    // const data = await response.json();
    // console.log("data ", data);

    const movies = [
      "Andaz Apna Apna",
      "Jab We Met",
      "Dilwale Dulhania Le Jayenge",
      "3 Idiots",
      "Hera Pheri",
    ];

    const moviesInfo = movies.map((movie) =>
      fetch(`${SEARCH_MOVIE_API}?query=${movie}`, API_OPTIONS)
    );
    const data = await Promise.all(moviesInfo);
    const movieInfos = await Promise.all(data.map((movie) => movie.json()));
    const movieList = movies.map((name, index) => ({
      name: name,
      movieList: movieInfos[index].results,
    }));
    dispatch(addGptMovie(movieList));
  };

  return { loadGPTData };
};

export default useNetflixGPTResults;
