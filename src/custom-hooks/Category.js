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
	useEditCategoryMutation,
} from '@/store/slices/apis';
import { useEffect, useState } from 'react';
import { CategoryScale } from 'chart.js';

export const useAddCategory = () => {
	const [categories, setCategories] = useState([]);
	const [open, setOpen] = useState(false);
	const [openEdit, setOpenEdit] = useState(false); // [1
	const [selectCategory, setSelectCategory] = useState();
	const[page,setPage]=useState(1)
	const pagesNumber=[]
	const[itemPagitantion,SetItemPagintation]=useState([])
	const[CategoryPerPage, setCategoryPerPage]=useState(3)
	const lastIndex=page*CategoryPerPage;
	const firtsIndex=lastIndex-CategoryPerPage


	const {
		data: dataCategories,
		isLoading: isLoandingCategories,
		isFetching: isFetchingCategories,
		isError: isCategoriesError,
		error: categoriesError,
	} = useGetCategoryQuery(page);
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

	const [
		editCategory,
		{
			isSuccess: isSuccessEditCategory,
			data: dataEditCategory,
			isError: isEditError,
			isLoading: isLoandingEditCategory,
			error: editCategoryError,
			isUninitialized: isUninitializedEditCategory,
		},
	] = useEditCategoryMutation();

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

	const {
		register: registerEdit,
		handleSubmit: handleSubmitEdit,
		formState: { errors: errorsEdit },
	} = useForm({
		defaultValues: {
			name: selectCategory?.name,
			description: selectCategory?.description,
		},
		resolver: yupResolver(addCategorySchema),
	});

	const onSubmit = (data) => {
		addCategory(data);
	};
	const handleDeleteCategory = () => {
		deleteCategory(selectCategory.id);
	};
	const onSubmitEdit = ({ name, description }) => {
		const data = {
			id: selectCategory.id,
			name,
			description,
		};
		editCategory(data);
	};
	console.log(errorsEdit);

	useEffect(() => {
		if (dataCategories) {
			
			setCategories(dataCategories.categories);
			for (let i=1; i<=dataCategories.limit/CategoryPerPage;i++){
				pagesNumber.push(i);
				console.log(pagesNumber)
				
			}
			
			
			console.log(page)
			console.log(lastIndex)
			console.log(firtsIndex)
			console.log(dataCategories)
		}

		SetItemPagintation(pagesNumber)
		
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
			case isSuccessEditCategory:
				success(dataEditCategory?.message);
				setOpenEdit(false);
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
		isSuccessEditCategory,
		dataEditCategory,
	]);
	const previusPage=()=>{
		setPage(page-1)
	}

	const nextPage=()=>{
		setPage(page+1)
	}

	const onPage=(p)=>{
		setPage(p)
	}

	return {
		register,
		handleSubmit,
		onSubmit,
		errors,
		categories,
		dataCategories,
		isLoandingCategory,
		handleDeleteCategory,
		isLoandingDeleteCategory,
		isSuccessDeleteCategory,
		isUninitializedDeleteCategory,
		open,
		setOpen,
		setSelectCategory,
		selectCategory,
		setOpenEdit,
		openEdit,
		onSubmitEdit,
		registerEdit,
		handleSubmitEdit,
		errorsEdit,
		isLoandingEditCategory,
		isFetchingCategories,
		page,
		setPage,
		itemPagitantion,
		nextPage,
		previusPage,
		onPage,
		CategoryPerPage,
		lastIndex,
		firtsIndex
		
		
	};
};