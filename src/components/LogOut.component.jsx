import React from "react";
import { auth } from "../utils/firebase";

const LogOut = () => {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <button
      onClick={signOut}
      className="bg-sky-50 px-4 py-2 hover:bg-gray-100 rounded-lg"
    >
      Logout
    </button>
  );
};

export default LogOut;