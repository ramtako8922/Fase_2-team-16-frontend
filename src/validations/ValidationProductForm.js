import { yupResolver } from '@hookform/resolvers/yup';
import *as youp from 'yup';

export const  ProductSchema = youp.object().shape({
  
    //---------------------------name category Validations---------------------//
  name:youp.
  string().
  required("the field is required"),

    //---------------------------description category Validations---------------------//
  description:youp.
  string().
  required().
  min(10,"min long of the text is 10 characters")
  .max(100, 'max long of the text is 80 characters'),

   
  
});