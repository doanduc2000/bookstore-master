import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { landingRoute } from '../../utils/routes';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './landing.css';

const Landing = () => {
  return (
    <>
      <Header />
      <div className='landing__layout'>
        <Switch>
          {landingRoute.map((item, idx) => (
            <Route key={item.path} path={item.path} exact={item.exact}>
              {item.component}
            </Route>
          ))}
          <Redirect from='/' to='/home' />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
