import { createSlice } from "@reduxjs/toolkit";
import { cookies } from "../../Service/auth";
import { notify } from "../../handler/handler";
import { getCategories, getCurrencies, getProfileTypes } from "./CommonActions";

const initialState = {
  categories: [],
  userTypes: [],
  loading: false,
  currencies: [],
  themeMode: "dark",
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    updateTheme: (state, action) => {
      state.themeMode = action.payload;
    },
  },
});

export const { updateTheme } = commonSlice.actions;

export default commonSlice.reducer;
