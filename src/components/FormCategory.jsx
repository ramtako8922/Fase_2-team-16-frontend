
import React from 'react'
import useFormCategory from '@/hooks/useFormCategory'
import { ToastContainer } from 'react-toastify';

function FormCategory() {
    const{handleSubmit, onSubmit, errors,register}=useFormCategory();
  return (

    <div className=''>
        <h2 className=' font-medium text-center mt-10 text-2xl' ><span className='text-2xl text-purple-500'>Register</span> New Category</h2>
      <div className='rounded-xl bg-slate-300 shadow-2xl h-full p-7 mt-4' >
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            
            <label htmlFor="namecategory" className='font-medium'>Name Categoy</label>
           <input type='text  '
           className='w-80 outline-none py-2 mt-3 focus:ring focus:ring-violet-300' 
           id='namecategory'
           name='namecategory'
           {...register('namecategory')}
           />
           <span className='text-red-500'>{errors.namecategory?.message}</span>
            <label htmlFor="descrition" className='mt-2 font-medium '>Description</label>
           <textarea className='w-80 outline-none py-5 mt-3 focus:ring focus:ring-violet-300' 
           id='description'
           name='description'
           rows={8}
           {...register('description')}
           />
            <span className='text-red-500'>{errors.description?.message}</span>
            < button
            type='submit'
            className=' bg-purple-500 hover:bg-purple-600 mt-5 h-12 font-medium text-white'
            >
            REGISTER
            </button>
        </form>
      
      </div>
      <ToastContainer limit={1} />
    </div>
    
  )
}

export default FormCategory
