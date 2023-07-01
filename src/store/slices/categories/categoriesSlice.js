
import { createSlice } from '@reduxjs/toolkit';
const initialState={
    namecategory: '',
    description: ''
   

}
export const CategorySlice = createSlice({
name: 'Category',
initialState:initialState,
        


reducers: {
    addcategory: (state, action) => {
        state.namecategory=action.payload
        state.description=action.payload

    }
        
},
});

export const { addcategory } = CategorySlice.actions;
export default CategorySlice.reducer;
