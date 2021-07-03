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
      <AuthProvider>
        <div>
          <Switch>
            {/* route umiescic - kategorie */}
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/addingads">
              <AddingAds />
            </Route>
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}
