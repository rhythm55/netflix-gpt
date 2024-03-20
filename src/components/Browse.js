import React, { useState } from "react";
import { signOut } from "firebase/auth";

import Header from "./Header";
import { NETFLIX_PROFILE_IMG } from "../utils/constant";
import { auth } from "../utils/firebase";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import TrailerSection from "./TrailerSection";

const Browse = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  useNowPlayingMovies();

  return (
    <>
      <Header />
      <div className="d-flex justify-content-end m-2">
        <div className="dropstart d-flex">
          {showDropDown && (
            <div className="dropdown-menu show position-relative bg-black">
              <a
                className="dropdown-item text-white"
                onClick={() => handleLogout()}
              >
                Logout
              </a>
            </div>
          )}
          <button
            className="btn btn-transparent dropdown-toggle align-self-start"
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

      <TrailerSection />
    </>
  );
};

export default Browse;
