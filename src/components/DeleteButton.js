import React, { Component } from 'react';
import ConfirmAlert from './ConfirmAlert';

class DeleteButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModal: false
    }

    this.remove = this.remove.bind(this);
    this.showAlert = this.showAlert.bind(this);
    this.hideAlert = this.hideAlert.bind(this);
  }

  showAlert() {
    this.setState({ isModal: true });
  }

  hideAlert() {
    this.setState({ isModal: false });
  }

  remove() {
    const { onDelete } = this.props;

    onDelete();
  }

  render() {
    const { isModal } = this.state;

    return (
      <div>
        <button className="w3-button w3-red" onClick={this.showAlert}>Delete</button>
        { isModal && <ConfirmAlert text="Are you sure you want to delete this note?" onConfirm={this.remove} onCancel={this.hideAlert}/>}
      </div>
    );
  }
}

export default DeleteButton;
