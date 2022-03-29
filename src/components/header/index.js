import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { landingRoute } from '../../utils/routes';
import logo from '../../assets/logo.webp';
import userIcon from '../../assets/icons/user.svg';

import './header.css';

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const [dropdown, setDropdown] = useState(false);
  const openDropdown = (e) => {
    setDropdown(!dropdown);
    e.preventDefault();
  };
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };
  return (
    <div className='header'>
      <div className='header__container'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__logo'>
              <img src={logo} alt='' />
            </div>
            <div className='header__right'>
              <div className='header__info'>
                <span className='header__time'>Giờ mở cửa (08:00 - 22:00)</span>
                <span className='header__phonenumber'>094.1234.828</span>
              </div>
              <div className='header__user'>
                <button onClick={openDropdown}>
                  <img src={userIcon} alt='' className='w-8 h-8' />
                </button>
                {dropdown && (
                  <ul className='header__dropdown'>
                    <li
                      className='header__dropdown-item login'
                      onClick={(e) => {
                        history.push('/auth/login');
                        setDropdown(false);
                        e.preventDefault();
                      }}
                    >
                      Đăng nhập
                    </li>
                    <li
                      className='header__dropdown-item'
                      onClick={(e) => {
                        history.push('/auth/register');
                        setDropdown(false);
                        e.preventDefault();
                      }}
                    >
                      Đăng ký
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='header__menu'>
        <div className='container'>
          <ul className='header__menu-container'>
            {landingRoute.map((item, idx) => {
              const isActiveRoute = activeRoute(item.path) ? ' item--active' : '';
              if(item.exact)
              return (
                <Link key={item.path} to={item.path}>
                  <li className={'header__item' + isActiveRoute}>{item.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
