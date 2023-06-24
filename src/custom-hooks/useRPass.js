import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { warning, success } from '@/components/notifications/toaster-auth';
import { useChangePasswordMutation } from '@/store/slices/apis';
export const useResetPass = () => {
	const [changePassword, { data, isLoading, isError, isSuccess, error }] =
		useChangePasswordMutation();

	const tokenResetPassword = useSelector(
		(state) => state.auth.tokenResetPassword
	);
	const [showPassword, setShowPassword] = useState(false);
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	//console.log(tokenResetPassword);
	const onSubmit = async (e) => {
		if (e.password === e.confirm_password) {
			const password = e.password;
			const confirm_password = e.confirm_password;
			const passData = {
				tokenResetPassword,
				newpass: {
					password,
					confirm_password,
				},
			};
			//console.log(passData);
			changePassword(passData);
		} else {
			warning('Password and Confirm Password must be the same');
		}
	};
	//console.log(data);
	useEffect(() => {
		if (isSuccess) {
			success('Password changed successfully');
			router.push('/auth/login');
			return;
		}
		if (isError) {
			warning("Password can't be changed");
			return;
		}
	}, [isSuccess, isError, router, error, data, errors]);

	return {
		showPassword,
		setShowPassword,
		register,
		handleSubmit,
		errors,
		onSubmit,
	};
};
