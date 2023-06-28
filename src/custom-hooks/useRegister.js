import { useForm } from 'react-hook-form';
import { useRegisterUserMutation } from '@/store/slices/apis';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { registerUserSchema } from '@/validations/UserValidation';
import { useDispatch } from 'react-redux';
import { getEmailRegister } from '@/store/slices/auth';
import { getIsRegsiter } from '@/store/slices/auth';
import {
	success,
	errorRequest,
} from '../components/notifications/toaster-auth';
// ===============================register new account===============
export const useRegisterA = () => {
	const dispatch = useDispatch();
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirm_password: '',
		},
		resolver: yupResolver(registerUserSchema),
	});

	const [showPassword, setShowPassword] = useState(false);
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [isregister, setIsRegister] = useState(false);
	const [email, setEmail] = useState('');
	// };
	const router = useRouter();
	const [
		registerUser,
		{
			data: registerData,
			isLoading: isLoadingRegister,
			error: registerError,
			isError: isErr,
			isSuccess: registerSuccess,
		},
	] = useRegisterUserMutation();
	const onSubmit = async (e) => {
		const { firstName: name, lastName: lastname, email, password } = e;
		setEmail(email);
		const roles = ['user'];
		const user = {
			name,
			lastname,
			email,
			password,
			roles,
		};
		registerUser(user);
		reset();
	};
	useEffect(() => {
		if (registerSuccess) {
			success('register successfully');
			setIsRegister(true);
			dispatch(getEmailRegister(email));
			dispatch(getIsRegsiter(isregister));
			router.push('/auth/register/send-email');
		} else {
			if (registerError && registerError.data) {
				errorRequest(registerError.data.message);
			}
		}
	}, [registerSuccess, router, registerError, dispatch, isregister, email]);

	return {
		register,
		handleSubmit,
		errors,
		showPassword,
		onSubmit,
		isLoadingRegister,
		setShowPassword,
	};
};

// ============send email register=================
export const useInfoSendMail = () => {
	const router = useRouter();
	const emailRegister = useSelector((state) => state.auth.emailRegister);
	const isRegister = useSelector((state) => state.auth.isRegister);

	useEffect(() => {
		if (isRegister === false && emailRegister === '') {
			router.push('/auth/register');
		}
	}, [emailRegister, isRegister, router]);
	return;
};
