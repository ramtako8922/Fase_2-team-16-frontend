import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import Image from 'next/image';
import Logo from '../../public/logo.png';
const SuccesRegister = () => {
	return (
		<div className='text-black flex justify-center items-center text-center flex-col text-sm md:text-base m-5'>
			<BsCheckCircleFill className='text-6xl m-2 text-primary' />
			<h1 className=' text-xl md:text-3xl m-7'>
				Your account has been created successfully!
			</h1>
			<p>Please confirm your account. We have sent you a verification email.</p>
			<p>If you don&apos;t receive the email, please check your spam folder.</p>

			<h2 className=' text-sm md:text-xl text-primary underline hover:text-sky-600 lg:cursor-pointer '>
				Request to resend if you haven&apos;t received the email.
			</h2>
			<Image
				src={Logo}
				alt='Logo ZurmC'
				className=' mt-6 md:mt-16 w-auto h-auto '
				priority='true'
				width='auto'
				height={100}
			/>
			<p>Thank you for your time!</p>
		</div>
	);
};

export default SuccesRegister;
