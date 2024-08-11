
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Book :   localStorage.getItem("Book") ? JSON.parse(localStorage.getItem("Book")) : [],
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    total : 0,
    CurrentEdit : null
}

const BookSlice =   createSlice({
    name : "books",
    initialState,
    reducers : {

        setCurrentEdit : (state, action) => {
            state.CurrentEdit = action.payload
        }




        ,


    


        addBook : (state, action) => {
            state.Book.push(action.payload)
            localStorage.setItem("Book", JSON.stringify(state.Book))
            
        },

        delteBook  : (state, action) => {
            state.Book = state.Book.filter((book) => book.id !== action.payload)
            localStorage.setItem("Book", JSON.stringify(state.Book))
        },

        handledetedBook  :  (state, action) => {


            const cpy = [...state.Book]


            const index = cpy.findIndex((book) => book.id ===  state.CurrentEdit)


            cpy[index] = {
                ...cpy[index],
                ...action.payload
            }

            state.Book = cpy


            // localStorage.setItem("blogs" , JSON.stringify(cpy))
            localStorage.setItem("Book", JSON.stringify(state.Book))



        },



        addToCart: (state, action) => {
            const index = state.cart.findIndex((book) => book.id === action.payload.id);

            if (index !== -1) {
                state.cart[index] = {
                    ...state.cart[index],
                    quantity: state.cart[index].quantity + 1
                };
            } else {
                state.cart.push({
                    ...action.payload,
                    quantity: 1
                });
            }

            localStorage.setItem("cart", JSON.stringify(state.cart));
        },



        clearCart : (state) => {
            state.cart = []
            localStorage.setItem("cart", JSON.stringify(state.cart));
        }

    }
})



export const { addBook  , delteBook ,setCurrentEdit , handledetedBook , addToCart , clearCart} = BookSlice.actions


export default BookSlice.reducer