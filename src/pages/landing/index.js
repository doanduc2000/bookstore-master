import React from 'react';
import banner from '../../assets/slider_3.webp';
import './landing.css';

const Landing = () => {
  return (
    <div className='landing'>
      <div className='container'>
        <div className='landing__banner'>
          <img src={banner} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Landing;
