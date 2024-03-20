import React from "react";
import { useSelector } from "react-redux";
import useMovieId from "../hooks/useMovideId";

const TrailerVIdeo = ({ movideId }) => {
  useMovieId(movideId);

  const trailerId = useSelector(
    (state) => state.nowPlayingMovies?.trailer?.key
  );
  return (
    <iframe
      className="ratio ratio-16x9 position-absolute h-75 mt-2"
      src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&loop=1`}
    ></iframe>
  );
};

export default TrailerVIdeo;
