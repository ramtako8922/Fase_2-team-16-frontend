import React from 'react';
import Image from 'next/image';
import notImage from '../../../public/images/no-image.webp';
import { useAddProduct } from '../../custom-hooks/addProduct';

const AddProduct = () => {
	const { image, setImage, register, handleSubmit, onSubmit, errors } =
		useAddProduct();

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (!file) {
			setImage(null);
			return;
		}
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setImage(reader.result);
		};
	};

	const Input = ({ name, placeholder, type }) => {
		return (
			<>
				<label className='capitalize'>{name}</label>
				<input
					type={type}
					name={name}
					id={name}
					placeholder={placeholder}
					className='border border-solid border-gray-400 p-2 rounded-md bg-gray-200 lg:p-1'
					{...register(name)}
				/>
			</>
		);
	};

	const Select = ({ name, placeholder, option }) => {
		return (
			<>
				<label
					htmlFor={name}
					className='capitalize'>
					{name}
				</label>
				<select
					id={name}
					{...register(name)}
					defaultValue={'Default'}
					className='border border-solid border-gray-400 p-2 lg:p-1 rounded-md bg-gray-200   focus:ring-blue-500 focus:border-blue-500 block w-full  box-border'>
					<option
						value='default'
						disabled={true}>
						{placeholder}
					</option>
					{option.map((item, index) => (
						<option
							key={index}
							value={item}>
							{item}
						</option>
					))}
				</select>
			</>
		);
	};

	const TextArea = ({ name, placeholder }) => {
		return (
			<>
				<label className='capitalize'>{name}</label>
				<textarea
					name={name}
					id={name}
					placeholder={placeholder}
					className='h-32 lg:h-28 border border-solid border-gray-400 p-2 rounded-md bg-gray-200 resize-none'
					{...register(name)}></textarea>
			</>
		);
	};

	return (
		<div className='mb-1 flex justify-center items-center flex-col'>
			<hr className=' bg-blue-950  ml-0 mt-4 mb-4' />
			<div className='w-full border border-solid border-gray-200 shadow-xl rounded-md lg:w-[80%] '>
				<h2 className=' text-center p-4 lg:mt-2 font-extrabold uppercase lg:text-base'>
					Add New Product
				</h2>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col p-4 lg:p-2 lg:pl-5 lg:pr-5'>
					<div className='md:grid gap-4  grid-cols-2'>
						<div className='flex flex-col gap-2 lg:gap-1'>
							<Input
								name='name'
								placeholder='Product Name'
								type='text'
							/>
							<Input
								name='price'
								placeholder='Price'
								type='number'
							/>
							<Input
								name='stock'
								placeholder='Stock'
								type='number'
							/>
							<Select
								name='provider'
								placeholder='Select Provider'
								option={['provider 1', 'provider 2', 'provider 3']}
							/>
							<Select
								name='category'
								placeholder='Select Category'
								option={['category 1', 'category 2', 'category 3']}
							/>
						</div>
						<div className='flex flex-col gap-2 lg:gap-1'>
							<div className='flex flex-col gap-2 lg:gap-1'>
								<label htmlFor='image'>Image</label>
								<input
									type='file'
									name='image'
									id='image'
									placeholder='Image'
									{...register('image')}
									className='border border-solid border-gray-400 p-2 lg:p-0 rounded-md bg-gray-200'
									onChange={handleImageChange}
								/>
							</div>
							<div className='w-full flex justify-center items-center '>
								<Image
									className='w-auto h-auto mt-2 md:h-[20rem] lg:w-auto lg:h-[17rem]'
									src={image ? image : notImage}
									alt='Product Image'
									width={300}
									height={300}
								/>
							</div>
						</div>
					</div>
					<div className='flex flex-col gap-2 lg:gap-1 mt-2 md:w-full'>
						<TextArea
							name='description'
							placeholder='Description'
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
