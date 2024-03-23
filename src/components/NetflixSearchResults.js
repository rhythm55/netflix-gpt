import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const NetflixSearchResults = () => {
  const movieList = useSelector((state) => state.gptMovieList);
  return (
    <div className="position-absolute top-50 text-white bg-black bg-opacity-50 m-50">
      {movieList.map((item) => (
        <MovieList key={item.name} title={item.name} movies={item.movieList} />
      ))}
    </div>
  );
};

export default NetflixSearchResults;
