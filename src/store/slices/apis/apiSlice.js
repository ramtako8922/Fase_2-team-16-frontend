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
			// transformResponse: (response) => {
			// 	const { access_token, expires_in } = response;
			// 	localStorage.setItem('access_token', JSON.stringify(access_token));
			// 	localStorage.setItem('expires_in', JSON.stringify(expires_in));
			// 	console.log(access_token, expires_in);
			// 	return response;
			// },
		}),
		getUser: builder.query({
			query: () => {
				return {
					url: '/auth/me',
					headers: {
						Authorization: `Bearer ${getToken()}`,
					},
				};
			},
			transformResponse: (response) => {
				const { email, id, name } = response;
				localStorage.setItem('email', JSON.stringify(email));
				localStorage.setItem('id', JSON.stringify(id));
				localStorage.setItem('name', JSON.stringify(name));
				return response;
			},
		}),
		getRefreshToken: builder.mutation({
			query: () => {
				return {
					url: '/auth/refresh',
					method: 'POST',
					headers: {
						Authorization: `Bearer ${getToken()}`,
					},
				};
			},
			transformResponse: (response) => {
				if (response.status === 200) {
					const { access_token, expires_in } = response;
					setToken(access_token, expires_in);
				}
				return response;
			},
		}),
		getProducts: builder.query({
			query: () => {
				return {
					url: '/products',
					headers: {
						Authorization: `Bearer ${getToken()}`,
					},
				};
			},
			transformResponse: (response) => {
				const { data } = response;
				return data;
			},
		}),
	}),
});

export const {
	useLoginUserMutation,
	useGetUserQuery,
	useGetRefreshTokenMutation,
	useGetProductsQuery,
} = apiSlice;
