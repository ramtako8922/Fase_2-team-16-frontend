import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import *as youp from 'yup';
import { CategorySchema } from '@/validations/ValidationCategoryForm.js';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { useCreateCategoryMutation } from '@/store/slices/apis';
import { useState } from 'react';
import {initialState} from '@/store/slices/categories/categoriesSlice'
import { Toast } from 'react-toastify/dist/components';
import { success } from '@/components/notifications/toastify-categories';



function useFormCategory() {
    const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			namecategory: '',
			description: '',
			
		},
		resolver: yupResolver(CategorySchema),
	});

	const [form,setForm]=useState(initialState)
	const dispatch = useDispatch();
	const [createCategory] = useCreateCategoryMutation();

	

	const onSubmit=  (e) => {


		const { namecategory, description } = e
		console.log("e",e)
		const category = {
			id: uuid(),
			namecategry: namecategory,
			description: description,
             
		};
        success()

         console.log(category)
		createCategory(category);
		reset()
	};

  return {
    reset,
    errors,
    handleSubmit,
    onSubmit,
    register,
    createCategory
  }
    
  
}

export default useFormCategory
