import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className="absolute top-0 bg-gradient-to-b from-black">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_small.jpg"
          alt="bg"
        />
      </div>

      <form className="relative py-2 px-3 z-20 w-3/12 h-100 bg-black my-20 mx-auto rounded-lg text-white bg-opacity-80">
        <h1 className=" text-white float-start px-2 mt-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input
          type="email"
          placeholder="Enter mail"
          className=" border-solid outline outline-1 outline-gray-600 mt-6 bg-gray-800 p-2 w-full "
        />}
        
        <input
          type="email"
          placeholder="Enter mail"
          className=" border-solid outline outline-1 outline-gray-600 mt-6 bg-gray-800 p-2 w-full "
        />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          className=" border-solid outline outline-1 outline-gray-600 mt-4 bg-gray-800 p-2 w-full "
        />
        <br />
        <button className=" text-white bg-red-600 px-12 py-1.5  w-full mt-6 rounded-md">
          {isSignInForm?"Sign In":"Sign Up"}
        </button>
        <p className="my-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already Registered. Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
