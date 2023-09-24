import React from 'react';
import { FaSistrix, FaCartShopping, FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './Struct.component.css';
import '../../Utileria/normalize.css';

export function Struct() {
  return (
    <div className='header'>
      <Link className="logotipo" to='/'>PRIME</Link>
      <Link className="ubicacion" to='#'><FaLocationDot />Elige tu dirección</Link>
      <div className="buscador">
        <select className='categoria' id='categoria' defaultValue="0">
          <option value="0">Todas las categorías</option>
          <option value="1">Probando</option>
        </select>
        <input className='lector' type='text' placeholder='Buscar en prime' />
        <Link to='#' className="boton_buscar">< FaSistrix /></Link>
      </div>
      <Link className="carrito" to='/carrito'><FaCartShopping /></Link>
    </div>
  )
}
