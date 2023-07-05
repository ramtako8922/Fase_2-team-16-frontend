import DashboardLayout from '@/layouts/DashboardLayout';
import Head from 'next/head';
import Calendary from '@/components/dashboard/Calendary';
import CardsStats from '@/components/dashboard/CardsStats';

const dashboard = () => {
	return (
		<DashboardLayout>
			<Head>
				<title>Dashboard</title>
				<meta
					name='description'
					content='Dashboard'
				/>
				<link
					rel='icon'
					href='/login.ico'
				/>
			</Head>

			<div className='lg:grid grid-cols-12 '>
				<div className='text-black col-start-1 col-end-10  h-screen border-spacing-1 border-black shadow-md'>
					<CardsStats />
				</div>
				<div className='text-black flex  flex-col col-span-3  h-screen p-2 lg:flex sm:hidden'>
					<Calendary />
				</div>
			</div>
		</DashboardLayout>
	);
};

export default dashboard;
