const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  loading: false,
  filter: {
    _text: '',
    _page: 1,
    _limit: 10,
    sortBy: '',
  },
  products: [],
  _total: 0,
};
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.loading = true;
    },
    fetchProductsSuccess(state, action) {
      state.loading = false;
      state.products = action.payload.products;
      state._total = action.payload._total;
    },
    fetchProductsFailed(state, action) {
      state.loading = false;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
//action
export const productsActions = productsSlice.actions;
//selector
export const selectProductsLoading = (state) => state.products.loading;
export const selectProductsList = (state) => state.products.products;
export const selectProductsFilter = (state) => state.products.filter;
export const selectProductsTotal = (state) => state.products._total;
//reducer
const productsReducer = productsSlice.reducer;
export default productsReducer;
