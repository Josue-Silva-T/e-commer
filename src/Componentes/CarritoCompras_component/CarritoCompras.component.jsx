import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { comprasCarrito } from '../../Servicios/elementosCarrito';
import './CarritoCompras.component.css';
import '../../Utileria/botones.css';
import { Favoritos } from '../Favoritos_component/Favoritos.component';

export function CarritoCompras() {
    const [comprasEnCarrito, setComprasEnCarrito] = useState([]);

    useEffect(() => {
        setComprasEnCarrito(comprasCarrito);
    }, []);

    const manejarCantidadesCompra = (id, cantidad) => {
        if (cantidad >= 0) {
            const comprasActualizadas = comprasEnCarrito.map(compra => {
                if (compra.id === id) {
                    return {
                        ...compra,
                        cantidad: Number(cantidad)
                    };
                }
                return compra;
            });
            setComprasEnCarrito(comprasActualizadas);
        }
    };

    const totalPagar = comprasEnCarrito.reduce((total, compra) => {
        return total + compra.precio * compra.cantidad;
    }, 0);

    if (comprasEnCarrito.length === 0) {
        return <h2>No hay compras en el carrito aún</h2>;
    }

    return (
        <div>
            <section className="contenedor">
                <div className="contenedor-carrito">
                    {comprasEnCarrito.map(compra => (
                        <div className="carrito_item" key={compra.id}>
                            <div className="carrito-productoNombre">
                                <h2>{compra.titulo}</h2>
                            </div>
                            <div className="carrito-productoDescripcion">
                                <p>{compra.descripcion}</p>
                            </div>
                            <div className="carrito-productoCantidades">
                                <p>${compra.precio * compra.cantidad}</p>
                                <input
                                    type="number"
                                    placeholder="Cantidad"
                                    value={compra.cantidad || ''}
                                    onChange={e => manejarCantidadesCompra(compra.id, e.target.value)}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <article>
                    <h2>Total a pagar: {totalPagar}</h2>
                    <ul>
                        {comprasEnCarrito.map((compra, index) => (
                            <li key={"compra" + index}>
                                <strong>{compra.titulo}</strong>: {compra.precio * compra.cantidad}
                            </li>
                        ))}
                    </ul>
                    <button className="boton boton-comprar">Comprar</button>
                </article>
            </section>

            <Favoritos />
        </div>
    );
}

CarritoCompras.propTypes = {
    comprasEnCarrito: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            titulo: PropTypes.string,
            descripcion: PropTypes.string,
            precio: PropTypes.number,
            cantidad: PropTypes.number
        })
    )
};

CarritoCompras.defaultProps = {
    comprasEnCarrito: []
};
