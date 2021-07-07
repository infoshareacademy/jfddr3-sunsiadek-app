import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Register from './views/Register';
import { AuthProvider } from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute';
import AddingAds from './views/AddingAds/AddingAds';
import SingleAd from './views/SingleAd';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <PrivateRoute exact path="/post">
              <AddingAds />
            </PrivateRoute>
            <PrivateRoute path="/">
              <Dashboard />
            </PrivateRoute>
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}
