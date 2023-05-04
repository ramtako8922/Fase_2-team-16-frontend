import React from 'react';
import SkeletonTable from '@/components/SkeletonTable';
import { useGetProductsQuery } from '@/store/slices/apis';
import Image from 'next/image';
import { FaEdit } from 'react-icons/fa';
import { BsImages } from 'react-icons/bs';
import { TbTrashXFilled } from 'react-icons/tb';
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
const TableData = () => {
	const { data, isLoading } = useGetProductsQuery();

	console.log('data', typeof data);

	const Table = () => {
		return (
			<div className='overflow-x-auto max-w-[1300px]'>
				<div className=' min-w-full '>
					<table className='min-w-full text-left text-sm font-light h-full'>
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
								const newLocal = 'whitespace-nowrap text-center font-bold  ';
								return (
									<tr
										className='border-b dark:border-neutral-500 w-auto'
										key={index}>
										<td className='whitespace-nowrap text-center font-bold '>
											{index + 1}
										</td>
										<td className='whitespace-nowrap text-center font-bold '>
											{item.id}
										</td>
										<td className=' text-center  '>{item.name}</td>
										<td className='whitespace-nowrap text-center font-bold  '>
											{item.description.slice(0, 16) +
												(item.description.length > 20 ? '...' : '')}
										</td>
										<td className='whitespace-nowrap text-center font-bold  '>
											{item.stock}
										</td>
										<td className='whitespace-nowrap text-center font-bold  '>
											{item.price}
										</td>
										<td className='whitespace-nowrap text-center font-bold  '>
											<div className='flex justify-center items-center'>
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
												<BsImages className='text-center text-primary' />
											</div>
										</td>
										<td className='whitespace-nowrap  '>
											<div className='flex justify-center items-center'>
												<FaEdit className='text-center text-primary' />
											</div>
										</td>
										<td className='whitespace-nowrap   '>
											<div className='flex justify-center items-center'>
												<TbTrashXFilled className='text-center text-primary' />
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

	return (
		<>
			<h1>Add New Product</h1>
			<div className=''></div>
			<div>{isLoading ? <SkeletonTable /> : <Table />}</div>
		</>
	);
};

export default TableData;
