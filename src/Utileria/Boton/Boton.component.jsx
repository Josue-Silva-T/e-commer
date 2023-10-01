import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import './Boton.component.css';

export function Boton({ valorBoton, accion }) {
    const divAnimacionOjo = useRef(null);
    const divAnimacionPupila = useRef(null);

    let tl = gsap.timeline();

    const iniciarPupila = () => {
        if (tl.isActive()) { //En caso de estarse ejecutando la animacion de cerrar ojo, la eliminamos
            tl.kill(divAnimacionPupila);
            tl.kill(divAnimacionOjo);
        }
        const anchoOjo = (divAnimacionOjo.current.getBoundingClientRect().width * 0.385); //La multiplicacion sirve para ajustar en base al porrcentaje del css
        const alturaOjo = (divAnimacionOjo.current.getBoundingClientRect().height * 0.1);

        gsap.from(divAnimacionPupila.current, {
            x: anchoOjo,
            y: alturaOjo
        });

        gsap.to(divAnimacionOjo.current, {
            top: 0,
            height: "100%",
            duration: 0.5
        })

    }

    const mouseEnBoton = (e) => {
        // Obtén las coordenadas del botón
        const botonRect = divAnimacionOjo.current.getBoundingClientRect();
        const coordenadaYOjo = botonRect.top;
        const coordenadaXBoton = botonRect.left;
    
        // Calcular la posición relativa del ratón respecto al botón
        const pupilaRect = divAnimacionPupila.current.getBoundingClientRect();
        const mitadDelLargoPupila = pupilaRect.width * 0.48; //Ajusta este porcentaje si sientes que no esta bien centrada la pupila
        const mitadDelAltoPupila = pupilaRect.height * 0.5; //Tambien lo puedes ajustar
        const coordenadaXRelativa = (e.clientX - coordenadaXBoton) - mitadDelLargoPupila;
        const coordenadaYRelativa = (e.clientY - coordenadaYOjo) - mitadDelAltoPupila;
        
        gsap.to(divAnimacionPupila.current, {
            x: coordenadaXRelativa,
            y: coordenadaYRelativa
        });
    };
    

    const mouseFueraBoton = () => {
        const anchoOjo = (divAnimacionOjo.current.getBoundingClientRect().width * 0.385); //La multiplicacion sirve para ajustar en base al porcentaje del css
        const alturaOjo = (divAnimacionOjo.current.getBoundingClientRect().height * 0.1);

        tl.startTime(2);

        tl.to(divAnimacionPupila.current, {
            x: anchoOjo,
            y: alturaOjo
        });

        tl.to(divAnimacionOjo.current, {
            top: "50%",
            height: 0,
            duration: 0.5,
            delay: 0
        })

        tl.to(divAnimacionPupila.current, {
            duration: 0.5,
            delay: 0
        })

    }





    return (
        <button
            className="default"
            onMouseEnter={iniciarPupila}
            onMouseMove={mouseEnBoton}
            onMouseLeave={mouseFueraBoton}
            onClick={accion}
        >
            {valorBoton}
            <div ref={divAnimacionOjo} className="seleccionado">
                <div
                    ref={divAnimacionPupila}
                    className="cursor"
                >
                </div>
            </div>
        </button>
    );
}