import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { addProductSchema } from '@/validations/FormProductValitacion';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useGetCategoryQuery, useGetProviderQuery } from '@/store/slices/apis';
export const useAddProduct = () => {
	const [image, setImage] = useState(null);
	const [categories, setCategories] = useState([]);
	const [providers, setProviders] = useState([]);
	const { data: category } = useGetCategoryQuery();
	const { data: provider } = useGetProviderQuery();

	useEffect(() => {
		if (category) {
			setCategories(category.categories);
		}
		if (provider) {
			setProviders(provider.providers);
		}
	}, [category, provider]);

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
		console.log('data', data);
		let idProvider = providers.find((item) => item.name === data.provider);
		let idCategory = categories.find((item) => item.name === data.category);
		let stock = parseFloat(data.stock).toFixed(2);
		let price = parseFloat(data.price).toFixed(2);
		const formData = new FormData();
		formData.append('name', data.name);
		formData.append('description', data.description);
		formData.append('stock', stock);
		formData.append('price', price);
		formData.append('image', data.image[0]);
		formData.append('provider', idProvider?.id);
		formData.append('category', idCategory?.id);
		console.log(JSON.stringify(Object.fromEntries(formData)));
	};

	return {
		image,
		register,
		setImage,
		handleSubmit,
		onSubmit,
		errors,
		categories,
		providers,
	};
};
