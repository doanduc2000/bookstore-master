import React, { useState } from 'react';
import star from '../../assets/icons/star.svg';
import sendIcon from '../../assets/icons/send.svg';
import CommentItem from '../../components/commentItem';
import ProductItem from '../../components/productItem';
import { comment } from '../../mockData/comment';
import { sameProduct } from '../../mockData/product';
import './detailProduct.css';

const DetailProduct = () => {
  const [commentInput, setCommentInput] = useState('');

  const handleComment = (e) => {
    setCommentInput(e.target.value);
  };
  const handleSendComment = (e) => {
    e.preventDefault();
  };
  return (
    <div className='detailProduct'>
      <div className='detailProduct__top'>
        <div className='container' style={{ backgroundColor: '#fff' }}>
          <div className='detailProduct__box'>
            <div className='detailProduct__left'>
              <div className='detailProduct__img'>
                <img src='//bizweb.dktcdn.net/thumb/large/100/386/441/products/a11e689e83684c361579.jpg?v=1647690446000' />
              </div>

              <div className='detailProduct__text'>
                <span className='detailProduct__title'>Chú thuật hồi chiến Tập 1</span>
                <div className='detailProduct__rate'>
                  <img src={star} alt='' />
                  <span>4.5</span>
                </div>
                <div className='detailProduct__span'>
                  <span className='detailProduct__span-title'>Thể loại:</span>
                  <span className='detailProduct__span-desc'>Sản phẩm mới</span>
                </div>
                <div className='detailProduct__span'>
                  <span className='detailProduct__span-title'>Thương hiệu:</span>
                  <span className='detailProduct__span-desc'>Kim đồng</span>
                </div>
                <div className='detailProduct__span'>
                  <span className='detailProduct__span-title'>Tình trạng:</span>
                  <span className='detailProduct__span-desc'>Còn hàng</span>
                </div>
                <div className='detailProduct__cost'>30.000đ</div>
                <div className='detailProduct__form'>
                  <div className='detailProduct__formCount'>
                    <button className='detailProduct__count'>-</button>
                    <input className='detailProduct__input' type='number' name='count' defaultValue='1' />
                    <button className='detailProduct__count'>+</button>
                  </div>
                  <button className='detailProduct__formAdd'>Thêm vào giỏ</button>
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
