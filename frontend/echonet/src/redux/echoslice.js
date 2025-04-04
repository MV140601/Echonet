import { createSlice } from "@reduxjs/toolkit";

const echoSlice=createSlice({
    name:"echo",
    initialState:{
        Echos:null,
        refresh:false
    },
    reducers:{
       getallEchos:(state,action)=>{
        state.Echos=action.payload
       }, getRefresh:(state)=>{
        state.refresh = !state.refresh;
    },
    getIsActive:(state,action)=>{
        state.isActive = action.payload;
    }
    }
})

export const {getallEchos,getIsActive,getRefresh}=echoSlice.actions;
export default echoSlice.reducer;