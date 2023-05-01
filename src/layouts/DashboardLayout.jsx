import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
const DashboardLayout = ({ children }) => {
	return (
		<>
			<div className='flex'>
				<div>
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
