import React, { Component } from 'react';
import './styles.css';

class Alert extends Component {
  constructor(props) {
    super(props);

    this._isMounted = false;

    this.state = {
      type: props.type,
      text: props.text
    }

    this.close = this.close.bind(this);
  }


  componentDidMount() {
    this._isMounted = true;
    
    setTimeout(this.close, 3000);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  close() {
    const { onClose } = this.props;

    if(this._isMounted) {
      onClose();
    }
  }

  render() {
    const { type, text } = this.props;
    let color = 'w3-pale-green';

    switch (type) {
      case 'success':
          color = 'w3-pale-green';
        break;
      case 'error':
        color = 'w3-pale-red';
        break;
      case 'warning':
        color = 'w3-pale-yellow';
        break;
    }
    return (
      <div className={`alert-message ${color}`}>
        <span className="w3-button w3-large w3-display-topright" onClick={this.close}>×</span>
        <h3>{ type }</h3>
        <p>{ text }</p>
      </div>
    );
  }
}

export default Alert;
