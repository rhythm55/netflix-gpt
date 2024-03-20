import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import authStateChanged from "../utils/authStateChanged";
import { NETFLIX_LOGO } from "../utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsbuscribe = authStateChanged(dispatch, navigate);

    // unsubscribe when component is unmounted
    return () => unsbuscribe();
  }, []);

  return (
    <>
      <img
        className="position-absolute z-1 px-2"
        style={{ width: "12%" }}
        src={NETFLIX_LOGO}
        alt="logo"
      ></img>
    </>
  );
};

export default Header;
