import React from 'react';
import LayoutAuth from '@/layouts/LayoutAuth';
import Head from 'next/head';
import LoginForm from '@/components/LoginForm';

const Login = () => {
	return (
		<>
			<Head>
				<title>Login</title>
				<meta
					name='description'
					content='Login'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/login.ico'
				/>
			</Head>
			<LayoutAuth title='register'>
				<div className='min-h-screen flex items-center justify-center'>
					<LoginForm />
				</div>
			</LayoutAuth>
		</>
	);
};

export default Login;
