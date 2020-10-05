import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import Welcome from '../pages/Home';
import Login from '../auth/Login';
import GetStarted from '../auth/GetStarted';
import NotFound from '../pages/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Welcome} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/getStarted' component={GetStarted} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
