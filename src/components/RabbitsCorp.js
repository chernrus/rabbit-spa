import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ApiService from '../modules/ApiService';
import AuthorizedRoute from './AuthorizedRoute';
import Navigation from './Navigation';
import RabbitCreate from './RabbitCreate';
import RabbitEdit from './RabbitEdit';
import RabbitList from './RabbitList';

class RabbitsCorp extends Component {

  constructor() {
    super();

    this.logoutHandle = this.logoutHandle.bind(this);
  }

  logoutHandle() {
    console.log(this);
    ApiService.logout();
    this.props.history.push('/login');
  }

  render() {
    const isLoggedIn = ApiService.isLoggedIn();

    if(!isLoggedIn) {
      return <Redirect to="/login"/>;
    }

    const username = ApiService.getUsername();
    return (
      <div className="rabbits-corp">
        <div className="navigation w3-sidebar w3-light-grey w3-bar-block" style={{width:'200px'}}>
          <div className="w3-container w3-teal">
            <h1>{ username }</h1>
          </div>
          <NavLink to="/create"
            className="w3-bar-item w3-button">Create rabbit</NavLink>
          <NavLink to="/list"
            className="w3-bar-item w3-button">Rabbits list</NavLink>
          <NavLink to="/edit/1"
            className="w3-bar-item w3-button">Rabbits edit</NavLink>
          <button
            className="w3-bar-item w3-button"
            onClick={this.logoutHandle}>Logout</button>
        </div>
        <div className="main-content" style={{marginLeft:'200px'}}>
          <Switch>
            <Route path="/create" component={RabbitCreate} />
            <Route path="/list" component={RabbitList} />
            <Route path="/edit/:id" component={RabbitEdit} />
            <Route path="/aaa/:id" component={RabbitEdit} />
            <Route render={ () => <h1>404 Error</h1> } />
          </Switch>
        </div>
      </div>
    );
  }
};

export default RabbitsCorp;

// <Navigation setTitle={this.setTitle}/>
