import React from 'react';
import { formatNumber } from '../../utils/help';
import './checkoutItem.css';

const CheckoutItem = (props) => {
  const { image, name, number, cost } = props;
  const totalPrice = number * cost;
  return (
    <div className='checkoutItem'>
      <div className='checkoutItem__main'>
        <div className='checkoutItem__info'>
          <img src={image} />
          <span className='checkoutItem__name'>{name}</span>
          <span className='checkoutItem__count'>x{number}</span>
        </div>
        <div className='checkoutItem__cost'>{formatNumber(totalPrice)}đ</div>
      </div>
    </div>
  );
};

export default CheckoutItem;
