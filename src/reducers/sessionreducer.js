// reducers/sessionReducer.js
import { createReducer } from '@reduxjs/toolkit';
import { login, logout } from '../actions/sessionActions'; // Import action creators

const initialState = {
  isLoggedIn: false,
  user: null
};

const sessionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    })
    .addCase(logout, (state) => {
      state.isLoggedIn = false;
      state.user = null;
    });
});

export default sessionReducer;
