import React, { Component } from 'react';
import Header from './Header';
import AuthService from '../modules/ApiService';
import { Redirect } from 'react-router-dom';

class LoginWindow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isLoading: false
    }

    this.inputHandler = this.inputHandler.bind(this);
    this.logInUser = this.logInUser.bind(this);
  }

  inputHandler(event) {
    const target = event.target,
      value = target.value,
      name = target.name;

    this.setState({
      [name]: value
    });
  }

  logInUser() {
    this.setState({isLoading: true});

    const { username, password } = this.state;
    AuthService.login({ username, password });
  }

  render() {
    const isLoggedIn = AuthService.isLoggedIn(),
      { username, password } = this.state;

    if(isLoggedIn) {
      return <Redirect to={{ pathname: '/list', state: { from: this.props.location } }} />;
    }
    
    return (
      <div className="login-window" >
        <form>
          <label>
            Username:
            <input
              type="text"
              title="username"
              placeholder="Username"
              name="username"
              value={ username }
              onChange={ this.inputHandler }/>
          </label>
          <label>
            Password:
            <input
              type="password"
              title="password"
              placeholder="Password"
              name="password"
              value={ password }
              onChange={ this.inputHandler }/>
          </label>
          <button type="button" onClick={this.logInUser}>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginWindow;
