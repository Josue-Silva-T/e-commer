import React from "react";
import "./VerificarCarrito.css";

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
                <input
                    type="number"
                    placeholder="Cantidad"
                    value={cantidad || ''}
                    onChange={e => manejarCantidadesCompra(e.target.value)}
                />
            </div>
        </div>
    );
}
