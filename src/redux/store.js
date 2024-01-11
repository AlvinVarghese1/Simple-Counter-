import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const store = configureStore({
    //reducer can only update value of state in store
    //reducer key is redefine (object which can hold more than one reducer)

    //To create action file, CreateAction()
    //To create reducer file, CreateReducer() 

    reducer:{
        //reducer is coming from counterSlice since we are export reducer as export default
            counter:counterSlice
    }


})