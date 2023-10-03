const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  modalObj: {
    open: false,
    type: null,
    props: null,
  },
  loading: false,
};

const modalSlicer = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, action) => {
      state.modalObj = action.payload;
    },
    resetModal: (state) => {
      state.modalObj = initialState.modalObj;
    },
  },
  extraReducers: (builder) => {
    // you can mutate state directly, since it is using immer behind the scenes
  },
});

const { setModal, resetModal } = modalSlicer.actions;

module.exports = {
  setModal,
  resetModal,
  default: modalSlicer.reducer,
};
