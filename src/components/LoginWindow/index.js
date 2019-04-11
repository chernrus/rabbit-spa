import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ApiService from '../../modules/ApiService';
import Header from '../Header';
import './styles.css';
import Spinner from '../Spinner';

class LoginWindow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: 'omar1',
      password: 'lobster1',
      isLoading: false
    }

    this.inputHandler = this.inputHandler.bind(this);
    this.logInUser = this.logInUser.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
  }

  inputHandler(event) {
    const target = event.target,
      value = target.value,
      name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSuccess(params) {
    this.setState({isLoading: false});
  }

  logInUser() {
    this.setState({isLoading: true});

    const { username, password } = this.state;
    ApiService.login({ username, password }, this.onSuccess);
  }

  render() {
    const isLoggedIn = ApiService.isLoggedIn(),
      { username,
        password,
       isLoading } = this.state;

    if(isLoggedIn) {
      return <Redirect to={{ pathname: '/list', state: { from: this.props.location } }} />;
    }

    if(isLoading) {
      return <Spinner />;
    }

    return (
      <div className="login-window w3-display-middle w3-card">
        <h2 className="login-windo__header w3-teal">Login form</h2>
        <form className="login-form">
          <label>
            Username:
            <input
              type="text"
              title="username"
              placeholder="Username"
              className="login-form__input"
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
              className="login-form__input"
              name="password"
              value={ password }
              onChange={ this.inputHandler }/>
          </label>
          <button
            type="button"
            className="login-form__button w3-button w3-teal"
            onClick={this.logInUser}>
              Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginWindow;
