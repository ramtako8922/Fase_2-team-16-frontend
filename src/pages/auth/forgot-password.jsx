import Head from 'next/head';
import ResetPassword from '@/components/ResetPassword';
import LayoutAuth from '@/layouts/LayoutAuth';

const ForgotPassword = () => {
	return (
		<LayoutAuth>
			<Head>
				<title>Reset Password</title>
				<meta
					name='description'
					content='Forgot Password'
				/>
			</Head>
			<ResetPassword />
		</LayoutAuth>
	);
};

export default ForgotPassword;
