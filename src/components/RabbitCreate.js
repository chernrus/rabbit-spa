import React, { Component } from 'react';
import ApiService from '../modules/ApiService';
import Header from './Header';

class RabbitCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Rabbit',
      weight: 1,
      isLoading: false
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.onCreateSuccess = this.onCreateSuccess.bind(this);
    this.create = this.create.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  inputHandler(event) {
    const target = event.target,
      value = target.value,
      name = target.name;

    this.setState({
      [name]: value
    });
  }

  onCreateSuccess(params) {
    this.setState({ isLoading: false });
    console.log(params);
  }

  create() {
    this.setState({ isLoading: true });
    var formData = new FormData();

    const { name, weight } = this.state;
    formData.append('name', name);
    formData.append('weight', weight);

    ApiService.create({ name, weight }, this.onCreateSuccess);
  }

  cancel() {
    console.log('cancel');
  }

  render() {
    const {
      name,
      weight,
      isLoading
    } = this.state;

    return (
      <div className="rabbit-create">
        <Header title="Create"/>
        <h2>Rabbit create</h2>
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
          <button type="button" onClick={this.create} disabled={ isLoading }>Create</button>
          <button type="button" onClick={this.cancel}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default RabbitCreate;
