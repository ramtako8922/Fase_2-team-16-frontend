import { createSlice } from '@reduxjs/toolkit';


	const initialState={
		nameproduct: '',
		description: '',
		stoock:'',
		price: '',
		quantity: '',
		category:''
		//newImages: '',

	}
	export const ProductsSlice = createSlice({
	name: 'Product',
	initialState:initialState,
			
	

	reducers: {
		addProduct: (state, action) => {
			state.nameproduct=action.payload
			state.description=action.payload
			state.stoock=action.payload
			state.price=action.payload
			state.quantity=action.payload
			state.category=action.payload

		}
			
	},
});

export const { addProduct } = ProductsSlice.actions;
export default ProductsSlice.reducer;
