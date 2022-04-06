import React from 'react';
import './checkoutItem.css';

const CheckoutItem = (props) => {
  const { image, name, total, cost } = props;
  const totalPrice = total * cost;
  return (
    <div className='checkoutItem'>
      <div className='checkoutItem__main'>
        <div className='checkoutItem__info'>
          <img src={image} />
          <span className='checkoutItem__name'>{name}</span>
          <span className='checkoutItem__count'>x{total}</span>
        </div>
        <div className='checkoutItem__cost'>{totalPrice}đ</div>
      </div>
    </div>
  );
};

export default CheckoutItem;
