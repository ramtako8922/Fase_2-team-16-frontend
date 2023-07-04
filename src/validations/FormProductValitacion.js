import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//================================ Form Add New Product Validation  ================================//
export const addProductSchema = yup.object().shape({
	name: yup.string().required('Name is required field'),
	price: yup
		.number()
		.typeError('Price must be a number')
		.required('Price is required field'),
	stock: yup
		.number()
		.typeError('Stock must be a number')
		.required('Stock is required field'),
	provider: yup.string().required('Provider is required field'),
	category: yup.string().required('Category is required field'),
	image: yup.string().required('Image is required field'),
	description: yup.string().required('Description is required field'),
});
