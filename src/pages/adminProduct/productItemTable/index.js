import React, { useState } from 'react';
import arrowDown from '../../../assets/icons/arrowdown.svg';
import arrowUp from '../../../assets/icons/arrowup.svg';
import './productItemTable.css';
import deleteIcon from '../../../assets/icons/delete.svg';
import editIcon from '../../../assets/icons/edit.svg';
import closeIcon from '../../../assets/icons/close.svg';
import checkIcon from '../../../assets/icons/check.svg';

const ProductTableItem = (props) => {
  const [openAcc, setOpenAcc] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState({
    name: props.name,
    category: props.category,
    publish: props.publish,
    cost: props.cost,
    quantity: props.quantity,
  });
  const onHandeChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handeEditMode = (e) => {
    setIsEdit(!isEdit);

    e.preventDefault();
  };
  return (
    <>
      {!openAcc ? (
        <ul className='adminProduct__box'>
          <li className='product__name'>{props.name}</li>
          <li className='product__category'>{props.category}</li>
          <li className='product__trademark'>{props.publish}</li>
          <li className='product__price'>{props.cost}đ</li>
          <li className='product__quantity'>{props.quantity}</li>
          <li className='product__button'>
            <img className='w-5 h-5' src={arrowDown} alt='' onClick={() => setOpenAcc(!openAcc)} />
          </li>
        </ul>
      ) : (
        <div className='acc'>
          <div className='acc__header'>
            <div className='acc__title'>Chi tiết sản phẩm</div>
            <div className='acc__btnGroup'>
              <label className='acc__edit' onClick={handeEditMode}>
                {isEdit ? <img className='w-5 h-5' src={closeIcon} /> : <img className='w-5 h-5' src={editIcon} />}
              </label>
              <label className='acc__delete'>
                {isEdit ? <img className='w-5 h-5' src={checkIcon} /> : <img className='w-5 h-5' src={deleteIcon} />}
              </label>
              <label className='acc__cancel'>
                <img className='w-5 h-5' src={arrowUp} alt='' onClick={() => setOpenAcc(!openAcc)} />
              </label>
            </div>
          </div>
          <div className='acc__body'>
            <div className='acc_left'>
              <img src={props.image} />
            </div>
            <div className='acc_right'>
              <div className='inputForm'>
                <label htmlFor='code'>Mã sản phẩm</label>
                <input type='text' autoComplete='off' id='code' name='code' disabled />
              </div>
              <div className='inputForm' style={{ width: '64%' }}>
                <label htmlFor='name'>Tên sản phẩm</label>
                <input
                  type='text'
                  autoComplete='off'
                  id='name'
                  name='name'
                  value={isEdit ? input.name : props.name}
                  onChange={onHandeChange}
                  disabled={!isEdit}
                />
              </div>
              <div className='inputForm'>
                <label htmlFor='category'>Loại sản phẩm</label>
                <input
                  type='text'
                  autoComplete='off'
                  id='category'
                  name='category'
                  value={isEdit ? input.category : props.category}
                  onChange={onHandeChange}
                  disabled={!isEdit}
                />
              </div>
              <div className='inputForm'>
                <label htmlFor='publish'>Thương hiệu</label>
                <input
                  type='text'
                  autoComplete='off'
                  id='publish'
                  name='publish'
                  value={isEdit ? input.publish : props.publish}
                  onChange={onHandeChange}
                  disabled={!isEdit}
                />
              </div>
              <div className='inputForm'>
                <label htmlFor='name'>Giá</label>
                <input
                  type='number'
                  autoComplete='off'
                  id='price'
                  name='price'
                  value={isEdit ? input.cost : props.cost}
                  onChange={onHandeChange}
                  disabled={!isEdit}
                />
              </div>
              <div className='inputForm'>
                <label htmlFor='quantity'>Số lượng</label>
                <input
                  type='number'
                  autoComplete='off'
                  id='quantity'
                  value={isEdit ? input.quantity : props.quantity}
                  onChange={onHandeChange}
                  name='quantity'
                  disabled={!isEdit}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductTableItem;
