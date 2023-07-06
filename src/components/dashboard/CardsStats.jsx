import React from 'react';

import { BsBoxSeam, BsBoxes, BsPersonVcardFill } from 'react-icons/bs';
import { MdNote } from 'react-icons/md';
const Data = [
	{
		id: 1,
		title: 'Products',
		value: 20,
		image: '/images/product.svg',
		progress: '63',
		color: '#333333',
		icon: <BsBoxSeam />,
		total: 256,
	},
	{
		id: 2,
		title: 'Categories',
		value: 20,
		image: '/images/category.svg',
		progress: 55,
		color: '',
		icon: <BsBoxes />,
		total: 185,
	},
	{
		id: 3,
		title: 'Orders',
		value: 20,
		image: '/images/product.svg',
		progress: 60,
		icon: <MdNote />,
		total: 866,
	},
	{
		id: 4,
		title: 'providers',
		value: 20,
		image: '/images/product.svg',
		progress: 85,
		icon: <BsPersonVcardFill />,
		total: 288,
	},
];

const CardsStats = () => {
	return (
		<div className='flex flex-wrap lg:flex-nowrap gap-2 justify-center items-center lg:p-5 p-2 '>
			{Data.map((item) => {
				return (
					<div
						key={item.id}
						className={`w-auto h-36 bg-blue-700 hover:bg-red-700 hover:text-white text-gray-900 flex justify-between  lg:w-1/4 rounded-md border-spacing-2 border-black shadow-md transform active:scale-x-0 transition-transform `}>
						<div
							className={` mt-2 w-1/2  flex justify-center items-center  flex-col `}>
							<div
								className='radial-progress '
								style={{
									'--value': item.progress,
									color: 'white',
									scale: '0.6',
								}}>
								{item.progress}%
							</div>
							<div className=' justify-center flex items-center mt-2 text-white '>
								<p className=' text-[0.5rem] lg:text-sm font-semibold uppercase mb-2'>
									{item.title}
								</p>
							</div>
						</div>
						<div className='w-1/2 flex justify-between items-center  flex-col text-sm m-2'>
							<div className='text-white text-lg lg:text-3xl mt-2'>
								{item.icon}
							</div>
							<div className='text-white font-bold'>{item.total}</div>
							<div className='text-white opacity-80 text-[0.5rem] lg:text-[0.8rem] '>
								last 24 horas
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CardsStats;
