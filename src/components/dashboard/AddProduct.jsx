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
				<label>{name}</label>
				<input
					type={type}
					name={name}
					id={name}
					placeholder={placeholder}
					className='border border-solid border-gray-400 p-2 rounded-md bg-gray-200'
					{...register(name)}
				/>
			</>
		);
	};

	const Select = ({ name, placeholder, option }) => {
		return (
			<>
				<label htmlFor={name}>{name}</label>
				<select
					id={name}
					{...register(name)}
					defaultValue={'Default'}
					className='border border-solid border-gray-400 p-2 rounded-md bg-gray-200   focus:ring-blue-500 focus:border-blue-500 block w-full  box-border'>
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

	const Textarea = ({ name, placeholder }) => {
		return (
			<>
				<label>{name}</label>
				<textarea
					name={name}
					id={name}
					placeholder={placeholder}
					className='h-32 border border-solid border-gray-400 p-2 rounded-md bg-gray-200 resize-none'
					{...register(name)}></textarea>
			</>
		);
	};

	return (
		<div className='mb-4 flex justify-center items-center flex-col'>
			<h1 className='font-bold md:text-lg '>Register New Product</h1>

			<hr className=' bg-blue-950  ml-0 mt-4 mb-4' />
			<div className='w-full border border-solid border-gray-300 shadow-sm rounded-md lg:w-[700px] '>
				<h2 className=' text-center p-4 font-extrabold uppercase'>
					Add Product
				</h2>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col p-4 '>
					<div className='md:grid gap-4  grid-cols-2'>
						<div className='flex flex-col gap-2'>
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
						<div className='flex flex-col gap-2'>
							<div className='flex flex-col gap-2'>
								<label htmlFor='image'>Image</label>
								<input
									type='file'
									name='image'
									id='image'
									placeholder='Image'
									{...register('image')}
									className='border border-solid border-gray-400 p-2 rounded-md bg-gray-200'
									onChange={handleImageChange}
								/>
							</div>
							<div className='w-full flex justify-center items-center'>
								<Image
									className='w-auto h-auto mt-2 md:h-[20rem] lg:w-auto'
									src={image ? image : notImage}
									alt='Product Image'
									width={300}
									height={300}
								/>
							</div>
						</div>
					</div>
					<div className='flex flex-col gap-2 mt-2 md:w-full'>
						<Textarea
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
