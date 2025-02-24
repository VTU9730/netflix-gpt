import React, { useRef, useState } from "react";
import Header from "./Header";
import {checkValidData} from '../utils/validate';
import { addUser } from "../Slices/userSlice";
import { useDispatch } from "react-redux";



// Auth-Firebase
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase'
import { BG } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  const emailRef = useRef(null)
  const passwordRef= useRef(null)
  const nameRef = useRef(null)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  const handleButtonClick = () => {
      const message = checkValidData(emailRef.current.value, passwordRef.current.value)
      setError(message)
      if(!isSignInForm){
        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
          .then((userCredential) => {
            // Sign up 
            const user = userCredential.user;
            if(user){
              updateProfile(user, {
                displayName: nameRef.current.value
              }).then(() => {
              }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
              });
              
            }
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
          });
      }
      else{
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            if(user){
              dispatch(addUser({
                email:user.email,
                id:user.uid
              }))
            }
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
          });
      }
  }

  return (
    <div>
      <Header />
      <div className="absolute top-0 bg-gradient-to-b from-black">
        <img
          src={BG}
          alt="bg"
        />
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className="relative py-2 px-3 z-20 w-3/12 h-100 bg-black my-20 mx-auto rounded-lg text-white bg-opacity-80">
        <h1 className=" text-white float-start px-2 mt-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input
          ref={nameRef}
          type="text"
          placeholder="Enter Full Name"
          className=" border-solid outline outline-1 outline-gray-600 mt-6 bg-gray-800 p-2 w-full "
        />}
        
        <input
          ref={emailRef}
          type="email"
          placeholder="Enter mail"
          className=" border-solid outline outline-1 outline-gray-600 mt-6 bg-gray-800 p-2 w-full "
        />
        <br />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter password"
          className=" border-solid outline outline-1 outline-gray-600 mt-4 bg-gray-800 p-2 w-full "
        />
        <br />
        <p className="text-red-600 py-4">{error}</p>
        <button onClick={handleButtonClick} className=" text-white bg-red-600 px-12 py-1.5  w-full mt-6 rounded-md">
          {isSignInForm?"Sign In":"Sign Up"}
        </button>
        <p className="my-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already Registered. Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
