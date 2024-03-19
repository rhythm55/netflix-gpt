import React from "react";
import { NETFLIX_LOGO } from "../utils/constant";

const Header = () => {
  return (
    <>
      <img
        className="position-absolute z-1 p-2"
        style={{ width: "16%" }}
        src={NETFLIX_LOGO}
        alt="logo"
      ></img>
    </>
  );
};

export default Header;
