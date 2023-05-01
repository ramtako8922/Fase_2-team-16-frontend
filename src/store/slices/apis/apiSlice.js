import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useSelector } from 'react-redux';

export const apiSlice = createApi({
	reducerPath: 'apiInventario',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api-inventario.onrender.com',
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
		}),
	}),
});

export const { useLoginUserMutation } = apiSlice;
