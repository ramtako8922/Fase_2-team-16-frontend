import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { authSlice } from './slices/auth';
import { uiSlice } from './slices/ui/uiSlice';
import { modalSlice } from './slices/dashboard';
import { newProductSlice, productSlice } from './slices/products/Products';
import { apiSlice } from './slices/apis/apiSlice';
import { registerSlice } from './slices/auth/register';
export const store = configureStore({
	reducer: {
		// Add the generated reducer as a specific top-level slice

		[apiSlice.reducerPath]: apiSlice.reducer,
		register:registerSlice.reducer,
		auth: authSlice.reducer,
		ui: uiSlice.reducer,
		modal: modalSlice.reducer,
		newProduct: newProductSlice.reducer,
		product: productSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});
setupListeners(store.dispatch);
