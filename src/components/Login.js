import React from "react";
import { useState } from "react";
import { NETFLIX_BG_IMG } from "../utils/constant";
import Header from "./Header";

export const Login = () => {
  const [isSingInForm, setIsSingInForm] = useState(true);
  const toggleSignIn = () => {
    setIsSingInForm(!isSingInForm);
  };
  return (
    <>
      <Header />
      <img
        className="position-absolute"
        src={NETFLIX_BG_IMG}
        alt="background image"
      ></img>
      <div className="position-absolute bg-black bg-opacity-50 vh-100 w-100">
        <div className="position-absolute top-50 start-50 translate-middle bg-black bg-opacity-75 p-5 w-25 text-white">
          <div className="my-3 text-light px-3 fs-2">
            {isSingInForm ? "Sign In" : "Sign Up"}
          </div>
          <form className="d-flex flex-column pb-5 px-3">
            {!isSingInForm && (
              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">
                  Name
                </label>
                <input
                  id="nameInput"
                  className="form-control bg-secondary bg-opacity-25 text-white"
                  type="text"
                  placeholder="name"
                ></input>
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">
                Email address
              </label>
              <input
                id="emailInput"
                className="form-control bg-secondary bg-opacity-25 text-white"
                type="text"
                placeholder="email"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label">
                Password
              </label>
              <input
                id="passwordInput"
                className="form-control bg-secondary bg-opacity-25 text-white"
                type="password"
                placeholder="password"
              ></input>
            </div>

            <button
              className="btn my-2 align-self-center btn-danger form-control"
              type="submit"
            >
              {isSingInForm ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <p className="px-3 cursor-pointer" onClick={() => toggleSignIn()}>
            {isSingInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now"}
          </p>
        </div>
      </div>
    </>
  );
};
