import React from 'react';
import LayoutAuth from '@/layouts/LayoutAuth';
import Head from 'next/head';
import SuccesRegister from '../../components/SuccesRegister';

const Login = () => {
	return (
		<>
			<Head>
				<title>Confirm Register</title>
				<meta
					name='description'
					content='Register Account'
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
					<SuccesRegister />
				</div>
			</LayoutAuth>
		</>
	);
};

export default Login;
