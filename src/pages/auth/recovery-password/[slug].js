import { useEffect } from 'react';
import { LoaderResetPassword } from '../../../components/loaders/Loaders';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { getTokenResetPassword } from '@/store/slices/auth';

export const RecoveryPass = (props) => {
	const router = useRouter();
	const validityChange = props.validity.message;
	const token = props.slug;
	const dispatch = useDispatch();
	//console.log(token);
	useEffect(() => {
		if (validityChange === 'The entered token is valid') {
			dispatch(getTokenResetPassword(token));
			router.push('/auth/recovery-password/newpass');
		} else {
			router.push('/auth/login');
		}
	}, [validityChange, dispatch, token, router]);

	return (
		<>
			<div className='flex justify-center items-center w-screen h-screen flex-col'>
				<LoaderResetPassword />
			</div>
		</>
	);
};

export async function getServerSideProps({ query: { slug } }) {
	const url = `https://api-trycatch-test.fly.dev/auth/verify/token/${slug}`;
	const res = await fetch(url);
	const validity = await res.json();
	console.log(validity.message);

	return {
		props: {
			validity,
			slug,
		},
	};
}

export default RecoveryPass;
