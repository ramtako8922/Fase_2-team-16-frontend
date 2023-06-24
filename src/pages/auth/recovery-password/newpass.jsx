import Image from 'next/image';
import Logo from '../../../../public/logo.png';
import { useResetPass } from '@/custom-hooks/useRPass';
import { RiLockLine, RiEyeOffLine, RiEyeLine } from 'react-icons/ri';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecoveryPass = () => {
	const {
		showPassword,
		setShowPassword,
		handleSubmit,
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
					className='mb-8 '
					priority={true}
				/>

				<div className='bg-blue-300 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px] '>
					<h1 className='text-3xl text-center uppercase font-bold tracking-[5px] text-black mb-4'>
						Change<span className='text-white'> Password</span>
					</h1>
					<form
						className='mb-8 mt-8'
						onSubmit={handleSubmit(onSubmit)}>
						<div className='relative mb-4'>
							<RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
							<input
								type={showPassword ? 'text' : 'password'}
								autoComplete='true'
								className='py-3 px-8 bg-input_auth w-full outline-none rounded-lg'
								placeholder='Password'
								{...register('password', {
									required: true,
									max: 12,
									// min: 5,
									// maxLength: 10,
									// pattern: /^[A-Za-z]/i,
								})}
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
								autoComplete='true'
								className='py-3 px-8 bg-input_auth w-full outline-none rounded-lg'
								placeholder='confirm Password'
								{...register('confirm_password', {
									required: true,
									// max: 12,
									// min: 5,
									// maxLength: 10,
									// pattern: /^[A-Za-z]/i,
								})}
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
								className='bg-black text-white uppercase font-bold text-sm w-full py-3 px-4 rounded-lg'>
								Change my Password
							</button>
						</div>
					</form>
				</div>
			</div>
			<ToastContainer limit={1} />
		</>
	);
};

export default RecoveryPass;
