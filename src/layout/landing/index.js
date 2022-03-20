import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { landingRoute } from '../../utils/routes';
import Header from '../../components/header';
import './landing.css';

const Landing = () => {
  return (
    <div>
      <Header />
      <Switch>
        {landingRoute.map((item, idx) => (
          <Route key={item.path} path={item.path} exact={item.exact}>
            {item.component}
          </Route>
        ))}
      </Switch>
    </div>
  );
};

export default Landing;
