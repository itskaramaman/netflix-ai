import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { isEmailValid, isPasswordValid, isNameValid } from "../utils/validate";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/appSlice";

const Login = () => {
  const [showSignInForm, setShowSignInForm] = useState(true);
  const [nameErrorMessage, setNameErrorMessage] = useState(null);
  const [emailErrorMessage, setEmailErrorMessage] = useState(null);
  const [PasswordErrorMessage, setPasswordErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const dispatch = useDispatch();

  const toggleForm = () => {
    setShowSignInForm(!showSignInForm);
  };

  const handleButtonClick = (e) => {
    // Validate the form data
    e.preventDefault();
    const emailMessage = isEmailValid(email.current.value);
    const passwordMessage = isPasswordValid(password.current.value);

    setEmailErrorMessage(emailMessage);
    setPasswordErrorMessage(passwordMessage);

    if (!showSignInForm) {
      const nameMessage = isNameValid(name.current ? name.current.value : null);
      setNameErrorMessage(nameMessage);
      if (emailMessage || nameMessage || passwordMessage) return;
    }

    if (emailMessage || passwordMessage) return;

    if (!showSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(setUser({ user }));
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log(userCredential);
          const user = userCredential.user;
          dispatch(setUser({ user }));
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <img
        className="absolute z-10"
        alt="netflix-bg"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/00a87542-9fca-4fe9-911f-14544571a547/CA-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      />
      <div className="relative flex justify-center top-24 ">
        <div className="p-12 bg-black z-40 w-4/12 bg-opacity-80 rounded-sm">
          <h1 className="text-3xl text-white m-2 mb-5">
            {showSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <form className="flex flex-col ">
            <input
              ref={email}
              type="text"
              placeholder="Email or phone number"
              className="p-3 m-2 rounded-sm bg-input-gray text-white"
            />
            <p className="text-sm font-thin ml-2 text-red-500">
              {emailErrorMessage}
            </p>
            {!showSignInForm && (
              <>
                <input
                  ref={name}
                  type="text"
                  placeholder="Full Name"
                  className="p-3 m-2 rounded-sm bg-input-gray text-white"
                />
                <p className="text-sm font-thin ml-2 text-red-500">
                  {nameErrorMessage}
                </p>
              </>
            )}

            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-3 m-2 rounded-sm bg-input-gray text-white"
            />
            <p className="text-sm ml-2 text-red-500">{PasswordErrorMessage}</p>
            <button
              onClick={(e) => handleButtonClick(e)}
              className="bg-red-500 rounded-sm text-white m-2 p-2 mt-5"
            >
              {showSignInForm ? "Sign In" : "Sign Up"}
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
