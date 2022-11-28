import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CartItem from '../../components/cartItem';
import { cartListSelector } from '../../features/cart/cartSlice';
import { formatNumber } from '../../utils/help';
import './cart.css';

const Cart = () => {
  const history = useHistory();
  const cartData = useSelector(cartListSelector);
  let sum = 0;
  cartData.forEach((e) => {
    sum += e.number * e.cost;
  });
  return (
    <div className='cart'>
      <div className='container' style={{ backgroundColor: '#fff' }}>
        <div className='cart__title'>{cartData.length} Sản phẩm</div>
        <div className='cart__box'>
          <div className='cart__left'>
            {cartData.map((item) => (
              <CartItem {...item} key={item.id} />
            ))}
          </div>
          <div className='cart__right'>
            <div className='cart__total'>
              <span className='cart__text'>Thành tiền</span>
              <span className='cart__money'>{formatNumber(sum)}đ</span>
            </div>
            <div className='cart__btn'>
              <button
                className='cart__checkout'
                onClick={(e) => {
                  history.push('/checkout');
                  e.preventDefault();
                }}
              >
                Thanh toán ngay
              </button>
              <button
                className='cart__continue'
                onClick={(e) => {
                  history.push('/product');
                  e.preventDefault();
                }}
              >
                Tiếp tục mua hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
