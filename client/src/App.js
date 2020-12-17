import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './components/pages/Home';
import Routes from './components/routing/Routes';


import AlertState from './context/alert/AlertState';
import AuthState from './context/auth/AuthState';
import ProfileState from './context/profile/ProfileState';
import ServiceState from './context/service/ServiceState'
import './sass/App.scss';

function App() {
  return (
    <AuthState>
      <AlertState>
        <ProfileState>
          <ServiceState>
            <Router>
              <Switch>       
                <Route exact path='/' component={Welcome} />
                <Route component={Routes} />
              </Switch>
            </Router>
          </ServiceState>
        </ProfileState>
      </AlertState>
    </AuthState>
  );
}

export default App;
