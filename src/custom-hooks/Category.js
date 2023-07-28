import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addCategorySchema } from '@/validations/FormProductValitacion';
import { useForm } from 'react-hook-form';
import {
	success,
	errorRequest,
} from '../components/notifications/toaster-auth';
import {
	useGetCategoryQuery,
	useAddCategoryMutation,
	useDeleteCategoryMutation,
} from '@/store/slices/apis';
import { useEffect, useState } from 'react';

export const useAddCategory = () => {
	const [categories, setCategories] = useState([]);
	const [open, setOpen] = useState(false);
	const [selectCategory, setSelectCategory] = useState();
	const {
		data: dataCategories,
		isLoading: isLoandingCategories,
		isError: isCategoriesError,
		error: categoriesError,
	} = useGetCategoryQuery();
	const [
		addCategory,
		{
			isSuccess: isSuccessCategory,
			data: dataAddCategory,
			isError: isAddCategoryError,
			isLoading: isLoandingCategory,
			error: errorAddCategory,
		},
	] = useAddCategoryMutation();
	const [
		deleteCategory,
		{
			isSuccess: isSuccessDeleteCategory,
			data: dataDeleteCategory,
			isError: isDeleteError,
			isLoading: isLoandingDeleteCategory,
			error: deleteCategoryError,
			isUninitialized: isUninitializedDeleteCategory,
		},
	] = useDeleteCategoryMutation();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: '',
			description: '',
		},
		resolver: yupResolver(addCategorySchema),
	});

	const onSubmit = (data) => {
		addCategory(data);
	};
	const handleDeleteCategory = () => {
		deleteCategory(selectCategory.id);
	};

	useEffect(() => {
		if (dataCategories) {
			setCategories(dataCategories.categories);
		}
	}, [dataCategories]);

	useEffect(() => {
		switch (true) {
			case isSuccessCategory:
				success(dataAddCategory?.message);
				break;
			case isSuccessDeleteCategory:
				success(dataDeleteCategory?.message);
				setOpen(false);
				break;
			case isCategoriesError:
				errorRequest(categoriesError?.data?.message);
				break;
			case isAddCategoryError:
				errorRequest(errorAddCategory?.data?.message);
				break;
			case isDeleteError:
				errorRequest(deleteCategoryError?.data?.message);
				break;
		}
	}, [
		isSuccessCategory,
		isSuccessDeleteCategory,
		dataAddCategory,
		dataDeleteCategory,
		isCategoriesError,
		categoriesError,
		isAddCategoryError,
		errorAddCategory,
		isDeleteError,
		deleteCategoryError,
	]);

	return {
		register,
		handleSubmit,
		onSubmit,
		errors,
		categories,
		isLoandingCategory,
		handleDeleteCategory,
		isLoandingDeleteCategory,
		isSuccessDeleteCategory,
		isUninitializedDeleteCategory,
		open,
		setOpen,
		setSelectCategory,
		selectCategory,
	};
};
