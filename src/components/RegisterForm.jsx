import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../../public/logo.png';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { getRegister } from '@/store/slices/auth/register';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useRegisterUserMutation } from '@/store/slices/apis';
import { ToastContainer, toast } from 'react-toastify';
// Icons
import {
	RiMailLine,
	RiLockLine,
	RiEyeLine,
	RiEyeOffLine,
	RiUserLine,
} from 'react-icons/ri';

const initialState = {
	name:'',
	lastname:'',
	email: '',
	password: '',
};
const Register = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [formValue, setFormValue] = useState(initialState);
	const { name,lastname, email, password } = formValue;
	const [showPassword, setShowPassword] = useState(false);


	const [
		registerUser,
		{
			data: registerData,
			isLoading: isLoadingRegister,
			error: registerError,
			isError: isErr,
			isSuccess: isRegistersuccess,
		},
	] = useRegisterUserMutation();

	const handleChange = (e) => {
		setFormValue({ ...formValue, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (name, lastname,password && email) {
			await registerUser({  name, lastname, email, password });
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
		if (isRegistersuccess) {
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
			dispatch(getRegister({ name,lastname,email, password }));
			const { user } = registerData;
			console.log(registerData);
			const isLoggedIn = true;
			
			setToken(token);
			/* setExpiration(expires_in); */
			/* router.push('/dashboard/products'); */
			router.push('/auth/login');
		} else {
			if (registerError && registerError.data) {
				toast.error(`🙁😨 ${registerError.data.error}`, {
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
	},[
		isRegistersuccess,
		router,
		registerError,
		registerData,
		dispatch,
		name,
		lastname,
		email,
		password,
	]);

	return (
		<div className='min-h-screen flex items-center justify-center p-4 flex-col text-white'>
			<div className='bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]'>
				<h1
					className='text-3xl text-center uppercase font-bold tracking-[5px] text-black fon
				mb-8'>
					Create <span className='text-primary'>Account</span>
				</h1>
				<form className='mb-8'
				onSubmit={handleSubmit}
				>
					<div className='relative mb-4 '>
						<RiUserLine className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
						<input
							type='text'
							className='py-3 pl-8 pr-4 bg-input_auth w-full outline-none rounded-lg'
							placeholder='First Name'
							name='name'
							onChange={handleChange}
						/>
					</div>
					<div className='relative mb-4'>
						<RiUserLine className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
						<input
							type='text'
							className='py-3 pl-8 pr-4 bg-input_auth w-full outline-none rounded-lg'
							placeholder='Last Name'
							name='lastname'
							onChange={handleChange}
						/>
					</div>
					<div className='relative mb-4'>
						<RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
						<input
							type='email'
							className='py-3 pl-8 pr-4 bg-input_auth w-full outline-none rounded-lg'
							placeholder='Email'
							name='email'
							onChange={handleChange}
						/>
					</div>
					<div className='relative mb-4'>
						<RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
						<input
							type={showPassword ? 'text' : 'password'}
							className='py-3 px-8 bg-input_auth w-full outline-none rounded-lg'
							placeholder='Password'
							name='password'
							onChange={handleChange}
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
							name='cornfirmpassword'
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
				<ToastContainer />
			</div>
			<Image
				src={Logo}
				alt='Logo ZurmC'
				className='mt-8 '
			/>
		</div>
	);
};

export default Register;
