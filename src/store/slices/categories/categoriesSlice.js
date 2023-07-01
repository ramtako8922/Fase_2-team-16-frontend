
import { createSlice } from '@reduxjs/toolkit';
const initialState={
    name: '',
    description: ''
   

}
export const CategorySlice = createSlice({
name: 'Category',
initialState:initialState,
        


reducers: {
    addcategory: (state, action) => {
        state.name=action.payload
        state.description=action.payload

    }
        
},
});

export const { addcategory } = CategorySlice.actions;
export default CategorySlice.reducer;
