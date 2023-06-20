import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { useResetPasswordMutation } from '@/store/slices/apis';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getEmailResetPassword } from '@/store/slices/auth';
import { Dispatch } from 'react';
import LoaderLogin from './LoaderLogin';
import {
	RiMailLine,
	RiLockLine,
	RiEyeLine,
	RiEyeOffLine,
} from 'react-icons/ri';
import Logo from '../../public/logo.png';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

const ResetPassword = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [
		resetPassword,
		{
			data: resetPasswordData,
			isLoading: isResetLoading,
			error: ResetPasswordError,
			isError: isErrResetPassword,
			isSuccess: isResetSuccess,
		},
	] = useResetPasswordMutation();
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	console.log(resetPasswordData);

	const onSubmit = async (email) => {
		setEmail(email.userBody);
		resetPassword(email);
	};
	useEffect(() => {
		if (isResetSuccess) {
			dispatch(getEmailResetPassword(email));
			router.push('/auth/recovery-password/message');
		}
	}, [isResetSuccess, router, dispatch, email]);

	return (
		<>
			<div className='min-h-screen flex items-center justify-center p-4 flex-col text-white'>
				<Image
					src={Logo}
					alt='Logo ZurmC'
					className='mb-8 '
					priority={true}
				/>
				<div className=' p-8 rounded-xl shadow-2xl w-auto lg:w-[450px] '>
					<h1 className='text-3xl text-center uppercase font-bold tracking-[5px] text-black mb-4'>
						Password<span className='text-primary'> Reset</span>
					</h1>
					<form
						className='mb-8 mt-8'
						onSubmit={handleSubmit(onSubmit)}>
						<div className='relative mb-8'>
							<RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
							<input
								type='email'
								{...register('userBody', {
									required: true,
									maxLength: 43,
									minLength: 5,
									pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i,
								})}
								className='py-3 pl-8 pr-4 bg-input_auth w-full outline-none rounded-lg'
								placeholder='Email'
							/>
						</div>
						<div>
							<button
								type='submit'
								className='bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg'>
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
