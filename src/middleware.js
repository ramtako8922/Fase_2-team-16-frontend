import { NextResponse } from 'next/server';

export async function middleware(request) {
	const jwt = request.cookies.get('ZurmSesionT');

	if (jwt === undefined) {
		return NextResponse.redirect(new URL('/auth/login', request.url));
	}
}
export const config = {
	matcher: ['/dashboard/:path*', '/'],
};
