import React, {useContext, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext'
import Dashboard from '../dashboard/Dashboard';
import Login from '../auth/Login';
import GetStarted from '../auth/GetStarted';
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute';
import RoutesUser from './RoutesUser'

const Routes = () => {
  const authContext = useContext(AuthContext)
  const {loadUser} = authContext;

  useEffect(() => {
    loadUser()
    // eslint-disable-next-line
  }, []);
  return (
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route exact path='/getStarted' component={GetStarted} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
      <Route component={RoutesUser}/>
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
