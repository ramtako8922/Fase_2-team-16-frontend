import Link from 'next/link';
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoaderLogin } from './loaders/Loaders';
import { useEmailRP } from '@/custom-hooks/useRPass';
import {
	RiMailLine,
	RiLockLine,
	RiEyeLine,
	RiEyeOffLine,
} from 'react-icons/ri';
import Logo from '../../public/logo.png';

const ResetPassword = () => {
	const { register, errors, handleSubmit, onSubmit, isResetLoading } =
		useEmailRP();

	return (
		<>
			<div className='min-h-screen flex items-center justify-center p-4 flex-col text-white'>
				<Image
					src={Logo}
					alt='Logo ZurmC'
					priority={true}
					width='auto'
					height={100}
				/>
				<h1 className='text-blue-800 mb-8 text-[0.7rem]'>
					Efficiency at Your Fingertips
				</h1>
				<div className='bg-white p-8 rounded-xl shadow-2xl w-[350px] '>
					<h1 className='text-3xl text-center uppercase font-bold tracking-[3px] text-black '>
						Password
					</h1>
					<h2 className='text-3xl text-center uppercase font-bold tracking-[3px] text-primary mb-4'>
						Reset
					</h2>
					<form
						className='mb-8 mt-5'
						onSubmit={handleSubmit(onSubmit)}>
						<div className='relative mb-4'>
							<RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
							<input
								type='email'
								{...register('email')}
								className='py-3 pl-8 pr-4 bg-input_auth w-full outline-none rounded-lg'
								placeholder='Email'
							/>
							<p className='absolute w-full top-1/2 text-sm translate-y-[80%] md:translate-y-[100%] left-2  text-error mt-2 mb-2 text-center'>
								{errors.email?.message}
							</p>
						</div>

						<div>
							<button
								type='submit'
								className='bg-primary hover:bg-blue-600 hover:text-white text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg mt-4 outline-none  shadow-lg transform active:scale-x-75 transition-transform'>
								Reset my Password
							</button>
						</div>
					</form>
					<div className='flex flex-col items-center gap-4'>
						<Link
							href='/auth/register'
							className='hover:text-primary text-black transition-colors'>
							Create account
						</Link>
						<span className='flex items-center justify-center gap-2 text-black'>
							You have account?
							<Link
								href='/auth/login'
								className='text-black font-semibold hover:text-primary transition-colors'>
								Login
							</Link>
						</span>
					</div>
				</div>
				<ToastContainer limit={1} />
				<div className=' flex justify-center items-center'>
					{isResetLoading ? <LoaderLogin /> : null}
				</div>
			</div>
		</>
	);
};

export default ResetPassword;
