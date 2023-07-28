import React from 'react';
import Image from 'next/image';
import notImage from '../../../public/images/no-image.webp';
import { useAddProduct } from '../../custom-hooks/addProduct';
import { useState } from 'react';
import Modal from '../Modal';

const AddProduct = () => {
	const [open, setOpen] = useState(false);
	const {
		image,
		setImage,
		register,
		handleSubmit,
		onSubmit,
		categories,
		providers,
		errors,
	} = useAddProduct();

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
	const handleErrors = (errors) => {
		if (errors) {
			setOpen(true);
		}
	};

	const InputText = ({ name, placeholder, type }) => {
		return (
			<>
				<label
					htmlFor={name}
					className='capitalize lg:text-xs font-semibold'>
					{name}
				</label>
				<input
					autoComplete='on'
					type={type}
					name={name}
					id={name}
					placeholder={placeholder}
					className='border border-solid border-gray-400 p-2 rounded-md bg-gray-200 lg:p-1 lg:rounded-sm lg:text-sm '
					{...register(name)}
				/>
			</>
		);
	};

	const InputNumber = ({ name, placeholder, type }) => {
		return (
			<>
				<label
					htmlFor={name}
					className='capitalize lg:text-xs font-semibold'>
					{name}
				</label>
				<input
					type={type}
					autoComplete='on'
					name={name}
					id={name}
					step='any'
					placeholder={placeholder}
					className='border border-solid border-gray-400 p-2 rounded-md bg-gray-200 lg:p-1 lg:rounded-sm lg:text-sm '
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
					className='capitalize lg:text-xs font-semibold'>
					{name}
				</label>
				<select
					id={name}
					{...register(name)}
					defaultValue={'Default'}
					className='border border-solid border-gray-400 p-2 lg:p-1 rounded-md bg-gray-200   focus:ring-blue-500 focus:border-blue-500 block w-full  box-border lg:rounded-sm lg:text-xs capitalize'>
					<option
						value='default'
						disabled={true}>
						{placeholder}
					</option>
					{option.map((item, index) => (
						<option
							key={item.id ? item.id : index}
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
				<label
					htmlFor={name}
					className='capitalize lg:text-xs  font-bold'>
					{name}
				</label>
				<textarea
					name={name}
					id={name}
					placeholder={placeholder}
					className='h-32 lg:h-28 border border-solid border-gray-400 p-2 rounded-md bg-gray-200 resize-none lg:text-xs'
					{...register(name)}></textarea>
			</>
		);
	};

	return (
		<div className='mb-1 flex justify-center items-center flex-col'>
			<hr className=' bg-blue-950  ml-0 mt-0 mb-4' />
			<div className='w-full border border-solid border-gray-200 shadow-xl rounded-md lg:w-[70%] '>
				<h2 className=' text-center p-4 lg:mt-2 font-extrabold uppercase lg:text-base'>
					Add New Product
				</h2>
				<form
					onSubmit={handleSubmit(onSubmit, handleErrors)}
					className='flex flex-col p-4 lg:p-2 lg:pl-5 lg:pr-5'>
					<div className='md:grid gap-1  grid-cols-2'>
						<div className='flex flex-col gap-1 lg:gap-1 '>
							<InputText
								name='name'
								placeholder='Product Name'
								type='text'
							/>

							<InputNumber
								name='price'
								placeholder='Price'
								type='number'
							/>

							<InputNumber
								name='stock'
								placeholder='Stock'
								type='number'
							/>

							<Select
								name='provider'
								placeholder='Select Provider'
								option={providers.map((provider) => provider.name)}
							/>

							<Select
								name='category'
								placeholder='Select Category'
								option={categories.map((category) => category.name)}
							/>
						</div>
						<div className='flex flex-col gap-2 lg:gap-1'>
							<div className='flex flex-col gap-2 lg:gap-1'>
								<label
									htmlFor='image'
									className='lg:text-xs font-semibold'>
									Image
								</label>
								<input
									type='file'
									name='image'
									id='image'
									placeholder='Image'
									{...register('image')}
									className='border border-solid border-gray-400 p-1 rounded-md bg-gray-200 lg:p-[3px] lg:rounded-sm   lg:text-xs'
									onChange={handleImageChange}
								/>
							</div>
							<div className='w-full flex justify-center items-center '>
								<Image
									className='w-auto h-auto mt-2 md:h-[20rem] lg:w-auto lg:h-[14rem]'
									src={image ? image : notImage}
									alt='Product Image'
									width={300}
									height={300}
								/>
							</div>
						</div>
					</div>
					<div className='flex flex-col gap-2 lg:gap-1 mt-2 md:w-full '>
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
				<Modal
					msg={'⚠️Please fix fiels errors'}
					open={open}
					setOpen={setOpen}>
					<h3>{errors.name?.message}</h3>
					<h3>{errors.price?.message}</h3>
					<h3>{errors.stock?.message}</h3>
					<h3>{errors.provider?.message}</h3>
					<h3>{errors.category?.message}</h3>
					<h3>{errors.image?.message}</h3>
					<h3>{errors.description?.message}</h3>
				</Modal>
			</div>
		</div>
	);
};

export default AddProduct;
