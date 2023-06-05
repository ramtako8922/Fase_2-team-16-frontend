import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { BsImages } from 'react-icons/bs';
import { TbTrashXFilled } from 'react-icons/tb';
import Image from 'next/image';
const menuTable = [
	'index',
	'Id',
	'Name',
	'Description',
	'Stock',
	'Price',
	'Image',
	'Preview',
	'Edit',
	'Delete',
];
const Table = ({ data, selectedRow }) => {
	return (
		<div className='overflow-x-auto max-w-[1300px]'>
			<div className=' min-w-full '>
				<table className='min-w-full text-left text-sm font-light  h-full'>
					<thead className='border-b font-medium dark:border-neutral-500'>
						<tr className='bg-sky-900'>
							{menuTable.map((item, i) => {
								return (
									<th
										key={i}
										scope='col'
										className='text-center'>
										{item}
									</th>
								);
							})}
						</tr>
					</thead>
					<tbody>
						{data.map((item, index) => {
							const newLocal = 'whitespace-nowrap text-center font-light   ';
							return (
								<tr
									key={item.id}
									className={`cursor-pointer border-b dark:border-neutral-500 w-auto hover:bg-[#333] `}>
									<td className='whitespace-nowrap text-center font-light  '>
										{index + 1}
									</td>
									<td className='whitespace-nowrap text-center font-light  '>
										{item.id}
									</td>
									<td className=' whitespace-nowrap text-center font-light   '>
										{item.name}
									</td>
									<td className='whitespace-nowrap text-center font-light   '>
										{item.description.slice(0, 16) +
											(item.description.length > 20 ? '...' : '')}
									</td>
									<td className='whitespace-nowrap text-center font-light   '>
										{item.stock}
									</td>
									<td className='whitespace-nowrap text-center font-light   '>
										{item.price}
									</td>
									<td className='whitespace-nowrap text-center font-light   '>
										<div className='flex justify-center items-center bg-transparent'>
											<Image
												src={item.image}
												alt={item.name}
												width={30}
												height={30}
												className='rounded-sm h-7 w-auto'
											/>
										</div>
									</td>
									<td className='whitespace-nowrap  '>
										<div className='flex justify-center items-center'>
											<BsImages className='text-center text-primary hover:text-white  md:cursor-pointer' />
										</div>
									</td>
									<td className='whitespace-nowrap  '>
										<div className='flex justify-center items-center'>
											<FaEdit className='text-center text-primary hover:text-white  md:cursor-pointer' />
										</div>
									</td>
									<td className='whitespace-nowrap   '>
										<div className='flex justify-center items-center'>
											<TbTrashXFilled className='text-center text-primary hover:text-white  md:cursor-pointer' />
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;
