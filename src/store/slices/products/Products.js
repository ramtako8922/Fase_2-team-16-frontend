import { createSlice } from '@reduxjs/toolkit';

export const newProductSlice = createSlice({
    name: 'newProduct',
    initialState: {
        newNameProduct: '',
        newCategories: '',
        newPrice: '',
        newQuantity: '',
        newImages: '',
        newDescription: '',
    },
    reducers: {
        addNewProduct: (state, action) => {
            const { newNameProduct, newCategories, newPrice, newQuantity, newImages, newDescription } = action.payload;
            state.newNameProduct = newNameProduct;
            state.newCategories = newCategories;
            state.newPrice = newPrice;
            state.newQuantity = newQuantity;
            state.newImages = newImages;
            state.newDescription = newDescription;
        },
    },
});
export const productSlice = createSlice({
    name: 'Product',
    initialState: {
        id: '',
        name: '',
        category: '',
        price: '',
        stock: '',
        image: '',
        description: '',
    },
    reducers: {
        getProduct: (state, action) => {
            const { id, name, category, price, stock, image, description } = action.payload;
            state.id = id;
            state.name = name;
            state.category = category;
            state.price = price;
            state.stock = stock;
            state.image = image;
            state.description = description;
        },
        changeName: (state, action) => {
            state.name = action.payload;
        },
        changeCategories: (state, action) => {
            state.category = action.payload;
        },
        cangePrice: (state, action) => {
            state.price = action.payload;
        },
        changeQuantity: (state, action) => {
            state.quantity = action.payload;
        },
        changeImages: (state, action) => {
            state.image = action.payload;
        },
        changeDescription: (state, action) => {
            state.description = action.payload;
        },
    },
});
export const { getProduct, changeName, changeCategories, cangePrice, changeQuantity, changeImages, changeDescription } = productSlice.actions;
export const { addNewProduct } = newProductSlice.actions;
export default productSlice.reducer;
