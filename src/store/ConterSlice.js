
import { createSlice } from "@reduxjs/toolkit";



const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },

    reducers : {


        increment: (state) => {
            console.log('increment' , state)
            state.value += 1
        },

        decrement: (state) => {
            console.log('decreament' , state)
            state.value -= 1
        }


    }
    
})



export const { increment , decrement } = counterSlice.actions


export default counterSlice.reducer