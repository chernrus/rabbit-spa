import React, { Component } from 'react';
import Header from './Header';

class RabbitList extends Component {
  render() {

    return (
      <div className="rabbit-list">
        <Header title="Rabbits"/>
        <h2>Rabbit list</h2>
      </div>
    );
  }
}

export default RabbitList;
