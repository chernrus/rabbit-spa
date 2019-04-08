import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AuthService from '../modules/ApiService';

class Navigation extends Component {
  render() {
    const isLoggedIn = AuthService.isLoggedIn();
    return (
      <div className="navigation w3-sidebar w3-light-grey w3-bar-block" style={{width:'200px'}}>
        <h1>Menu</h1>
        <NavLink to="/create"
          className="w3-bar-item w3-button">Create rabbit</NavLink>
        <NavLink to="/list"
          className="w3-bar-item w3-button">Rabbits list</NavLink>
        {isLoggedIn ? (
          <NavLink to="/logout"
            className="w3-bar-item w3-button">Logout</NavLink>
        ) :
        (
          <NavLink to="/login"
            className="w3-bar-item w3-button">Login</NavLink>
        )}
      </div>
    );
  }
}

export default Navigation;
