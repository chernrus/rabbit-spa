import React, { Component } from 'react';
import Header from './Header';
import ApiService from '../modules/ApiService';
import CreateButton from './CreateButton';
import { Link } from 'react-router-dom';

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
  }

  createRow(value, num) {
    return (
      <tr key={value.id}>
        <td className="table-cell">{num}</td>
        <td className="table-cell">
          <Link to={`/edit/${value.id}`}>{value.name}</Link>
        </td>
        <td className="table-cell">{value.weight}</td>
      </tr>
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
        <h2>Rabbit list</h2>
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
    );
  }
}

export default RabbitList;
