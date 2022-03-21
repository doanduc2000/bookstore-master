import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './auth.css';
import { authRoute } from '../../utils/routes';
import Header from '../../components/header';
import Footer from '../../components/footer';
const Auth = () => {
  return (
    <>
      <Header />
      <div className='landing__layout'>
        <Switch>
          {authRoute.map((item, idx) => (
            <Route key={item.path} path={item.layout + item.path} exact={item.exact}>
              {item.component}
            </Route>
          ))}
          <Redirect from='/auth' to='/auth/login' />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default Auth;
