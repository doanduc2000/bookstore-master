import React, { useState } from 'react';
import arrowDown from '../../assets/icons/arrowdown.svg';
import arrowUp from '../../assets/icons/arrowup.svg';
import './adminFilter.css';

const AdminFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenDropdown = (e) => {
    setIsOpen(!isOpen);
    e.preventDefault();
  };
  return (
    <div className='adminFilter' onClick={handleOpenDropdown}>
      <span className='adminFilter__title'>Sắp xếp theo</span>
      <img className='w-4 h-4' src={arrowDown} />

      {isOpen && (
        <ul className='adminFilter__menu'>
          <li className='adminFilter__item'>Loại sản phẩm</li>
          <li className='adminFilter__item'>Thương hiệu</li>
        </ul>
      )}
    </div>
  );
};

export default AdminFilter;
