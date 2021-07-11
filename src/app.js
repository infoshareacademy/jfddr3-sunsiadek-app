import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Register from './views/Register';
import { AuthProvider } from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute';
import AddingAds from './views/AddingAds/AddingAds';
import SingleAd from './views/SingleAd/SingleAd';
import ShowProfile from './views/ShowProfile/ShowProfile';

import Profile from './views/Profile/Profile';
import AddDescription from './views/AddDescription/AddDescription';

const BASE_NAME = '/jfddr3-sunsiadek-app';

export default function App() {
  return (
    <Router basename={BASE_NAME}>
      <AuthProvider>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/post" component={AddingAds} />

          <PrivateRoute exact path="/editprofile" component={AddDescription} />
          <PrivateRoute exact path="/ad/:id" component={SingleAd} />
          <PrivateRoute path="/profile" component={Profile} />

          <PrivateRoute exact path="/ad/:id" component={SingleAd} />
          <PrivateRoute path="/showprofile/:profil" component={ShowProfile} />
          <PrivateRoute path="/" component={Dashboard} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
