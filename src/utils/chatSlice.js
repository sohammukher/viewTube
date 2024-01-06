import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messeges:[]
    },

    reducers:{

        addMessages:(state,action)=>{

            state.messeges.splice(10,1);
            state.messeges.unshift(action.payload);
        }


    }
})


export const {addMessages}  = chatSlice.actions;
export default chatSlice.reducer;

