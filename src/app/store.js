import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productsReducer from '../features/product/productSlice';

const rootReducer = combineReducers({
  products: productsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
