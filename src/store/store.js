
import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./Authentication";
import BookReducer from "./BooKslice";
const store = configureStore({
    reducer: {
         auth : AuthReducer,
         book : BookReducer
    }
})


export default store;