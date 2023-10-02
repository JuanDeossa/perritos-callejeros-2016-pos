import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    pageID:0,
    sideNavOpen:true,
  }
};

export const currentPageSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.value = {
        ...state.value,
        pageID:action.payload
      };
    },
    toggleSideNav: (state) => {
      state.value = {
        ...state.value,
        sideNavOpen:!state.value.sideNavOpen
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentPage,toggleSideNav } =
  currentPageSlice.actions;

export default currentPageSlice.reducer;