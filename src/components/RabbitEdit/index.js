import React, { Component } from 'react';
import ApiService from '../../modules/ApiService';
import Header from '../Header';
import Alert from '../Alert';
import Spinner from '../Spinner';
import './styles.css';

class RabbitEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      weight: '',
      id: Number(props.match.params.id),
      isLoading: true,
      isError: null,
      isSuccess: null
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.onLoadSuccess = this.onLoadSuccess.bind(this);
    this.onEditSuccess = this.onEditSuccess.bind(this);
    this.findRabbitById = this.findRabbitById.bind(this);
    this.edit = this.edit.bind(this);
    this.cancel = this.cancel.bind(this);
    this.alertClose = this.alertClose.bind(this);
  };

  componentDidMount() {
    // if(this.props.location.state) {
    //   const { rabbit } = this.props.location.state
    //   this.setState({
    //     name: rabbit.name,
    //     weight: rabbit.weight,
    //     isLoading: false
    //   });
    // }
    // else {
      this.getRabbits();
    // }
  }

  findRabbitById(rabbit) {
    const { id } = this.state;
    return rabbit.id === id;
  }

  onLoadSuccess(rabbitsList) {
    const rabbit = rabbitsList.find(this.findRabbitById),
      { name,
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
    this.setState({isSuccess: true, isLoading: false});
  }

  alertClose() {
    this.setState({
      isError: false,
      isSuccess: false,
    })
  }

  edit() {
    const {
      id,
      name,
      weight,
    } = this.state;

    ApiService.edit({ id, name, weight }, this.onEditSuccess);

    this.setState({ isLoading: true});
  }

  cancel() {
    this.props.history.push('/list');
  }

  render() {
    const {
        name,
        weight,
        isLoading,
        isSuccess,
        isError
      } = this.state;

    if(isLoading) {
      return <Spinner />;
    }

    return (
      <div className="rabbit-edit" >
        <Header title="Edit"/>
        {isSuccess && <Alert type="success" text={`Rabbit ${name} is edited`} onClose={this.alertClose}/>}
        {isError && <Alert type="error" text="Oops, something went wrong." onClose={this.alertClose}/>}
        <div className="container">
          <form className="edit-form">
            <label>
              Name:
              <input
                type="text"
                title="name"
                placeholder="Rabbit name"
                className="edit-form__input"
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
                className="edit-form__input"
                name="weight"
                value={ weight }
                onChange={ this.inputHandler }/>
            </label>
            <div className="edit-form__buttons">
              <button type="button" className="w3-button w3-teal edit-form__btn" onClick={this.edit} disabled={ isLoading }>Edit</button>
              <button type="button" className="w3-button w3-yellow edit-form__btn" onClick={this.cancel}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default RabbitEdit;
