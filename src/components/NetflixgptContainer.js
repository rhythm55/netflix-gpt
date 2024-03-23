import React from "react";
import { useRef } from "react";
import useNetflixGPTResults from "../hooks/useNetflixGPTResults";
import { NETFLIX_BG_IMG } from "../utils/constant";
import NetflixSearchResults from "./NetflixSearchResults";

const NetflixgptContainer = () => {
  const searchText = useRef(null);

  const { loadGPTData } = useNetflixGPTResults();

  const handleSearch = () => {
    loadGPTData(searchText.current.value);
  };

  return (
    <>
      <img
        className="position-absolute"
        src={NETFLIX_BG_IMG}
        alt="background image"
      ></img>
      <div className="z-1 position-absolute top-50 start-50 translate-middle w-50">
        <form
          className="d-flex"
          onSubmit={(e) => {
            handleSearch();
            e.preventDefault();
          }}
        >
          <input
            ref={searchText}
            className="form-control mx-2 py-2"
            type="text"
            placeholder="What would you like to watch?"
          />
          <button type="submit" className="btn btn-danger">
            Search
          </button>
        </form>
      </div>
      <NetflixSearchResults />
    </>
  );
};

export default NetflixgptContainer;
