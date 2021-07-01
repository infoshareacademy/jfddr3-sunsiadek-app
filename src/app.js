import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Register from './views/Register';
import { AuthProvider } from './context/AuthProvider';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Switch>
            <Route exact path="/login">
              <Login />
              <Link to="/">Link to Dashboard(for test only)</Link>
              <Link to="/register">Link to Register(for test only)</Link>
            </Route>
            <Route exact path="/">
              <Dashboard />
              <Link to="/login">Link to Login(for test only)</Link>
            </Route>
            <Route path="/register">
              <Register />
              <Link to="/login">Link to Login(for testonly)</Link>
            </Route>
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}
