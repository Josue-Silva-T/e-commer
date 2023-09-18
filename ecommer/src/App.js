import React, { Component } from 'react';
import './App.css';
import { Struct } from './Struct';
import { Home } from './Home';


class App extends Component {
  render() {
    return (<div>
        <Struct/>
        <Home/>
      </div>
    );
  }
}

export default App;
