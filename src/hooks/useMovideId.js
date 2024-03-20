import React from "react";
import { useEffect } from "react";
import { API_OPTIONS, GET_VIDEO_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../store/MoviesSlice";

const useMovieId = (videoId) => {
  const dispatch = useDispatch();
  const fetchVideo = async () => {
    const response = await fetch(
      `${GET_VIDEO_API}/${videoId}/videos`,
      API_OPTIONS
    );
    const json = await response.json();
    const trilerList = json.results.filter((item) => item.type === "Trailer");
    dispatch(addTrailerVideo(trilerList[0]));
  };

  useEffect(() => {
    fetchVideo();
  }, []);
};

export default useMovieId;
