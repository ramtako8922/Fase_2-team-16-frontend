import React from 'react';
import {
	addProduct,
	initialState,
} from '@/store/slices/products/ProductsSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { useCreateProductMutation } from '@/store/slices/apis';
import { useState } from 'react';

function useFormProduct() {
	const [form, setForm] = useState(initialState);
	const dispatch = useDispatch();
	const [createProduct] = useCreateProductMutation();

	const handlerChange = (e) => {
		setForm({
			// ...form,
			[e.target.name]: e.target.value,
		});
	};

	const handlerSubmit = (e) => {
		e.preventDefault();

		const { nameproduct, description, price, quantity } = e.target;

		const product = {
			id: uuid(),
			name: nameproduct.value,
			description: description.value,
			price: price.value,
			quantity: quantity.value,
		};

		createProduct(product);
	};

	return {
		handlerChange,
		handlerSubmit,
		createProduct,
	};
}

export default useFormProduct;
