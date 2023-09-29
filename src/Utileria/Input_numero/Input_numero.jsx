import React from "react";
import './Input_numero.css';
import flechaArribaSVG from '../../img/svg-botones/flecha-arriba.svg';
import flechaAbajoSVG from '../../img/svg-botones/flecha-abajo.svg';

export function InputNumero({ valor, setValor }) {
    const validarEntrada = (event) => {
      const input = event.target;
      const value = parseFloat(input.value);
  
      if (isNaN(value)) {
        input.value = '';
      } else {
        input.value = value;
      }
    };
  
    const aumentarValor = () => {
      setValor(valor + 1);
    };
  
    const disminuirValor = () => {
      setValor(valor - 1);
    };
  
    return (
      <section className="contenedor_boton">
        <input
          className="boton-numero"
          type="text"
          value={valor}
          onInput={validarEntrada}
          onChange={(e) => setValor(e.target.value)}
        />
        <section className="boton-flechas">
          <img
            src={flechaAbajoSVG}
            className="flechas-item"
            style={{ transform: 'rotate(180deg)' }}
            onClick={aumentarValor}
          />
  
          <img
            src={flechaAbajoSVG}
            className="flechas-item"
            onClick={disminuirValor}
          />
        </section>
      </section>
    );
  }
  