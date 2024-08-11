import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  auth: {
    isLoggin: localStorage.getItem('isLoggin') === 'true' ? true : false,
    CarrentUser: localStorage.getItem('CarrentUser') 
      ? JSON.parse(localStorage.getItem('CarrentUser'))
      : null,
  },
  users: JSON.parse(localStorage.getItem('users')) || [],
};

const Authentication = createSlice({
  name: 'auth',
  initialState,
  
  reducers: {
    login: (state, action) => {
      const user = state.users.find(
        user =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );
      console.log(user , "user");

      if (user) {
        state.auth.isLoggin = true;
        state.auth.CarrentUser = user;
        console.log(state.auth.isLoggin, "state.auth.isLoggin");
        console.log(state.auth.CarrentUser, "state.auth.CarrentUser");
        
        localStorage.setItem('isLoggin', true);
        localStorage.setItem('CarrentUser', JSON.stringify(state.auth.CarrentUser));
      }
    },

    logout: (state) => {
      state.auth.isLoggin = false;
      state.auth.CarrentUser = null;
      localStorage.removeItem('isLoggin');
      localStorage.removeItem('CarrentUser');
    },

    addUser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem('users', JSON.stringify(state.users));
    },
  },
});

export const { login, logout, addUser } = Authentication.actions;
export default Authentication.reducer;