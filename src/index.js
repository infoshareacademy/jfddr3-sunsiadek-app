import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import reportWebVitals from './reportWebVitals';
import Register from './views/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router basename="/jfddr3-sunsiadek-app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
