import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    openModal1: false,
    openModal2: false,
    openModal3: false,
  },
};

export const modalStatesSlice = createSlice({
  name: "modalStates",
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { payload: modal } = action;
      console.log(modal);
      state.value = {
        ...state.value,
        [modal]: true,
      };
    },
    closeModal: (state, action) => {
      const { payload: modal } = action;
      console.log(modal);
      state.value = {
        ...state.value,
        [modal]: false,
      };
    },
    toggleModal: (state, action) => {
      const { payload: modal } = action;
      console.log(modal);
      state.value = {
        ...state.value,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal, toggleModal } = modalStatesSlice.actions;

export default modalStatesSlice.reducer;
