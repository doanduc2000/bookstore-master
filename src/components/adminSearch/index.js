import React from 'react';
import searchIcon from '../../assets/icons/search.svg';
import './adminSearch.css';

const AdminSearch = () => {
  return (
    <div className='adminSearch'>
      <input type='text' placeholder='Tìm kiếm theo tên' />
      <img className='w-4 h-4' src={searchIcon} />
    </div>
  );
};

export default AdminSearch;
