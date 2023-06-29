import { toast } from 'react-toastify';

export const success = (message) => {
	return toast.success(` ${message}`, {
		position: 'top-right',
		autoClose: 2800,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'light',
	});
};

export const errorRequest = (error) => {
	toast.error(` ${error}`, {
		position: 'top-right',
		autoClose: 2300,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'light',
	});
};

export const warning = (message) => {
	toast.warn(` ${message}`, {
		position: 'top-center',
		autoClose: 1800,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'dark',
	});
};
export const info = (message) => {
	toast.info(` ${message}`, {
		position: 'bottom-center',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'colored',
	});
};
