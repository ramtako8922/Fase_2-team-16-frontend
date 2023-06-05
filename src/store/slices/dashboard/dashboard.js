import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isModalOpen: false,
    isModalOpenEdit: false,
};
export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isModalOpen = true;
        },
        closeModal: (state) => {
            state.isModalOpen = false;
        },
        openModalEdit: (state) => {
            state.isModalOpenEdit = true;
        },
        closeModalEdit: (state) => {
            state.isModalOpenEdit = false;
        },
    },
});
export const { openModal, closeModal, openModalEdit, closeModalEdit } = modalSlice.actions;
export default modalSlice.reducer;
