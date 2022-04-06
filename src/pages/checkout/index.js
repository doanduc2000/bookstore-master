import React, { useState } from 'react';
import CheckoutItem from '../../components/checkoutItem';
import { checkoutData } from '../../mockData/product';
import './checkout.css';

const Checkout = () => {
  let provisional = 0;
  let transportFee = 20;
  return (
    <div className='checkout'>
      <div className='container'>
        <div className='checkout__box'>
          <div className='checkout__left'>
            <span className='checkout__title'>Thông tin nhận hàng</span>
            <div className='checkout__input'>
              <input type='text' placeholder='Email' />
              <input type='text' placeholder='Họ và tên' />
              <input type='text' placeholder='Số điện thoại' />
              <input type='text' placeholder='Địa chỉ' />
            </div>
            <span className='checkout__title'>Thanh toán</span>
            <div className='checkout__payment'>
              <input type='radio' id='payment' />
              <label htmlFor='payment'>Thanh toán bằng tiền mặt</label>
            </div>
          </div>
          <div className='checkout__right'>
            <div className='checkout__right-title'>
              <h3>Đơn hàng (3 sản phẩm)</h3>
            </div>
            <div className='checkout__right-content'>
              <div className='checkout__product'>
                {checkoutData.map((item, idx) => {
                  provisional += item.cost * item.total;
                  return <CheckoutItem key={idx} {...item} />;
                })}
              </div>
              <div className='checkout__price'>
                <div className='checkout__cost'>
                  <span>Tạm tính</span>
                  <span>{provisional}đ</span>
                </div>
                <div className='checkout__cost'>
                  <span>Phí vận chuyển</span>
                  <span>{transportFee}đ</span>
                </div>
              </div>
              <div className='checkout__total'>
                <div className='checkout__cost'>
                  <span className='checkout__total-title'>Tổng cộng</span>
                  <span className='checkout__total-desc'>{provisional + transportFee}đ</span>
                </div>
                <div className='checkout__action'>
                  <span> {'<'} Quay về giỏ hàng</span>
                  <button>Đặt hàng</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
