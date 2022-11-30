import React, { useEffect, useState } from 'react';
import star from '../../assets/icons/star.svg';
import sendIcon from '../../assets/icons/send.svg';
import CommentItem from '../../components/commentItem';
import ProductItem from '../../components/productItem';
import { comment } from '../../mockData/comment';
import { sameProduct } from '../../mockData/product';
import './detailProduct.css';
import { useDispatch, useSelector } from 'react-redux';
import { productItemAction, productItemSelector } from '../../features/detailProduct/detailProductSlice';
import { formatNumber } from '../../utils/help';
import { cartsAction } from '../../features/cart/cartSlice';

const DetailProduct = () => {
  const dispatch = useDispatch();
  const [commentInput, setCommentInput] = useState('');
  const product = useSelector(productItemSelector);
  const [number, setNumber] = useState(product.number);

  const handleDecrease = (e) => {
    if (number <= 1) {
      setNumber(1);
    } else {
      setNumber(number - 1);
    }
    e.preventDefault();
  };
  const handleIncrease = (e) => {
    setNumber(number + 1);
    e.preventDefault();
  };
  const handleComment = (e) => {
    setCommentInput(e.target.value);
  };
  const handleAddCart = () => {
    dispatch(cartsAction.addCartItem(product));
  };
  const handleSendComment = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    dispatch(productItemAction.setNumberItem(number));
  });
  return (
    <div className='detailProduct'>
      <div className='detailProduct__top'>
        <div className='container' style={{ backgroundColor: '#fff' }}>
          <div className='detailProduct__box'>
            <div className='detailProduct__left'>
              <div className='detailProduct__img'>
                <img src={product.image} />
              </div>

              <div className='detailProduct__text'>
                <span className='detailProduct__title'>{product.name}</span>
                <div className='detailProduct__rate'>
                  <img src={star} alt='' />
                  <span>{product.rate}</span>
                </div>
                <div className='detailProduct__span'>
                  <span className='detailProduct__span-title'>Thể loại:</span>
                  <span className='detailProduct__span-desc'>{product.cate}</span>
                </div>
                <div className='detailProduct__span'>
                  <span className='detailProduct__span-title'>Thương hiệu:</span>
                  <span className='detailProduct__span-desc'>{product.trademark}</span>
                </div>
                <div className='detailProduct__span'>
                  <span className='detailProduct__span-title'>Tình trạng:</span>
                  <span className='detailProduct__span-desc'>{product.status}</span>
                </div>
                <div className='detailProduct__cost'>{formatNumber(product.cost)}đ</div>
                <div className='detailProduct__form'>
                  <div className='detailProduct__formCount'>
                    <button className='detailProduct__count' onClick={handleDecrease}>
                      -
                    </button>
                    <input className='detailProduct__input' type='text' value={product.number} disabled />
                    <button className='detailProduct__count' onClick={handleIncrease}>
                      +
                    </button>
                  </div>
                  <button className='detailProduct__formAdd' onClick={handleAddCart}>
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            </div>
            <div className='detailProduct__right'>
              <div className='detailProduct__menu'>
                <div className='detailProduct__menu-item'>Bình luận</div>
              </div>
              <div className='detailProduct__content'>
                {comment.map((item, idx) => (
                  <CommentItem key={idx} {...item} />
                ))}
              </div>
              <div className='detailProduct__comment'>
                <input
                  type='text'
                  name='comment'
                  placeholder='Bình luận về sản phẩm ...'
                  value={commentInput}
                  onChange={handleComment}
                />
                <img src={sendIcon} alt='' onClick={handleSendComment} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='detailProduct__bottom'>
        <div className='container'>
          <div className='detailProduct__bottom-box'>
            {sameProduct.map((item, idx) => (
              <ProductItem key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
