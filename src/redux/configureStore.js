import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authenticationReducer } from './user/authentication';
import categorySlice from './Category/categorySlice';
import itemSlice from './Item/itemSlice';

const token = localStorage.getItem('token');
const initialState = {
  auth: {
    token: token || null,
    isAuthenticated: !!token,
  },
};

const rootReducer = combineReducers({
  auth: authenticationReducer,
  categories: categorySlice,
  items: itemSlice,
});

export default configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
