import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

class Rabbit extends Component {

  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
  }

  delete() {
    const { rabbit, onDelete } = this.props;
    onDelete(rabbit);
  }

  render() {
    const {
      number,
      rabbit
    } = this.props;

    return (
      <tr>
        <td>{number}</td>
        <td>
          <Link to={{ pathname: `/edit/${rabbit.id}`, state: { rabbit: rabbit } }}>{rabbit.name}</Link>
        </td>
        <td>{rabbit.weight}</td>
        <td>
          <DeleteButton className="w3-button" onDelete={this.delete}/>
        </td>
      </tr>
    );
  }
}

export default Rabbit;
