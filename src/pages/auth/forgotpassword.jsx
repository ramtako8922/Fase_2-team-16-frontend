import React from 'react';
import LayoutAuth from '@/layouts/LayoutAuth';
import Head from 'next/head';
import ResetPassword from '@/components/ResetPassword';
const forgotpassword = () => {
	return (
		<>
			<Head>
				<title>Forgot Password</title>
				<meta
					name='description'
					content='Forgot password'
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
					<ResetPassword />
				</div>
			</LayoutAuth>
		</>
	);
};

export default forgotpassword;
