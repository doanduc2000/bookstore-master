import React from 'react';
import upArrow from '../../assets/icons/upArrow.svg';
import './adminCard.css';

const AdminCard = (props) => {
  return (
    <div className='adminCard'>
      <div className='adminCard__main'>
        <div className='adminCard__text'>
          <span className='adminCard__title'>{props.name}: </span>
          <span className='adminCard__desc'>{props.money} VND</span>
        </div>
        <div className='adminCard__icon'>
          <img src={upArrow} />
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
