import React from 'react';
import FilterProducts from './Filter';
import Table from './Table';
const CardsProducts = () => {
	return (
		<div className='w-full flex justify-center items-center flex-col  border-spacing-2 border-black shadow-md p-2 rounded-lg  bg-white'>
			<div className='w-full max-w-[1500px] h-auto rounded-lg border-gray-200 lg:pl-10 lg:pr-10 '>
				<div className='w-full flex justify-between items-center flex-nowrap mt-3 mb-3 gap-3 '>
					<div className=' '>
						<FilterProducts />
					</div>
					<div className='w-full  bg-slate-100 rounded-lg  lg:ml-9  h-9 '>
						<input
							type='text'
							placeholder='Search'
							className='w-full h-full rounded-lg bg-slate-100 pl-3 font-semibold focus:outline-none '
						/>
					</div>
				</div>
			</div>
			<div className='  max-w-[1500px] '>
				<Table />
			</div>
		</div>
	);
};

export default CardsProducts;
