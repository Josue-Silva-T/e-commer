import React, { Component } from 'react';
import './App.css';
import { FaSistrix, FaCartShopping, FaLocationDot } from "react-icons/fa6";


class App extends Component {
  render() {
    return (
      <div className='header'>
        <a className="logotipo" href="index.html">PRIME</a>
        <a className="ubicacion" href="#"><FaLocationDot />Elige tu dirección</a>
        <div className="buscador">
          <select className='categoria' id='categoria' defaultValue="0">
            <option value="0">Todas las categorías</option>
            <option value="1">Probando</option>
          </select>
          <input className='lector' type='text' placeholder='Buscar en prime' />
          <a href="#" className="boton_buscar">< FaSistrix /></a>
        </div>
        <a className="carrito" href="#"><FaCartShopping /></a>
      </div>
    );
  }
}

export default App;
