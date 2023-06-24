import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Head from 'next/head';

const DashboardLayout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Dashboard</title>
				<link
					rel='icon'
					href='/home.ico'
				/>
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
				<meta
					name='description'
					content='Dashboard'
				/>
			</Head>

			<div className='flex overflow-x-hidden'>
				<div className='bg-blue-700 h-screen'>
					<Sidebar />
				</div>
				<div className='w-full'>
					<Header />
					<div className='p-4'>{children}</div>
				</div>
			</div>
		</>
	);
};

export default DashboardLayout;
