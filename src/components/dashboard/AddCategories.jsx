import { useAddCategory } from '@/custom-hooks/Category';
import { ToastContainer } from 'react-toastify';
import { LoaderCategory } from '../loaders/Loaders';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import Modal from '../Modal';
import { useEffect } from 'react';
import PaginationCategory from '../PaginationCategory';

const AddCategories = () => {
	const {
		register,
		handleSubmit,
		onSubmit,
		categories,
		isLoandingCategory,
		errors,
		handleDeleteCategory,
		isLoandingDeleteCategory,
		isSuccessDeleteCategory,
		isUninitializedDeleteCategory,
		selectCategory,
		open,
		setOpen,
		setSelectCategory,
		setOpenEdit,
		openEdit,
		registerEdit,
		handleSubmitEdit,
		onSubmitEdit,
		errorsEdit,
		isLoandingEditCategory,
	} = useAddCategory();

	useEffect(() => {
		if (isSuccessDeleteCategory) {
			setOpen(false);
		}
	}, [isSuccessDeleteCategory, setOpen]);

	const InputName = ({ name, errors, type, msg }) => {
		return (
			<>
				<label
					htmlFor={name}
					className='w-full font-semibold'>
					{name}
				</label>
				<input
					type={type}
					name={name}
					id={name}
					className='w-full bg-blue-50 p-1 rounded-md lg:p-[3px] lg:rounded-sm lg:text-xs focus:border-slate-50 border-[1px]'
					{...register(name)}
				/>
				{errors.name?.message ? (
					<h3 className='text-error italic text-xs w-full'>
						{errors.name?.message}
					</h3>
				) : (
					<h3 className='text-slate-400 italic text-xs w-full'>{msg}</h3>
				)}
			</>
		);
	};

	const TextArea = ({ name, errors, msg }) => {
		return (
			<>
				<label
					htmlFor={name}
					className='w-full font-semibold'>
					{name}
				</label>
				<textarea
					name={name}
					id={name}
					className='w-full resize-none bg-blue-50 p-1 rounded-md lg:p-[3px] lg:rounded-sm lg:text-xs focus:border-slate-50 border-[1px]'
					rows='10'
					{...register(name)}
				/>
				{errors.description?.message ? (
					<h3 className='text-error italic text-xs w-full'>
						{errors.description?.message}
					</h3>
				) : (
					<h3 className='text-slate-400 italic text-xs w-full'>{msg}</h3>
				)}
			</>
		);
	};

	return (
		<>
			<div className=' flex flex-wrap  h-full w-full p-4 '>
				<div className='flex justify-center items-center  w-full h-auto  '>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='w-full lg:w-[60rem] flex justify-center items-center flex-col gap-2 bg-white shadow-md p-6 rounded-md'>
						{isLoandingCategory ? (
							<LoaderCategory />
						) : (
							<h1 className='w-full font-bold uppercase text-center '>
								Add Categories
							</h1>
						)}
						<InputName
							name='name'
							register={register}
							errors={errors}
							type='text'
							msg='The name have min 10 and max 30 characteres'
						/>
						<TextArea
							name='description'
							register={register}
							errors={errors}
							msg='The description have min 10 and max 300 characteres'
						/>

						<button
							disabled={isLoandingCategory}
							className='bg-blue-950 text-white p-2 pl-4 pr-4 rounded-md cursor-pointer hover:bg-blue-900  transform active:scale-x-75 transition-transform text-sm'>
							Add Category
						</button>
					</form>
				</div>

				<div className='lg:col-span-1 w-full h-auto mt-8 flex justify-center items-center flex-col gap-4  '>
					<h2 className='font-bold text-center lg:hidden'>Categories</h2>

					{categories.map((item) => (
						<div
							key={item.id}
							className='w-full h-auto bg-white rounded-md shadow-md p-4'>
							<div className='flex flex-col gap-2 pb-2'>
								<h5>
									<b>Id: </b>
									{item.id}
								</h5>
								<h4>
									<b>Name:</b> {item.name}
								</h4>
							</div>
							<div>
								<h4 className='font-bold'>Description:</h4>
								<p className=' flex  w-auto h-auto justify-normal'>
									{item.description}
								</p>
							</div>
							<div className=' flex justify-center items-center m-4   md:gap-5 gap-2'>
								<button
									onClick={() => {
										setOpenEdit(true);
										setSelectCategory({
											id: item.id,
											name: item.name,
											description: item.description,
										});
									}}
									className='relative inline-flex items-center justify-center md:p-4  px-5  md:px-8   py-1  md:py-1 lg:px-10 overflow-hidden font-medium text-indigo-700 transition duration-300 ease-out border-2  rounded-full shadow-md group'>
									<span className='absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease text-sm md:text-base'>
										<AiFillEdit className='w-6 h-6' />
									</span>
									<span className='absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease text-sm md:text-base'>
										Edit
									</span>
									<span className='relative invisible text-sm md:text-base'>
										Edit
									</span>
								</button>
								<button
									onClick={() => {
										setOpen(true);
										setSelectCategory({
											id: item.id,
											name: item.name,
											description: item.description,
										});
									}}
									className='relative inline-flex items-center justify-center md:p-4 px-4 md:px-6  py-1 md:py-1 lg:px-8 overflow-hidden font-medium text-red-600 transition duration-300 ease-out border-2 rounded-full shadow-md group'>
									<span className='absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease'>
										<RiDeleteBin2Fill className='w-6 h-6' />
									</span>
									<span className='absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease text-sm md:text-base'>
										Delete
									</span>
									<span className='relative invisible text-sm md:text-base'>
										Delete
									</span>
								</button>
							</div>
						</div>
					))}
				</div>
				<PaginationCategory ></PaginationCategory>
				<ToastContainer
					limit={1}
					className='text-sm md:text-base'
				/>
				<Modal
					msg={'⚠️ Notifications'}
					open={open}
					setOpen={setOpen}>
					<div className='flex justify-center items-center w-full h-auto flex-col'>
						<h3 className='font-semibold'>Are you sure eliminate Category?</h3>
						<h4>{selectCategory?.name}</h4>
						{isLoandingDeleteCategory ? (
							<LoaderCategory />
						) : (
							<div className='w-full h-20 flex justify-center items-center gap-2'>
								<button
									onClick={() => handleDeleteCategory()}
									className='w-24 bg-blue-600 text-white  uppercase font-bold text-sm p-1 rounded-lg  outline-none  shadow-lg transform active:scale-x-75 transition-transform'>
									Yes
								</button>
								<button
									onClick={() => setOpen(false)}
									className='w-24 bg-red-600 text-white  uppercase font-bold text-sm p-1 rounded-lg  outline-none  shadow-lg transform active:scale-x-75 transition-transform'>
									No
								</button>
							</div>
						)}
					</div>
				</Modal>
				<Modal
					msg={'Edit '}
					open={openEdit}
					setOpen={setOpenEdit}>
					<div className='flex justify-center items-center  w-full h-auto  '>
						<form
							onSubmit={handleSubmitEdit(onSubmitEdit)}
							className='w-full lg:w-[60rem] flex justify-center items-center flex-col gap-2  p-2 pb-4 rounded-md'>
							{isLoandingEditCategory ? (
								<LoaderCategory />
							) : (
								<h1 className='w-full font-bold uppercase text-center '>
									Edit Categories
								</h1>
							)}
							<label
								htmlFor='nameEdit'
								className='w-full font-semibold'>
								Name
							</label>
							<input
								defaultValue={selectCategory?.name}
								name='name'
								type='text'
								className='w-full bg-blue-50 p-1 rounded-md lg:p-[3px] lg:rounded-sm lg:text-xs focus:border-slate-50 border-[1px]'
								{...registerEdit('name')}
							/>
							{errorsEdit.description?.message ? (
								<h3 className='text-error italic text-xs w-full'>
									{errorsEdit.name?.message}
								</h3>
							) : (
								<h3 className='text-slate-400 italic text-xs w-full'>
									The description have min 10 and max 300 characteres
								</h3>
							)}
							<label
								htmlFor='description'
								className='w-full font-semibold'>
								Description
							</label>
							<textarea
								name='description'
								id='description'
								defaultValue={selectCategory?.description}
								className='w-full resize-none bg-blue-50 p-1 rounded-md lg:p-[3px] lg:rounded-sm lg:text-xs focus:border-slate-50 border-[1px]'
								rows='15'
								{...registerEdit('description')}
							/>
							{errorsEdit.description?.message ? (
								<h3 className='text-error italic text-xs w-full'>
									{errorsEdit.description?.message}
								</h3>
							) : (
								<h3 className='text-slate-400 italic text-xs w-full'>
									The description have min 10 and max 30 characteres
								</h3>
							)}
							<button
								disabled={isLoandingCategory}
								className='bg-blue-950 text-white p-2  pl-4 pr-4 rounded-md cursor-pointer hover:bg-blue-900  transform active:scale-x-75 transition-transform text-sm'>
								Save Changes
							</button>
						</form>
					</div>
				</Modal>
			</div>
		</>
	);
};

export default AddCategories;