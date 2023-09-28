import React from 'react';
import { FaSistrix, FaCartShopping, FaUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './Struct.component.css';
import '../../Utileria/normalize.css';
import '../../Utileria/teme.css'

export function Struct() {
  return (
    <div className='header'>
      <Link className="logotipo" to='/'>PRIME</Link>
      <div className="buscador">
        <input className='lector' type='text' placeholder='Buscar en prime' />
        <Link to='#' className="boton_buscar">< FaSistrix /></Link>
      </div>
      <div className="buttons">
        <Link className="User" to='/'><FaUser /></Link>
        <Link className="carrito" to='/carrito'><FaCartShopping /></Link>
      </div>
    </div>
  )
}
