import React from 'react';
import {
	addProduct,
	initialState,
} from '@/store/slices/products/ProductsSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { useCreateProductMutation } from '@/store/slices/apis';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ProductSchema } from '@/validations/ValidationProductForm';
import { yupResolver } from '@hookform/resolvers/yup';
import *as youp from 'yup';

function useFormProduct() {

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			productname: '',
			description: '',
			stoock: '',
			price: '',
			quantity: '',
			category:''
		},
		resolver: yupResolver(ProductSchema),
	});

	const [form,setForm]=useState(initialState)
	const dispatch = useDispatch();
	const [createProduct] = useCreateProductMutation();

	const handlerChange = (e) => {
		setForm({
			// ...form,
			[e.target.name]: e.target.value,
		});
	};

	const handlerSubmit= async (e) => {
		e.preventDefault();
		console.log("e",e)

		const { nameproduct, description,stoock, price, quantity,category } = e.target;
		console.log("e",e)
		const product = {
			id: uuid(),
			name: nameproduct.value,
			description: description.value,
            stoock:stoock.value,
			price: price.value,
			quantity: quantity.value,
            category:category.value 
		};
         console.log(product)
		createProduct(product);
		reset()
	};

	return {
		handlerChange,
		handlerSubmit,
		createProduct,
		errors,
		register,
		handleSubmit
	};
}

export default useFormProduct;
