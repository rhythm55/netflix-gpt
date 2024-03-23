import React from "react";
import { GET_POSTER_API } from "../utils/constant";

const MovieCard = ({ poster_path }) => {
  return (
    <>
      <div className="m-2">
        <img
          style={{ height: "8rem", width: "14rem" }}
          src={GET_POSTER_API + poster_path}
        ></img>
      </div>
    </>
  );
};

export default MovieCard;
