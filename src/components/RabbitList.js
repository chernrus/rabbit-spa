import React, { Component } from 'react';
import Header from './Header';
import ApiService from '../modules/ApiService';
import CreateButton from './CreateButton';
import Spinner from './Spinner';
import Alert from './Alert';
import Rabbit from './Rabbit';


class RabbitList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rabbits: [],
      isLoading: false,
      isSuccess: null,
      isError: null
    }

    this.getRabbits = this.getRabbits.bind(this);
    this.deleteRabbit = this.deleteRabbit.bind(this);
    this.onLoadSuccess = this.onLoadSuccess.bind(this);
    this.onDeleteSuccess = this.onDeleteSuccess.bind(this);
    this.alertClose = this.alertClose.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    this.getRabbits();
  }

  alertClose() {
    this.setState({
      isError: false,
      isSuccess: false,
    })
  }

  onLoadSuccess(data) {
    this.setState({ rabbits: data, isLoading: false });
  }


  getRabbits() {
    ApiService.getList(this.onLoadSuccess);
  }

  onDeleteSuccess(params) {
    this.setState({ isSuccess: true });
    this.getRabbits();
  }

  deleteRabbit(rabbit) {
    this.setState({ isLoading: true, deleted: rabbit.name });
    ApiService.remove(rabbit, this.onDeleteSuccess);
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
        isLoading,
        isSuccess,
        isError,
        deleted
      } = this.state,
      rabbitTable = this.createTbody(rabbits);

    if(isLoading) {
      return <Spinner />;
    }

    return (
      <div className="rabbit-list">
        <Header title="Rabbits"/>
        {isSuccess && <Alert type="success" text={`Rabbit ${deleted} is remove from list!`} onClose={this.alertClose}/>}
        {isError && <Alert type="error" text="Oops, something went wrong." onClose={this.alertClose}/>}
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
