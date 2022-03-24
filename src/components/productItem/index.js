import React from 'react';
import './productItem.css';
const ProductItem = (props) => {
  return (
    <div className='productItem'>
      <img src={props.image} alt='' />
      <div className='product__text'>
        <span className='productItem__name'>{props.name}</span>
        <span className='productItem__cost'>{props.cost}đ</span>
      </div>
    </div>
  );
};

export default ProductItem;
