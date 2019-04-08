import React from 'react';
import AuthService from '../modules/ApiService';
import { Redirect, Route } from 'react-router-dom';

const AuthorizedRoute = ({ component: Component, ...rest }) => {

  const isLoggedIn = AuthService.isLoggedIn();
  console.log(isLoggedIn);
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default AuthorizedRoute;
