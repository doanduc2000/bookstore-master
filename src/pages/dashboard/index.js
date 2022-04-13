import React from 'react';
import './dashboard.css';
import AdminCard from '../../components/adminCard';
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
        <div>
          <div className='dashboard__card-title'>Doanh thu:</div>
          <div className='dashboard__card'>
            {data.map((item, idx) => (
              <AdminCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
