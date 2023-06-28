import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useLoginUserMutation } from '@/store/slices/apis';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { loginSchema } from '@/validations/UserValidation';
import {
	success,
	errorRequest,
	warning,
} from '@/components/notifications/toaster-auth';

export const useLoginUser = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(loginSchema),
	});
	const router = useRouter();
	const dispatch = useDispatch();

	const [showPassword, setShowPassword] = useState(false);
	const [loadingUser, setLoadingUser] = useState(true);
	const [
		loginUser,
		{
			data: loginData,
			isLoading: isLoadingLogin,
			error: loginError,
			isError: isErr,
			isSuccess: isLoginsuccess,
		},
	] = useLoginUserMutation();

	const onSubmit = async (data) => {
		try {
			await loginUser(data).unwrap();
			success('Login successfully');
			reset();
			router.push('/dashboard/home');
		} catch (error) {
			if (error.status === 401) {
				warning(error.data?.message);
			}
		}
	};

	return {
		handleSubmit,
		isLoadingLogin,
		showPassword,
		setShowPassword,
		errors,
		register,
		onSubmit,
	};
};
