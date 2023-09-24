import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { comprasCarrito } from '../../Servicios/elementosCarrito';
import './CarritoCompras.component.css';
import '../../Utileria/botones.css';

export function CarritoCompras() {
    const [comprasEnCarrito, setComprasEnCarrito] = useState([]);
    const [cantidades, setCantidades] = useState({});

    useEffect(() => {
        setComprasEnCarrito(comprasCarrito);
        inicializarCantidades();
    }, []);

    const inicializarCantidades = () => {
        const inicialCantidades = {};
        comprasCarrito.forEach(compra => {
            inicialCantidades[compra.id] = compra.cantidad;
        });
        setCantidades(inicialCantidades);
    };

    const handleCantidadChange = (id, cantidad) => {
        if (cantidad >= 0) {
            setCantidades(prevCantidades => ({
                ...prevCantidades,
                [id]: cantidad
            }));
        }
    };

    if (comprasEnCarrito.length === 0) {
        return (
            <h2>No hay compras en el carrito aún</h2>
        );
    }

    return (
        <div>
            <section className="contenedor-carrito">
                {comprasEnCarrito.map((compra) => (
                    <div className="carrito_item" key={compra.id}>
                        <div className="carrito-productoNombre">
                            <h2>{compra.titulo}</h2>
                        </div>

                        <div className="carrito-productoDescripcion">
                            <p>{compra.descripcion}</p>
                        </div>

                        <div className="carrito-productoCantidades">
                            <p>${compra.precio * cantidades[compra.id]}</p>
                            <input
                                type="number"
                                placeholder="Cantidad"
                                value={cantidades[compra.id] || ''}
                                onChange={(e) => handleCantidadChange(compra.id, e.target.value)}
                            />
                        </div>
                    </div>
                ))}
            </section>

            <div className='cotenedor_botones'>
                <button className='boton boton-comprar'>Comprar</button>
            </div>
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
            cantidad: PropTypes.number,
        })
    ),
};

CarritoCompras.defaultProps = {
    comprasEnCarrito: [],
};
