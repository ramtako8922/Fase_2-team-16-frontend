import { NextResponse } from 'next/server';
import { setToken } from './services/accessToken/session';

export async function middleware(request) {
	const jwt = request.cookies.get('access_token');

	if (jwt === undefined) {
		return NextResponse.redirect(new URL('/auth/login', request.url));
	}
}
export const config = {
	matcher: ['/dashboard/:path*', '/'],
};

//TODO: mejorar el middleware para que no se haga la peticion a la api cada vez que se recarga la pagina
// See "Matching Paths" below to learn more
