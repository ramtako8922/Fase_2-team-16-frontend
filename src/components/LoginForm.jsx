import Link from 'next/link';
import { LoaderLogin } from './loaders/Loaders';
import Image from 'next/image';
import Logo from '../../public/logo.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoginUser } from '@/custom-hooks/loginAuth';
import {
	RiMailLine,
	RiLockLine,
	RiEyeLine,
	RiEyeOffLine,
} from 'react-icons/ri';

const LoginForm = () => {
	const {
		handleSubmit,
		isLoadingLogin,
		showPassword,
		setShowPassword,
		errors,
		register,
		onSubmit,
	} = useLoginUser();

	return (
		<>
			<div className='min-h-auto  flex items-center justify-center p-3 flex-col text-white'>
				<Image
					src={Logo}
					alt='Logo ZurmC'
					priority='true'
					width='auto'
					height={100}
				/>
				<h1 className='text-blue-800 mb-8 text-[0.7rem]'>
					Efficiency at Your Fingertips
				</h1>
				<div className='bg-white pt-4 pb-4 p-6 rounded-xl shadow-2xl w-auto lg:w-[320px]'>
					<h1 className='text-4xl text-center uppercase font-bold tracking-[1px] text-black mb-8'>
						Log <span className='text-primary'>In</span>
					</h1>
					<form
						className='mb-6 '
						onSubmit={handleSubmit(onSubmit)}>
						<div className='relative mb-7 '>
							<RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
							<input
								id='email'
								type='email'
								name='email'
								className='py-3 pl-8 pr-4 bg-input_auth w-full focus:bg-input_auth outline-none rounded-lg'
								placeholder='example@example.com'
								{...register('email')}
							/>
							<p className='absolute w-full top-1/2 text-sm translate-y-[90%] left-2  text-error mt-2 mb-2 text-center'>
								{errors.email?.message}
							</p>
						</div>
						<div className='relative  mb-7'>
							<RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
							<input
								autoComplete='true'
								name='password'
								type={showPassword ? 'text' : 'password'}
								className=' py-3 px-8 bg-input_auth w-full outline-none rounded-lg'
								placeholder='Password'
								{...register('password')}
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
							<p className='absolute w-full top-1/2 text-sm translate-y-[60%] md:translate-y-[1.5rem] left-2  text-error mt-2 mb-2 text-center'>
								{errors.password?.message}
							</p>
						</div>
						<div>
							<button
								disabled={isLoadingLogin}
								type='submit'
								className='bg-primary hover:bg-blue-600 hover:text-white text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg mt-4 outline-none  shadow-lg transform active:scale-x-75 transition-transform'>
								<span className='ml-2'>Login</span>
							</button>
						</div>
					</form>
					<div className='flex flex-col items-center gap-2'>
						<Link
							href='/auth/forgotpassword'
							className='text-sm hover:text-primary text-black transition-colors '>
							Forget your password?
						</Link>
						<Link
							href='/auth/register'
							rel='noopener noreferrer'
							className=' text-sm hover:text-primary text-black transition-colors '>
							Create account
						</Link>
					</div>
				</div>
				<ToastContainer limit={1} />
				<div className='mt-5 flex justify-center items-center'>
					{isLoadingLogin ? <LoaderLogin /> : null}
				</div>
			</div>
		</>
	);
};

export default LoginForm;
