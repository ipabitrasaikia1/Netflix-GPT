import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const handleToggle = () => {
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background-img"
        />
      </div>
      <form className="absolute bg-black text-white w-4/12 p-12 my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-70">
        <h1 className="text-3xl font-bold py-4"> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700" />}
        <input type="email" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700" />
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700" />
        <button className="p-4 my-6 bg-red-700 w-full rounded-md">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="p-4 cursor-pointer" onClick={handleToggle}>{isSignInForm ? "New to netflix ? Sign Up Now" : "Already registered ? Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
