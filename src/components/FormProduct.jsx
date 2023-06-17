import {
	RiUserLine,
	RiMailLine,
	RiLockLine,
	RiEyeLine,
	RiEyeOffLine,
} from 'react-icons/ri';
import { HiCurrencyDollar } from 'react-icons/hi';
import { BsFillBoxFill } from 'react-icons/bs';
import { MdDescription, MdConfirmationNumber } from 'react-icons/md';
import Link from 'next/link';
const FormProduc = () => {
	return (
		<div className=' flex items-center justify-center p-4'>
			<div className='bg-secondary-100 p-8 rounded-xl  w-auto lg:w-[450px]'>
				<h1 className='text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8'>
					New <span className='text-primary'>Product</span>
				</h1>
				<form className='mb-8'>
					<div className='relative mb-4'>
						<BsFillBoxFill className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
						<input
							type='text'
							className='py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg'
							placeholder='Name product'
						/>
					</div>
					<div className='relative mb-4'>
						<MdDescription className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
						<input
							type='text'
							className='py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg'
							placeholder='Description'
						/>
					</div>
					<div className='relative mb-4'>
						<MdConfirmationNumber className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
						<input
							type='email'
							className='py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg'
							placeholder='Stock'
						/>
					</div>
					<div className='relative mb-4'>
						<HiCurrencyDollar className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
						<input
							className='py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg'
							placeholder='Price'
						/>
					</div>
					<div className='relative mb-8'>
						<RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
						<select
							className='py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg'
							placeholder='Confirm Password'>
							<option value='volvo'>Game</option>
							<option value='saab'>Toys</option>
							<option value='opel'>Keyboard</option>
							<option value='audi'>Audi</option>
							<option value='saab'>Saab</option>
							<option value='opel'>Opel</option>
							<option value='audi'>Audi</option>
						</select>
					</div>
					<div>
						<button
							type='submit'
							className='bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg'>
							Register
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FormProduc;
