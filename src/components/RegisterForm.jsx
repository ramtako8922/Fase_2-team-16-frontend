import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../../public/logo.png';
import Image from 'next/image';
import LoaderLogin from './LoaderLogin';
Link;
// Icons
import {
	RiMailLine,
	RiLockLine,
	RiEyeLine,
	RiEyeOffLine,
	RiUserLine,
} from 'react-icons/ri';
const Register = () => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<div className='min-h-screen flex items-center justify-center p-4 flex-col text-white'>
			<div className='bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[400px]'>
				<h1
					className='text-3xl text-center uppercase font-bold tracking-[5px] text-black fon
				mb-8'>
					Create <span className='text-primary'>Account</span>
				</h1>
				<form className='mb-8'>
					<div className='relative mb-4 '>
						<RiUserLine className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
						<input
							type='text'
							className='py-3 pl-8 pr-4 bg-input_auth w-full outline-none rounded-lg'
							placeholder='First Name'
						/>
					</div>
					<div className='relative mb-4'>
						<RiUserLine className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
						<input
							type='text'
							className='py-3 pl-8 pr-4 bg-input_auth w-full outline-none rounded-lg'
							placeholder='Last Name'
						/>
					</div>
					<div className='relative mb-4'>
						<RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
						<input
							type='email'
							className='py-3 pl-8 pr-4 bg-input_auth w-full outline-none rounded-lg'
							placeholder='Email'
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
							Register
						</button>
					</div>
				</form>
				<span className='flex items-center justify-center gap-2 text-black'>
					You have account?
					<Link
						href='/auth/login'
						className='text-black font-semibold hover:text-primary transition-colors'>
						Login
					</Link>
				</span>
			</div>
			<Image
				src={Logo}
				alt='Logo ZurmC'
				className='mt-10 lg:mt-4 lg:translate-y-10 w-auto h-20 md:h-28 lg:w-auto lg:h-24'
			/>
			<div className='-translate-y-28 md:-translate-y-36 lg:-translate-y-24 flex justify-center items-center'>
				{false ? <LoaderLogin /> : null}
			</div>
		</div>
	);
};

export default Register;
