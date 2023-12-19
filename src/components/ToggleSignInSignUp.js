import React, { useRef, useState } from "react";
import { checkValidation } from "../utils/foramValidation";

const ToggleSignInSignUp = () => {
  const [toggleSignIn, setToggleSignIn] = useState(false);

  const handleToggleSignIn = () => {
    setToggleSignIn(!toggleSignIn);
  };

  const emailRef = useRef();
  const passwordRef = useRef();
  // console.log(emailRef);
  // console.log(passwordRef);

  const handleClick = () => {
    console.log(emailRef);
    console.log(passwordRef);
    const message = checkValidation(emailRef, passwordRef);
    console.log(message);
  };

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 mx-auto left-0 right-0 my-36 px-10 py-4 bg-blue-950 text-white rounded-lg"
      >
        <p className="font-bold text-lg">
          {toggleSignIn ? "Sign Up" : "Sign In"}
        </p>

        {toggleSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 my-3 "
          />
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Email Id"
          className="w-full p-2 my-3 bg-gray-200 text-black"
        />

        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="w-full p-2 my-3 bg-gray-200 text-black"
        />
        <button
          onClick={handleClick}
          className="bg-red-700 p-2 w-full py-2 my-5"
        >
          {toggleSignIn ? "SignUp" : "SignIn"}
        </button>
        <p onClick={handleToggleSignIn} className="cursor-pointer">
          {toggleSignIn
            ? "Already A User? Please Login Here"
            : "New to this site? Please signUp Now"}
        </p>
      </form>
    </div>
  );
};

export default ToggleSignInSignUp;
