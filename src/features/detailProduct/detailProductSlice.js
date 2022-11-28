import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const productItemSlice = createSlice({
  name: 'productItem',
  initialState: {
    id: 'uuidv4()',
    rate: '4.5',
    cate: 'Sản phẩm mới',
    trademark: 'Kim đồng',
    status: 'Còn hàng',
    name: 'Harry Potter and the Deathly Hallows (Paperback)',
    number: 1,
    cost: 252000,
    image:
      '//bizweb.dktcdn.net/thumb/large/100/386/441/products/harry-potter-and-the-deathly-hallows-paper-back-1.jpg?v=1636080026000',
  },
  reducers: {
    setNumberItem: (state, action) => {
      state.number = action.payload;
    },
  },
});
export default productItemSlice;
export const productItemSelector = (state) => state.productItem;
export const productItemAction = productItemSlice.actions;
export const productItemReducer = productItemSlice.reducer;
