import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="mx-2 my-4">
      <h1 className="fs-3">{title}</h1>
      <div className="d-flex overflow-x-scroll overflow-y-hidden">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
