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
		<div className='flex justify-between gap-2 items-center p-5  '>
			{Data.map((item) => {
				return (
					<div
						key={item.id}
						className={`bg-green-400 hover:bg-blue-700 hover:text-white text-gray-900 flex justify-between  w-1/4 rounded-md border-spacing-2 border-black shadow-md  p-3`}>
						<div
							className={` mt-2 w-1/2  flex justify-center items-center  flex-col `}>
							<div
								className='radial-progress '
								style={{
									'--value': item.progress,
									color: 'white',
									'--size': '6rem',
									'--thickness': '0.6rem',
								}}>
								{item.progress}%
							</div>
							<div className=' justify-center flex items-center mt-2 '>
								<p className='text-sm font-semibold uppercase'>{item.title}</p>
							</div>
						</div>
						<div className='w-1/2 flex justify-between items-center  flex-col  text-sm'>
							<div className='text-white text-3xl mt-2'>{item.icon}</div>
							<div className='text-white font-bold'>{item.total}</div>
							<div className='text-white opacity-80 text-[0.8rem] '>
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
