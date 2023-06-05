import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {
	RiMailLine,
	RiLockLine,
	RiEyeLine,
	RiEyeOffLine,
} from 'react-icons/ri';
import LayoutAuth from '@/layouts/LayoutAuth';

const ForgotPassword = () => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<LayoutAuth>
			<Head>
				<title>Reset Password</title>
				<meta
					name='description'
					content='Forgot Password'
				/>
			</Head>

			<div className='min-h-screen flex items-center justify-center p-4'>
				<div className='bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]'>
					<h1 className='text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8'>
						Password<span className='text-primary'> Reset</span>
					</h1>
					<form className='mb-8'>
						<div className='relative mb-4'>
							<RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
							<input
								type='email'
								className='py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg'
								placeholder='Username or email'
							/>
						</div>
						<div className='relative mb-4'>
							<RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
							<input
								type={showPassword ? 'text' : 'password'}
								className='py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg'
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
						</div>
						<div className='relative mb-8'>
							<RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
							<input
								type={showPassword ? 'text' : 'password'}
								className='py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg'
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
							className='hover:text-primary transition-colors'>
							Didn&apos;t receive an code?
						</Link>
						<Link
							href='/auth/register'
							className='hover:text-primary transition-colors'>
							Create account
						</Link>
					</div>
				</div>
			</div>
		</LayoutAuth>
	);
};

export default ForgotPassword;
