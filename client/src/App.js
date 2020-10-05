import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './components/routing/Routes';

import AlertState from './context/alert/AlertState';
import AuthState from './context/auth/AuthState';
import './sass/App.scss';

function App() {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <Switch>
            <Route component={Routes} />
          </Switch>
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
