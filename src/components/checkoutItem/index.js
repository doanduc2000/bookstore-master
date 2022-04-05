import React from 'react';
import './checkoutItem.css';

const CheckoutItem = () => {
  return (
    <div className='checkoutItem'>
      <div className='checkoutItem__main'>
        <div className='checkoutItem__info'>
          <img />
          <span className='checkoutItem__name'></span>
          <span className='checkoutItem__count'></span>
        </div>
        <div className='checkoutItem__cost'></div>
      </div>
    </div>
  );
};

export default CheckoutItem;
