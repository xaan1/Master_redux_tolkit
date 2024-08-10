
// store redux

import { configureStore } from "@reduxjs/toolkit";


import counterSlice from "./ConterSlice"
import blogSlice from "./blogSlice"
const store = configureStore({

    reducer : {
        counter : counterSlice,
        blog  : blogSlice
    }
})


export default store