import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//================================ Login Validation  ================================//
export const loginSchema = yup.object().shape({
	email: yup
		.string()
		.email('email is not valid')
		.matches(
			/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
			'email is not valid'
		)
		.required('email is required field'),
	password: yup.string().min(6).max(20).required('password is required field'),
});

//================================ NewPassword Validation  ================================//

export const registerSchema = yup.object().shape({
	email: yup
		.string()
		.email('email is not valid')
		.matches(
			/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
			'email is not valid'
		)
		.required('email is required field'),
	password: yup.string().min(6).max(20).required('password is required field'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match'),
});

//========================= Forgot Password Validation email ===============================//

export const forgotPasswordSchema = yup.object().shape({
	email: yup
		.string()
		.email('email is not valid')
		.required('email is required field'),
});

//================================ Reset Password Validation  ================================//
export const resetPasswordSchema = yup.object().shape({
	password: yup
		.string()
		.min(6, 'Password must be al min 6 characters long')
		.max(20, 'Password must be at least 20 characters long')
		.matches(
			/^(?=.*[A-Z])/,
			'Password must contain at least one uppercase letter'
		)
		.matches(
			/^(?=.*[a-z])/,
			'Password must contain at least one lowercase letter'
		)
		.matches(/^(?=.*[0-9])/, 'Password must contain at least one number')
		.matches(
			/^(?=.*[!@#$%^&*])/,
			'Password must contain at least one special character'
		)
		.required('password is required field'),

	confirm_password: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match'),
});
//========================= Register new user Validation  ================================//

export const registerUserSchema = yup.object().shape({
	firstName: yup.string().required('first Name is required '),
	lastName: yup.string().required('last name is required '),
	email: yup
		.string()
		.email('email is not valid')
		.matches(
			/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
			'email is not valid '
		)
		.required('email is required field'),
	password: yup
		.string()
		.min(6)
		.max(20)
		.required('password is required field')
		.min(6, 'Password must be al min 6 characters long')
		.max(20, 'Password must be at least 20 characters long')
		.matches(
			/^(?=.*[A-Z])/,
			'Password must contain at least one uppercase letter'
		)
		.matches(
			/^(?=.*[a-z])/,
			'Password must contain at least one lowercase letter'
		)
		.matches(/^(?=.*[0-9])/, 'Password must contain at least one number')
		.matches(
			/^(?=.*[!@#$%^&*])/,
			'Password must contain at least one special character'
		)
		.required('Password is required field'),
	confirm_password: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match'),
});
