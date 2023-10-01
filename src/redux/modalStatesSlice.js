import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    openModal1: {
      isOpen:false,
      productID:null,
      name:"",
    },
    openModal2: {
      isOpen:false,
      productID:null,
      name:"",
    },
    openModal3: {
      isOpen:false,
      productID:null,
      name:"",
    },
  },
};

export const modalStatesSlice = createSlice({
  name: "modalStates",
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { payload: modal } = action;
      // console.log(modal);
      state.value = {
        ...state.value,
        [modal.modalKey]: {
          ...state.value[modal.modalKey],
          isOpen:true,
          productID:modal.productID,
          name:modal.name,
          price:modal.price,
          description:modal.description,
        },
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
