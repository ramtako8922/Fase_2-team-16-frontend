import React from 'react';
import Image from 'next/image';
import notImage from '../../../public/images/no-image.webp';

const AddProduct = () => {
	return (
		<div className='mb-4 flex justify-center items-center flex-col'>
			<h1 className='font-bold md:text-lg '>Register New Product</h1>

			<hr className=' bg-blue-950  ml-0 mt-4 mb-4' />
			<div className='w-full border border-solid border-gray-300 shadow-sm rounded-md lg:w-[50rem] '>
				<h2 className=' text-center p-4 font-extrabold uppercase'>
					Add Product
				</h2>
				<form className='flex flex-col p-4 '>
					<div className='md:grid gap-4  grid-cols-2'>
						<div className='flex flex-col gap-2'>
							<label htmlFor='name'>Name</label>
							<input
								type='text'
								name='name'
								id='name'
								placeholder='Product Name'
								className='border border-solid border-gray-400 p-2 rounded-md bg-gray-200'
							/>

							<label htmlFor='price'>Price</label>
							<input
								type='number'
								name='price'
								id='price'
								placeholder='Product Price'
								className='border border-solid border-gray-400 p-2 rounded-md bg-gray-200'
							/>
							<label htmlFor='price'>Stock</label>
							<input
								type='number'
								name='price'
								id='price'
								placeholder='Stock'
								className='border border-solid border-gray-400 p-2 rounded-md bg-gray-200'
							/>
							<label htmlFor='name'>Provider</label>
							<select
								id='Provider'
								className='border border-solid border-gray-400 p-2 rounded-md bg-gray-200   focus:ring-blue-500 focus:border-blue-500 block w-full  box-border'>
								<option selected>Select Provider</option>
								<option value=''>Provider 1</option>
								<option value=''>Provider 2</option>
								<option value=''>Provider 3</option>
								<option value=''>Provider 4</option>
							</select>
							<label htmlFor='name'>Category</label>
							<select
								id='category'
								className='border border-solid border-gray-400 p-2 rounded-md bg-gray-200   focus:ring-blue-500 focus:border-blue-500 block w-full  box-border'>
								<option selected>Select Category</option>
								<option value=''>category 1</option>
								<option value=''>Category 2</option>
								<option value=''>Category 3</option>
								<option value=''>Category 4</option>
							</select>
						</div>
						<div className='flex flex-col gap-2'>
							<label htmlFor='image'>Image</label>
							<input
								type='file'
								name='image'
								id='image'
								placeholder='Product Image'
								className=' border border-solid border-gray-400 p-1 rounded-md bg-gray-200'
							/>

							<div className='w-full flex justify-center items-center'>
								<Image
									className='w-full h-auto mt-2 md:h-[20rem] lg:w-auto'
									src={notImage}
									alt='Product Image'
								/>
							</div>
						</div>
					</div>
					<div className='flex flex-col gap-2 mt-2 md:w-full'>
						<label htmlFor='description'>Description</label>
						<textarea
							name='description'
							id='description'
							placeholder='Product Description'
							className=' h-32 border border-solid border-gray-400 p-2 rounded-md bg-gray-200 resize-none '
						/>
					</div>

					<div className='w-full flex justify-center items-center h-auto p-4 '>
						<input
							type='submit'
							value='Add Product'
							className='bg-blue-950 text-white p-2 rounded-md cursor-pointer hover:bg-blue-900  transform active:scale-x-75 transition-transform'
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddProduct;
