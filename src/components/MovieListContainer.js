import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieListContainer = () => {
  const movies = useSelector((state) => state.movieList);
  const movieList = [
    {
      title: "Now Playing",
      movies: movies.nowPlaying,
    },
    {
      title: "Popular",
      movies: movies.popular,
    },
    {
      title: "Top Rated",
      movies: movies.topRated,
    },
    {
      title: "Upcoming",
      movies: movies.upcoming,
    },
  ];
  return (
    <div className="position-relative z-1 bg-black bg-black text-white mt-3">
      {movieList.map((listItem) => (
        <MovieList key={listItem.title} {...listItem} />
      ))}
    </div>
  );
};

export default MovieListContainer;
