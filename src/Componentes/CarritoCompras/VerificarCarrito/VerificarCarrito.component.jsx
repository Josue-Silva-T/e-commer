import React from "react";
import "./VerificarCarrito.component.css";
import PropTypes from 'prop-types';
import { InputNumero } from "../../../Utileria/Input_numero/Input_numero";


export function VerificarCarrito({ id, titulo, descripcion, precio, cantidad, comprasEnCarrito, setComprasEnCarrito }) {

    const manejarCantidadesCompra = (cantidad) => {
        if (cantidad >= 0) {
            const comprasActualizadas = comprasEnCarrito.map(compra => {
                if (id === compra.id) {
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

    return (
        <div className="carrito_item">
            <div className="carrito-productoNombre">
                <h2>{titulo}</h2>
            </div>
            <div className="carrito-productoDescripcion">
                <p>{descripcion}</p>
            </div>
            <div className="carrito-productoCantidades">
                <p>${precio * cantidad}</p>
                <InputNumero
                    valor={cantidad}
                    setValor={manejarCantidadesCompra}
                />
            </div>
        </div>
    );
}


VerificarCarrito.propTypes = {
    id : PropTypes.number.isRequired,
    titulo : PropTypes.string.isRequired,
    descripcion : PropTypes.string.isRequired,
    cantidad : PropTypes.number.isRequired,
    comprasEnCarrito: PropTypes.array.isRequired, 
    setComprasEnCarrito: PropTypes.func.isRequired 
};
