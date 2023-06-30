import { RiArchiveDrawerFill, RiBarChart2Fill } from 'react-icons/ri';
import { HiCurrencyDollar } from 'react-icons/hi';
import { BsFillBoxFill } from 'react-icons/bs';
import { MdDescription, MdConfirmationNumber } from 'react-icons/md';
import Link from 'next/link';
import Logo from '../../public/logo.png';
import Image from 'next/image';
import useFormProduct from '@/hooks/useFormProduct';



const FormProduct = () => {
	const { handlerChange, handlerSubmit,handleSubmit,errors, register } = useFormProduct();

	return (
		<div className=' h-full  mt-10 flex items-center justify-center p-4 flex-col text-white'>
			<div className='bg-secondary-100 p-8 rounded-xl  w-30 shadow-2xl lg:w-[450px]'>
				<h1 className='text-3xl text-center uppercase font-bold tracking-[5px] text-black mb-8'>
					New <span className='text-primary'>Product</span>
				</h1>
				<form
					className='mb-8'
					onSubmit={handleSubmit(handlerSubmit)}>
					<div className='relative mb-4'>
						<BsFillBoxFill className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
						<input
							type='text'
							className='py-3 pl-8 pr-4 bg-input_auth w-80 focus:bg-input_auth outline-none rounded-lg'
							placeholder='Name product'
							name='nameproduct'
							{...register('nameproduct')}
						/>
						<p className='absolute w-full top-1/2 text-sm translate-y-[90%] left-2  text-error mt-2 mb-2 '>
								{errors.nameproduct?.message}
							</p>
					</div>
					<div className='relative mb-4'>
						<MdDescription className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
						<input
							type='text'
							className='py-3 pl-8 pr-4 bg-input_auth w-80 focus:bg-input_auth outline-none rounded-lg'
							placeholder='Description'
							name='description'
							{...register('description')}
						/>
						<p className='absolute w-full top-1/2 text-sm translate-y-[90%] left-2  text-error mt-2 mb-2 '>
								{errors.description?.message}
							</p>
					</div>
					<div className='relative mb-4'>
						<MdConfirmationNumber className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
						<select name='stoock'
						        {...register('stoock')}
							className='py-3 pl-8 pr-4 bg-input_auth w-80 focus:bg-input_auth outline-none rounded-lg text-gray-400'>
							<option value='' selected>Stoock State</option>
							<option value='si'>Yes</option>
							<option value='no'>No</option>
							
						</select>
						<p className='absolute w-full top-1/2 text-sm translate-y-[90%] left-2  text-error mt-2 mb-2 '>
								{errors.stoock?.message}
							</p>
					</div>
					<div className='relative mb-4'>
						<HiCurrencyDollar className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
						<input
							className='py-3 pl-8 pr-4 bg-input_auth w-80 focus:bg-input_auth outline-none rounded-lg'
							placeholder='Price'
							name='price'
							{...register('price')}
						/>
						<p className='absolute w-full top-1/2 text-sm translate-y-[90%] left-2  text-error mt-2 mb-2 '>
								{errors.price?.message}
							</p>
					</div>
					<div className='relative mb-4'>
						<RiBarChart2Fill className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
						<input
							className='py-3 pl-8 pr-4 bg-input_auth w-80 focus:bg-input_auth outline-none rounded-lg'
							placeholder=' product quantity'
							name='quantity'
							{...register('quantity')}
							
							
						/>
						<p className='absolute w-full top-1/2 text-sm translate-y-[90%] left-2  text-error mt-2 mb-2 '>
								{errors.price?.message}
							</p>
					</div>
					<div className='relative mb-8'>
						<RiArchiveDrawerFill className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
						<select name='category'
						     {...register('category')}
							className='py-3 pl-8 pr-4 bg-input_auth w-80 focus:bg-input_auth outline-none rounded-lg text-gray-400'>
							<option value='' selected>Select Category</option>
							<option value='volvo'>Game</option>
							<option value='saab'>Toys</option>
							<option valhaue='opel'>Keyboard</option>
							<option value='audi'>Audi</option>
							<option value='saab'>Saab</option>
							<option value='opel'>Opel</option>
							<option value='audi'>Audi</option>
						</select>
						<p className='absolute w-full top-1/2 text-sm translate-y-[90%] left-2  text-error mt-2 mb-2 '>
								{errors.category?.message}
							</p>
					</div>
					<div>
						<button
							type='submit'
							className='bg-input_auth text-primary uppercase font-bold text-sm w-80 py-3 px-4 rounded-lg'>
							Register
						</button>
					</div>
				</form>
				
			</div>
		</div>
	);
};

export default FormProduct;
