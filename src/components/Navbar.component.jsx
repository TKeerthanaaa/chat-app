import React from "react";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./signIn.component";
import LogOut from "./LogOut.component";

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="bg-sky-500 h-20 flex justify-between items-center p-4">
      <h1 className="text-white text-3xl font-bold">ChatApp</h1>
      {user ? <LogOut /> : <SignIn />}
      
    </div>
  );
};

export default Navbar;

