import {
	
	RiArchiveDrawerFill,
	RiBarChart2Fill
} from 'react-icons/ri';
import { HiCurrencyDollar } from 'react-icons/hi';
import { BsFillBoxFill } from 'react-icons/bs';
import { MdDescription, MdConfirmationNumber } from 'react-icons/md';
import Link from 'next/link';
import Logo from '../../public/logo.png';
import Image from 'next/image';
import useFormProduct from '@/hooks/useFormProduct';

const FormProduct = () => {
	const{handlerChange,handlerSubmit}=useFormProduct()
	
	return (
		<div className=' min-h-screen flex items-center justify-center p-4 flex-col text-white'>
			<div className='bg-secondary-100 p-8 rounded-xl  w-auto lg:w-[450px]'>
				<h1 className='text-3xl text-center uppercase font-bold tracking-[5px] text-black mb-8'>
					New <span className='text-primary'>Product</span>
				</h1>
				<form className='mb-8' onSubmit={handlerSubmit}>
					<div className='relative mb-4'>
						<BsFillBoxFill className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
						<input
							type='text'
							className='py-3 pl-8 pr-4 bg-input_auth w-full focus:bg-input_auth outline-none rounded-lg'
							placeholder='Name product'
							name='nameproduct'
							value="prueba"
							onChange={handlerChange}
						/>
					</div>
					<div className='relative mb-4'>
						<MdDescription className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
						<input
							type='text'
							className='py-3 pl-8 pr-4 bg-input_auth w-full focus:bg-input_auth outline-none rounded-lg'
							placeholder='Description'
							name='description'
							onChange={handlerChange}
						/>
					</div>
					{/* <div className='relative mb-4'>
						<MdConfirmationNumber className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
						<select name='category'
						        onChange={handlerChange}
							className='py-3 pl-8 pr-4 bg-input_auth w-full focus:bg-input_auth outline-none rounded-lg text-gray-400'>
							<option value='' selected>Stoock State</option>
							<option value='si'>Yes</option>
							<option value='no'>No</option>
							
						</select>
					</div> */}
					<div className='relative mb-4'>
						<HiCurrencyDollar className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
						<input
							className='py-3 pl-8 pr-4 bg-input_auth w-full focus:bg-input_auth outline-none rounded-lg'
							placeholder='Price'
							name='price'
							onChange={handlerChange}
						/>
					</div>
					<div className='relative mb-4'>
						<RiBarChart2Fill className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
						<input
							className='py-3 pl-8 pr-4 bg-input_auth w-full focus:bg-input_auth outline-none rounded-lg'
							placeholder=' product quantity'
							name='quantity'
							onChange={handlerChange}
						/>
					</div>
					{/* <div className='relative mb-8'>
						<RiArchiveDrawerFill className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
						<select name='category'
						     onChange={handlerChange}
							className='py-3 pl-8 pr-4 bg-input_auth w-full focus:bg-input_auth outline-none rounded-lg text-gray-400'>
							<option value='' selected>Select Category</option>
							<option value='volvo'>Game</option>
							<option value='saab'>Toys</option>
							<option valhaue='opel'>Keyboard</option>
							<option value='audi'>Audi</option>
							<option value='saab'>Saab</option>
							<option value='opel'>Opel</option>
							<option value='audi'>Audi</option>
						</select>
					</div> */}
					<div>
						<button 
							type='submit'
							className='bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg'>
							Register
						</button>
					</div>
				</form>
				<Image
					src={Logo}
					alt='Logo ZurmC'
					className='mt-8 translate-y-20'
				/>
			</div>
			
		</div>
	);
};

export default FormProduct;
