import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import Image from 'next/image';
import Logo from '../../../../public/logo.png';
import { LoaderSendEmail } from '@/components/loaders/Loaders';
import { useVerifyEmailRP } from '@/custom-hooks/useRPass';

//TODO: Add loader and prerendering 👁️👁️

const Message = () => {
	const { handleChange, isResetLoading, resent } = useVerifyEmailRP();

	return (
		<div className='w-screen h-screen text-black flex justify-center items-center text-center flex-col text-sm md:text-base m-0'>
			{isResetLoading ? (
				<LoaderSendEmail />
			) : (
				<BsCheckCircleFill className='text-6xl m-2 text-primary' />
			)}
			<h1 className=' text-base justify-normal sm:text-xl pl-7 pr-7 mt-8 font-bold'>
				We have sent a verification email to reset your password !
			</h1>
			<p className=' text-base justify-normal sm:text-sm pl-7 pr-7 mt-6'>
				Please check your email inbox and follow the provided steps to complete
				the process.
			</p>
			<p className=' text-smjustify-normal sm:text-sm pl-7 pr-7'>
				If you don&apos;t receive the email, please check your spam folder.
			</p>

			<button
				type='submit'
				onClick={handleChange}
				className=' text-sm md:text-sm text-primary underline hover:text-sky-600 lg:cursor-pointer mt-6'>
				If you still haven&apos;t received the email, you can request to have
				the verification message resent.
			</button>
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

export default Message;
