import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice(
    {
        name: "search",
        initialState:{},

        reducers:{
            cacheResults:(state,action)=>{
                // Merging Current and Previous Objects (Increasing the Number of Entries in the Cache Object)
                state = Object.assign(state,action.payload)
            },
        },
    });


export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;

