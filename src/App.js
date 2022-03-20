import React from 'react';
import Landing from './layout/landing';
import Admin from './layout/admin';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route path='/admin' component={Admin} />
        <Route path='/' component={Landing} />
        <Route component='pageNotFound' />
      </Switch>
    </>
  );
}

export default App;
