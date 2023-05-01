import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenSidemenu: true,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openSidemenu: (state) => {
      state.isOpenSidemenu = true;
    },
    closeSidemenu: (state) => {
      state.isOpenSidemenu = false;
    },
  },
});

export const { openSidemenu, closeSidemenu } = uiSlice.actions;
