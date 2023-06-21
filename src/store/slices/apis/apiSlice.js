import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken, setToken, Login_in } from '@/services/accessToken/session';
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
				Login_in();
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
		verifyTokenCP: builder.mutation({
			query: (token) => {
				return {
					url: '/auth/verify/token',
					method: 'POST',
					body: token,
				};
			},
		}),
	}),
});

export const {
	useLoginUserMutation,
	useRegisterUserMutation,
	useGetUserQuery,
	useResetPasswordMutation,
} = apiSlice;
