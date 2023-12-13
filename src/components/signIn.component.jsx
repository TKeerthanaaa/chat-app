import React from "react";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../utils/firebase";

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

const SignIn = () => {
  return (
    <div>
      <GoogleButton onClick={googleSignIn}/>
    </div>
  );
};

export default SignIn;
