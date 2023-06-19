import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isLoggedIn: false,
		id: '',
		accessToken: '',
		name: '',
		lastname: '',
		username: '',
		email: '',
		roles: '',
	},
	reducers: {
		getUser: (state, action) => {
			state.isLoggedIn = true;
			state.id = action.payload.id;
			state.accessToken = action.payload.accessToken;
			state.name = action.payload.name;
			state.username = action.payload.username;
			state.lastname = action.payload.lastname;
			state.roles = action.payload.roles;
			state.email = action.payload.email;
		},
		logOut: (state) => {
			state.isLoggedIn = false;
			state.accessToken = null;
			state.email = null;
			state.id = null;
			state.name = null;
		},
	},
});

export const { getCredentials, getUser, logOut } = authSlice.actions;

export default authSlice.reducer;
