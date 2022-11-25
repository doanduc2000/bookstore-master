import React, { useState } from 'react';

const CartItem = ({ image, name, cost, number }) => {
  const [numberic, setNumberic] = useState(number);
  const handleDecrease = (e) => {
    numberic <= 0 ? setNumberic(0) : setNumberic(numberic - 1);
    e.preventDefault();
  };
  const handleIncrease = (e) => {
    setNumberic(numberic + 1);
    e.preventDefault();
  };
  return (
    numberic !== 0 && (
      <div className='cart__item'>
        <img src={image} />
        <div className='cart__text'>
          <div className='cart__info'>
            <span className='cart__name'>{name}</span>
            <span className='cart__category'>Thương hiệu: Sách thiếu nhi</span>
            <span className='cart__delete'>Xóa</span>
          </div>
          <div className='cart__price'>{cost * numberic}đ</div>
          <div className='cart__number'>
            <button onClick={handleDecrease}>-</button>
            <input type='text' value={numberic} disabled />
            <button onClick={handleIncrease}>+</button>
          </div>
        </div>
      </div>
    )
  );
};

export default CartItem;
