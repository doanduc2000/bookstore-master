import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideBar from '../../components/sideBar';
import ProductItem from '../../components/productItem';
import Pagination from '../../components/pagination';
import { allProducts } from '../../mockData/product';
import './product.css';
import {
  productsActions,
  selectProductsFilter,
  selectProductsList,
  selectProductsTotal,
} from '../../features/product/productSlice';

const Product = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectProductsFilter);
  const total = useSelector(selectProductsTotal);
  const handleChangeFilter = (newFilter) => {
    dispatch(productsActions.setFilter(newFilter));
  };
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
            <div className='product__pagination'>
              <Pagination filter={filter} total={total} handleChangePaginations={handleChangeFilter} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
