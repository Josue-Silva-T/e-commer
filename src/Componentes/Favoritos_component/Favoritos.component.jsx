import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import './Favoritos.component.css';

import { favoritos } from '../../Servicios/favoritos.service'


export function Favoritos() {

    const [favoritosLocal, setFavoritosLocal] = useState([]);

    useEffect(() => {
        setFavoritosLocal(favoritos);
    }, [favoritosLocal]);

    if (favoritosLocal.length === 0) {
        return (
            <section>
                <div>
                    <h2>Favoritos</h2>
                </div>

                <div className="contenedor-favoritos">
                    <h2>No hay productos en favoritos</h2>
                </div>
            </section>
        )
    }


    return (
        <section className="contenedor_favoritos">
            <div className="favoritos_titulo">
                <h2>Favoritos</h2>
            </div>

            <div className="favoritos_items">
                {favoritosLocal.map((elementoFavorito, index) => (
                    <div className="favoritos-item" key={"favorito" + index}>
                        <h2>{elementoFavorito.nombre}</h2>
                        <h3>{elementoFavorito.precio}</h3>
                        {elementoFavorito.estado ? (<p>Disponible</p>) : (<p>No disponible</p>)}
                        <button>Agregar al carrito</button>
                        <p>Eliminar de favoritos</p>
                    </div>
                ))}
            </div>



        </section>
    )
} 