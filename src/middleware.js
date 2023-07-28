import { NextResponse } from 'next/server';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';

const validateToken = async (request) => {
	const token = request.cookies.get('ZurmSesionT');

	if (!token) {
		// Si no se proporciona un token, redirige al usuario a /auth/login
		return NextResponse.redirect(new URL('/auth/login', request.url));
	}
};

const validateLogin = async (request) => {
	const islogin = request.cookies.get('Login_in');
	const token = request.cookies.get('ZurmSesionT');
	const BaseUrl = ' https://api-inventario.fly.dev';
	const res = await fetch(`${BaseUrl}/api/me`, {
		headers: {
			Authorization: `${token}`,
		},
	});
	const data = await res.json();
	if (islogin === 'true' && token && data.status === 200) {
		return NextResponse.redirect(new URL('/dashboard', request.url));
	} else {
		return NextResponse.redirect(new URL('/auth/login', request.url));
	}
};
const isLogin = async (request) => {
	const islogin = request.cookies.get('Login_in');
	const token = request.cookies.get('ZurmSesionT');
	if (islogin && token) {
		const decoded = jwt_decode(token.value);
		const isExpired = dayjs.unix(decoded.exp).diff(dayjs(), 'minute') < 1;
		if (!isExpired) {
			return NextResponse.redirect(new URL('/dashboard/home', request.url));
		}
		return NextResponse.redirect(new URL('/auth/login', request.url));
	}
};

export async function middleware(request) {
	const { pathname } = new URL(request.url);

	if (pathname.startsWith('/dashboard/')) {
		// Validas el token solo para las rutas que requieren autenticación
		return validateToken(request);
	}
	if (pathname.startsWith('/auth/')) {
		// Validas el token solo para las rutas que requieren autenticación
		return isLogin(request);
	}

	// Si no es una ruta protegida, permites el acceso sin validar el token
	return NextResponse.next();
}

export const config = {
	matcher: ['/dashboard/:path*', '/', '/auth/:path*'],
};
