import React, { useState } from "react";
import { auth, db } from "../utils/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid message");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form
      onSubmit={sendMessage}
      className="h-14 w-full max-w-[720px] flex text-xl absolute bottom-0"
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full text-xl p-3 by-gray-900 text-gray outline-none border-none"
        type="text"
        placeholder="Type something..."
      />
      <button className="w-[20%] bg-blue-600" type="submit">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
