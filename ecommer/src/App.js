import React, { Component } from 'react';
import './App.css';
import { Struct } from './Componentes/Struct.component';
import { Home } from './Componentes/Home.component';


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
