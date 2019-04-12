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
      username: '',
      password: '',
      isLoading: false,
      isError: null,
      isSuccess: null,
      errorText: ''
    }

    this.inputHandler = this.inputHandler.bind(this);
    this.keyPressHandler = this.keyPressHandler .bind(this);
    this.logInUser = this.logInUser.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
  }

  inputHandler(event) {
    const target = event.target,
      value = target.value,
      name = target.name;

    this.setState({
      [name]: value,
      isError: false
    });
  }

  keyPressHandler(event) {
    if(event.key == 'Enter'){
      this.logInUser();
    }
  }

  onSuccess(params) {
    this.setState({isLoading: false});
  }

  onError({ errorText }) {
    this.setState({isLoading: false, isError: true, errorText});
  }

  logInUser() {
    this.setState({isLoading: true, isError: false});

    const { username, password } = this.state;
    ApiService.login({ username, password }, this.onSuccess, this.onError);
  }

  render() {
    const isLoggedIn = ApiService.isLoggedIn(),
      { username,
        password,
        isLoading,
        isError,
        errorText
      } = this.state;

    if(isLoggedIn) {
      return <Redirect to={{ pathname: '/list', state: { from: this.props.location } }} />;
    }

    if(isLoading) {
      return <Spinner />;
    }

    return (
      <div className="login-window w3-display-middle w3-card">
        <h2 className="login-windo__header w3-teal">Login form</h2>
        <form className="login-form" onKeyPress={this.keyPressHandler}>
          <label>
            Username:
            <input
              type="text"
              title="username"
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
              className="login-form__input"
              name="password"
              value={ password }
              onChange={ this.inputHandler }/>
          </label>
          <div className="login-form__allert"><p>{ isError && errorText }</p></div>
          <input
            type="button"
            className="login-form__button w3-button w3-teal"
            onClick={this.logInUser}
            value="Login"/>
        </form>
      </div>
    );
  }
}

export default LoginWindow;
