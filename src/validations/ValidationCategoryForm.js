import { yupResolver } from '@hookform/resolvers/yup';
import *as youp from 'yup';

export const  CategorySchema = youp.object().shape({
  
    //---------------------------name category Validations---------------------//
  namecategory:youp.
  string().
  required("the field is required").
  
  //---------------------------description category Validations---------------------//
  matches(/^[A-Z][^0-9].*/,'The name  should contains initial upercase'),
  description:youp.
  string().
  required().
  min(10,"min long of the text is 10 characters")
  .max(80, 'max long of the text is 80 characters').
  
  matches(/^[A-Z][^0-9].*/,'The name  should contains initial upercase')
   
  
});