import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name:"filter",
    initialState:{
        status:"All",
        color:null,
    },
    reducers:{
        updateStatusFilter:(state,action) =>{
            state.status= action.payload;

        },
        updateColorFilter:(state, action) =>{
            state.color= action.payload;

        },

        
    }
})

export const {updateStatusFilter, updateColorFilter} = filterSlice.actions;

export default filterSlice.reducer;