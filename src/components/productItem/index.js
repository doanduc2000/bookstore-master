import React from 'react';
import { Link } from 'react-router-dom';
import './productItem.css';
const ProductItem = (props) => {
  return (
    <div className='productItem'>
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt='' />
        <div className='product__text'>
          <span className='productItem__name'>{props.name}</span>
          <span className='productItem__cost'>{props.cost}đ</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
