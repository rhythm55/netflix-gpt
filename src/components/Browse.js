import React, { useState } from "react";
import { signOut } from "firebase/auth";

import Header from "./Header";
import { NETFLIX_PROFILE_IMG } from "../utils/constant";
import { auth } from "../utils/firebase";
import useMoviesList from "../hooks/useMoviesList";
import TrailerSection from "./TrailerSection";
import MovieListContainer from "./MovieListContainer";
import NetflixgptContainer from "./NetflixgptContainer";

const Browse = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showNetflixGPT, setNetflixGPT] = useState(false);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  useMoviesList();

  return (
    <>
      <Header />
      <div className="d-flex justify-content-end m-2">
        <button
          className="btn btn-danger z-1"
          onClick={() => setNetflixGPT(!showNetflixGPT)}
        >
          Netlfix GPT
        </button>
        <div className="dropstart d-flex z-1">
          {showDropDown && (
            <div className="dropdown-menu show position-relative bg-light">
              <a className="dropdown-item" onClick={() => handleLogout()}>
                Logout
              </a>
            </div>
          )}
          <button
            className="btn btn-transparent dropdown-toggle align-self-start z-1"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={() => setShowDropDown(!showDropDown)}
          >
            <img src={NETFLIX_PROFILE_IMG} />
          </button>
        </div>
      </div>
      {showNetflixGPT ? <NetflixgptContainer /> : <TrailerSection />}
    </>
  );
};

export default Browse;
