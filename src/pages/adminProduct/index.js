import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductTableItem from './productItemTable';
import AdminFilter from '../../components/adminFilter';
import AdminSearch from '../../components/adminSearch';
import Pagination from '../../components/pagination';
import { adminAllProduct } from '../../mockData/product';
import { productsActions, selectProductsFilter, selectProductsTotal } from '../../features/product/productSlice';
import CreateModal from '../../components/createModal';
import plusIcon from '../../assets/icons/plus.svg';
import './adminProduct.css';

const AdminProduct = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const filter = useSelector(selectProductsFilter);
  const total = useSelector(selectProductsTotal);
  const handleChangeFilter = (newFilter) => {
    dispatch(productsActions.setFilter(newFilter));
  };

  return (
    <div className='adminProduct'>
      <div className='admin__container'>
        <div className='adminProduct__title'>Toàn bộ sản phẩm</div>
        <div className='adminProduct__operation'>
          <button onClick={() => setOpenModal(true)}>
            <img className='w-6 h-6' src={plusIcon} />
          </button>
          <div className='adminProduct__filter-search'>
            <AdminFilter />
            <AdminSearch />
          </div>
        </div>
        <div className='adminProduct__table'>
          <ul className='adminProduct__box table__title'>
            <li className='product__name'>Tên sản phẩm</li>
            <li className='product__category'>Loại sản phẩm</li>
            <li className='product__trademark'>Thương hiệu</li>
            <li className='product__price'>Giá</li>
            <li className='product__quantity'>Số lượng</li>
          </ul>
          <div className='adminProduct__main'>
            {adminAllProduct.map((item, idx) => (
              <ProductTableItem key={idx} {...item} />
            ))}
          </div>
        </div>
        <div className='adminProduct__pagination'>
          <Pagination filter={filter} total={total} handleChangePaginations={handleChangeFilter} />
        </div>
      </div>

      {openModal && <CreateModal setOpenModal={setOpenModal} />}
    </div>
  );
};

export default AdminProduct;
