import { call, put, takeLatest } from 'redux-saga/effects';
import { productsActions } from './productSlice';
import productApi from '../../apis/product';

function* fetchProductsList(action) {
  try {
    const response = yield call(productApi.getProducts, action.payload);
    yield put(productsActions.fetchProductsSuccess(response.data.data));
  } catch (e) {
    console.log('Fetch Product data failed', e);
    yield put(facilitiesActions.fetchProductsFailed());
  }
}
export default function* productSaga() {
  yield takeLatest(productsActions.fetchProducts.type, fetchProductsList);
}
