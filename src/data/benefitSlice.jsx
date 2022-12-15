import { createSlice } from "@reduxjs/toolkit";

const benefitView = createSlice({
    name:'benefitView',
    initialState:{
        isShow:false
    },
    reducers:{
        SET_SHOW:(state, action) =>{
            state.isShow = action.payload
        }
    }
})

export const {SET_SHOW} = benefitView.actions

export default benefitView.reducer