import DashboardLayout from '@/layouts/DashboardLayout';
import Head from 'next/head';

const dashboard = () => {
	return (
		<DashboardLayout>
			<Head>
				<title>Dashboard</title>
				<meta
					name='description'
					content='products'
				/>
				<link
					rel='icon'
					href='/login.ico'
				/>
			</Head>
		</DashboardLayout>
	);
};

export default dashboard;
