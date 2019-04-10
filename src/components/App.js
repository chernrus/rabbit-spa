import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginWindow from './LoginWindow';
import RabbitsCorp from './RabbitsCorp';

class App extends Component {

  render() {
    return (
      <div className="app-routes">
        <Switch>
          <Route path="/login" component={LoginWindow} />
          <Route path="/" component={RabbitsCorp} />
        </Switch>
      </div>
    );
  }
};

export default App;
