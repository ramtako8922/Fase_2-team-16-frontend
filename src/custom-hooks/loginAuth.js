import { useState } from 'react';
import { useRouter } from 'next/router';
import { getUser } from '@/store/slices/auth';
import { useDispatch } from 'react-redux';
import { useLoginUserMutation } from '@/store/slices/apis';
import {
	success,
	errorRequest,
	warning,
} from '@/components/notifications/toaster-auth';

const initialState = {
	email: '',
	password: '',
};

export const useLoginUser = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [formValue, setFormValue] = useState(initialState);
	const { email, password } = formValue;
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
	const handleChange = (e) => {
		setFormValue({ ...formValue, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (email === '' || password === '') {
			warning(' Please refill fields');
			return;
		}
		try {
			const response = await loginUser(formValue);
			//console.log(response);

			if (response.data) {
				success('Login successfully');
				dispatch(getUser(response.data));
				router.push('/dashboard/home');
				setLoadingUser(false);
			}
			if (response.error) {
				errorRequest(response.error.data.message);
			}
		} catch (error) {
			console.log('err', error);
			errorRequest(error.data.message);
		}
	};
	return {
		handleChange,
		handleSubmit,
		isLoadingLogin,
		showPassword,
		setShowPassword,
	};
};
