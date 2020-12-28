import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './components/routing/Routes';


import AlertState from './context/alert/AlertState';
import AuthState from './context/auth/AuthState';
import ProfileState from './context/profile/ProfileState';
import ServiceState from './context/service/ServiceState'
import './sass/App.scss';

function App() {
  return (
    <AlertState>
      <AuthState>
          <ProfileState>
            <ServiceState>
              <Router>
                <Switch>
                  <Route component={Routes} />
                </Switch>
              </Router>
            </ServiceState>
          </ProfileState>
      </AuthState>
    </AlertState>
  );
}

export default App;
