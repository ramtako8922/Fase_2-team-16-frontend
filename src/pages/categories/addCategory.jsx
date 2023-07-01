import React from 'react'
import CategoryFormLayout from '@/layouts/CategoryFormLayout'
import FormCategory from '@/components/FormCategory'
function addCategories() {
  return (
    <div>
       <CategoryFormLayout>
        <div>
        <FormCategory/>
        </div>

       </CategoryFormLayout>
      
    </div>
  )
}

export default addCategories
