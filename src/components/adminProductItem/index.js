import React from 'react';
import './adminProductItem.css';

const AdminProductItem = (props) => {
  return (
    <div className='adminProductItem'>
      <img src={props.image} alt='' />
      <div className='adminProduct__text'>
        <span className='adminProductItem__name'>{props.name}</span>
        <span className='adminProductItem__cost'>{props.cost}đ</span>
      </div>
    </div>
  );
};

export default AdminProductItem;
