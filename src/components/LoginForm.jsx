import { useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { getToken } from '@/services/accessToken/session';
import { getUser } from '@/store/slices/auth';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useLoginUserMutation } from '@/store/slices/apis';
import LoaderLogin from './LoaderLogin';
import Image from 'next/image';
import Logo from '../../public/logo.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { success, errorRequest, warning } from './notifications/toaster-auth';

// icons
import {
	RiMailLine,
	RiLockLine,
	RiEyeLine,
	RiEyeOffLine,
} from 'react-icons/ri';

const initialState = {
	email: '',
	password: '',
};

const LoginForm = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [formValue, setFormValue] = useState(initialState);
	const { email, password } = formValue;
	const [showPassword, setShowPassword] = useState(false);
	const [loadingUser, setLoadingUser] = useState(true);

	const [
		loginUser,
		{
			data: loginData,
			isLoading: isLoadingLogin,
			error: loginError,
			isError: isErr,
			isSuccess: isLoginsuccess,
		},
	] = useLoginUserMutation();

	const handleChange = (e) => {
		setFormValue({ ...formValue, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (email === '' || password === '') {
			warning(' Please refill fields');
			return;
		}
		try {
			const response = await loginUser(formValue);
			//console.log(response);

			if (response.data) {
				success('Login successfully');
				dispatch(getUser(response.data));
				router.push('/dashboard/home');
				setIsLogged(true);
			}
			if (response.error) {
				errorRequest(response.error.data.message);
			}
		} catch (error) {
			console.log('err', error);
			errorRequest(error.data.message);
		}
	};

	useEffect(() => {
		async function loadingUser() {
			if (!getToken() && !isLoginsuccess) {
				setLoadingUser(false);

				return;
			}
		}
		loadingUser();
	}, [isLoginsuccess]);

	return (
		<>
			<div className='min-h-screen flex items-center justify-center p-4 flex-col text-white'>
				<Image
					src={Logo}
					alt='Logo ZurmC'
					priority='true'
					className='mb-8 '
				/>

				<div className='bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto sm:w-[450px]'>
					<h1 className='text-3xl text-center uppercase font-bold tracking-[5px] text-black mb-8'>
						Sing <span className='text-primary'>Up</span>
					</h1>
					<form
						className='mb-8'
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
