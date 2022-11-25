import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CartItem from '../../components/cartItem';
import { cartData } from '../../mockData/product';
import './cart.css';

const Cart = () => {
  const history = useHistory();
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
              <span className='cart__money'>300000đ</span>
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
