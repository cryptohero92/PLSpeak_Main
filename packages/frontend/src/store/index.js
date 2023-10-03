import { configureStore } from "@reduxjs/toolkit";
import CommonReducer from "./common/CommonReducers";
import modelReducers from "./modal/modalReducers";
import chatReducers from "./chat/chatReducers";
import profileReducers from "./profile/profileReducers";
import socketReducers from "./socket/socketReducers";

import socketMiddleware from "./socket/socketMiddleware";

export const store = configureStore({
  reducer: {
    common: CommonReducer,
    chat: chatReducers,
    model: modelReducers,
    profile: profileReducers,
    socket: socketReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(socketMiddleware),
});
