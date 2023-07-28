import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import {
	useLoginUserMutation,
	useVerifyAccountMutation,
} from '@/store/slices/apis';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { loginSchema } from '@/validations/UserValidation';

import {
	success,
	errorRequest,
	info,
} from '@/components/notifications/toaster-auth';

export const useLoginUser = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [showPassword, setShowPassword] = useState(false);

	// =============================================React Hook Form===================================
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
	// =============================================Fetch login=========================================
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
	// =============================================Fetch verify account===================================
	const [
		verifyAccount,
		{
			data: verifyData,
			isLoading: isLoadingVerify,
			error: verifyError,
			isError: isVerifyErr,
			isSuccess: isVerifysuccess,
		},
	] = useVerifyAccountMutation();

	const onSubmit = async (data) => {
		try {
			await loginUser(data).unwrap();
			success('🤩Login successfully');
			reset();
			router.push('/dashboard/home');
		} catch (error) {
			reset();
			switch (error.status) {
				case 400:
					errorRequest('😞 Invalid credentials');
					break;
				case 401:
					errorRequest(error.data?.message);
					if (error.data.message === 'Please verify your email address') {
						info(
							'📧 Verify your email. We have sent a verification email. Check your spam folder. Thank you!'
						);
						verifyAccount(data.email);
						return;
					}
					break;
				case 403:
					errorRequest(error.data.errors[0].msg + error.data.errors[1].msg);
					break;
				case 404:
					errorRequest('⚠️ User not exist ');
					break;
				case 500:
					errorRequest('🚨 Server error');
					break;
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
