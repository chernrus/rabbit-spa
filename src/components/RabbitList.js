import React, { Component } from 'react';
import Header from './Header';
import ApiService from '../modules/ApiService';

class RabbitList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rabbits: []
    }

    this.getRabbits = this.getRabbits.bind(this);
  }

  componentDidMount() {
    this.getRabbits();
  }

  getRabbits() {
    ApiService.getList();
      // .then(({ data }) => {
      //   console.log(data);
      // });
  }

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
