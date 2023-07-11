import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { addProductSchema } from '@/validations/FormProductValitacion';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
export const useAddProduct = () => {
	const [image, setImage] = useState(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: '',
			price: '',
			stock: '',
			provider: '',
			category: '',
			image: '',
			description: '',
		},
		resolver: yupResolver(addProductSchema),
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return {
		image,
		register,
		setImage,
		handleSubmit,
		onSubmit,
		errors,
	};
};
