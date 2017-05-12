import React, { Component } from 'react';
import {container} from './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className={container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
