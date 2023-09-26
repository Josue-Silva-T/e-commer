import PropTypes from 'prop-types';
import './Favoritos.component.css';




export function MostrarProductos({ nombre, precio, estado }) {

    return (
        <div className="favoritos-item">
            <h2>{nombre}</h2>
            <h3>{precio}</h3>
            {estado ? (<p>Disponible</p>) : (<p>No disponible</p>)}
            <button>Agregar al carrito</button>
            <p>Eliminar de favoritos</p>
        </div>
    )
} 

MostrarProductos.propTypes = {
    nombre : PropTypes.string.isRequired,
    precio : PropTypes.number.isRequired,
    estado : PropTypes.bool
}


