import React, { Component } from 'react';
import { render } from 'react-dom';

export class App extends Component {
  render() {
    return (
      <h1>Ola</h1>
    )
  }
}

render(<App/>, document.getElementById('app'))
