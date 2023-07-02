import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import *as youp from 'yup';
import { CategorySchema } from '@/validations/ValidationCategoryForm.js';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { useCreateCategoryMutation } from '@/store/slices/apis';
import { useState,  useEffect} from 'react';
import {addcategory, initialState} from '@/store/slices/categories/categoriesSlice'
import { success,errorRequest } from '@/components/notifications/toastify-categories';



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
	const [createCategory,{ 

    isSuccess:registerSuccess,
    error: registerError

}] = useCreateCategoryMutation();

	

	const onSubmit=  (e) => {


		const { namecategory, description } = e
		console.log("e",e)
		const category = {
			id: uuid(),
			namecategry: namecategory,
			description: description,
             
		};
       

         console.log(category)
		createCategory(category);
		reset()
		if (registerSuccess) {
			success("Category added succesfully")
			dispatch(addcategory(category));
			
		} else {
			if (registerError && registerError.data) {
				errorRequest(registerError.data.message);
			}
		}
		
	};

    // useEffect(() => {
	// 	if (registerSuccess) {
			
	// 		dispatch(addcategory(category));
			
	// 	} else {
	// 		if (registerError && registerError.data) {
	// 			errorRequest(registerError.data.message);
	// 		}
	// 	}
	// }, [registerSuccess,  registerError, dispatch]);


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
