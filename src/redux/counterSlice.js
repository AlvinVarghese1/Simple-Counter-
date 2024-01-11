import { createSlice } from "@reduxjs/toolkit";


export const counterSlice  = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    //actions are created inside this reducers key as objects
    reducers:{
        //logics to update state

        //func to increment number
        increment:(state)=>{
            state.value +=1
        },
        //func to decrement number
        decrement:(state)=>{
            state.value -=1
        }, 
        //func to reset
        reset:(state)=>{
            state.value = 0
        }

    }
})
//action is required by component inorder to update state
export const{increment , decrement, reset} = counterSlice.actions

//reducer is required to store to change the state value
export default counterSlice.reducer

