import React, { Component } from 'react';
import './App.css';
import { FaSistrix, FaCartShopping, FaLocationDot } from "react-icons/fa6";

class App extends Component {
  render() {
    return (
      <div className='header'>
        <a className="logotipo" href="index.html">PRIME</a>
        <a className="ubicacion" href="#"><FaLocationDot />Elige tu dirección</a>
        <div class="buscador">
          <a href="#" className="categoria">Todas las categorias</a>
          <input className='lector' type='text' placeholder='Buscar en prime'></input>
          <a href="#" className="boton_buscar">< FaSistrix /></a>

        </div>
        <a className="carrito" href="#"><FaCartShopping /></a>
      </div>
    );
  }
}

export default App;
