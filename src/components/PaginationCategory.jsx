import React from 'react'
import { useAddCategory } from '@/custom-hooks/Category'
import {
	RiArrowDropLeftFill,
  RiArrowDropRightFill
} from 'react-icons/ri';

function PaginationCategory() {
  const{page, pagesNumber ,itemPagitantion,setPage,nextPage,previusPage,onPage,isDisabled,setIsDisabled, categories,dataCategories,
        firtsIndex,lastIndex
  }=useAddCategory()
  return (
    <div className=" mt-2 w-full flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700 flex gap-1">
            Showing
            <span className="font-medium">{firtsIndex}</span>
            to
            <span className="font-medium">{dataCategories==null?"espere":lastIndex}</span>
            of
            <span className="font-medium">{dataCategories==null?"espere":dataCategories.limit}</span>
            results
          </p>
        </div>
        
        <div >
          
          <nav 
            className=" w-full isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
           
            <button
             disabled={`${page==1?"true":""}`}  
             onClick={previusPage}
              
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-black ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
            <RiArrowDropLeftFill/>  
              
                
            </button>
            {itemPagitantion.map((noPage)=>(
              <div>
            <button
              
              onClick={()=>onPage(noPage)}
              className={ `relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${noPage===page?'bg-indigo-600 text-white':'bg-gray-300 text-black'}`}
            >
            {noPage}
            </button>
            </div>
               ))}
           
            <button 
            onClick={nextPage}
            disabled={`${page===itemPagitantion.length?"true":""}`} 
              
              className=" ml-6 relative inline-flex items-center rounded-r-md px-2 py-2 text-black bg-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
             <RiArrowDropRightFill/>  
           
            </button>
            
          </nav>
          
        
        </div>
       
      </div>
    </div>
  )
}

export default PaginationCategory
