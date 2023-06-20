import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../../public/logo.png';
import { useForm } from 'react-hook-form';
import { RiLockLine, RiEyeOffLine, RiEyeLine } from 'react-icons/ri';
const RecoveryPass = () => {
	const [showPassword, setShowPassword] = useState(false);
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	console.log(router.query);

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(e);
	};
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
						Change<span className='text-primary'> Password</span>
					</h1>
					<form
						className='mb-8 mt-8'
						onSubmit={handleSubmit(onSubmit)}>
						<div className='relative mb-4'>
							<RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
							<input
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
						<div className='relative mb-8'>
							<RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2 text-white' />
							<input
								type={showPassword ? 'text' : 'password'}
								className='py-3 px-8 bg-input_auth w-full outline-none rounded-lg'
								placeholder='Confirm Password'
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
								Change my Password
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default RecoveryPass;
