import React, { Component } from 'react';
import './styles.css';

class ConfirmAlert extends Component {
  constructor(props) {
    super(props);

    this.confirm = this.confirm.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  confirm() {
    const { onConfirm } = this.props;

    onConfirm();
  }

  cancel() {
    const { onCancel } = this.props;

    onCancel();
  }

  render() {
    const { text } = this.props;
    return (
      <div className="w3-modal confirm-modal" style={{display:'block'}}>
        <div className="confirm-modal__content">
          <div className="w3-container">
            <span onClick={this.cancel} className="w3-button w3-display-topright">&times;</span>
            <p>{text}</p>
            <div className="confirm-modal__modal-buttons">
              <button className="w3-button w3-teal" onClick={this.confirm}>Yes</button>
              <button className="w3-button w3-yellow" onClick={this.cancel} >No</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmAlert;
