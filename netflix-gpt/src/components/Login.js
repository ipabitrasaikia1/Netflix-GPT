import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState(null);
  const handleToggle = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    let message = validate(email.current.value, password.current.value);
    setError(message);
    console.log(message);

    if (!message) {
      if (isSignInForm) {
        // Do signin
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            const {uid,email,displayName, photoURL}  = user
            dispatch(addUser({ uid : uid, displayName : displayName, email: email, photoURL: photoURL }));
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorCode + "-" + errorMessage);
          });
      } else {
        // Do sign up
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;

            updateProfile(user, {
              displayName: name.current.value,
              photoURL: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
            })
              .then(() => {
                // Profile updated!
                const {uid,email,displayName, photoURL}  = user
                dispatch(addUser({ uid : uid, displayName : displayName, email: email, photoURL: photoURL }));
                navigate("/browse");
              })
              .catch((error) => {
                // An error occurred
                // ...
                setError(error);
              });

            setIsSignInForm(!isSignInForm);

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorCode + "-" + errorMessage);
            // ..
          });
      }
    }
  };
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black text-white w-4/12 p-12 my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-70"
      >
        <h1 className="text-3xl font-bold py-4">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-sm py-4">{error}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={handleToggle}>
          {isSignInForm
            ? "New to netflix ? Sign Up Now"
            : "Already registered ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
