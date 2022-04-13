import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { adminRoute } from '../../utils/routes';

import AdminSideBar from '../../components/adminSideBar';
import './admin.css';

const Admin = () => {
  return (
    <div className='admin'>
      <AdminSideBar />
      <div className='admin__layout'>
        <Switch>
          {adminRoute.map((item, idx) => (
            <Route key={item.path} path={item.layout + item.path} exact={item.exact}>
              {item.component}
            </Route>
          ))}
          <Redirect from='/admin' to='/admin/dashboard' />
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
