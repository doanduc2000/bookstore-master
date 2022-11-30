import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartsAction } from '../../features/cart/cartSlice';
import { formatNumber } from '../../utils/help';

const CartItem = ({ id, image, name, cost, number }) => {
  const [numberic, setNumberic] = useState(number);
  const dispatch = useDispatch();
  const handleDecrease = (e) => {
    if (numberic <= 0) {
      setNumberic(0);
    } else {
      setNumberic(numberic - 1);
    }
    e.preventDefault();
  };
  const handleIncrease = (e) => {
    setNumberic(numberic + 1);
    e.preventDefault();
  };
  const handleRemoveItem = () => {
    dispatch(cartsAction.removeCartItem(id));
  };
  useEffect(() => {
    dispatch(cartsAction.setNumberItem({ id: id, number: numberic }));
    if (numberic <= 0) dispatch(cartsAction.removeCartItem(id));
  }, [numberic]);

  return (
    <div className='cart__item'>
      <img src={image} />
      <div className='cart__text'>
        <div className='cart__info'>
          <span className='cart__name'>{name}</span>
          <span className='cart__category'>Thương hiệu: Sách thiếu nhi</span>
          <span className='cart__delete' onClick={handleRemoveItem}>
            Xóa
          </span>
        </div>
        <div className='cart__price'>{formatNumber(cost * numberic)}đ</div>
        <div className='cart__number'>
          <button onClick={handleDecrease}>-</button>
          <input type='text' value={number} disabled />
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
