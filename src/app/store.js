import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import createSagaMiddleware from 'redux-saga';
import { history } from '../utils/history';
import rootSaga from './rootSaga';
import productsReducer from '../features/product/productSlice';
import { cartsReducer } from '../features/cart/cartSlice';
import { productItemReducer } from '../features/detailProduct/detailProductSlice';

const rootReducer = combineReducers({
  router: connectRouter(history),
  products: productsReducer,
  carts: cartsReducer,
  productItem: productItemReducer,
});

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
});
sagaMiddleware.run(rootSaga);
