import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './views/Login';
import Dashboard from './views/Dashboard';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
            <Link to="/">Link to Login(for testonly)</Link>
          </Route>
          <Route exact path="/">
            <Login />
            <Link to="/dashboard">Link to Dashboard(for testonly)</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
