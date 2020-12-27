import React, {useContext, useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext'
import Dashboard from '../dashboard/Dashboard';
import Login from '../auth/Login';
import GetStarted from '../auth/GetStarted';
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute';
import RoutesUser from './RoutesUser'
import LoadingPage from '../layout/LoadingPage'
import Welcome from '../pages/Home'

const Routes = () => {
  const authContext = useContext(AuthContext)
  const {loadUser, loading} = authContext;

  useEffect(() => {
    loadUser()
    // eslint-disable-next-line
  }, []);
  
  if (loading) return (<LoadingPage />)
  return (
    <Switch>
      <Route exact path='/' component={Welcome} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/getStarted' component={GetStarted} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
      <Route component={RoutesUser}/>
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
