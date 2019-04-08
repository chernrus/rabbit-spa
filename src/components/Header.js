import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { title } = this.props;

    return (
      <div className="main-header w3-container w3-teal">
        <h1>{ title }</h1>
      </div>
    );
  }
}

export default Header;
