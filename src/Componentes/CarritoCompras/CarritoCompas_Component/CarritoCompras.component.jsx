import React, { useState, useEffect } from 'react';
import { favoritos } from '../../../Servicios/favoritos.service';
import { comprasCarrito } from '../../../Servicios/elementosCarrito';
import './CarritoCompras.component.css';
import '../../../Utileria/botones.css';
import '../../../Utileria/normalize.css';
import { MostrarProductos } from '../Favoritos_component/Favoritos.component';
import { VerificarCarrito } from '../VerificarCarrito/VerificarCarrito.component';
import { TotalPagar } from '../TotalPagar_component/TotalPagar.component';
import { Boton } from '../../../Utileria/Boton/Boton.component';

export function CarritoCompras() {
  const [comprasEnCarrito, setComprasEnCarrito] = useState([]);
  const [favorito, setFavorito] = useState([]);

  useEffect(() => {
    setComprasEnCarrito(comprasCarrito);
    setFavorito(favoritos);
  }, []);

  const totalPagar = comprasEnCarrito.reduce((total, compra) => {
    return total + compra.precio * compra.cantidad;
  }, 0);

  const mostrarCarrito = () => {
    if (comprasEnCarrito.length === 0) {
      return <h2>No hay compras en el carrito aún</h2>;
    }
    return comprasEnCarrito.map((compra, index) => (
      <div key={"carrito" + index}>
        <VerificarCarrito
          id={compra.id}
          {...compra}
          comprasEnCarrito={comprasEnCarrito}
          setComprasEnCarrito={setComprasEnCarrito}
        />
      </div>
    ));
  };

  const mostrandoTicket = () => {
    if (comprasEnCarrito.length === 0) {
      return <h2>No hay compras</h2>;
    }
    return (
      <ul>
        {comprasEnCarrito.map((compra, index) => (
          <li key={"compra" + index} className='pago-item'>
            <TotalPagar
              titulo={compra.titulo}
              precio={compra.precio}
              cantidad={compra.cantidad}
            />
          </li>
        ))}
      </ul>
    );
  };

  const mostrarFavoritos = () => {
    if (!favorito || favorito.length === 0) {
      return <h2>No hay favoritos por mostrar</h2>;
    }
    return favorito.map((fav, index) => (
      <MostrarProductos
        key={"favorito" + index}
        {...fav}
      />
    ));
  };

  return (
    <div>
      <section className="contenedor">
        <div className="contenedor-carrito">
          {mostrarCarrito()}
        </div>

        <article className='contenedor_pago'>
          <h2>Total a pagar: {totalPagar}</h2>
          {mostrandoTicket()}
          <button className="boton boton-comprar" disabled={totalPagar === 0}>Comprar</button>
        </article>
      </section>

      <section className='contenedor_favoritos'>
        <div className='favoritos_titulo'>
          <h2>Favoritos</h2>
        </div>

        <div className='favoritos_items'>
          {mostrarFavoritos()}
        </div>
      </section>

        
      <Boton 
        valorBoton={"Probaremos el boton"}
      />
    </div>
  );
}
