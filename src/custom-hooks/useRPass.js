import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { warning, success } from '@/components/notifications/toaster-auth';
import { useChangePasswordMutation } from '@/store/slices/apis';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { resetPasswordSchema } from '@/validations/UserValidation';
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
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			password: '',
			confirm_password: '',
		},
		resolver: yupResolver(resetPasswordSchema),
	});

	const onSubmit = async (e) => {
		console.log(e);
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

			changePassword(passData);
			return;
		}
	};
	useEffect(() => {
		if (isSuccess) {
			reset();
			success('Password changed successfully');
			router.push('/auth/login');
			return;
		}
		if (isError) {
			reset();
			warning("Password can't be changed");
			return;
		}
	}, [isSuccess, isError, router, error, data, reset]);

	return {
		showPassword,
		setShowPassword,
		register,
		errors,
		handleSubmit,
		onSubmit,
		isLoading,
	};
};
