import { useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getLogin, getCredentials } from '@/store/slices/auth';
import { useRouter } from 'next/router';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useLoginUserMutation } from '@/store/slices/apis';
import LoaderLogin from './LoaderLogin';
import { setToken, setExpiration } from '@/services/accessToken/session';
import Image from 'next/image';
import Logo from '../../public/logo.png';
// Icons
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
		if (password && email) {
			await loginUser({ email, password });
		} else {
			toast.error('🙁😨 please refill fields', {
				position: 'top-right',
				autoClose: 1200,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			});
		}
	};

	useEffect(() => {
		if (isLoginsuccess) {
			toast.success('😍 Login Success', {
				position: 'top-right',
				autoClose: 800,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			});
			dispatch(getLogin({ email, password }));
			const { token } = loginData.accessToken;
			console.log(loginData);
			const isLoggedIn = true;
			dispatch(
				getCredentials({
					token,
					/* expires_in, */
					isLoggedIn,
				})
			);
			setToken(token);
			/* setExpiration(expires_in); */
			/* router.push('/dashboard/products'); */
			router.push('/dashboard/home');
		} else {
			if (loginError && loginError.data) {
				toast.error(`🙁😨 ${loginError.data.error}`, {
					position: 'top-right',
					autoClose: 1300,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'light',
				});
			}
		}
	}, [
		isLoginsuccess,
		router,
		loginError,
		loginData,
		dispatch,
		email,
		password,
	]);

	return (
		<>
			<div className='min-h-screen flex items-center justify-center p-4 flex-col text-white'>
				<div className='bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]'>
					<h1 className='text-3xl text-center uppercase font-bold tracking-[5px] text-black mb-8'>
						Sing <span className='text-primary'>Up</span>
					</h1>
					<form
						className='mb-8'
						onSubmit={handleSubmit}>
						<div className='relative mb-4 '>
							<RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
							<input
								onChange={handleChange}
								name='email'
								type='email'
								className='py-3 pl-8 pr-4 bg-input_auth w-full focus:bg-input_auth outline-none rounded-lg'
								placeholder='example@example.com'
							/>
						</div>
						<div className='relative mb-8'>
							<RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
							<input
								onChange={handleChange}
								name='password'
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
							href='/auth/forgot-password'
							className='hover:text-primary text-black transition-colors '>
							Forget your password?
						</Link>
						<Link
							href='/auth/register'
							className='hover:text-primary text-black transition-colors '>
							Create account
						</Link>
					</div>
				</div>
				<Image
					src={Logo}
					alt='Logo ZurmC'
					className='mt-12  lg:mt-4 lg:translate-y-20 w-auto h-20 md:h-28 lg:w-auto lg:h-auto'
				/>

				<ToastContainer />
				<div className='-translate-y-24 md:-translate-y-32 flex justify-center items-center'>
					{isLoadingLogin ? <LoaderLogin /> : null}
				</div>
			</div>
		</>
	);
};

export default LoginForm;
