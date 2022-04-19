import React, { useState } from 'react';
import closeIcon from '../../assets/icons/close.svg';
import defaultImg from '../../assets/default.png';
import plusIcon from '../../assets/icons/plus.svg';
import './createModal.css';

const CreateModal = ({ setOpenModal }) => {
  const [product, setProduct] = useState({
    code: '',
    name: '',
    category: '',
    publish: '',
    price: '',
    quantity: '',
  });
  const handleChangeProduct = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <div className='createModal'>
      <div className='createModal__box'>
        <div className='createModal__header'>
          <span>Thêm sản phẩm mới</span>
          <button onClick={() => setOpenModal(false)}>
            <img className='w-6 h-6' src={closeIcon} alt='' />
          </button>
        </div>
        <div className='createModal__body'>
          <div className='createModal__avatar'>
            <img src={defaultImg} />
            <button className='createModal__addAvt'>
              <img src={plusIcon} />
            </button>
          </div>
          <div className='createModal__right'>
            <div className='createModal__inputForm'>
              <label>Mã sản phẩm</label>
              <input type='text' name='code' value={product.code} onChange={handleChangeProduct} />
            </div>
            <div className='createModal__inputForm'>
              <label>Tên sản phẩm</label>
              <input type='text' name='name' value={product.name} onChange={handleChangeProduct} />
            </div>
            <div className='createModal__inputForm'>
              <label>Loại sản phẩm</label>
              <input type='text' name='category' value={product.category} onChange={handleChangeProduct} />
            </div>
            <div className='createModal__inputForm'>
              <label>Thương hiệu</label>
              <input type='text ' name='publish' value={product.publish} onChange={handleChangeProduct} />
            </div>
            <div className='createModal__inputForm'>
              <label>Giá sản phẩm</label>
              <input type='number' name='price' value={product.price} onChange={handleChangeProduct} />
            </div>
            <div className='createModal__inputForm'>
              <label>Số lượng sản phẩm</label>
              <input type='number' name='quantity' value={product.quantity} onChange={handleChangeProduct} />
            </div>
          </div>
        </div>
        <div className='createModal__footer'>
          <button>Thêm mới</button>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
