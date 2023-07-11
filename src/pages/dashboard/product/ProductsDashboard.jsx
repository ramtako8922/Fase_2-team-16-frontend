import React from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import Head from 'next/head';
import CardsProducts from '@/components/dashboard/CardsProducts';
const ProductsDashboard = () => {
	return (
		<>
			<Head>
				<title>Products Dashboard</title>
				<meta
					name='description'
					content='Products Dashboard'
				/>
				<link
					rel='icon'
					href='/images/product.svg'
				/>
			</Head>
			<DashboardLayout>
				<CardsProducts />
			</DashboardLayout>
		</>
	);
};

export default ProductsDashboard;
