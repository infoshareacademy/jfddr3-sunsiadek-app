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
            <PrivateRoute exact path="/">
              <Dashboard />
            </PrivateRoute>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/post">
              <AddingAds />
            </PrivateRoute>
            <Route path="/singleAd">
              <SingleAd />
            </Route>
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}
