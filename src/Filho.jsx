import React, { Component } from 'react';

class Filho extends Component {

  render() {

    return (
      <li>{this.props.nome} {this.props.sobrenome}</li>
    );
  }
}

export default Filho;
