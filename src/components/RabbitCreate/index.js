import React, { Component } from 'react';
import ApiService from '../../modules/ApiService';
import Header from '../Header';
import Alert from '../Alert';
import Spinner from '../Spinner';
import './styles.css';

class RabbitCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      weight: 0,
      isLoading: false,
      isError: null,
      isSuccess: null,
      prevName: ''
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.onCreateSuccess = this.onCreateSuccess.bind(this);
    this.create = this.create.bind(this);
    this.cancel = this.cancel.bind(this);
    this.alertClose = this.alertClose.bind(this);
  }

  inputHandler(event) {
    const target = event.target,
      name = target.name;
    let value = target.value;

    if(name === 'weight' && value < 0) {
      value = 0;
    };

    this.setState({
      [name]: value
    });
  }

  onCreateSuccess(params) {
    this.setState({
      isLoading: false,
      isSuccess: true,
      prevName: this.state.name,
      name: '',
      weight: 0
    });
  }

  create() {
    this.setState({ isLoading: true });

    const { name, weight } = this.state;

    ApiService.create({ name, weight }, this.onCreateSuccess);
  }

  cancel() {
    this.props.history.push('/list');
  }

  alertClose() {
    this.setState({
      isError: false,
      isSuccess: false,
    });
  }

  render() {
    const {
      name,
      weight,
      isLoading,
      isSuccess,
      isError,
      prevName
    } = this.state;

    if(isLoading) {
      return <Spinner />;
    }

    return (
      <div className="rabbit-create">
        <Header title="Create"/>
        {isSuccess && <Alert type="success" text={`Rabbit ${prevName} is created`} onClose={this.alertClose}/>}
        {isError && <Alert type="error" text="Oops, something went wrong." onClose={this.alertClose}/>}
        <div className="container">
          <form className="create-form">
            <label>
              Name:
              <input
                type="text"
                title="name"
                placeholder="Rabbit name"
                className="create-form__input"
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
                className="create-form__input"
                name="weight"
                value={ weight }
                onChange={ this.inputHandler }/>
            </label>
            <div className="create-form__buttons">
              <button
                type="button"
                className="w3-button w3-teal create-form__btn"
                onClick={this.create}
                disabled={ isLoading }>
                Create
              </button>
              <button
                type="button"
                className="w3-button w3-yellow create-form__btn"
                onClick={this.cancel}>Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default RabbitCreate;
