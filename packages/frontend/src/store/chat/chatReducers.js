import { createSlice } from "@reduxjs/toolkit";
import { getMessages, sendMessage } from "./chatActions";

const initialState = {
  chatObj: {
    open: false,
    receiverId: null,
  },
  currentChat:{
    messages:[]
  },
  messages: [],
  loading: false,
};

const chatSlicer = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChat: (state, action) => {
      state.chatObj = action.payload;
    },
    resetChat: (state) => {
      state.chatObj = initialState.chatObj;
    },
    updateCurrentChat: (state, action) => {
      state.currentChat = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMessages.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getMessages.fulfilled, (state, action) => {
      state.loading = false;
      state.currentChat = action.payload.data;
    });
    builder.addCase(getMessages.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(sendMessage.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(sendMessage.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(sendMessage.rejected, (state, action) => {
      state.loading = false;
    });
  },
});


export const { setChat, resetChat, updateCurrentChat } = chatSlicer.actions;

export default chatSlicer.reducer;
