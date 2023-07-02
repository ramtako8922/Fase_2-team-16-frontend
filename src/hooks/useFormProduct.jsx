// import React from 'react';
// import {
// 	addProduct,
// 	initialState,
// } from '@/store/slices/products/ProductsSlice';
// import { useDispatch } from 'react-redux';
// import { v4 as uuid } from 'uuid';
// import { useCreateProductMutation } from '@/store/slices/apis';
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { ProductSchema } from '@/validations/ValidationProductForm';
// import { yupResolver } from '@hookform/resolvers/yup';
// import *as youp from 'yup';
// import { data } from 'autoprefixer';

// function useFormProduct() {

// 	const {
// 		register,
// 		reset,
// 		handleSubmit,
// 		formState: { errors },
// 	} = useForm({
// 		defaultValues: {
// 			nameproduct: '',
// 			description: '',
// 			stoock: '',
// 			price: '',
// 			quantity: '',
// 			category:''
// 		},
// 		resolver: yupResolver(ProductSchema),
// 	});

// 	const [form,setForm]=useState(initialState)
// 	const dispatch = useDispatch();
// 	const [createProduct] = useCreateProductMutation();

// 	const handlerChange = (e) => {
// 		setForm({
// 			// ...form,
// 			[e.target.name]: e.target.value,
// 		});
// 	};

// 	const onSubmit=  (e) => {


// 		const { nameproduct, description,stoock, price, quantity,category } = e
// 		console.log("e",e)
// 		const product = {
// 			id: uuid(),
// 			name: nameproduct,
// 			description: description,
//             stoock:stoock,
// 			price: price,
// 			quantity: quantity,
//             category:category 
// 		};
//          console.log(product)
// 		createProduct(product);
// 		reset()
// 	};

// 	return {
		
// 		onSubmit,
// 		createProduct,
// 		errors,
// 		register,
// 		handleSubmit
// 	};
// }

// export default useFormProduct;
