import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Register from './views/Register';
import { AuthProvider } from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute';
import AddingAds from './views/AddingAds/AddingAds';
import Profile from './views/Profile/Profile';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/post" component={AddingAds} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/" component={Dashboard} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
