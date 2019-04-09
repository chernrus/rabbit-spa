import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

class CreateButton extends Component {
  render() {

    return (
      <Link to="/create" className="w3-button w3-teal">Create rabbit</Link>
    );
  }
}

export default CreateButton;
