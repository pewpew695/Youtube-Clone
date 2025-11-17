import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import suggestionSlice from "./suggestionSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    suggestion: suggestionSlice,
    chat: chatSlice,
  },
});

export default store;
