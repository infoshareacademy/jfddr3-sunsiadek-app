import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile/Profile';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
            <Link to="/">Link to Login(for testonly)</Link>
            <Link to="/profile">Link to Profile(for testonly)</Link>
          </Route>
          <Route exact path="/">
            <Login />
            <Link to="/dashboard">Link to Dashboard(for testonly)</Link>
          </Route>
          <Route path="/profile">
            <Profile />
            <Link to="/dashboard">Link to Dashboard(for testonly)</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
