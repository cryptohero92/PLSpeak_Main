import { createAsyncThunk } from "@reduxjs/toolkit";
// import apiRequest from "modules/services/auth";
import apiRequest from "../../Service/auth";


export const getCategories = createAsyncThunk(
  //action type string
  "common/category",
  // callback function
  async (data, { dispatch }) => {
    const res = await apiRequest({
      url: "category",
      method: "GET",
      data,
    }).then((response) => {
      // dispatch(createPlayer('12344'));
      return response;
    });
    return res;
  }
);

export const getMessages = createAsyncThunk(
  //action type string
  "chat/get",
  // callback function
  async (receiverId, { dispatch }) => {
    const res = await apiRequest({
      url: `chat/get/`+receiverId,
      method: "GET",
    }).then((response) => {
      // dispatch(createPlayer('12344'));
      return response;
    });
    return res;
  }
);

export const sendMessage = createAsyncThunk(
  "chat/send",
  async (data, { dispatch }) => {
    console.log("S-s-s>>>>>>>>>>>>>datadatadata>>>>", data);
    const { msg = {}, cb = () => {} } = data;
    const res = await apiRequest({
      url: "chat/send/",
      method: "POST",
      data: msg,
    }).then((response) => {
      cb();
      dispatch(getMessages(msg.receiverId));
      return response;
    });
    return res;
  }
);


export const getProfileTypes = createAsyncThunk(
  //action type string
  "common/userTypes",
  // callback function
  async (data, { dispatch }) => {
    const res = await apiRequest({
      url: "usertype",
      method: "GET",
      data,
    }).then((response) => {
      // dispatch(createPlayer('12344'));
      return response;
    });
    return res;
  }
);

export const getCurrencies = createAsyncThunk(
  //action type string
  "common/currency",
  // callback function
  async (data, { dispatch }) => {
    const res = await apiRequest({
      url: "currency",
      method: "GET",
      data,
    }).then((response) => {
      // dispatch(createPlayer('12344'));
      return response;
    });
    return res;
  }
);

