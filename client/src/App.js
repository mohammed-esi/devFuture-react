import React, {useContext, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './components/pages/Home';
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
            <Route exact path='/' component={Welcome} />
            <Route component={Routes} />
          </Switch>
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
