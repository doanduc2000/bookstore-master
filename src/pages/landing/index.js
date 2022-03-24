import React from 'react';
import banner from '../../assets/slider_3.webp';
import ProductItem from '../../components/productItem';
import { newProduct } from '../../mockData/product';
import './landing.css';

const Landing = () => {
  return (
    <div className='landing'>
      <div className='container'>
        <div className='landing__banner'>
          <img src={banner} alt='' />
        </div>
        <div className='landing__newProduct'>
          <h2 className='landing__newProduct-title'>Sản phẩm mới</h2>
          <div className='landing__newProduct-box'>
            {newProduct.map((item, idx) => (
              <ProductItem key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
