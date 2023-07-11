import DashboardLayout from '@/layouts/DashboardLayout';
import Head from 'next/head';
import Calendary from '@/components/dashboard/Calendary';
import CardsStats from '@/components/dashboard/CardsStats';
import ChartProduct from '@/components/dashboard/LineCharts';
import { PiesChartCountry } from '@/components/dashboard/PiesChartCategory';
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

			<div className='md:grid md:grid-cols-12 '>
				<div className='text-black col-start-1 col-end-10  h-screen border-spacing-1 border-black shadow-md'>
					<div className=' rounded-tl-lg rounded-tr-lg'>
						<CardsStats />
					</div>
					<div className='lg:w-1/2 flex  h-96 bg-white justify-center items-center '>
						<ChartProduct />
					</div>
				</div>
				<div className='w-full text-black flex  flex-col col-span-3  h-screen lg:p-2 lg:flex sm:hidden gap-1'>
					<div className=' w-full lg:w-[300px] '>
						<Calendary />
					</div>
				</div>
			</div>
		</DashboardLayout>
	);
};

export default dashboard;
