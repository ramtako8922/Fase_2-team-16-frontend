import { NextResponse } from 'next/server';
const validateToken = async (request) => {
	const token = request.cookies.get('ZurmSesionT');
	// console.log('token', token);
	if (!token) {
		// Si no se proporciona un token, redirige al usuario a /auth/login
		return NextResponse.redirect(new URL('/auth/login', request.url));
	}

	try {
		// Haces una solicitud al endpoint para validar el token
		const response = await fetch('https://api-trycatch-test.fly.dev/api/me', {
			headers: {
				Authorization: token.value,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log('data', data);

				if (data && data.id !== undefined && data.status === 'true') {
					// Si el token es válido, permite el acceso a la ruta
					return NextResponse.next();
				} else {
					// Si el token no es válido o ha expirado, redirige al usuario a /auth/login
					return NextResponse.redirect(new URL('/auth/login', request.url));
				}
			});
	} catch (error) {
		//console.log('error', error);
	}
};

const validateLogin = async (request) => {
	const islogin = request.cookies.get('Login_in');
	//console.log('islogin', islogin);
	if (islogin) {
		return NextResponse.redirect(new URL('/dashboard/home', request.url));
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
		return validateLogin(request);
	}

	// Si no es una ruta protegida, permites el acceso sin validar el token
	return NextResponse.next();
}

export const config = {
	matcher: ['/dashboard/:path*', '/', '/auth/:path*'],
};
