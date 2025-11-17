import React from "react";
import { USER_LOGO } from "../utils/Constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center py-2">
      <img className="h-8 pr-2" alt="User Icon" src={USER_LOGO} />
      <span className="font-semibold pr-1">{name + ":"}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
