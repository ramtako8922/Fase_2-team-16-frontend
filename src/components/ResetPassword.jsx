import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
	RiMailLine,
	RiLockLine,
	RiEyeLine,
	RiEyeOffLine,
} from 'react-icons/ri';
import Logo from '../../public/logo.png';

const ResetPassword = () => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<div className='min-h-screen flex items-center justify-center p-4 flex-col text-white'>
			<div className='bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]'>
				<h1 className='text-3xl text-center uppercase font-bold tracking-[5px] text-black mb-8'>
					Password<span className='text-primary'> Reset</span>
				</h1>
				<form className='mb-8'>
					<div className='relative mb-4'>
						<RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
						<input
							type='email'
							className='py-3 pl-8 pr-4 bg-input_auth w-full outline-none rounded-lg'
							placeholder='Username or email'
						/>
					</div>
					<div className='relative mb-4'>
						<RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
						<input
							type={showPassword ? 'text' : 'password'}
							className='py-3 px-8 bg-input_auth w-full outline-none rounded-lg'
							placeholder='Password'
						/>
						{showPassword ? (
							<RiEyeOffLine
								onClick={() => setShowPassword(!showPassword)}
								className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-white'
							/>
						) : (
							<RiEyeLine
								onClick={() => setShowPassword(!showPassword)}
								className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-white'
							/>
						)}
					</div>
					<div className='relative mb-8'>
						<RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
						<input
							type={showPassword ? 'text' : 'password'}
							className='py-3 px-8 bg-input_auth w-full outline-none rounded-lg'
							placeholder='Confirm Password'
						/>
						{showPassword ? (
							<RiEyeOffLine
								onClick={() => setShowPassword(!showPassword)}
								className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-white'
							/>
						) : (
							<RiEyeLine
								onClick={() => setShowPassword(!showPassword)}
								className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-white'
							/>
						)}
					</div>
					<div>
						<button
							type='submit'
							className='bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg'>
							Reset Password
						</button>
					</div>
				</form>
				<div className='flex flex-col items-center gap-4'>
					<Link
						href=''
						className='hover:text-primary text-black transition-colors'>
						Didn&apos;t receive an code?
					</Link>
					<Link
						href='/auth/register'
						className='hover:text-primary text-black transition-colors'>
						Create account
					</Link>
				</div>
			</div>
			<Image
				src={Logo}
				alt='Logo ZurmC'
				className='mt-8 translate-y-10'
			/>
		</div>
	);
};

export default ResetPassword;
