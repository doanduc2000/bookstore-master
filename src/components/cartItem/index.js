import React from 'react';

const CartItem = (props) => {
  return (
    <div className='cart__item'>
      <img src={props.image} />
      <div className='cart__text'>
        <div className='cart__info'>
          <span className='cart__name'>{''}</span>
          <span className='cart__category'>Thương hiệu: Sách thiếu nhi</span>
          <span className='cart__delete'>Xóa</span>
        </div>
        <div className='cart__price'>{''}đ</div>
        <div className='cart__number'>
          <button onClick={''}>-</button>
          <input type='text' value={''} disabled />
          <button onClick={''}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
