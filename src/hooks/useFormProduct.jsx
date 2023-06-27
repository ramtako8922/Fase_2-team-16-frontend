import React from 'react'
import { addProduct, initialState } from '@/store/slices/products/ProductsSlice'
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid'
import { useCreateProductMutation } from '@/store/slices/apis';
import { useState } from 'react';

function useFormProduct() {

    const [form, setForm] = useState(initialState)
    const dispatch = useDispatch();
    const [createProduct] = useCreateProductMutation()

    const handlerChange = e => {
        //console.log("e",e)
        setForm({
           // ...form,
            [e.target.name]: e.target.value
            
        });
        //console.log(form)
    }

    const handlerSubmit = (e) => {
        console.log("e",e)
        e.preventDefault();
        const{nameproduct,description,price, quantity,category}=e
        const data={
            nameproduct,
            description,
            price, 
            quantity,
            category

        }
        console.log(e.target.name)

        dispatch(addProduct({
            ...form,
            id: uuid(),
            [e.target.name]: e.target.value
        }))
       
        createProduct(form)

        


    }


    return {
        handlerChange,
        handlerSubmit,
        createProduct
    }
       
    
}

export default useFormProduct
