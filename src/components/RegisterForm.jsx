import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Logo from '../../public/logo.png';
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoaderLogin } from './loaders/Loaders';
import { useRegisterA } from '@/custom-hooks/useRegister';
//---------------------------- icons ---------------------
import {
	RiMailLine,
	RiLockLine,
	RiEyeLine,
	RiEyeOffLine,
	RiUserLine,
} from 'react-icons/ri';

const Register = () => {
	const {
		register,
		handleSubmit,
		errors,
		showPassword,
		onSubmit,
		setShowPassword,
		isLoadingRegister,
	} = useRegisterA();

	return (
		<>
			<div className=' min-h-screen flex items-center justify-center p-4 flex-col text-white'>
				<Image
					src={Logo}
					alt='Logo ZurmC'
					className='h-16 w-auto sm:h-20 md:h-24 lg:h-24 '
					priority='true'
				/>
				<h1 className='text-cyan-950  mb-4 text-[0.7rem]'>
					Efficiency at Your Fingertips
				</h1>
				<div className='bg-white p-5 rounded-xl shadow-2xl w-[380px]'>
					<h1
						className='text-xl text-center uppercase font-bold tracking-[1px] text-black fon
                mb-4'>
						Create <span className='text-primary'>Account</span>
					</h1>
					<form
						className='mb-5 pr-2 pl-2'
						onSubmit={handleSubmit(onSubmit)}>
						<div className='relative mb-5 '>
							<RiUserLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
							<input
								type='text'
								{...register('firstName')}
								className='py-2 pl-8 pr-4 bg-input_auth w-full outline-none rounded-lg'
								placeholder='First Name'
							/>
							<span className='absolute top-1/2 w-full translate-y-5 left-2 text-centermd:text-[1.3rem] text-red-600 text-[0.7rem]'>
								{errors.firstName?.message}
							</span>
						</div>
						<div className='relative mb-5'>
							<RiUserLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
							<input
								type='text'
								{...register('lastName')}
								className='py-2 pl-8 pr-4 bg-input_auth w-full outline-none rounded-lg'
								placeholder='Last Name'
							/>
							<span className='absolute top-1/2 w-full translate-y-5 left-2 text-centermd:text-[1.3rem] text-red-600 text-[0.7rem]'>
								{errors.lastName?.message}
							</span>
						</div>
						<div className='relative mb-5'>
							<RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
							<input
								{...register('email')}
								type='email'
								className='py-2 pl-8 pr-4 bg-input_auth w-full outline-none rounded-lg'
								placeholder='Email'
							/>
							<span className='absolute top-1/2 w-full translate-y-5 left-2 text-centermd:text-[1.3rem] text-red-600 text-[0.7rem]'>
								{errors.email?.message}
							</span>
						</div>
						<div className='relative mb-5'>
							<RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
							<input
								{...register('password')}
								type={showPassword ? 'text' : 'password'}
								className='py-2 px-8 bg-input_auth w-full outline-none rounded-lg'
								placeholder='Password'
							/>
							{showPassword ? (
								<RiEyeOffLine
									onClick={() => setShowPassword(!showPassword)}
									className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary'
								/>
							) : (
								<RiEyeLine
									onClick={() => setShowPassword(!showPassword)}
									className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary'
								/>
							)}
							<span className='absolute top-1/2 w-full translate-y-5 left-2 text-centermd:text-[1.3rem] text-red-600 text-[0.7rem]'>
								{errors.password?.message}
							</span>
						</div>
						<div className='relative mb-5'>
							<RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
							<input
								{...register('confirm_password')}
								type={showPassword ? 'text' : 'password'}
								className='py-2 px-8 bg-input_auth w-full outline-none rounded-lg'
								placeholder='Confirm Password'
							/>
							{showPassword ? (
								<RiEyeOffLine
									onClick={() => setShowPassword(!showPassword)}
									className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary'
								/>
							) : (
								<RiEyeLine
									onClick={() => setShowPassword(!showPassword)}
									className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary'
								/>
							)}
							<span className='absolute top-1/2 w-full translate-y-5 left-2 text-centermd:text-[1.3rem] text-red-600 text-[0.7rem]'>
								{errors.confirm_password?.message}
							</span>
						</div>
						<div>
							<button
								disabled={isLoadingRegister}
								type='submit'
								className='bg-primary hover:bg-blue-600 hover:text-white text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg mt-4 outline-none  shadow-lg transform active:scale-x-75 transition-transform'>
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

				<ToastContainer limit={1} />
				<div className=' mt-5 flex justify-center items-center'>
					{isLoadingRegister ? <LoaderLogin /> : null}
				</div>
			</div>
		</>
	);
};

export default Register;
