import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isConnected: false,
  userId: null,
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    wsConnect: (state) => {
      state.isConnected = true;
    },
    wsDisconnect: (state) => {
      state.isConnected = false;
    },
    wsSendMessage: (state) => {
      return;
    },
  },
});

export const { setUserId, wsDisconnect, wsConnect, wsSendMessage } = socketSlice.actions;
export default socketSlice.reducer;
