import React, { Component } from 'react';
import Header from './Header';
import ApiService from '../modules/ApiService';
import CreateButton from './CreateButton';

class RabbitList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rabbits: [],
      isLoading: false
    }

    this.getRabbits = this.getRabbits.bind(this);
    this.onLoadSuccess = this.onLoadSuccess.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    this.getRabbits();
  }

  onLoadSuccess(data) {
    console.log(data);
    this.setState({ rabbits: data, iLoading: false });
    console.log(this.state.rabbits);
  }

  getRabbits() {
    ApiService.getList(this.onLoadSuccess);
      // .then(({ data }) => {
      //   console.log(data);
      // });
  }

  render() {

    return (
      <div className="rabbit-list">
        <Header title="Rabbits"/>
        <h2>Rabbit list</h2>
        <CreateButton />
      </div>
    );
  }
}

export default RabbitList;
