import React, { Component } from 'react';
import Header from './Header';
import ApiService from '../modules/ApiService';
import CreateButton from './CreateButton';
import Rabbit from './Rabbit';


class RabbitList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rabbits: [],
      isLoading: false
    }

    this.getRabbits = this.getRabbits.bind(this);
    this.deleteRabbit = this.deleteRabbit.bind(this);
    this.onLoadSuccess = this.onLoadSuccess.bind(this);
    this.onDeleteSuccess = this.onDeleteSuccess.bind(this);
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

  onDeleteSuccess(params) {
    console.log(params);
    this.getRabbits();
  }

  getRabbits() {
    ApiService.getList(this.onLoadSuccess);
  }

  deleteRabbit(id) {
    ApiService.remove(id, this.onDeleteSuccess);
  }

  createRow(value, num) {
    return (
      <Rabbit
        key={value.id}
        number={num}
        rabbit={value}
        onDelete={this.deleteRabbit}
      />
    );
  }

  createTbody(data) {
    let list = []
    if(data.length !== 0) {
      data.forEach((item, i) => {
        list.push(this.createRow(item, ++i));
      });
    }

    return list;
  }

  render() {
    const {
        rabbits,
        isLoading
      } = this.state,
      rabbitTable = this.createTbody(rabbits);

    return (
      <div className="rabbit-list">
        <Header title="Rabbits"/>
        <div className="container">
          <CreateButton />
          <table className="w3-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Rabbit name</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              { rabbitTable }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default RabbitList;
