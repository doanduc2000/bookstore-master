import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import AdminProductItem from '../../components/adminProductItem';
import AdminCard from '../../components/adminCard';
import { newProduct } from '../../mockData/product';
const data = [
  { name: 'Theo ngày', money: 5000000 },
  { name: 'Theo tháng', money: 15000000 },
  { name: 'Theo năm', money: 150000000 },
];
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='admin__container'>
        <div className='dashboard__title'>Dashboard</div>
        <div className='dashboard__overview'>
          <div className='dashboard__card-title'>Doanh thu:</div>
          <div className='dashboard__card'>
            {data.map((item, idx) => (
              <AdminCard key={idx} {...item} />
            ))}
          </div>
        </div>
        <div className='dashboard__bestProduct'>
          <div className='dashboard__card-title'>
            <span>Sản phẩm bán chạy:</span>
            <Link to='/admin/product'>
              <label>Xem thêm {'>>'}</label>
            </Link>
          </div>
          <div className='dashboard__bestProduct-box'>
            {newProduct.map((item, idx) => (
              <AdminProductItem {...item} key={idx} />
            ))}
          </div>
        </div>
        <div className='dashboard__bestProduct'>
          <div className='dashboard__card-title'>
            <span>Sản phẩm mới:</span>
            <Link to='/admin/product'>
              <label>Xem thêm {'>>'}</label>
            </Link>
          </div>
          <div className='dashboard__bestProduct-box'>
            {newProduct.map((item, idx) => (
              <AdminProductItem {...item} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
