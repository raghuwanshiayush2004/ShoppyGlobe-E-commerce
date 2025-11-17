import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';
import searchReducer from './reducers/searchReducer';
import authReducer from './reducers/authReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
    auth: authReducer,
  },
});

export default store;