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
		handleChange,
		handleSubmit,
		isLoadingLogin,
		showPassword,
		setShowPassword,
	} = useLoginUser();

	return (
		<>
			<div className='min-h-auto  flex items-center justify-center p-4 flex-col text-white'>
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
				<div className='bg-white p-8 rounded-xl shadow-2xl w-auto lg:w-[400px]'>
					<h1 className='text-3xl text-center uppercase font-bold tracking-[5px] text-black mb-8'>
						Sing <span className='text-primary'>Up</span>
					</h1>
					<form
						className='mb-8 '
						onSubmit={handleSubmit}>
						<div className='relative mb-4 '>
							<RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
							<input
								onChange={handleChange}
								name='email'
								type='email'
								className='py-3 pl-8 pr-4 bg-input_auth w-full focus:bg-input_auth outline-none rounded-lg'
								placeholder='example@example.com'
							/>
						</div>
						<div className='relative mb-8'>
							<RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
							<input
								onChange={handleChange}
								name='password'
								autoComplete='true'
								type={showPassword ? 'text' : 'password'}
								className='py-3 px-8 bg-input_auth w-full outline-none rounded-lg'
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
						<div>
							<button
								type='submit'
								className='bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg'>
								Login
							</button>
						</div>
					</form>
					<div className='flex flex-col items-center gap-4'>
						<Link
							href='/auth/forgotpassword'
							className='hover:text-primary text-black transition-colors '>
							Forget your password?
						</Link>
						<Link
							href='/auth/register'
							rel='noopener noreferrer'
							className='hover:text-primary text-black transition-colors '>
							Create account
						</Link>
					</div>
				</div>
				<ToastContainer limit={1} />
				<div className=' flex justify-center items-center'>
					{isLoadingLogin ? <LoaderLogin /> : null}
				</div>
			</div>
		</>
	);
};

export default LoginForm;
