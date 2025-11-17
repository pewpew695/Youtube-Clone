import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMsg, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMsg(25),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="h-[600px] mr-2 mt-4 p-2 border border-black bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map(({ name, message }) => (
          <ChatMessage name={name} message={message} />
        ))}
      </div>
      <form
        className="h-[45px] w-full border flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(liveMessage);
          dispatch(
            addMessage({
              name: "Ashley Dsouza",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="w-[85%] mx-1 p-2 h-7"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        ></input>
        <button className="bg-green-100  mx-1 my-1 px-2 rounded-lg">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
