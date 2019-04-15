import React, { Component } from 'react';
import Filho from './Filho';

class Pai extends Component {

  render() {

    return (
      <div>
          <h1>{this.props.nome} {this.props.sobrenome}</h1>
          <h1>Filhos</h1>
          <ul>
              {this.props.children}
              {React.cloneElement(this.props.children, { ...this.props, ...this.props.children.props })}
              {/*<Filho nome='Daniel'  sobrenome={this.props.sobrenome} />
              <Filho {...this.props} />
    <Filho {...this.props} nome='Danilo' />*/}
          </ul>
      </div>
    );
  }
}

export default Pai;
