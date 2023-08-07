import React from 'react'
import { useAddCategory } from '@/custom-hooks/Category'

function PaginationCategory() {
  const{page, pagesNumber ,itemPagitantion,setPage,nextPage,previusPage,onPage, categories,dataCategories}=useAddCategory()
  return (
    <div className=" mt-2 w-full flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700 flex gap-1">
            Showing
            <span className="font-medium">1</span>
            to
            <span className="font-medium">{dataCategories==null?"espere":dataCategories.limit}</span>
            of
            <span className="font-medium">{dataCategories==null?"espere":dataCategories.total}</span>
            results
          </p>
        </div>
        
        <div >
          
          <nav 
            className=" w-full isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
           
            <a
              
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-black ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only" >Previous</span>
              <svg diSabled={`${page==1?true:false}`}  onClick={previusPage}
                className="h-5 w-5 disabled:bg-white"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                
              >
                <path
                  //   fill-rule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  //   clip-rule="evenodd"
                />
              </svg>
            </a>
            {itemPagitantion.map((noPage)=>(
              <div>
            <a
              
              onClick={()=>onPage(noPage)}
              className={ `relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${noPage===page?'bg-indigo-600 text-white':'bg-gray-300 text-black'}`}
            >
            {noPage}
            </a>
            </div>
               ))}
           
            <a 
              
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only" >Next</span>
              <svg onClick={nextPage}
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                diSabled={`${page==itemPagitantion.length?true:false}`}
              >
                <path
                  //   fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  //   clip-rule="evenodd"
                />
              </svg>
           
            </a>
            
          </nav>
          
        
        </div>
       
      </div>
    </div>
  )
}

export default PaginationCategory
