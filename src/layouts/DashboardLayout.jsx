import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { useEffect } from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/slices/auth';
import { getToken } from '@/services/accessToken/session';
import { useGetUserQuery } from '@/store/slices/apis';

// TODO:  This is the layout for the dashboard, it is the parent of all the pages that are inside the dashboard, it is responsible for rendering the sidebar and the header, it also has a useEffect that is responsible for validating the token and if it is valid it will save the user in the redux store.

const DashboardLayout = ({ children }) => {
	const dispatch = useDispatch();
	const { data, isLoading, isSuccess } = useGetUserQuery(undefined, {
		refetchOnMountOrArgChange: true,
	});
	useEffect(() => {
		if (getToken() && isSuccess) {
			dispatch(setUser(data));
		}
	}, [isLoading, isSuccess, data, dispatch]);

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

			<div className='flex overflow-x-hidden min-h-screen'>
				<div className='bg-[#333] '>
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
