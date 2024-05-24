// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Combine your reducers here

const store = configureStore({
  reducer: rootReducer
  // You can also pass middleware, enhancers, etc., if needed
});

export default store;
