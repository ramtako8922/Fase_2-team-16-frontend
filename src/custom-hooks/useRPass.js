import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { warning, success } from '@/components/notifications/toaster-auth';
import { useChangePasswordMutation } from '@/store/slices/apis';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { resetPasswordSchema } from '@/validations/UserValidation';
import { useResetPasswordMutation } from '@/store/slices/apis';
import { useDispatch } from 'react-redux';
import { setEmailResetPassword } from '@/store/slices/auth';
import { sendEmailResetPassword } from '@/store/slices/auth';
import { forgotPasswordSchema } from '@/validations/UserValidation';
// =================================================================send email reset password==============================================

export const useEmailRP = () => {
	const dispatch = useDispatch();
	const [sendEmailRP, setSendEmailRP] = useState(false);
	const [email, setEmail] = useState('');
	const [
		resetPassword,
		{
			data: resetPasswordData,
			isLoading: isResetLoading,
			error: ResetPasswordError,
			isError: isErrResetPassword,
			isSuccess: isResetSuccess,
		},
	] = useResetPasswordMutation();
	const router = useRouter();
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
		},
		resolver: yupResolver(forgotPasswordSchema),
	});

	const onSubmit = async (data) => {
		if (data.email) {
			resetPassword(data.email);
			setEmail(data.email);
			reset();
			return;
		}
	};
	useEffect(() => {
		if (isResetSuccess) {
			setSendEmailRP(true);
			dispatch(setEmailResetPassword(email));
			dispatch(sendEmailResetPassword(sendEmailRP));
			router.push('/auth/recovery-password/message');
		}
	}, [isResetSuccess, router, dispatch, sendEmailRP, email]);

	return {
		register,
		errors,
		handleSubmit,
		onSubmit,
		isResetLoading,
	};
};

//==============================================================confirm password=============================================

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
		tokenResetPassword,
	};
};
//================================================= verify email and reset email==============================================
export const useVerifyEmailRP = () => {
	const router = useRouter();
	const senEmail = useSelector((state) => state.auth.sendEmailResetPassword);

	const email = useSelector((state) => state.auth.emailReset);

	const [resent, setResent] = useState(false);

	const [
		resetPassword,
		{
			data: resetPasswordData,
			isLoading: isResetLoading,
			error: ResetPasswordError,
			isError: isErrResetPassword,
			isSuccess: isResetSuccess,
		},
	] = useResetPasswordMutation();

	const handleChange = () => {
		setResent(true);
		resetPassword({ userBody: email });
	};
	useEffect(() => {
		if (senEmail === false && email === '') {
			router.push('/auth/login');
		}
	}, [senEmail, email, router]);

	return {
		handleChange,
		resent,
		isResetLoading,
	};
};
