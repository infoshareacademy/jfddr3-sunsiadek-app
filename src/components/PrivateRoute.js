import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { NavigationBox } from './NavigationBox';
import { useLocation } from 'react-router';
import { ProfileNavBox } from './ProfileNaxBox';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  const location = useLocation();
  console.log(location);
  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? (
          <>
            {location.pathname === '/profile' ? (
              <ProfileNavBox></ProfileNavBox>
            ) : (
              <NavigationBox></NavigationBox>
            )}
            <Component {...props} />
          </>
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}
