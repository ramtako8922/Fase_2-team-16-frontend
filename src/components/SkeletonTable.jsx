import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const menuTable = [
	'#',
	'index',
	'Name',
	'Description',
	'Stock',
	'Price',
	'Image',
	'Preview',
	'Edit',
	'Delete',
];

const SkeletonTable = () => {
	const arr = new Array(15).fill('');
	return (
		<div className='overflow-x-auto max-w-[1300px]'>
			<div className=' min-w-full '>
				<table className='min-w-full text-left text-sm font-light h-[500px]'>
					<thead className='border-b font-medium dark:border-neutral-500'>
						<tr className='translate-x-2'>
							{menuTable.map((item, i) => {
								return (
									<th
										key={i}
										scope='col'
										className='text-left'>
										{item}
									</th>
								);
							})}
						</tr>
					</thead>
					<tbody>
						{arr.map((item, index) => {
							return (
								<tr
									className='border-b dark:border-neutral-500 w-auto'
									key={index}>
									<td className='whitespace-nowrap h-4 '>
										<Skeleton />
									</td>
									<td className='whitespace-nowrap h-4 '>
										<Skeleton />
									</td>
									<td className='whitespace-nowrap h-4 '>
										<Skeleton />
									</td>
									<td className='whitespace-nowrap h-4 '>
										<Skeleton />
									</td>
									<td className='whitespace-nowrap h-4 '>
										<Skeleton />
									</td>
									<td className='whitespace-nowrap h-4 '>
										<Skeleton />
									</td>
									<td className='whitespace-nowrap h-4 '>
										<Skeleton />
									</td>
									<td className='whitespace-nowrap h-4 '>
										<Skeleton />
									</td>
									<td className='whitespace-nowrap h-4 '>
										<Skeleton />
									</td>
									<td className='whitespace-nowrap h-4 '>
										<Skeleton />
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

export default SkeletonTable;
