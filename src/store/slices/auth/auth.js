import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isLoggedIn: false,
		access_token: '',
		expires_in: '',
		user: '',
		id: '',
		name: '',
		isLoading: false,
		email: '',
		password: '',
	},
	reducers: {
		getLogin: (state, action) => {
			const { email, password } = action.payload;
			state.email = email;
			state.password = password;
		},
		startLoading: (state) => {
			state.isLoading = true;
		},
		getCredentials: (state, action) => {
			state.isLoggedIn = true;
			state.access_token = action.payload.access_token;
			state.expires_in = action.payload.expires_in;
		},
		getUser: (state, action) => {
			state.email = action.payload.email;
			state.id = action.payload.id;
			state.name = action.payload.name;
		},
		logOut: (state) => {
			state.isLoggedIn = false;
			state.access_token = null;
			state.email = null;
			state.id = null;
			state.name = null;
		},
	},
});

export const { getLogin, startLoading, getCredentials, getUser, logOut } =
	authSlice.actions;

export default authSlice.reducer;
