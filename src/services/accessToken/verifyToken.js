import { useRouter } from 'next/router';
import { getToken, getExpiration, setToken, setExpiration } from './session';
const FetchWithAuth = async (url, options) => {
	let tokenExpiration = getExpiration();
	// assumed you have this implemented
	const expirationTime = tokenExpiration - Date.now() / 1000; // calculate time until token expiration
	const router = useRouter();

	if (expirationTime < 300) {
		// if token is about to expire (less than 5 minutes)
		const newTokens = await fetch(
			'https://api-inventario.onrender.com/auth/refresh',
			{
				// use refresh token to get new access token
				method: 'POST',
				body: JSON.stringify(getToken()),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		).then((response) => response.json());

		if (newTokens) {
			// setToken(newTokens.data.access_token);
			// setExpiration(newTokens.data.expires_in);
			// if new access token is returned
			// update local storage or global state with new tokens
		} else {
			// if new access token is not returned, redirect to login page
			router.push('/login');
			return;
		}
	}

	// // add authorization header with access token to original request options
	// const newOptions = Object.assign({}, options, {
	// 	headers: Object.assign({}, options.headers, {
	// 		Authorization: `Bearer ${accessToken}`,
	// 	}),
	// });

	//return fetch(url, newOptions); // make original fetch request with updated options
};

export default FetchWithAuth;
