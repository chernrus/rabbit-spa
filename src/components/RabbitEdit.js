import React, { Component } from 'react';
import Header from './Header';
import ApiService from '../modules/ApiService';

class RabbitEdit extends Component {
  constructor(props) {
    super(props);

    // const {
    //   name,
    //   weight
    // } = props.location.state.rabbit;

    this.state = {
      name: '',
      weight: '',
      isLoading: true,
      id: Number(props.match.params.id)
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.onLoadSuccess = this.onLoadSuccess.bind(this);
    this.findRabbitById = this.findRabbitById.bind(this);
    this.edit = this.edit.bind(this);
    this.cancel = this.cancel.bind(this);
  };

  componentDidMount() {
    console.log(this.props.location.state);
    if(this.props.location.state) {
      const { rabbit } = this.props.location.state
      this.setState({
        name: rabbit.name,
        weight: rabbit.weight,
        isLoading: false
      });
    }
    else {
      this.getRabbits();
    }
  }

  findRabbitById(rabbit) {
    const { id } = this.state;
    console.log(rabbit, id);
    return rabbit.id === id;
  }

  onLoadSuccess(rabbitsList) {
    console.log({data: rabbitsList});
    // const { name, weight } = data;

    const rabbit = rabbitsList.find(this.findRabbitById);
    console.log(rabbit);

    const {
      name,
      weight
    } = rabbit;
    this.setState({ name, weight, isLoading: false });
  }

  getRabbits() {
    ApiService.getList(this.onLoadSuccess);
  }

  inputHandler(event) {
    const target = event.target,
      value = target.value,
      name = target.name;

    this.setState({
      [name]: value
    });
  }

  onEditSuccess(params) {
    console.log(params);
  }

  edit() {
    const {
      id,
      name,
      weight
    } = this.state;

    ApiService.edit({ id, name, weight }, this.onEditSuccess);
  }

  cancel() {

  }

  render() {
    const {
        name,
        weight,
        isLoading
      } = this.state;
      console.log(this.props);
    return (
      <div className="rabbit-edit" >
        <Header title="Edit"/>
        <h1>Rabbit edit</h1>
        <form>
          <label>
            Name:
            <input
              type="text"
              title="name"
              placeholder="Rabbit name"
              name="name"
              value={ name }
              onChange={ this.inputHandler }/>
          </label>
          <label>
            Weight:
            <input
              type="number"
              title="weight"
              placeholder="Rabbit weight"
              name="weight"
              value={ weight }
              onChange={ this.inputHandler }/>
          </label>
          <button type="button" onClick={this.edit} disabled={ isLoading }>Edit</button>
          <button type="button" onClick={this.cancel}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default RabbitEdit;
