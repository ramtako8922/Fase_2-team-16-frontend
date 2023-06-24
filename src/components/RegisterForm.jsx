import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Logo from '../../public/logo.png';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useRegisterUserMutation } from '@/store/slices/apis';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoaderLogin } from './loaders/Loaders';
import {
	success,
	emptyFields,
	errorRequest,
} from './notifications/toaster-auth';
Link;
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
		formState: { errors },
	} = useForm();
	const [showPassword, setShowPassword] = useState(false);
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	// };
	const router = useRouter();
	const [
		registerUser,
		{
			data: registerData,
			isLoading: isLoadingRegister,
			error: registerError,
			isError: isErr,
			isSuccess: registerSuccess,
		},
	] = useRegisterUserMutation();
	const onSubmit = async (e) => {
		if (e.password !== e.confirmPassword) {
			errorRequest('The passwords are not the same');
		} else {
			const { firstName: name, lastName: lastname, email, password } = e;
			const roles = ['user'];
			const user = {
				name,
				lastname,
				email,
				password,
				roles,
			};
			console.log(user);
			registerUser(user);
		}
	};
	useEffect(() => {
		if (registerSuccess) {
			success('register successfully');
			router.push('/auth/infopage');
		} else {
			if (registerError && registerError.data) {
				errorRequest(registerError.data.message);
			}
		}
	}, [registerSuccess, router, registerError, registerData]);

	return (
		<>
			<div className=' min-h-screen flex items-center justify-center p-4 flex-col text-white'>
				<Image
					src={Logo}
					alt='Logo ZurmC'
					className='w-auto h-24 '
					priority='true'
					width='auto'
					height={100}
				/>
				<h1 className='text-cyan-950  mb-4 text-[0.7rem]'>
					Efficiency at Your Fingertips
				</h1>
				<div className='bg-white p-5 rounded-xl shadow-2xl w-auto sm:w-[400px]'>
					<h1
						className='text-xl text-center uppercase font-bold tracking-[2px] text-black fon
                mb-4'>
						Create <span className='text-primary'>Account</span>
					</h1>
					<form
						className='mb-4 pr-2 pl-2'
						onSubmit={handleSubmit(onSubmit)}>
						<div className='relative mb-4 '>
							<RiUserLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />

							<input
								type='text'
								{...register('firstName', {
									required: true,
									max: 13,
									min: 5,
									maxLength: 12,
									pattern: /^[A-Za-z]/i,
								})}
								className='py-3 pl-8 pr-4 bg-input_auth w-full outline-none rounded-lg'
								placeholder='First Name'
							/>
							{errors.firstName?.type === 'required' && (
								<span className='absolute top-1/2 translate-y-5 left-2 text-red-600 text-sm'>
									First Name is required
								</span>
							)}
						</div>
						<div className='relative mb-4'>
							<RiUserLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
							<input
								type='text'
								{...register('lastName', {
									required: true,
									max: 12,
									min: 5,
									maxLength: 10,
									pattern: /^[A-Za-z]/i,
								})}
								className='py-3 pl-8 pr-4 bg-input_auth w-full outline-none rounded-lg'
								placeholder='Last Name'
							/>
							{errors.lastName?.type === 'required' && (
								<span className='absolute top-1/2 translate-y-5 left-2 text-red-600 text-sm'>
									Last Name is required
								</span>
							)}
						</div>
						<div className='relative mb-4'>
							<RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
							<input
								{...register('email', {
									required: true,
									maxLength: 43,
									minLength: 5,
									pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i,
								})}
								type='email'
								className='py-3 pl-8 pr-4 bg-input_auth w-full outline-none rounded-lg'
								placeholder='Email'
							/>
							{errors.email?.type === 'required' && (
								<span className='absolute top-1/2 translate-y-5 left-2 text-red-600 text-sm'>
									Email is required
								</span>
							)}
						</div>
						<div className='relative mb-4'>
							<RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
							<input
								{...register('password', {
									required: true,
									max: 22,
									min: 8,
									// maxLength: 16,
									// pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[A-Z])[A-Za-z\d]/i,
								})}
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
							{errors.password?.type === 'required' && (
								<span className='absolute top-1/2 translate-y-5 left-2 text-red-600 text-sm'>
									Password is required
								</span>
							)}
						</div>
						<div className='relative mb-4'>
							<RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
							<input
								{...register('confirmPassword', {
									required: true,
									max: 22,
									min: 8,
									// maxLength: 16,
									// pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[A-Z])[A-Za-z\d]/i,
								})}
								type={showPassword ? 'text' : 'password'}
								className='py-3 px-8 bg-input_auth w-full outline-none rounded-lg'
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
							{errors.confirmPassword?.type === 'required' && (
								<span className='absolute top-1/2 translate-y-5 left-2 text-red-600 text-sm'>
									Password is required
								</span>
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

				<ToastContainer limit={1} />
				<div className=' flex justify-center items-center'>
					{isLoadingRegister ? <LoaderLogin /> : null}
				</div>
			</div>
		</>
	);
};

export default Register;
