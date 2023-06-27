import Image from 'next/image';
import Logo from '../../../../public/logo.png';
import { useResetPass } from '@/custom-hooks/useRPass';
import { RiLockLine, RiEyeOffLine, RiEyeLine } from 'react-icons/ri';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoaderLogin } from '@/components/loaders/Loaders';
const RecoveryPass = () => {
	const {
		showPassword,
		setShowPassword,
		handleSubmit,
		isLoading,
		errors,
		onSubmit,
		register,
	} = useResetPass();

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

				<div className='bg-[#111] p-8 rounded-xl shadow-2xl w-auto lg:w-[400px] '>
					<h1 className='text-3xl text-center uppercase font-bold tracking-[1px] text-primary mb-4'>
						Change<span className='text-white'> Password</span>
					</h1>
					<form
						className='mb-4 mt-8 text-black'
						onSubmit={handleSubmit(onSubmit)}>
						<div className='relative mb-8'>
							<RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2 text-black' />
							<input
								name='password'
								type={showPassword ? 'text' : 'password'}
								autoComplete='true'
								className='py-3 px-8 bg-white w-full outline-none rounded-lg'
								placeholder='Password'
								{...register('password')}
							/>
							{showPassword ? (
								<RiEyeOffLine
									onClick={() => setShowPassword(!showPassword)}
									className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-black'
								/>
							) : (
								<RiEyeLine
									onClick={() => setShowPassword(!showPassword)}
									className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-black'
								/>
							)}
							<p className='absolute w-full top-1/2 text-[0.68rem] lg:text-sm translate-y-[1.8rem]  left-2  text-error  mb-2 text-center'>
								{errors.password?.message}
							</p>
						</div>
						<div className='relative mb-8'>
							<RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2 text-black' />
							<input
								name='confirm_password'
								type={showPassword ? 'text' : 'password'}
								autoComplete='true'
								className='py-3 px-8 bg-white w-full outline-none rounded-lg'
								placeholder='Confirm Password'
								{...register('confirm_password')}
							/>
							{showPassword ? (
								<RiEyeOffLine
									onClick={() => setShowPassword(!showPassword)}
									className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-black'
								/>
							) : (
								<RiEyeLine
									onClick={() => setShowPassword(!showPassword)}
									className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-black'
								/>
							)}
							<p className='absolute w-full top-1/2  text-[0.68rem] lg:text-sm translate-y-[1.8rem]  left-2  text-error  mb-2 text-center'>
								{errors.confirm_password?.message}
							</p>
						</div>

						<div>
							<button
								disabled={isLoading}
								type='submit'
								className='bg-primary hover:bg-blue-600 hover:text-white text-white uppercase font-bold text-sm w-full py-3 px-4 rounded-lg mt-4  outline-none  shadow-lg transform active:scale-x-75 transition-transform '>
								Change my Password
							</button>
						</div>
					</form>
				</div>
			</div>
			<ToastContainer limit={1} />
			<div className='mt-5 flex justify-center items-center'>
				{isLoading ? <LoaderLogin /> : null}
			</div>
		</>
	);
};

export default RecoveryPass;
