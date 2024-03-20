import React from "react";
import { useRef } from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../utils/firebase";
import { NETFLIX_BG_IMG } from "../utils/constant";
import validationSign from "../utils/validationSign";
import Header from "./Header";

export const Login = () => {
  const [isSingInForm, setIsSingInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignIn = () => {
    setIsSingInForm(!isSingInForm);
  };

  const name = useRef(null);
  const password = useRef(null);
  const email = useRef(null);

  const handleSubmit = () => {
    const errorMessage = validationSign(
      email.current?.value,
      password.current?.value,
      name.current?.value
    );
    setErrorMessage(errorMessage);

    if (errorMessage === null) {
      if (isSingInForm) {
        signInWithEmailAndPassword(
          auth,
          email.current?.value,
          password.current?.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
          });
      } else {
        createUserWithEmailAndPassword(
          auth,
          email.current?.value,
          password.current?.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
          });
      }
    }
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
          <form
            onSubmit={(e) => e.preventDefault()}
            className="d-flex flex-column pb-5 px-3"
          >
            {!isSingInForm && (
              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">
                  Name
                </label>
                <input
                  ref={name}
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
                ref={email}
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
                ref={password}
                id="passwordInput"
                className="form-control bg-secondary bg-opacity-25 text-white"
                type="password"
                placeholder="password"
              ></input>
            </div>

            <p className="text-danger">{errorMessage}</p>

            <button
              className="btn my-2 align-self-center btn-danger form-control"
              onClick={() => handleSubmit()}
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
