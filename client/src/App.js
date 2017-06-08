import React, { Component } from 'react';
import NavBar from './navbar'
// new way to do css!
import {container} from './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
