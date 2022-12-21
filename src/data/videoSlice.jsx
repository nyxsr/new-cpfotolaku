import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:'videoSlice',
    initialState:{
        isPlay:false,
        id:null
    },
    reducers:{
        SET_PLAY:(state,action) =>{
            if (state.id) {
                
            }
        }
    }
})

export const {SET_PLAY} = videoSlice.actions

export default videoSlice.reducer