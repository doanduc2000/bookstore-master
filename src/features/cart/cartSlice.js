import { createSlice } from '@reduxjs/toolkit';
import { cartData } from '../../mockData/product';

const cartsSlice = createSlice({
  name: 'carts',
  initialState: { data: cartData },
  reducers: {
    setNumberItem: (state, action) => {
      const currentCart = state.data.find((item) => item.id === action.payload.id);
      if (currentCart) currentCart.number = action.payload.number;
    },
    removeCartItem: (state, action) => {
      const currentCart = state.data.filter((item) => item.id !== action.payload);
      if (currentCart) state.data = currentCart;
    },
    addCartItem: (state, action) => {
      const currentCart = state.data.find((item) => item.id === action.payload.id);
      if (!currentCart) state.data.push(action.payload);
    },
  },
});
export default cartsSlice;
export const cartListSelector = (state) => state.carts.data;

export const cartsAction = cartsSlice.actions;
export const cartsReducer = cartsSlice.reducer;
