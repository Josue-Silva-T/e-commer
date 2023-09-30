import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import './Boton.component.css';

export function Boton({ valorBoton }) {
    const divAnimacionOjo = useRef(null);
    const divAnimacionPupila = useRef(null);

    const mouseEnBoton = (e) => {
        console.log('Mouse moviéndose sobre el botón');

        divAnimacionOjo.current.classList.add('seleccionado')
        divAnimacionPupila.current.classList.add('cursor')

        const coordenadaXOjo = divAnimacionOjo.current.getBoundingClientRect().left;
        const coordenadaYOjo = divAnimacionOjo.current.getBoundingClientRect().top;

        const coordenadaXMouse = e.clientX;
        const coordenadaYMouse = e.clientY;

        const coordenadaXRelativa = coordenadaXMouse;
        const coordenadaYRelativa = coordenadaYMouse - coordenadaYOjo;

        gsap.to(divAnimacionOjo.current, {
            top : 0,
            height : "100%",
            duration : 0.5
        })

        gsap.to(divAnimacionPupila.current, {
            x: coordenadaXRelativa,
            y: coordenadaYRelativa
        });
    }

    const mouseFueraBoton = ()=> {
        gsap.to(divAnimacionPupila.current, {
            x: "50%",
            y: "50%",
            delay : 1
        });

        gsap.to(divAnimacionOjo.current, {
            top : "50%",
            height : 0,
            delay : 1,
            duration : 0.5
        })

    }





    return (
        <button
            className="default"
            onMouseMove={mouseEnBoton}
            onMouseLeave={mouseFueraBoton}
        >
            {valorBoton}
            <div ref={divAnimacionOjo}>
                <div
                    ref={divAnimacionPupila}
                >
                </div>
            </div>
        </button>
    );
}
