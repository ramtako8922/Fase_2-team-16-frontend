import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken, setToken } from '@/services/accessToken/session';
export const apiSlice = createApi({
	reducerPath: 'apiInventario',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api-trycatch-test.fly.dev',
	}),
	endpoints: (builder) => ({
		loginUser: builder.mutation({
			query: (dataLogin) => {
				return {
					url: '/auth/login',
					method: 'POST',
					body: dataLogin,
				};
			},
			transformResponse: (response) => {
				const { accessToken, id } = response;
				setToken(accessToken);
				console.log(accessToken, id);
				return response;
			},
		}),
		registerUser: builder.mutation({
			query: (dataRegister) => {
				return {
					url: '/auth/register',
					method: 'POST',
					body: dataRegister,
				};
			},
		}),
		getUser: builder.query({
			query: () => {
				return {
					url: '/api/me',
					headers: {
						Authorization: `${getToken()}`,
					},
				};
			},
		}),
		resetPassword: builder.mutation({
			query: (email) => {
				return {
					url: '/auth/forgot-password',
					method: 'POST',
					body: email,
				};
			},
		}),
		// 	getProducts: builder.query({
		// 		query: () => {
		// 			return {
		// 				url: '/products',
		// 				headers: {
		// 					Authorization: `Bearer ${getToken()}`,
		// 				},
		// 			};
		// 		},
		// 		transformResponse: (response) => {
		// 			const { data } = response;
		// 			return data;
		// 		},
		// 	}),
	}),
});

export const {
	useLoginUserMutation,
	useRegisterUserMutation,
	useGetUserQuery,
	useResetPasswordMutation,
} = apiSlice;
