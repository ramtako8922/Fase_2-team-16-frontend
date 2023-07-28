import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import Image from 'next/image';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { FaShareAltSquare } from 'react-icons/fa';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useGetProductsQuery } from '@/store/slices/apis';
import { useState, useEffect } from 'react';

const Table = () => {
	const { data, isLoading } = useGetProductsQuery(undefined, {
		refetchOnMountOrArgChange: true,
	});
	const [allProducts, setAllProducts] = useState([]);
	useEffect(() => {
		if (data) {
			setAllProducts(data.products);
		}
	}, [data]);

	const MyImg = ({ image }) => (
		<Zoom>
			<Image
				className='w-auto h-[8rem] sm:w-auto md:w-full md:h-auto rounded-tl-lg md:rounded-bl-lg  rounded-lg p-1 lg:p-4'
				alt='image'
				src={image}
				width={500}
				height={500}
			/>
		</Zoom>
	);
	return (
		<div className=' h-auto md:w-auto md:h-auto flex flex-col gap-4 md:gap-5 justify-center items-center mt-5  '>
			{allProducts.map((item) => (
				<div
					key={item.id}
					className='md:w-[92%] md:grid  md:grid-cols-12 bg-cyan-50 rounded-lg shadow-lg border-gray-200 border-[0.8px] '>
					<div className='flex col-span-3  md:col-span-5 bg-white rounded-tl-lg md:rounded-bl-lg rounded-tr-lg md:rounded-tr-none justify-center items-center '>
						<div className='w-[10rem] sm:w-[20rem] md:w-[300px]'>
							<MyImg image={item.image} />
						</div>
					</div>
					<div className=' md:col-span-7 p-4 '>
						<div className='md:h-65'>
							<h3 className='font-bold text-[0.8rem] md:text-base lg:text-lg'>
								Description:
							</h3>
							<p className='text-[0.8rem] md:text-base'>{item.description}</p>
							<div className='rating  mt-1 md:mt-2  rating-sm md:rating-md '>
								<input
									type='radio'
									name='rating-2'
									className='mask mask-star-2 bg-yellow-400'
								/>
								<input
									type='radio'
									name='rating-2'
									className='mask mask-star-2 bg-yellow-400'
								/>
								<input
									type='radio'
									name='rating-2'
									className='mask mask-star-2 bg-yellow-400'
								/>
								<input
									type='radio'
									name='rating-2'
									className='mask mask-star-2 bg-yellow-400'
								/>
								<input
									type='radio'
									name='rating-2'
									className='mask mask-star-2 bg-yellow-400'
								/>
							</div>
							<h1 className='text-base md:text-xl lg:text-2xl font-bold'>
								{item.name}
							</h1>
							<div className=' w-full flex justify-center items-center md:p-2 pt-2 pb-2 flex-col  '>
								<div className='flex w-full justify-start items-center flex-wrap md:flex-nowrap'>
									<div className='w-[15rem] md:w-1/3 text-[0.7rem] sm:text-sm  '>
										ID Category:{' '}
										<span className='font-bold'> {item.stock}</span>
									</div>

									<div className='w-[15rem] md:w-1/3  text-[0.7rem] sm:text-sm  '>
										Category:
										<span className='font-bold'> {item.category.name}</span>
									</div>
									<div className='w-[15rem] md:w-1/3 text-[0.7rem] sm:text-sm  '>
										Provider Name :
										<span className='font-bold'> {item.provider.name}</span>
									</div>
								</div>
								<div className='flex w-full justify-start items-center flex-wrap md:flex-nowrap '>
									<div className='w-[15rem] md:w-1/3 text-[0.7rem] sm:text-sm  '>
										Provider Address:
										<span className='font-bold'> {item.provider.address}</span>
									</div>
									<div className='w-[15rem] md:w-1/3 text-[0.7rem] sm:text-sm '>
										Prvider City:
										<span className='font-bold'> {item.provider.city}</span>
									</div>
									<div className='w-[15rem] md:w-1/3 text-[0.7rem] sm:text-sm  '>
										Provider State:
										<span className='font-bold'> {item.provider.state}</span>
									</div>
								</div>
								<div className='flex w-full justify-start items-center flex-wrap md:flex-nowrap '>
									<div className='w-[15rem] md:w-1/3 text-[0.7rem] sm:text-sm  '>
										ID Product: <span className='font-bold'> {item.id}</span>
									</div>
									<div className='w-[15rem] md:w-1/3 text-[0.7rem] sm:text-sm '>
										Price: <span className='font-bold'> {item.price}</span>
									</div>
									<div className='w-[15rem] md:w-1/3 text-[0.7rem] sm:text-sm  '>
										Stock: <span className='font-bold'> {item.stock}</span>
									</div>
								</div>
							</div>
						</div>
						<hr />

						<div className=' flex justify-center items-center h-20  md:gap-5 gap-2'>
							<button className='relative inline-flex items-center justify-center md:p-4  px-5  md:px-8   py-1  md:py-1 lg:px-10 overflow-hidden font-medium text-indigo-700 transition duration-300 ease-out border-2  rounded-full shadow-md group'>
								<span className='absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease text-sm md:text-base'>
									<AiFillEdit className='w-6 h-6' />
								</span>
								<span className='absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease text-sm md:text-base'>
									Edit
								</span>
								<span className='relative invisible text-sm md:text-base'>
									Edit
								</span>
							</button>
							<button className='relative inline-flex items-center justify-center md:p-4 px-4 md:px-6  py-1 md:py-1 lg:px-8 overflow-hidden font-medium text-red-600 transition duration-300 ease-out border-2 rounded-full shadow-md group'>
								<span className='absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease'>
									<RiDeleteBin2Fill className='w-6 h-6' />
								</span>
								<span className='absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease text-sm md:text-base'>
									Delete
								</span>
								<span className='relative invisible text-sm md:text-base'>
									Delete
								</span>
							</button>
							<button className='relative inline-flex items-center justify-center md:p-4 px-4 md:px-6 lg:px-8 py-1 md:py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2  rounded-full shadow-md group'>
								<span className='absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-600 group-hover:translate-x-0 ease text-sm md:text-base'>
									<FaShareAltSquare className='w-6 h-6' />
								</span>
								<span className='absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease text-sm md:text-base'>
									Share
								</span>
								<span className='relative invisible text-sm md:text-base'>
									Share
								</span>
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Table;
