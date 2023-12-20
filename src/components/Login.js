import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [showSignInForm, setShowSignInForm] = useState(true);
  const toggleForm = () => {
    setShowSignInForm(!showSignInForm);
  };
  return (
    <div>
      <Header />
      <img
        className="absolute z-10"
        alt="netflix-bg"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/00a87542-9fca-4fe9-911f-14544571a547/CA-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      />
      <div className="h-screen relative flex justify-center top-24 ">
        <div className="p-12 bg-black z-40 w-4/12 bg-opacity-80 rounded-sm">
          <h1 className="text-3xl text-white m-2 mb-5">
            {showSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <form className="flex flex-col ">
            <input
              type="text"
              placeholder="Email or phone number"
              className="p-3 m-2 rounded-sm bg-input-gray text-white"
            />
            {!showSignInForm && (
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 m-2 rounded-sm bg-input-gray text-white"
              />
            )}
            <input
              type="password"
              placeholder="Password"
              className="p-3 m-2 rounded-sm bg-input-gray text-white"
            />
            <button className="bg-red-500 rounded-sm text-white m-2 p-2 mt-5">
              Sign In
            </button>
          </form>
          <p className="text-gray-500 p-2 mt-10">
            {showSignInForm ? "New to Netflix?" : "Already Registered"}{" "}
            <span onClick={toggleForm} className="text-white cursor-pointer">
              {showSignInForm ? "Sign up Now" : "Sign in Now"}.
            </span>
          </p>
          <p className="text-gray-500 p-2 text-sm">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <span className="text-blue-600">Learn more.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
