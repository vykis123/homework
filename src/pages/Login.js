import React, { useRef, useState, useContext } from "react";
import { StoreContext } from "../store/Auth-context";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import LoadingSpinner from "../components/LoadingSpinner";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const history = useNavigate();

  const { isLoggedIn, setIsLoggedIn } = useContext(StoreContext);

  const [wrongCredentials, setWrongCredentials] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    let enteredEmail = emailInputRef.current.value;
    let enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key= AIzaSyBU56r9RoWsaPkMe1cZ103f7pHQPf3-iXk ",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        header: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((ressponse) => {
        if (ressponse.ok) {
          setIsLoading(false);
          return ressponse.json();
        } else {
          return ressponse.json().then((data) => {
            setIsLoading(false);

            let errorMessage = "Authentication failed!";
            setWrongCredentials(true);

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        if (data.registered === true) {
          setIsLoggedIn(true);
          history("/user");
        }
      });

    enteredEmail = "";
    enteredPassword = "";
  };

  return (
    <div className={classes.login}>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <form typeof="submit" className={classes.form}>
          <h1 className={classes.form__heading}>Login to start</h1>
          <div className={classes.form__control}>
            <label htmlFor="email" className={classes.form__controlLabel}>
              Your Email
            </label>
            <input
              className={classes.form__controlInput}
              placeholder="Type here"
              type="email"
              id="email"
              ref={emailInputRef}
              required
            />
          </div>
          <div className={classes.form__control}>
            <label htmlFor="password" className={classes.form__controlLabel}>
              Your Password
            </label>
            <input
              className={classes.form__controlInput}
              placeholder="Type here"
              type="password"
              id="password"
              ref={passwordInputRef}
              required
            />
          </div>
          <button
            className={classes.form__btn}
            type="submit"
            onClick={submitHandler}
          >
            Login
          </button>
          {wrongCredentials && (
            <span className={classes.form__error}>
              Dude, have you forgot your log ins? 😄
            </span>
          )}
        </form>
      )}
    </div>
  );
};

export default Login;
