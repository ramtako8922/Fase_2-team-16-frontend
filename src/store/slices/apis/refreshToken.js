import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { setToken, getToken } from '@/services/accessToken/session';

const baseQuery = fetchBaseQuery({
	baseUrl: 'https://api-inventario.fly.dev',
});

const baseQueryWhithReauth = async (args, api, extraOptions) => {
	const result = await baseQuery(args, api, extraOptions);
	console.log(result);

	if (result.error.status === 401 && result.error) {
		const refreshResult = await api.fetchBaseQuery(
			'/auth/refresh-token',
			{
				method: 'POST',
				body: {
					refreshToken: getToken(),
				},
			},
			extraOptions
		);

		if (refreshResult.data) {
			setToken(refreshResult.data.accessToken);
			return baseQuery(args, api, extraOptions);
		}
	}

	return result;
};
