import React from 'react';
import left from '../../assets/icons/left.svg';
import line from '../../assets/icons/Line.svg';
import right from '../../assets/icons/right.svg';
import './pagination.css';

const Pagination = ({ filter, total, handleChangePaginations }) => {
  const { _page, _limit } = filter;
  const totalPage = Math.ceil(total / _limit);

  const goToFirstPage = () => {
    if (_page === 1) return;
    const newFilter = {
      ...filter,
      _page: 1,
    };
    handleChangePaginations(newFilter);
  };

  const goToPreviousPage = () => {
    if (_page === 1) return;
    const newFilter = {
      ...filter,
      _page: _page - 1,
    };
    handleChangePaginations(newFilter);
  };

  const goToNextPage = () => {
    if (_page === totalPage) return;
    const newFilter = {
      ...filter,
      _page: _page + 1,
    };
    handleChangePaginations(newFilter);
  };

  const goToPageEnd = () => {
    if (_page === totalPage) return;
    const newFilter = {
      ...filter,
      _page: totalPage,
    };
    handleChangePaginations(newFilter);
  };

  return (
    <div className='pagination__container'>
      <div className='pagination__btn-container'>
        <button className='pagination__btn' onClick={goToFirstPage}>
          <img
            src={line}
            alt=''
            style={{ marginRight: '2px' }}
            className={_page === 1 ? 'pagination__btn-disable' : ''}
          />
          <img src={left} alt='' className={_page === 1 ? 'pagination__btn-disable' : ''} />
        </button>
        <button className='pagination__btn' onClick={goToPreviousPage}>
          <img src={left} alt='' className={_page === 1 ? 'pagination__btn-disable' : ''} />
        </button>
        <h5 className='pagination__text'>
          {(_page - 1) * _limit + 1}-{_page === totalPage ? total : _page * _limit} of {total}
        </h5>
        <button className='pagination__btn' onClick={goToNextPage}>
          <img src={right} alt='' className={_page === totalPage ? 'pagination__btn-disable' : ''} />
        </button>
        <button className='pagination__btn' onClick={goToPageEnd}>
          <img src={right} alt='' className={_page === totalPage ? 'pagination__btn-disable' : ''} />
          <img
            src={line}
            alt=''
            className={_page === totalPage ? 'pagination__btn-disable' : ''}
            style={{ marginLeft: '2px' }}
          />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
