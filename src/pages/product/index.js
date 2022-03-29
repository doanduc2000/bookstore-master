import React from 'react';
import SideBar from '../../components/sideBar';
import ProductItem from '../../components/productItem';
import { allProducts } from '../../mockData/product';
import './product.css';

const Product = () => {
  return (
    <div className='product'>
      <div className='container' style={{ backgroundColor: '#fff' }}>
        <div className='product__container'>
          <SideBar />
          <div className='product__right'>
            <div className='product__title'>
              <h3>Toàn bộ sản phẩm</h3>
            </div>
            <div className='product__box'>
              {allProducts.map((item, idx) => (
                <ProductItem key={idx} {...item} />
              ))}
            </div>
            <div className='product__pagination'>Pagination</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
