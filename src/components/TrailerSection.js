import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieListContainer from "./MovieListContainer";
import TrailerTitle from "./TrailerTitle";
import TrailerVIdeo from "./TrailerVIdeo";

const TrailerSection = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movieList.nowPlaying);
  if (!movies) return;

  const movie = movies[0];
  return (
    <>
      <TrailerTitle {...movie} />
      <TrailerVIdeo movideId={movie.id} />
      <MovieListContainer />
    </>
  );
};

export default TrailerSection;
