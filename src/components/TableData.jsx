import { useState, useEffect } from 'react';
import SkeletonTable from '@/components/SkeletonTable';
import { useGetProductsQuery } from '@/store/slices/apis';
import ModalAddProduct from './ModalAddProduct';
import Table from './Table';

const TableData = () => {
	const { data, isLoading, isSuccess } = useGetProductsQuery();
	const [selectedRow, setSelectedRow] = useState(null);
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}
	useEffect(() => {
		if (data) {
		}
	}, [data]);

	return (
		<>
			<h1 className='w-full text-center text-2xl'>Inventory Products</h1>

			<div className='mt-10 mb-5'>
				<button
					type='button'
					className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
					onClick={openModal}>
					Add Product
				</button>
			</div>

			<div>
				{isLoading ? (
					<SkeletonTable />
				) : (
					<Table
						data={data}
						select={selectedRow}
					/>
				)}
			</div>
			<ModalAddProduct
				openModal={openModal}
				closeModal={closeModal}
				isOpen={isOpen}
			/>
		</>
	);
};

export default TableData;
