import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import './adminSideBar.css';
import logo from '../../assets/logo.webp';
import logoutIcon from '../../assets/icons/logout.svg';
import { adminRoute } from '../../utils/routes';

const AdminSideBar = () => {
  const history = useHistory();
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };
  return (
    <div className='adminSideBar'>
      <div className='adminSideBar__logo'>
        <img src={logo} alt='' />
      </div>
      <div className='adminSidebar__main'>
        <ul className='adminSidebar__menu'>
          {adminRoute.map((item, idx) => {
            const isActiveRoute = activeRoute(item.layout + item.path) ? ' item--active' : '';
            if (item.exact)
              return (
                <Link key={item.layout + item.path} to={item.layout + item.path}>
                  <li className={'adminSidebar__item' + isActiveRoute}>
                    <img src={item.icon} alt='' />
                    <span>{item.name}</span>
                  </li>
                </Link>
              );
          })}
        </ul>
      </div>
      <div className='adminSidebar__bottom'>
        <div className='adminSidebar__user'>
          <span>Hello, Admin</span>
          <img
            src={logoutIcon}
            alt=''
            onClick={(e) => {
              history.push('/auth');
              e.preventDefault();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
