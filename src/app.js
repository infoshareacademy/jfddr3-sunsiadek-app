import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Register from './views/Register';
import { AuthProvider } from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute';
import AddingAds from './views/AddingAds/AddingAds';

export default function App() {
  return (
    <Router>
      Inside Router.
      <AuthProvider>
        <div>Inside AuthProvider.</div>
        <div>
          <Switch>
            <Route exact path="/login">
              <div>Inside Login Route.</div>
              <Login />
            </Route>
            <Route path="/register">
              <div>Inside Register.</div>
              <Register />
            </Route>
            <PrivateRoute path="/post">
              <div>Inside post route.</div>
              <AddingAds />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <div>
                Inside /dashboard Route, which should display dashboard.
              </div>
              <Link to="/post">/post - przekierowanie z App.js</Link>
              <Dashboard />
            </PrivateRoute>
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}
