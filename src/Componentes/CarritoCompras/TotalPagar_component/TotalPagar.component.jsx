import React from "react";
import PropTypes from 'prop-types';





export function TotalPagar({titulo, precio, cantidad}) {
    return (
        <p><strong>{titulo}</strong>: {precio * cantidad}</p>
    )
}


TotalPagar.propTypes = {
    titulo : PropTypes.string.isRequired,
    precio : PropTypes.number.isRequired,
    cantidad : PropTypes.number.isRequired 
}
