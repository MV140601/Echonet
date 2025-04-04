import {configureStore,combineReducers} from "@reduxjs/toolkit";
import userSlice from './userSlice.js'
import echoSlice from './echoslice.js'
const store=configureStore({
    reducer:{
        user:userSlice,
        echo:echoSlice
    }
})

export default store;