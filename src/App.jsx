import React from "react";
import Navbar from "./components/Navbar.component";
import Chat from "./components/Chat.component";

import { auth } from "./utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  const [user] = useAuthState(auth);
  // console.log(user);
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-400">
        <div className="max-w-[720px] mx-auto text-center">
          <section
            className="flex flex-col h-[100vh] shadow-xl border"
            style={{
              backgroundImage:
                "url('https://4kwallpapers.com/images/wallpapers/tom-jerry-8k-2560x2560-12464.jpg')",
              backgroundSize: "cover",
            }}
          >
            <Navbar />
            {user ? <Chat /> : null}
          </section>
        </div>
      </div>
    </>
  );
};

export default App;
