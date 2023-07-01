import React from 'react';
import DashbardLayout from '@/layouts/DashboardLayout';
import AddProduct from '@/components/dashboard/AddProduct';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const Addproduct = () => {
	return (
		<>
			<DashbardLayout>
				<AddProduct className={inter.className} />
			</DashbardLayout>
		</>
	);
};

export default Addproduct;
