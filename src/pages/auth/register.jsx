import React from 'react';
import LayoutAuth from '@/layouts/LayoutAuth';
import Head from 'next/head';
import RegisterForm from '@/components/RegisterForm';
const Register = () => {
	return (
		<>
			<Head>
				<title>Register</title>
				<meta
					name='description'
					content='Register'
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

			<LayoutAuth>
				<div className='min-h-screen flex items-center justify-center'>
					<RegisterForm />
				</div>
			</LayoutAuth>
		</>
	);
};

export default Register;
