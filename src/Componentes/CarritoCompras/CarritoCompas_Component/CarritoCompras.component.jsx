import React, { useState, useEffect } from 'react';

//Servicios
import { favoritos } from '../../../Servicios/favoritos.service';
import { comprasCarrito } from '../../../Servicios/elementosCarrito';

//Css
import './CarritoCompras.component.css';
import '../../../Utileria/botones.css';
import '../../../Utileria/normalize.css';

//Componentes
import { MostrarProductos } from '../Favoritos_component/Favoritos.component';
import { VerificarCarrito } from '../VerificarCarrito/VerificarCarrito.component';
import { TotalPagar } from '../TotalPagar_component/TotalPagar.component';



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

    if (comprasEnCarrito.length === 0) {
        return <h2>No hay compras en el carrito aún</h2>;
    }

    return (
        <div>
            <section className="contenedor">
                <div className="contenedor-carrito">
                    {comprasEnCarrito.map((compra, index) => (
                        <div key={"carrito" + index}>
                            <VerificarCarrito
                                id={compra.id}
                                titulo={compra.titulo}
                                descripcion={compra.descripcion}
                                precio={compra.precio}
                                cantidad={compra.cantidad}
                                comprasEnCarrito={comprasEnCarrito}
                                setComprasEnCarrito={setComprasEnCarrito}
                            />
                        </div>
                    ))}
                </div>

                <article className='contenedor_pago'>
                    <h2>Total a pagar: {totalPagar}</h2>
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
                    <button className="boton boton-comprar" disabled={totalPagar === 0}>Comprar</button>



                </article>
            </section>

            <section className='contenedor_favoritos'>
                <div className='favoritos_titulo'>
                    <h2>Favoritos</h2>
                </div>

                <div className='favoritos_items'>
                    {favorito.map((fav, index) => (
                        <MostrarProductos
                            key={"favorito" + index}
                            nombre={fav.nombre}
                            precio={fav.precio}
                            estado={fav.estado}
                        />
                    ))}
                </div>
            </section>

        </div>
    );
}
