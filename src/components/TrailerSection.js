import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TrailerTitle from "./TrailerTitle";
import TrailerVIdeo from "./TrailerVIdeo";

const TrailerSection = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.nowPlayingMovies.movies);
  if (!movies) return;

  const movie = movies[0];
  return (
    <>
      <TrailerTitle {...movie} />
      <TrailerVIdeo movideId={movie.id} />
    </>
  );
};

export default TrailerSection;
