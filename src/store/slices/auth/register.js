import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
	name: 'register',
	initialState: {
		isRegisterIn: false,
		name: '',
		isLoading: false,
		email: '',
		password: '',
        lastname:''
	},
	reducers: {
		getRegister: (state, action) => {
			const { name , lastname,email, password } = action.payload;
            state.name=name;
            state.lastname=lastname
			state.email = email;
			state.password = password;
            
		},
		startRegister: (state) => {
			state.isLoading = true;
		},
		
		
		
	},
});

export const {getRegister } =
	registerSlice.actions;

export default registerSlice.reducer;

