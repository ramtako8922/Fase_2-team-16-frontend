import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//================================ Form Add New Product Validation  ================================//
const MAX_FILE_SIZE = 1000000;
const validFileExtensions = {
	image: ['jpg', 'png', 'jpeg', 'svg', 'webp'],
};
function isValidFileType(fileName, fileType) {
	return (
		fileName &&
		validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1
	);
}

export const addProductSchema = yup.object().shape({
	name: yup
		.string()
		.required('❌ Name is required field')
		.min(10, '❌ Name must be at least 10 characters')
		.max(30, '❌ Name must be at most 40 characters'),
	price: yup
		.number()
		.typeError('❌ Price must be a number')
		.positive('❌ Price must be a positive number')
		.min(1, '❌ Price must be at least 1')
		.required('❌ Price is required field'),
	stock: yup
		.number()
		.min(1, '❌ Price must be at least 1')
		.typeError('❌ Stock must be a number')
		.positive('❌ Stock must be a positive number')
		.required('❌ Stock is required field'),
	provider: yup.string().required('❌ Provider is required field'),
	category: yup.string().required('❌Category is required field'),
	image: yup
		.mixed()
		.test('name', '❌ Image is required', (value) => {
			return value[0] && value[0].name !== '';
		})
		.test('fileSize', '❌ The image is too large', (value) => {
			return value[0] && value[0].size <= MAX_FILE_SIZE;
		})
		.test('type', '❌ We only support image', (value) => {
			return value[0] && value[0].type.includes('image');
		}),
	description: yup
		.string()
		.required('❌ Description is required field')
		.min(20, '❌ Description must be at least 20 characters')
		.max(30, '❌ Description must be at most 30 characters'),
});

//================================ Form Add New Category Validation  ================================//
export const addCategorySchema = yup.object().shape({
	name: yup
		.string()
		.required('❌ Name is required field')
		.min(5, '❌ Name must be at least 5 characters')
		.max(30, '❌ Name must be at most 40 characters'),
	description: yup
		.string()
		.required('❌ Description is required field')
		.min(20, '❌ Description must be at least 20 characters')
		.max(350, '❌ Description must be at most 350 characters'),
});
