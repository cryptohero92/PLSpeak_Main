const { createSlice } = require("@reduxjs/toolkit");
const { getProfile } = require("./profileActions");

const initialState = {
  profileObj: {
    open: false,
    receiverId: null,
  },
  profile: {},
  loading: false,
};

const profileSlicer = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profileObj = action.payload;
    },
    resetProfile: (state) => {
      state.profileObj = initialState.profileObj;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action.payload.data;
    });
    builder.addCase(getProfile.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

const { setProfile, resetProfile } = profileSlicer.actions;

export default profileSlicer.reducer;
