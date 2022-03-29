import React, { useState } from 'react';
import searchIcon from '../../assets/icons/search.svg';
import filterIcon from '../../assets/icons/filter.svg';
import './sideBar.css';

const SideBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div className='sideBar'>
      <div className='sideBar__header'>
        <img src={filterIcon} alt='' />
        <h3>Lọc sản phẩm</h3>
      </div>
      <div className='sideBar__search'>
        <div className='search-input'>
          <input
            type='text'
            placeholder='Tìm kiếm sản phẩm'
            name='search'
            value={searchInput}
            onChange={handleSearchInput}
          />
          <img src={searchIcon} alt='' onClick={handleSearch} />
        </div>
      </div>
      <div className='sideBar__filter'>
        <div className='sideBar__filter-method'>
          <h3>Giá sản phẩm</h3>
          <div className='sideBar__filter-method-main'>
            <div className='sideBar__radio'>
              <input type='radio' name='cost' id='cost1' />
              <label htmlFor='cost1'> Giá dưới 100.000đ</label>
            </div>
            <div className='sideBar__radio'>
              <input type='radio' name='cost' id='cost2' />
              <label htmlFor='cost2'> 100.000đ - 200.000đ</label>
            </div>
            <div className='sideBar__radio'>
              <input type='radio' name='cost' id='cost3' />
              <label htmlFor='cost3'> 200.000đ - 300.000đ</label>
            </div>
            <div className='sideBar__radio'>
              <input type='radio' name='cost' id='cost4' />
              <label htmlFor='cost4'> 300.000đ - 500.000đ</label>
            </div>
            <div className='sideBar__radio'>
              <input type='radio' name='cost' id='cost5' />
              <label htmlFor='cost5'> 500.000đ - 1.000.000đ</label>
            </div>
          </div>
        </div>
        <div className='sideBar__filter-method'>
          <h3>Thể loại</h3>
          <div className='sideBar__filter-method-main'>
            <div className='sideBar__radio'>
              <input type='radio' name='category' id='category1' />
              <label htmlFor='category1'> Sách thiếu nhi</label>
            </div>
            <div className='sideBar__radio'>
              <input type='radio' name='category' id='category2' />
              <label htmlFor='category2'> Sách giáo khoa</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
