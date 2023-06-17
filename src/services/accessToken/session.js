import Cookies from 'js-cookie';
const TOKEN_KEY = 'access_token';
const tokenExpiration = 'expires_in';
export const getToken = () => {
	return Cookies.get(TOKEN_KEY);
};

export const getExpiration = () => {
	return Cookies.get(tokenExpiration);
};

export const setToken = (token) => {
	Cookies.set(TOKEN_KEY, token);
};
export const setExpiration = (expiration) => {
	Cookies.set(tokenExpiration, expiration);
};

export const removeToken = () => {
	Cookies.remove(TOKEN_KEY);
};
export const removeExpiration = () => {
	Cookies.remove(tokenExpiration);
};
