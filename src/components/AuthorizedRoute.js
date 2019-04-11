import React from 'react';
import ApiService from '../modules/ApiService';
import { Redirect, Route } from 'react-router-dom';

const AuthorizedRoute = ({ component: Component, ...rest }) => {

  const isLoggedIn = ApiService.isLoggedIn();
  
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
