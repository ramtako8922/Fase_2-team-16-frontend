import Cookies from 'js-cookie';
import { cookies } from 'next/dist/client/components/headers';

const TOKEN_KEY = 'ZurmSesionT';
const login_in = 'Login_in';
const value = 'true';
export const Login_in = async () => {
	Cookies.set(login_in, value);
};
export const getLogin_in = () => {
	return Cookies.get(login_in);
};
export const removeLogin_in = () => {
	Cookies.set(login_in, 'false');
};

export const getToken = () => {
	return Cookies.get(TOKEN_KEY);
};

export const setToken = (token) => {
	Cookies.set(TOKEN_KEY, token, { expires: 1 });
};

export const removeToken = () => {
	Cookies.remove(TOKEN_KEY);
};
