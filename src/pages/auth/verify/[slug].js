import { useEffect } from 'react';
import { LoaderResetPassword } from '../../../components/loaders/Loaders';
import { useState } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import Head from 'next/head';
export const RecoveryPass = (props) => {
	const validityChange = props.validity.message;
	const [success, setSuccess] = useState(false);
	useEffect(() => {
		setSuccess(true);
		if (validityChange === 'Email verified successfully!') {
			setInterval(() => {
				window.location.href = '/auth/login';
			}, 5000);
		} else {
			window.location.href = '/auth/login';
		}
	}, [validityChange]);

	return (
		<>
			<Head>
				<title>Success Register</title>
				<meta
					name='description'
					content='Register Account'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/verify.gif'
				/>
			</Head>

			<div className='flex justify-center items-center w-screen h-screen flex-col'>
				{false ? (
					<LoaderResetPassword />
				) : (
					<div className='flex justify-center items-center w-screen h-screen flex-col'>
						<BsCheckCircleFill className='text-6xl m-2 text-primary' />
						<h1 className='text-sm mt-2 text-black'>
							Registration Successful!
						</h1>
						<h2 className='text-sm text-black'>Thank you for signing up.</h2>
					</div>
				)}
			</div>
		</>
	);
};

export async function getServerSideProps({ query: { slug } }) {
	const url = `https://api-trycatch-test.fly.dev/auth/verify/${slug}`;
	const res = await fetch(url);
	const validity = await res.json();

	return {
		props: {
			validity,
		},
	};
}

export default RecoveryPass;
